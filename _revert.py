with open("D:/workspaces/website/china-trips/src/pages/index.astro", "r", encoding="utf-8") as f:
    c = f.read()

# === REVERT HERO ===
new_hero = """<header class="relative overflow-hidden">
      <img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div class="container relative pt-28 pb-24 md:pt-36 md:pb-32">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
            <span class="text-xs font-semibold tracking-[0.2em] uppercase text-white/70">Plan Your Journey</span>
          </div>
          <h1 class="heading-xl text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">Your China Trip Starts Here</h1>
          <p class="text-lg md:text-xl max-w-lg mb-10 text-white/70 leading-relaxed">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical advice.</p>
          <div class="flex flex-wrap gap-3">
            <a href="#planner" class="btn-primary text-base px-8 py-3.5 shadow-lg shadow-black/20">Plan My Trip</a>
            <a href="#itineraries" class="btn-secondary !border-white/20 !text-white/80 hover:!border-white/60 hover:!text-white backdrop-blur-sm">Explore Itineraries</a>
          </div>
        </div>
      </div>
    </header>"""

old_hero = """<header class="relative overflow-hidden">
      <img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>
      <div class="container relative pt-24 pb-20 md:pt-28 md:pb-24">
        <div class="max-w-2xl">
          <p class="text-sm font-medium tracking-wider uppercase text-[var(--color-accent-light)] mb-4">Plan Your Journey</p>
          <h1 class="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">Your China Trip Starts Here</h1>
          <p class="text-lg md:text-xl max-w-xl mb-8 text-white/80" style="font-family: 'Geist Sans', sans-serif; line-height: 1.65;">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical advice \u2014 everything in one page.</p>
          <div class="flex flex-wrap gap-4">
            <a href="#planner" class="btn-primary">Plan My Trip</a>
            <a href="#itineraries" class="btn-secondary !border-white/30 !text-white hover:!border-white">Explore Itineraries</a>
          </div>
        </div>
      </div>
    </header>"""

c = c.replace(new_hero, old_hero)
print("Hero reverted:", new_hero not in c)

# === REVERT STATS ===
new_stats = """<section class="border-b border-[var(--color-border)] bg-white">
      <div class="container py-5">
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
          <div class="flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] text-lg font-bold">8</span>
            <span class="font-semibold text-[var(--color-text)]">Cities covered in depth</span>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] text-lg font-bold">4</span>
            <span class="font-semibold text-[var(--color-text)]">Complete day-by-day itineraries</span>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] text-lg font-bold">12</span>
            <span class="font-semibold text-[var(--color-text)]">Month weather comparison</span>
          </div>
          <div class="flex items-center gap-2.5">
            <span class="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center text-[var(--color-accent)] text-lg font-bold">54</span>
            <span class="font-semibold text-[var(--color-text)]">Countries visa guide</span>
          </div>
        </div>
      </div>
    </section>"""

old_stats = """<section class="border-b border-[var(--color-border)] bg-[var(--color-accent-light)]">
      <div class="container py-4">
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text)]">
          <span class="font-semibold">8 Cities</span><span class="text-[var(--color-text-muted)]">&middot;</span><span class="font-semibold">4 Complete Itineraries</span><span class="text-[var(--color-text-muted)]">&middot;</span><span class="font-semibold">12-Month Weather Guide</span><span class="text-[var(--color-text-muted)]">&middot;</span><span class="font-semibold">Visa Info for 54 Countries</span>
        </div>
      </div>
    </section>"""

c = c.replace(new_stats, old_stats)
print("Stats reverted:", new_stats not in c)

# === REVERT TRUST ===
new_trust = """<section class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <div class="container max-w-2xl text-center py-6">
        <div class="inline-flex items-center gap-1.5 text-[var(--color-accent)] mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span class="text-xs font-semibold tracking-[0.15em] uppercase">Independent Travel Guide</span>
        </div>
        <p class="body-text text-sm max-w-xl mx-auto">Not a tour agency. We do not sell tours, push affiliate links, or ask you to contact us for a quote. All itineraries, prices, and tips are researched and kept current. Just honest information for independent travelers.</p>
      </div>
    </section>"""

old_trust = """<section class="section-alt border-b border-[var(--color-border)]">
      <div class="container max-w-3xl text-center py-4">
        <p class="body-text text-sm"><strong class="text-[var(--color-text)]">Independent travel guide</strong> \u2014 not a tour agency. All itineraries, prices, and tips are researched and kept current. No affiliate pressure.</p>
      </div>
    </section>"""

c = c.replace(new_trust, old_trust)
print("Trust reverted:", new_trust not in c)

with open("D:/workspaces/website/china-trips/src/pages/index.astro", "w", encoding="utf-8") as f:
    f.write(c)
print("Total lines:", len(c.split(chr(10))))
