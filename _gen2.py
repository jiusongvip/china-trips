import sys
sys.stdout.reconfigure(encoding="utf-8")

# Read scripts backup
scripts_bak = open(r"D:\workspaces\website\china-trips\_scripts.tmp", "r", encoding="utf-8").read()

# The original file has the scripts we need. But `_scripts.tmp` was saved earlier.
# Let me just use the full scripts from _scripts.tmp.

# === Build the COMPLETE index.astro ===
# Strategy: read the old dist HTML to get structure reference,
# generate fresh Astro source

L = []
def w(s=""): L.append(s)

# Frontmatter
w("---")
w('import BaseLayout from "../layouts/BaseLayout.astro";')
w("import {")
w("  destinations, itineraries, faqs, tripTypes, routes,")
w("  visa144hCities, visaPolicyHighlights, monthlyWeather,")
w("  essentialPhrases, transportModes, foodCities,")
w("  alipaySetup, wechatPaySetup")
w('} from "../data/content";')
w("")
w('const pageTitle = "China Trips \\u2014 Plan Your Perfect Trip to China | Itineraries, Tips & Tools";')
w('const pageDesc = "Plan your trip to China: detailed day-by-day itineraries, destination guides, budget calculators, visa info, weather tables, and practical advice.";')
w("")
w("const scheduleSchema = {")
w('  "@context": "https://schema.org",')
w('  "@type": "FAQPage",')
w("  mainEntity: faqs.map((f) => ({")
w('    "@type": "Question",')
w("    name: f.question,")
w('    acceptedAnswer: { "@type": "Answer", text: f.answer },')
w("  })),")
w("};")
w("---")
w("")
w("<BaseLayout")
w("  title={pageTitle}")
w("  description={pageDesc}")
w('  ogImage="/images/hero/og-default.webp"')
w("  schema={scheduleSchema}")
w(">")
w("  <main>")
w('    <nav class="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">')
w('      <div class="container flex items-center justify-between h-16">')
w('        <a href="/" class="heading-md text-lg">China Trips</a>')
w('        <div class="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)] max-lg:hidden">')
for name, anchor in [("Planner","planner"),("Itineraries","itineraries"),("Destinations","destinations"),("Cost","cost"),("Visa","visa"),("FAQ","faq")]:
    w(f'          <a href="#{anchor}" class="hover:text-[var(--color-text)] transition-colors">{name}</a>')
w("        </div>")
w("      </div>")
w("    </nav>")
w("")
# Hero
w('    <header class="relative min-h-[85dvh] flex items-center overflow-hidden">')
w('      <img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager" />')
w('      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>')
w('      <div class="container relative py-24 md:py-32">')
w('        <div class="max-w-xl">')
w('          <div class="section-eyebrow text-white/80">Plan Your Journey</div>')
w('          <h1 class="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">Your China Trip<br/>Starts Here</h1>')
w('          <p class="text-lg md:text-xl max-w-lg mb-10 text-white/75 leading-relaxed">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical advice \\u2014 everything in one page.</p>')
w('          <div class="flex flex-wrap gap-4">')
w('            <a href="#planner" class="btn-primary text-base px-8 py-3.5">Plan My Trip</a>')
w('            <a href="#itineraries" class="btn-secondary !border-white/30 !text-white hover:!border-white text-base px-8 py-3.5">Explore Itineraries</a>')
w("          </div>")
w("        </div>")
w("      </div>")
w('      <div class="scroll-hint"></div>')
w("    </header>")
w("")

print(f"Built {len(L)} lines")
with open(r"D:\workspaces\website\china-trips\src\pages\index_temp.astro", "w", encoding="utf-8", newline="") as f:
    for line in L:
        f.write(line + "\r\n")
print("Temp file written")
