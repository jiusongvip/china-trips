import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

planner_end = content.find("</script>", content.find("plannerBtn"))
print(f"Planner script ends at {planner_end}")

cost_tabs_js = """

<script>
  const costBtn = document.getElementById("cost-submit");
  if (costBtn) { costBtn.addEventListener("click", () => {
    const t = parseInt(document.getElementById("cost-travelers")?.value||"1"), d = parseInt(document.getElementById("cost-days")?.value||"1"), s = document.getElementById("cost-style")?.value;
    const r = {budget:75,mid:150,luxury:300}; const dr = r[s]||150; const pp = Math.round(dr/Math.max(1,t))*d;
    document.getElementById("cost-output").textContent = "$"+pp.toLocaleString();
    document.getElementById("cost-hotel").textContent = "$"+Math.round(pp*.35).toLocaleString();
    document.getElementById("cost-food").textContent = "$"+Math.round(pp*.25).toLocaleString();
    document.getElementById("cost-transport").textContent = "$"+Math.round(pp*.2).toLocaleString();
    document.getElementById("cost-activities").textContent = "$"+Math.round(pp*.12).toLocaleString();
    document.getElementById("cost-misc").textContent = "$"+(pp-Math.round(pp*.35)-Math.round(pp*.25)-Math.round(pp*.2)-Math.round(pp*.12)).toLocaleString();
    document.getElementById("cost-result").classList.remove("hidden");
  });}

  document.querySelectorAll("details").forEach(function(d){d.addEventListener("toggle",function(){var a=d.querySelector(".summary-arrow");if(a)a.textContent=d.open?"[-]":"[+]"})});

  function initTabs(id,c){var ct=document.getElementById(id);if(!ct)return;ct.addEventListener("click",function(e){var b=e.target.closest("."+c);if(!b)return;var i=b.dataset.tab;ct.querySelectorAll("."+c).forEach(function(x){x.classList.remove("active");x.classList.add("tab-inactive")});b.classList.add("active");b.classList.remove("tab-inactive");ct.querySelectorAll("[data-tab]").forEach(function(p){if(p.classList.contains(c))return;if(p.dataset.tab===i)p.classList.remove("hidden");else if(p.dataset.tab!==undefined)p.classList.add("hidden")})});var f=ct.querySelector("."+c);if(f)f.click()}

  document.addEventListener("DOMContentLoaded", function() {
    initTabs("dest-tabs","dest-tab-btn");initTabs("food-tabs","food-tab-btn");
  });
</script>
"""

content = content[:planner_end + 9] + cost_tabs_js + content[planner_end + 9:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {len(content)} chars")