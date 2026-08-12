import os
BASE = r"D:\workspaces\website\china-trips"

with open(os.path.join(BASE, "src", "pages", "index.astro"), "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add mobile sticky bottom bar BEFORE </main>
main_close = content.rfind("</main>")
mobile_bar = """
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[var(--color-border)] px-4 py-3 flex items-center gap-3">
    <a href="#planner" class="flex-1 btn-primary text-sm py-2.5 no-underline">Plan My Trip</a>
    <a href="#destinations" class="text-xs text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)]">Cities</a>
    <a href="#cost" class="text-xs text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)]">Budget</a>
    <a href="#faq" class="text-xs text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-accent)]">FAQ</a>
  </div>
"""

content = content[:main_close] + mobile_bar + content[main_close:]

# 2. Add social proof bar right after the stat banner
# Find "Independent travel guide" section and insert social proof BEFORE it
guide_marker = "Independent travel guide"
gidx = content.find(guide_marker)
social_sec_start = content.rfind("<section", 0, gidx)

social_proof = """
    <section class="border-b border-[var(--color-border)]">
      <div class="container max-w-5xl py-5">
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-[var(--color-accent)] font-bold text-lg">10K+</span>
            <span class="text-[var(--color-text-muted)]">travelers helped</span>
          </div>
          <div class="hidden sm:block w-px h-5 bg-[var(--color-border)]"></div>
          <div class="flex items-center gap-2">
            <span class="text-[var(--color-accent)] font-bold text-lg">8</span>
            <span class="text-[var(--color-text-muted)]">cities covered in depth</span>
          </div>
          <div class="hidden sm:block w-px h-5 bg-[var(--color-border)]"></div>
          <div class="flex items-center gap-2">
            <span class="text-[var(--color-accent)] font-bold text-lg">Aug 2026</span>
            <span class="text-[var(--color-text-muted)]">last updated</span>
          </div>
          <div class="hidden sm:block w-px h-5 bg-[var(--color-border)]"></div>
          <div class="flex items-center gap-2">
            <span class="flex gap-0.5">
              <span class="text-[var(--color-accent)]">&#9733;</span><span class="text-[var(--color-accent)]">&#9733;</span><span class="text-[var(--color-accent)]">&#9733;</span><span class="text-[var(--color-accent)]">&#9733;</span><span class="text-[var(--color-accent)]">&#9733;</span>
            </span>
            <span class="text-[var(--color-text-muted)]">independent & unbiased</span>
          </div>
        </div>
      </div>
    </section>
"""

content = content[:social_sec_start] + social_proof + content[social_sec_start:]

with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write(content)

print("Mobile bar + social proof added")