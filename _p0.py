import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# Find insertion point: right after stat banner </section>, before Independent guide section
marker = "Independent travel guide"
idx = content.find(marker)
section_start = content.rfind("</section>", 0, idx) + 10

sample_itineraries = """

    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-8 reveal">
          <span class="section-eyebrow">Popular Routes</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Sample China Itineraries</h2>
          <p class="body-text text-lg">Not sure where to start? Here are three proven routes. Click any card to auto-fill the planner below.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-children reveal">
          <div class="card p-5 cursor-pointer group hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-days').value='10';document.getElementById('planner-who').value='couple';document.getElementById('planner-submit').click();window.location.hash='planner'">
            <div class="flex items-center gap-2 mb-3">
              <span class="tag tag-success">Most Popular</span>
              <span class="text-xs text-[var(--color-text-muted)]">10 days</span>
            </div>
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Classic Golden Triangle</h3>
            <div class="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
              <span class="font-semibold text-[var(--color-accent)]">BJ</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">XA</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">SH</span>
            </div>
            <p class="body-text text-xs mb-3">Beijing (4 days) \u2192 Xi'an (2 days) \u2192 Shanghai (3 days). History, culture, and modern China in one trip.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-[var(--color-accent)]">$1,200-2,000</span>
              <span class="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]">Use this route \u2192</span>
            </div>
          </div>
          <div class="card p-5 cursor-pointer group hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-days').value='14';document.getElementById('planner-who').value='friends';document.getElementById('planner-submit').click();window.location.hash='planner'">
            <div class="flex items-center gap-2 mb-3">
              <span class="tag">Nature + Culture</span>
              <span class="text-xs text-[var(--color-text-muted)]">14 days</span>
            </div>
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Pandas & Karst Peaks</h3>
            <div class="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
              <span class="font-semibold text-[var(--color-accent)]">BJ</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">XA</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">CD</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">GL</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">SH</span>
            </div>
            <p class="body-text text-xs mb-3">Beijing \u2192 Xi'an \u2192 Chengdu (pandas!) \u2192 Guilin karst peaks \u2192 Shanghai. The full China experience.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-[var(--color-accent)]">$1,800-2,800</span>
              <span class="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]">Use this route \u2192</span>
            </div>
          </div>
          <div class="card p-5 cursor-pointer group hover:border-[var(--color-accent)] transition-all" onclick="document.getElementById('planner-days').value='21';document.getElementById('planner-who').value='couple';document.getElementById('planner-submit').click();window.location.hash='planner'">
            <div class="flex items-center gap-2 mb-3">
              <span class="tag">Grand Tour</span>
              <span class="text-xs text-[var(--color-text-muted)]">21 days</span>
            </div>
            <h3 class="heading-md text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">The Complete Journey</h3>
            <div class="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
              <span class="font-semibold text-[var(--color-accent)]">BJ</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">XA</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">CD</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">ZJ</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">GL</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">YN</span><span class="text-[var(--color-border)]">\u2192</span>
              <span class="font-semibold text-[var(--color-accent)]">SH</span>
            </div>
            <p class="body-text text-xs mb-3">Beijing \u2192 Xi'an \u2192 Chengdu \u2192 Zhangjiajie \u2192 Guilin \u2192 Yunnan \u2192 Shanghai. See it all.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-[var(--color-accent)]">$2,500-4,200</span>
              <span class="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]">Use this route \u2192</span>
            </div>
          </div>
        </div>
      </div>
    </section>
"""

content = content[:section_start] + sample_itineraries + content[section_start:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Sample itinerary cards inserted at position " + str(section_start))