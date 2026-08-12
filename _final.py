import os, re
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

changes = 0

# 1. BACK TO TOP BUTTON - add HTML right before closing </body> area
btt_html = """
  <button id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" class="fixed bottom-20 right-5 md:bottom-8 md:right-8 z-50 w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-lg hover:bg-[var(--color-accent-hover)] transition-all opacity-0 pointer-events-none" aria-label="Back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>
  </button>
"""
main_close = content.rfind("</main>")
content = content[:main_close] + btt_html + content[main_close:]
changes += 1

# Add back-to-top JS
btt_js = """
<script>
  var btt=document.getElementById("btt");
  window.addEventListener("scroll",function(){
    btt.style.opacity = window.scrollY > 600 ? "1" : "0";
    btt.style.pointerEvents = window.scrollY > 600 ? "auto" : "none";
  });
</script>
"""
last_script_close = content.rfind("</script>") + 9
content = content[:last_script_close] + btt_js + content[last_script_close:]
changes += 1

# 2. WEATHER TABLE - replace with icon-enhanced version
old_weather_head = """<table class="data-table"><thead><tr><th>Month</th><th>Beijing</th><th>Shanghai</th><th>Chengdu</th><th>Guilin</th></tr></thead>"""
new_weather_head = """<table class="data-table"><thead><tr><th></th><th>Beijing</th><th>Shanghai</th><th>Chengdu</th><th>Guilin</th><th>Rating</th></tr></thead>"""
content = content.replace(old_weather_head, new_weather_head)

# Replace the tbody mapping
old_weather_body = """<tbody>{monthlyWeather.map(m=>(<tr><td class="font-semibold text-[var(--color-text)]">{m.month}</td><td>{m.beijing}</td><td>{m.shanghai}</td><td>{m.chengdu}</td><td>{m.guilin}</td></tr>))}</tbody>"""

new_weather_body = """<tbody>{monthlyWeather.map(m => {
    const rating = (str) => { if(str.includes("Perfect")||str.includes("Best")) return ["\u2600","bg-emerald-50 text-emerald-700"]; if(str.includes("Warm")||str.includes("Pleasant")||str.includes("Good")||str.includes("Comfort")) return ["\u26c5","bg-amber-50 text-amber-700"]; if(str.includes("Hot")||str.includes("Humid")||str.includes("Rainy")||str.includes("Wet")) return ["\ud83c\udf27","bg-sky-50 text-sky-700"]; if(str.includes("Cool")||str.includes("Chilly")||str.includes("Cold")||str.includes("Damp")) return ["\u2744","bg-indigo-50 text-indigo-700"]; return ["\u00b7",""]; };
    const bj = rating(m.beijing); const sh = rating(m.shanghai); const cd = rating(m.chengdu); const gl = rating(m.guilin);
    const bestCount = [bj[0],sh[0],cd[0],gl[0]].filter(x=>x==="\u2600").length;
    const seasonLabel = bestCount>=3?"Best":bestCount>=1?"Good":"";
    return (<tr><td class="font-semibold text-[var(--color-text)]">{m.month}</td><td><span class={"text-xs px-1.5 py-0.5 rounded "+bj[1]}>{bj[0]} {m.beijing}</span></td><td><span class={"text-xs px-1.5 py-0.5 rounded "+sh[1]}>{sh[0]} {m.shanghai}</span></td><td><span class={"text-xs px-1.5 py-0.5 rounded "+cd[1]}>{cd[0]} {m.chengdu}</span></td><td><span class={"text-xs px-1.5 py-0.5 rounded "+gl[1]}>{gl[0]} {m.guilin}</span></td><td><span class="tag tag-success">{seasonLabel}</span></td></tr>);
  })}</tbody>"""

content = content.replace(old_weather_body, new_weather_body)
changes += 1

# 3. TRAVEL STYLE ICONS
# Add emoji before each trip type name
content = content.replace(">Family Trips<", ">\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 Family Trips<")
content = content.replace(">Solo Trips<", ">\ud83c\udf92 Solo Trips<")
content = content.replace(">Couples Trips<", ">\ud83d\udc91 Couples Trips<")
content = content.replace(">Luxury Trips<", ">\ud83c\udfe8 Luxury Trips<")
content = content.replace(">Budget Trips<", ">\ud83d\udcb0 Budget Trips<")
content = content.replace(">First-Time China<", ">\ud83d\udc4b First-Time China<")
changes += 1

# 4. ARTICLE SCHEMA - add dateModified to existing schema
old_schema = "const scheduleSchema = {"
article_schema = """const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "China Trips - Plan Your Perfect Trip to China 2026",
  "description": "Plan your trip to China: detailed day-by-day itineraries, destination guides, budget calculators, visa info, weather tables, and practical advice.",
  "author": { "@type": "Organization", "name": "China Trips" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-08-12",
  "publisher": { "@type": "Organization", "name": "China Trips", "logo": { "@type": "ImageObject", "url": "https://china-trips.com/favicon.svg" } }
};

const scheduleSchema = {"""

content = content.replace(old_schema, article_schema + old_schema)
changes += 1

# 5. IMAGE LAZY LOADING - add loading="lazy" to images that don't have it
# Only affect images without loading attribute and not hero
content = content.replace('<img src="/images/destinations/', '<img loading="lazy" src="/images/destinations/')
# Don't affect the hero image which has loading="eager"
changes += 1

# 6. PACKING CHECKLIST - make items clickable/checkable
old_pack = """<ul class="space-y-2">
                {p.items.map(item => (
                  <li class="flex items-start gap-2 text-sm">
                    <span class="text-[var(--color-accent)] mt-0.5">&#10003;</span>
                    <span class="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}"""

new_pack = """<ul class="space-y-2">
                {p.items.map(item => (
                  <li class="flex items-start gap-2 text-sm cursor-pointer" onclick="this.classList.toggle('line-through');this.classList.toggle('opacity-50');this.querySelector('span').textContent=this.classList.contains('line-through')?'\u2611':'\u2610'">
                    <span class="text-[var(--color-accent)] mt-0.5 select-none">\u2610</span>
                    <span class="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}"""

content = content.replace(old_pack, new_pack)
changes += 1

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Applied " + str(changes) + " optimizations")