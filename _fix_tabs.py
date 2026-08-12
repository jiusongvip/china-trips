import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find the cost JS closing </script>
cbi = content.rfind("costBtn")
ce = content.find("</script>", cbi) + 9

# Insert tabs JS + DOMContentLoaded between cost JS and the next script
tabs_js = """
<script>
  document.querySelectorAll("details").forEach(function(d){d.addEventListener("toggle",function(){var a=d.querySelector(".summary-arrow");if(a)a.textContent=d.open?"[-]":"[+]"})});

  function initTabs(id,c){var ct=document.getElementById(id);if(!ct)return;ct.addEventListener("click",function(e){var b=e.target.closest("."+c);if(!b)return;var i=b.dataset.tab;ct.querySelectorAll("."+c).forEach(function(x){x.classList.remove("active");x.classList.add("tab-inactive")});b.classList.add("active");b.classList.remove("tab-inactive");ct.querySelectorAll("[data-tab]").forEach(function(p){if(p.classList.contains(c))return;if(p.dataset.tab===i)p.classList.remove("hidden");else if(p.dataset.tab!==undefined)p.classList.add("hidden")})});var f=ct.querySelector("."+c);if(f)f.click()}

  document.addEventListener("DOMContentLoaded", function() {
    initTabs("dest-tabs","dest-tab-btn");initTabs("food-tabs","food-tab-btn");
  });
</script>
"""

content = content[:ce] + tabs_js + content[ce:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Tabs JS restored")