import os
BASE = r"D:\workspaces\website\china-trips"

# Read dist to extract content we need
with open(os.path.join(BASE, "dist", "index.html"), "r", encoding="utf-8") as f:
    dist = f.read()

# Extract scripts (planner, cost, tabs are in bundled JS; speak + reveal + schema are inline)
import re
inline_scripts = re.findall(r"<script[^>]*>(.*?)</script>", dist, re.DOTALL)
schema_json = inline_scripts[0] if len(inline_scripts) > 0 else ""
speak_js = inline_scripts[2] if len(inline_scripts) > 2 else ""
reveal_js = inline_scripts[3] if len(inline_scripts) > 3 else ""

# Read bundled JS for planner/cost/tabs
bundled_js = ""
for fname in os.listdir(os.path.join(BASE, "dist", "_astro")):
    if fname.startswith("index.astro_astro_type_script_index_0") and fname.endswith(".js"):
        with open(os.path.join(BASE, "dist", "_astro", fname), "r", encoding="utf-8") as f:
            bundled_js = f.read()
        break

print(f"Bundled JS: {len(bundled_js)} chars")
print(f"Speak JS: {len(speak_js)} chars")
print(f"Schema: {len(schema_json)} chars")

# Now write the Astro source
with open(os.path.join(BASE, "src", "pages", "index.astro"), "w", encoding="utf-8") as f:
    f.write('''---
import BaseLayout from "../layouts/BaseLayout.astro";
import {
  destinations, itineraries, faqs, tripTypes, routes,
  visa144hCities, visaPolicyHighlights, monthlyWeather,
  essentialPhrases, transportModes, foodCities,
  alipaySetup, wechatPaySetup
} from "../data/content";
import { citiesDeep } from "../data/deep-content";

const pageTitle = "China Trips \u2014 Plan Your Perfect Trip to China | Itineraries, Tips & Tools 2026";
const pageDesc = "Plan your trip to China: detailed day-by-day itineraries, destination guides, budget calculators, visa info, weather tables, and practical advice.";

const seasonNow = new Date().getMonth();
const seasonBanner = seasonNow >= 2 && seasonNow <= 4
  ? { text: "Spring is here \u2014 perfect weather for the Great Wall and Li River", style: "background:#ecfdf5;border-color:#a7f3d0;color:#065f46" }
  : seasonNow >= 5 && seasonNow <= 7
  ? { text: "Summer travel tip: head to Yunnan, Tibet, or Inner Mongolia to escape the heat", style: "background:#f0f9ff;border-color:#bae6fd;color:#075985" }
  : seasonNow >= 8 && seasonNow <= 10
  ? { text: "Autumn is THE best season \u2014 crisp air, golden leaves, perfect for hiking", style: "background:#fffbeb;border-color:#fde68a;color:#92400e" }
  : { text: "Winter means fewer crowds and half-price hotels \u2014 Harbin Ice Festival, anyone?", style: "background:#eef2ff;border-color:#c7d2fe;color:#3730a3" };

const clothingGuide = [
  { season: "Spring (Mar\u2013May)", temp: "8\u201325\u00b0C", layers: "Light jacket, long-sleeve shirts, comfortable pants. Northern cities still chilly in March.", items: "Lightweight rain jacket, scarf for Beijing mornings", tip: "Layer up \u2014 mornings can be 8\u00b0C while afternoons hit 22\u00b0C in Beijing." },
  { season: "Summer (Jun\u2013Aug)", temp: "22\u201335\u00b0C", layers: "Breathable fabrics: cotton, linen, moisture-wicking. Shorts and t-shirts fine.", items: "Sunscreen SPF50+, wide-brim hat, sunglasses, insect repellent (Guilin/Yunnan)", tip: "Carry an umbrella for sudden thunderstorms. Temples require covered shoulders and knees." },
  { season: "Autumn (Sep\u2013Nov)", temp: "10\u201325\u00b0C", layers: "Sweater or fleece, light jacket, long pants. Northern cities need a warm coat by November.", items: "Comfortable hiking shoes for Great Wall/karst trails, light gloves for October", tip: "The golden season \u2014 dress for outdoor exploration. October is crisp and perfect." },
  { season: "Winter (Dec\u2013Feb)", temp: "-10\u201312\u00b0C", layers: "Thermal base layer, thick sweater, down jacket, warm socks, insulated boots.", items: "Gloves, beanie, scarf, lip balm, moisturizer (central heating is very dry)", tip: "Beijing can hit -10\u00b0C; Shanghai stays at 1\u20138\u00b0C damp cold; Guangzhou is mild at 10\u201318\u00b0C." },
];

const accommodationTips = [
  { level: "Budget", range: "$10\u201330/night", description: "Clean hostels and guesthouses near major sights. English-speaking staff, communal areas.", booking: "Book on Hostelworld or Trip.com. Look for 4.0+ rating. Many offer free luggage storage.", bestFor: "Solo travelers, backpackers, students" },
  { level: "Mid-range", range: "$50\u2013150/night", description: "Comfortable 3\u20134 star hotels or boutique guesthouses. Western amenities, metro access, breakfast included.", booking: "Trip.com has the best inventory. Agoda for international chains. Book 2\u20134 weeks ahead.", bestFor: "Couples, families, first-time visitors" },
  { level: "Luxury", range: "$150\u2013500+/night", description: "5-star international chains and heritage properties like converted hutong courtyard homes in Beijing.", booking: "Book directly for best rates and perks. Many offer airport pickup.", bestFor: "Honeymooners, special occasions, comfort seekers" },
];

const eeatData = [
  { value: "8", label: "Major Chinese cities researched in depth" },
  { value: "54", label: "Countries of visa information verified" },
  { value: "12", label: "Months of weather data per city" },
  { value: "100+", label: "Restaurants, hotels, and attractions reviewed" },
];

const packChecklist = [
  { category: "Documents", items: ["Passport (6+ months validity)", "Printed visa or eVisa confirmation", "Travel insurance documents", "Hotel booking confirmations (in Chinese)", "Printed flight itinerary"] },
  { category: "Tech & Money", items: ["Unlocked smartphone (install VPN first)", "eSIM or local SIM card", "Power bank (20,000mAh max)", "Universal power adapter", "Activated Alipay + linked foreign card", "$200\u2013500 emergency cash"] },
  { category: "Health & Comfort", items: ["Prescription meds (original packaging)", "N95/KN95 masks (Nov\u2013Mar pollution)", "Hand sanitizer & wet wipes", "Mosquito repellent (Guilin, Yunnan)", "Travel-sized toilet paper"] },
  { category: "Clothing", items: ["Most comfortable walking shoes (15,000+ steps daily)", "Light scarf/wrap (temple cover-up)", "Quick-dry underwear & socks", "Rain jacket or compact umbrella", "One nice outfit for fine dining"] },
];

const scheduleSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
---

<BaseLayout title={pageTitle} description={pageDesc} ogImage="/images/hero/og-default.webp" schema={scheduleSchema}>

  <nav class="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[var(--color-border)]">
    <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="#" class="text-lg font-semibold tracking-tight text-[var(--color-text)] no-underline">China Trips</a>
      <div class="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)]">
        <a href="#planner" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Planner</a>
        <a href="#destinations" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Destinations</a>
        <a href="#cost" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Budget</a>
        <a href="#visa" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Visa</a>
        <a href="#clothing" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Pack</a>
        <a href="#accommodation" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">Stay</a>
        <a href="#faq" class="px-3 py-1.5 rounded-md hover:bg-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors no-underline">FAQ</a>
        <a href="#planner" class="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors no-underline">Plan My Trip</a>
      </div>
    </div>
  </nav>

  <div class="border-b" style={`${seasonBanner.style}`}>
    <div class="max-w-7xl mx-auto px-4 py-2.5 text-center text-sm font-medium">{seasonBanner.text}</div>
  </div>

  <main>
    <section class="relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-stone-900/50 via-stone-900/20 to-stone-900/60 z-10"></div>
        <img src="/images/hero/hero.webp" alt="Misty karst peaks in Guilin" class="h-full w-full object-cover" width="1920" height="1249" loading="eager" decoding="sync" />
        <p class="absolute bottom-3 right-4 md:right-6 z-30 text-[10px] text-white/40">Guilin karst landscape</p>
      </div>
      <div class="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-40">
        <div class="max-w-2xl">
          <div class="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/90 mb-6">Independent guide \u00b7 Not a tour agency \u00b7 Updated August 2026</div>
          <h1 class="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">Plan Your Trip to China</h1>
          <p class="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">Detailed itineraries, real budgets, honest city guides, and practical advice \u2014 everything you need to plan a China trip that actually works, written by travelers who have been there.</p>
          <p class="mt-3 text-sm text-white/60 max-w-xl">8 cities \u00b7 4 itineraries \u00b7 12-month weather guide \u00b7 54-country visa guide \u00b7 Cost calculator</p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="#planner" class="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] active:scale-[0.98] shadow-lg shadow-red-900/30 no-underline">Start Planning<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5"/></svg></a>
            <a href="#destinations" class="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.98] no-underline">Explore Destinations</a>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 -mt-10 mb-10">
      <div class="container">
        <div class="card-stats stat-banner py-5 px-6 md:px-10 mx-auto max-w-5xl">
          <div class="stat-item flex-col items-center gap-1 text-center"><span class="stat-number">8</span><span class="text-sm text-[var(--color-text-secondary)]">Cities Covered</span></div>
          <div class="stat-item flex-col items-center gap-1 text-center"><span class="stat-number">4</span><span class="text-sm text-[var(--color-text-secondary)]">Complete Itineraries</span></div>
          <div class="stat-item flex-col items-center gap-1 text-center"><span class="stat-number">12</span><span class="text-sm text-[var(--color-text-secondary)]">Month Weather Guide</span></div>
          <div class="stat-item flex-col items-center gap-1 text-center"><span class="stat-number">54</span><span class="text-sm text-[var(--color-text-secondary)]">Countries Visa Info</span></div>
        </div>
      </div>
    </section>

    <section class="border-b border-[var(--color-border)] bg-[var(--color-accent-light)]">
      <div class="container max-w-3xl text-center py-5">
        <p class="body-text text-sm">Independent travel guide \u2014 not a tour agency. All itineraries, prices, and tips are researched and kept current. <strong>Last verified: August 2026.</strong></p>
      </div>
    </section>

    <section id="planner" class="section-accent-top">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center mb-10 reveal">
          <span class="section-eyebrow">Step 1</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Plan Your China Trip</h2>
          <p class="body-text text-lg">Tell us what you are looking for and we will suggest the best route, destinations, and budget.</p>
        </div>
        <div class="card max-w-2xl mx-auto p-8 reveal reveal-delay-1">
          <form id="trip-planner" class="space-y-6">
            <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-2">How long is your trip?</label>
              <select id="planner-days" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent">
                <option value="">Select duration</option><option value="7">7 days</option><option value="10">10 days</option><option value="14">14 days</option><option value="21">21 days</option>
              </select>
            </div>
            <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-2">What interests you?</label>
              <div class="flex flex-wrap gap-2">
                {["History","Food","Nature","Cities","Culture","Adventure"].map(i => (<label class="cursor-pointer"><input type="checkbox" value={i} class="peer hidden" data-interest /><span class="inline-block px-4 py-2 rounded-full border border-[var(--color-border)] text-sm peer-checked:bg-[var(--color-accent)] peer-checked:text-white peer-checked:border-[var(--color-accent)] transition-colors">{i}</span></label>))}
              </div>
            </div>
            <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-2">Who are you traveling with?</label>
              <select id="planner-who" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent">
                <option value="">Select travel style</option><option value="solo">Solo</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option>
              </select>
            </div>
            <button type="button" id="planner-submit" class="btn-primary w-full">Get My Recommendation</button>
          </form>
          <div id="planner-result" class="mt-8 hidden"><div class="border-t border-[var(--color-border-light)] pt-6"><div id="planner-output"></div></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Travel Styles</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Find Your China Trip</h2>
          <p class="body-text text-lg">Whether you are traveling solo, with family, on a budget, or looking for luxury, there is a perfect China trip for you.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children reveal">
          {tripTypes.map(t => (<a href={"#" + t.slug} class="card p-6 no-underline group"><h3 class="heading-md text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{t.name}</h3><p class="body-text text-sm mb-3">{t.description}</p><div class="flex items-center gap-1 text-xs text-[var(--color-accent)] font-medium"><span>{t.idealDays}</span><span class="text-[var(--color-text-muted)]">&middot;</span><span>{t.topDestinations.slice(0,2).join(", ")}</span></div></a>))}
        </div>
      </div>
    </section>
''')

print("Stage 1 written successfully")