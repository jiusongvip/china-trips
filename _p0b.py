import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find position between destinations and cost sections
cost_marker = 'id="cost"'
cidx = content.find(cost_marker)
if cidx == -1:
    cost_marker = "id='cost'"  
    cidx = content.find(cost_marker)
if cidx == -1:
    cidx = content.find(">cost<")

dest_close = content.rfind("</section>", 0, cidx) + 10
print("Insert at " + str(dest_close))

comparison = """

    <section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-8 reveal">
          <span class="section-eyebrow">Compare</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Which City Is Right for You?</h2>
          <p class="body-text text-lg">Can't decide between two cities? Here is what makes each one unique.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-children reveal">
          <div class="card p-5">
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-3">Beijing <span class="text-sm text-[var(--color-text-muted)]">vs</span> Shanghai</h3>
            <div class="grid grid-cols-2 gap-3 text-xs mb-3">
              <div><span class="font-semibold text-[var(--color-text)]">Beijing</span><p class="text-[var(--color-text-secondary)] mt-1">Ancient capital, Great Wall, hutongs, imperial history. Slower pace, colder winters. Best for first-timers who love history.</p></div>
              <div><span class="font-semibold text-[var(--color-text)]">Shanghai</span><p class="text-[var(--color-text-secondary)] mt-1">Futuristic skyline, Art Deco streets, world-class dining. Fast-paced, cosmopolitan. Best for city lovers and foodies.</p></div>
            </div>
            <p class="text-xs text-[var(--color-accent)] italic">Verdict: Do both. Beijing is the historical heart; Shanghai is China's future. They complement, not compete.</p>
          </div>
          <div class="card p-5">
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-3">Guilin <span class="text-sm text-[var(--color-text-muted)]">vs</span> Zhangjiajie</h3>
            <div class="grid grid-cols-2 gap-3 text-xs mb-3">
              <div><span class="font-semibold text-[var(--color-text)]">Guilin & Yangshuo</span><p class="text-[var(--color-text-secondary)] mt-1">Gentle karst peaks, Li River cruise, cycling through rice paddies. Relaxed, photogenic, great for couples.</p></div>
              <div><span class="font-semibold text-[var(--color-text)]">Zhangjiajie</span><p class="text-[var(--color-text-secondary)] mt-1">Towering sandstone pillars, glass bridges, world's highest elevator. Dramatic, adventurous, Avatar-like scenery.</p></div>
            </div>
            <p class="text-xs text-[var(--color-accent)] italic">Verdict: Guilin for relaxation and romance. Zhangjiajie for adrenaline and jaw-drop moments.</p>
          </div>
          <div class="card p-5">
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-3">Chengdu <span class="text-sm text-[var(--color-text-muted)]">vs</span> Xi'an</h3>
            <div class="grid grid-cols-2 gap-3 text-xs mb-3">
              <div><span class="font-semibold text-[var(--color-text)]">Chengdu</span><p class="text-[var(--color-text-secondary)] mt-1">Pandas, fiery Sichuan food, tea house culture, laid-back lifestyle. Gateway to Tibet and Yunnan.</p></div>
              <div><span class="font-semibold text-[var(--color-text)]">Xi'an</span><p class="text-[var(--color-text-secondary)] mt-1">Terracotta Warriors, ancient city wall biking, Muslim Quarter street food. The starting point of the Silk Road.</p></div>
            </div>
            <p class="text-xs text-[var(--color-accent)] italic">Verdict: Chengdu for food and pandas. Xi'an for ancient history. Both are essential if you have 10+ days.</p>
          </div>
          <div class="card p-5">
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-3">Yunnan <span class="text-sm text-[var(--color-text-muted)]">vs</span> Tibet</h3>
            <div class="grid grid-cols-2 gap-3 text-xs mb-3">
              <div><span class="font-semibold text-[var(--color-text)]">Yunnan</span><p class="text-[var(--color-text-secondary)] mt-1">Diverse landscapes, 25 ethnic minorities, Tiger Leaping Gorge, ancient towns. No special permit needed.</p></div>
              <div><span class="font-semibold text-[var(--color-text)]">Tibet</span><p class="text-[var(--color-text-secondary)] mt-1">Potala Palace, Mount Everest Base Camp, high-altitude monasteries. Requires special permit and guided tour.</p></div>
            </div>
            <p class="text-xs text-[var(--color-accent)] italic">Verdict: Yunnan for independent travelers. Tibet for the truly adventurous with more planning and budget.</p>
          </div>
        </div>
      </div>
    </section>
"""

content = content[:dest_close] + comparison + content[dest_close:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Comparison module inserted")