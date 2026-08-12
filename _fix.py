import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Fix 1: Destination tabs - remove city code badges, keep clean city names only
# Replace all 8 buttons with clean versions (no badge span)
replacements = [
    ('<button data-tab="0" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#C2413F;color:#fff;font-size:10px;font-weight:700;margin-right:6px">BJ</span>Beijing</button>',
     '<button data-tab="0" class="dest-tab-btn">Beijing</button>'),
    ('<button data-tab="3" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#059669;color:#fff;font-size:10px;font-weight:700;margin-right:6px">CD</span>Chengdu</button>',
     '<button data-tab="3" class="dest-tab-btn">Chengdu</button>'),
    ('<button data-tab="5" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#0891B2;color:#fff;font-size:10px;font-weight:700;margin-right:6px">GL</span>Guilin &amp; Yangshuo</button>',
     '<button data-tab="5" class="dest-tab-btn">Guilin &amp; Yangshuo</button>'),
    ('<button data-tab="7" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#9333EA;color:#fff;font-size:10px;font-weight:700;margin-right:6px">GZ</span>Guangzhou</button>',
     '<button data-tab="7" class="dest-tab-btn">Guangzhou</button>'),
    ('<button data-tab="1" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#2563EB;color:#fff;font-size:10px;font-weight:700;margin-right:6px">SH</span>Shanghai</button>',
     '<button data-tab="1" class="dest-tab-btn">Shanghai</button>'),
    ('<button data-tab="2" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#D97706;color:#fff;font-size:10px;font-weight:700;margin-right:6px">XA</span>Xi&#39;an</button>',
     '<button data-tab="2" class="dest-tab-btn">Xi&#39;an</button>'),
    ('<button data-tab="4" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#7C3AED;color:#fff;font-size:10px;font-weight:700;margin-right:6px">ZJ</span>Zhangjiajie</button>',
     '<button data-tab="4" class="dest-tab-btn">Zhangjiajie</button>'),
    ('<button data-tab="6" class="dest-tab-btn"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:5px;background:#DB2777;color:#fff;font-size:10px;font-weight:700;margin-right:6px">YN</span>Yunnan</button>',
     '<button data-tab="6" class="dest-tab-btn">Yunnan</button>'),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print("Replaced: " + old[60:90] + "...")
    else:
        print("NOT FOUND: " + old[60:90] + "...")

# Fix 2: Routes section - enhance with detailed info cards
# Find the routes Astro expression and replace it
old_routes = """{routes.map((r,i) => {
            const cities = r.cities.split(" \\u2192 ").map(c => c.trim());
            const colors = ["bg-[var(--color-accent)]","bg-amber-500","bg-blue-500","bg-emerald-500","bg-violet-500"];
            return (
              <div class="card p-5">
                <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                  <div class="md:w-48 flex-shrink-0">
                    <h3 class="heading-md text-lg text-[var(--color-text)]">{r.name}</h3>
                    <p class="body-text text-xs mt-1">{r.description}</p>
                  </div>
                  <div class="flex-1 flex items-center overflow-x-auto py-2">
                    {cities.map((c, idx) => (
                      <div class="flex items-center">
                        <div class="flex flex-col items-center flex-shrink-0">
                          <div class={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors[idx % colors.length]}`}>
                            {c.substring(0,2)}
                          </div>
                          <span class="text-[10px] text-[var(--color-text-muted)] mt-1 whitespace-nowrap">{c.length > 6 ? c.substring(0,6) : c}</span>
                        </div>
                        {idx < cities.length - 1 && (
                          <div class="w-8 md:w-12 h-0.5 bg-[var(--color-border)] mx-1 flex-shrink-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}"""

new_routes = """{routes.map((r,i) => {
            const cityCodes = {"Beijing":"BJ","Shanghai":"SH","Xi'an":"XA","Chengdu":"CD","Zhangjiajie":"ZJ","Guilin":"GL","Guilin & Yangshuo":"GL","Yunnan":"YN","Guangzhou":"GZ"};
            const cityColors = {"Beijing":"#C2413F","Shanghai":"#2563EB","Xi'an":"#D97706","Chengdu":"#059669","Zhangjiajie":"#7C3AED","Guilin":"#0891B2","Guilin & Yangshuo":"#0891B2","Yunnan":"#DB2777","Guangzhou":"#9333EA"};
            const routeDetails = {
              "Classic China": { days: "10 days", budget: "$1,200-2,000", highlights: "Great Wall, Terracotta Warriors, The Bund" },
              "China + Pandas": { days: "12 days", budget: "$1,400-2,200", highlights: "Great Wall, Terracotta Warriors, Panda Base" },
              "China Nature": { days: "12 days", budget: "$1,400-2,400", highlights: "Li River cruise, Avatar mountains, Shanghai skyline" },
              "China Highlights": { days: "14 days", budget: "$1,800-2,800", highlights: "Great Wall, Warriors, Pandas, The Bund" },
              "China + Yunnan": { days: "16 days", budget: "$2,000-3,200", highlights: "Lijiang Old Town, Tiger Leaping Gorge, Dali" }
            };
            const cities = r.cities.split(" \\u2192 ").map(c => c.trim());
            const detail = routeDetails[r.name] || { days: "10-14 days", budget: "$1,200-2,800", highlights: "Multiple cities" };
            return (
              <div class="card p-5">
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="md:w-52 flex-shrink-0">
                    <h3 class="heading-md text-lg text-[var(--color-text)]">{r.name}</h3>
                    <p class="body-text text-xs mt-1">{r.description}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                      <span class="tag tag-success">{detail.days}</span>
                      <span class="tag">{detail.budget}</span>
                    </div>
                    <p class="text-xs text-[var(--color-accent)] mt-2 italic">{detail.highlights}</p>
                  </div>
                  <div class="flex-1 flex items-center overflow-x-auto py-3">
                    {cities.map((c, idx) => {
                      const code = cityCodes[c] || c.substring(0,2).toUpperCase();
                      const color = cityColors[c] || "#C2413F";
                      return (
                        <div class="flex items-center">
                          <div class="flex flex-col items-center flex-shrink-0">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white" style={`background:${color}`}>
                              {code}
                            </div>
                            <span class="text-[10px] text-[var(--color-text-muted)] mt-1 whitespace-nowrap">{c}</span>
                          </div>
                          {idx < cities.length - 1 && (
                            <div class="w-6 md:w-10 flex items-center">
                              <div class="w-full h-0.5 bg-[var(--color-border)]"></div>
                              <div class="w-1.5 h-1.5 border-t-2 border-r-2 border-[var(--color-border)] rotate-45 -ml-1"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}"""

content = content.replace(old_routes, new_routes)

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Both fixes applied")