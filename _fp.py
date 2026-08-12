import os, re
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Remove ALL planner JS blocks (the large bundled ones)
pattern = r'<script>\nvar e=document\.getElementById\(`planner-submit`\).*?</script>\n'
content = re.sub(pattern, '', content, flags=re.DOTALL)

pattern2 = r'<script>\s*var e=document\.getElementById\(`planner-submit`\).*?</script>'
content = re.sub(pattern2, '', content, flags=re.DOTALL)

# Also remove any duplicate speak/reveal blocks (keep only the last set)
# Find unique blocks and remove duplicates

# Find all <script> blocks
scripts = list(re.finditer(r'<script[^>]*>(.*?)</script>', content, re.DOTALL))
# Remove duplicates by content hash
seen = set()
to_remove = []
for m in scripts:
    body = m.group(0)
    h = hash(body.strip())
    if h in seen:
        to_remove.append(m)
    else:
        seen.add(h)

# Remove duplicates from end to start
for m in reversed(to_remove):
    content = content[:m.start()] + content[m.end():]

print(f"Removed {len(to_remove)} duplicate scripts")

# Now find the best position to insert enhanced planner
# Find where the first script is (before speak/reveal)
first_script_pos = content.find('<script>')
if first_script_pos > 0:
    insert_pos = first_script_pos
else:
    insert_pos = content.rfind('</BaseLayout>')

enhanced = r"""<script>
  const plannerBtn = document.getElementById("planner-submit");
  const plannerResult = document.getElementById("planner-result");
  const plannerOutput = document.getElementById("planner-output");
  if (plannerBtn) {
    plannerBtn.addEventListener("click", () => {
      const days = document.getElementById("planner-days").value;
      const who = document.getElementById("planner-who").value;
      const interests = Array.from(document.querySelectorAll("[data-interest]:checked")).map((el) => el.value);
      if (!days || !who) { plannerOutput.innerHTML = '<p class=body-text>Please select duration and travel style.</p>'; plannerResult.classList.remove("hidden"); return; }
      const cityRoutes = {
        "7": { solo: ["Beijing"], couple: ["Beijing"], family: ["Beijing"], friends: ["Beijing"] },
        "10": { solo: ["Beijing","Xian","Shanghai"], couple: ["Beijing","Xian","Shanghai"], family: ["Beijing","Xian","Shanghai"], friends: ["Beijing","Xian","Chengdu","Shanghai"] },
        "14": { solo: ["Beijing","Xian","Chengdu","Guilin","Shanghai"], couple: ["Beijing","Xian","Chengdu","Guilin","Shanghai"], family: ["Beijing","Xian","Chengdu","Shanghai"], friends: ["Beijing","Xian","Chengdu","Zhangjiajie","Shanghai"] },
        "21": { solo: ["Beijing","Xian","Chengdu","Zhangjiajie","Guilin","Yunnan","Shanghai"], couple: ["Beijing","Xian","Chengdu","Guilin","Yunnan","Shanghai"], family: ["Beijing","Xian","Chengdu","Guilin","Shanghai"], friends: ["Beijing","Xian","Chengdu","Zhangjiajie","Guilin","Yunnan","Shanghai"] },
      };
      const cityGuides = {
        Beijing: { days: "3-5 days", label: "BJ", act: "Forbidden City, Great Wall at Mutianyu, Temple of Heaven, Peking Duck at Siji Minfu", tip: "Best entry point. Book Forbidden City tickets 7 days ahead." },
        Xian: { days: "2-3 days", label: "XA", act: "Terracotta Warriors Museum, bike the Ancient City Wall (14km), Muslim Quarter food crawl", tip: "Muslim Quarter food scene alone is worth the trip." },
        Chengdu: { days: "3-4 days", label: "CD", act: "Panda Base 7:30am, Sichuan hot pot at Shujiuxiang, People Park tea house", tip: "Arrive before 8am for panda feeding time." },
        Shanghai: { days: "2-4 days", label: "SH", act: "The Bund skyline, Shanghai Tower observation deck, French Concession cafes, Yu Garden", tip: "CNY2 Huangpu ferry gives best skyline views." },
        Guilin: { days: "3-4 days", label: "GL", act: "Li River cruise to Yangshuo, cycle Ten-Mile Gallery, Yulong River bamboo raft", tip: "The Li River cruise is the most photogenic experience in China." },
        Zhangjiajie: { days: "3-4 days", label: "ZJ", act: "Avatar mountains at Yuanjiajie, Bailong Elevator, Grand Canyon Glass Bridge", tip: "Tianmen Mountain needs separate ticket and full day." },
        Yunnan: { days: "5-7 days", label: "YN", act: "Tiger Leaping Gorge hike, Lijiang Old Town, Erhai Lake cycling, Dali", tip: "Expect altitude at Lijiang (2,400m). Acclimatize first." },
      };
      const styleTips = {
        solo: "Hostels are very social. Use Trip.com for trains, Didi for rides. Most cities are extremely safe after dark.",
        couple: "Book boutique hotels in French Concession (Shanghai) or hutong courtyards (Beijing). Sunset at the Bund is unforgettable.",
        family: "Kids love Panda Base, Shanghai Disney, and Great Wall toboggan slide. Many hotels have family rooms.",
        friends: "Sichuan hot pot in Chengdu, craft beer in Shanghai, group-friendly everywhere. Night markets are must-do.",
      };
      const costEstimate = { "7":"$700-1,400", "10":"$1,200-2,000", "14":"$1,800-2,800", "21":"$2,500-4,200" };
      const bestMonths = { "7": "Spring (Apr-May) or Autumn (Sep-Oct)", "10": "April-May / September-October", "14": "April-May / Sept-November", "21": "Sept-Oct ideal. Yunnan winter is mild." };
      const cities = cityRoutes[days]?.[who] || ["Beijing", "Shanghai"];
      const cost = costEstimate[days] || "$1,000-2,000";
      const style = who.charAt(0).toUpperCase() + who.slice(1);

      var html = '<div class="card p-6" style="margin-bottom:20px">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px"><div><h3 class="heading-md" style="font-size:1.25rem">' + days + '-Day ' + style + ' Trip</h3><p class="body-text" style="font-size:0.75rem;margin-top:2px">Tailored route based on your preferences</p></div><span style="font-size:1.5rem;font-weight:700;color:var(--color-accent)">' + cost + '<span style="font-size:0.75rem;color:var(--color-text-muted);font-weight:normal"> /person</span></span></div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px"><span class="tag tag-success">' + days + ' days</span><span class="tag">' + style + '</span>';
      interests.forEach(function(i) { html += '<span class="tag">' + i + '</span>'; });
      html += '</div>';

      html += '<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">';
      cities.forEach(function(cn) {
        var g = cityGuides[cn];
        if (!g) return;
        html += '<div class="card" style="padding:12px;border-left:2px solid var(--color-accent)"><div style="display:flex;align-items:flex-start;gap:12px"><span style="font-size:1.125rem;font-weight:700;color:var(--color-accent);min-width:32px;text-align:center">' + g.label + '</span><div style="flex:1"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px"><span style="font-size:0.875rem;font-weight:600;color:var(--color-text)">' + cn + '</span><span style="font-size:0.75rem;color:var(--color-text-muted)">' + g.days + '</span></div><p class="body-text" style="font-size:0.75rem">' + g.act + '</p><p style="font-size:0.75rem;color:var(--color-accent);font-style:italic;margin-top:4px">Tip: ' + g.tip + '</p></div></div></div>';
      });
      html += '</div>';

      html += '<div class="card" style="padding:16px;background:var(--color-accent-light);border-color:var(--color-accent-light);margin-bottom:12px"><p style="font-size:0.75rem;font-weight:600;color:var(--color-accent);margin-bottom:4px">Travel Tips for ' + style + '</p><p class="body-text" style="font-size:0.75rem">' + (styleTips[who] || "") + '</p></div>';
      html += '<div class="card" style="padding:16px;margin-bottom:12px"><p style="font-size:0.75rem;font-weight:600;color:var(--color-text);margin-bottom:4px">Best Time to Go</p><p class="body-text" style="font-size:0.75rem">' + (bestMonths[days] || "April-May / September-October") + '</p></div>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px"><a href="#destinations" class="btn-primary" style="font-size:0.75rem;padding:8px 16px">Explore Destinations</a><a href="#cost" class="card" style="padding:8px 16px;font-size:0.75rem;text-decoration:none;color:var(--color-text-secondary)">Budget Calculator</a><a href="#clothing" class="card" style="padding:8px 16px;font-size:0.75rem;text-decoration:none;color:var(--color-text-secondary)">Packing Guide</a></div>';
      html += '</div>';

      plannerOutput.innerHTML = html;
      plannerResult.classList.remove("hidden");
    });
  }
</script>
"""

content = content[:insert_pos] + enhanced + "\n" + content[insert_pos:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print(f"Done. {len(content)} chars")