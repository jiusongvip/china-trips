import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find the Routes section
ridx = content.find("Popular Multi-City Routes")
sec_start = content.rfind("<section", 0, ridx)
sec_end = content.find("</section>", ridx) + 10

# New Routes section with visual timeline
new_routes = """<section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Routes</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Popular Multi-City Routes</h2>
          <p class="body-text text-lg">Each route gives you a different flavor of China. Follow the dots.</p>
        </div>
        <div class="space-y-6 stagger-children reveal">
          {routes.map((r,i) => {
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
          })}
        </div>
      </div>
    </section>"""

content = content[:sec_start] + new_routes + content[sec_end:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Routes section enhanced with visual timeline")