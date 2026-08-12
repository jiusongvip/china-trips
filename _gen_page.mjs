import { writeFileSync } from "fs";

const out = [];
const L = (s = "") => out.push(s);
const A = (...items) => items.forEach(s => L(s));

// ===== ASTRO FRONT MATTER =====
L("---");
L('import BaseLayout from "../layouts/BaseLayout.astro";');
L('import {');
L('  destinations, itineraries, faqs, tripTypes, routes,');
L('  visa144hCities, visaPolicyHighlights, monthlyWeather,');
L('  essentialPhrases, transportModes, foodCities,');
L('  alipaySetup, wechatPaySetup');
L('} from "../data/content";');
L();
L('const pageTitle = "China Trips — Plan Your Perfect Trip to China | Itineraries, Tips & Tools";');
L('const pageDesc = "Plan your trip to China with detailed day-by-day itineraries, destination guides with accommodation and food tips, budget calculators, visa info, weather guides, and practical travel advice.";');
L();
L('const cityList = ["Beijing","Shanghai","Xi\'an","Chengdu","Zhangjiajie","Guilin & Yangshuo","Yunnan","Guangzhou"];');
L('const cityMap = Object.fromEntries(destinations.map(d => [d.name,d]));');
L();
L("const foodCityList = foodCities.map(f => f.city);");
L("const scheduleSchema = {");
L("  '@context': 'https://schema.org',");
L('  "@type": "FAQPage",');
L("  mainEntity: faqs.map(f => ({");
L('    "@type": "Question",');
L("    name: f.question,");
L("    acceptedAnswer: {");
L('      "@type": "Answer",');
L("      text: f.answer,");
L("    },");
L("  })),");
L("};");
L();
L('const itinerarySchema = {');
L("  '@context': 'https://schema.org',");
L('  "@type": "ItemList",');
L("  itemListElement: itineraries.map((itin, i) => ({");
L('    "@type": "ListItem",');
L("    position: i + 1,");
L('    name: itin.name,');
L('    description: `${itin.days}-day itinerary: ${itin.route}. ${itin.highlights}`,');
L("  })),");
L("};");
L("---");
L();

// ===== LAYOUT OPENING =====
A(
  '<BaseLayout',
  '  title={pageTitle}',
  '  description={pageDesc}',
  '  ogImage="/images/hero/og-default.webp"',
  '  schema={scheduleSchema}',
  '>',
  '  <main>',
);

// ===== NAV =====
A(
  '    <nav class="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">',
  '      <div class="container flex items-center justify-between h-16">',
  '        <a href="/" class="heading-md text-lg">China Trips</a>',
  '        <div class="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)] max-lg:hidden">',
  '          <a href="#planner" class="hover:text-[var(--color-text)] transition-colors">Planner</a>',
  '          <a href="#itineraries" class="hover:text-[var(--color-text)] transition-colors">Itineraries</a>',
  '          <a href="#destinations" class="hover:text-[var(--color-text)] transition-colors">Destinations</a>',
  '          <a href="#cost" class="hover:text-[var(--color-text)] transition-colors">Cost</a>',
  '          <a href="#visa" class="hover:text-[var(--color-text)] transition-colors">Visa</a>',
  '          <a href="#faq" class="hover:text-[var(--color-text)] transition-colors">FAQ</a>',
  '        </div>',
  '      </div>',
  '    </nav>',
);

// ===== HERO =====
A(
  '    <header class="relative overflow-hidden">',
  '      <img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager" />',
  '      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>',
  '      <div class="container relative pt-24 pb-20 md:pt-28 md:pb-24">',
  '        <div class="max-w-2xl">',
  '          <p class="text-sm font-medium tracking-wider uppercase text-[var(--color-accent-light)] mb-4">Plan Your Journey</p>',
  '          <h1 class="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">Your China Trip Starts Here</h1>',
  '          <p class="text-lg md:text-xl max-w-xl mb-8 text-white/80" style="font-family:\'Geist Sans\',sans-serif;line-height:1.65">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical travel advice — everything in one page.</p>',
  '          <div class="flex flex-wrap gap-4">',
  '            <a href="#planner" class="btn-primary">Plan My Trip</a>',
  '            <a href="#itineraries" class="btn-secondary !border-white/30 !text-white hover:!border-white">Explore Itineraries</a>',
  '          </div>',
  '        </div>',
  '      </div>',
  '    </header>',
);

// ===== TRIP PLANNER =====
A(
  '    <section id="planner" class="section">',
  '      <div class="container">',
  '        <div class="max-w-3xl mx-auto text-center mb-10">',
  '          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Plan Your China Trip</h2>',
  '          <p class="body-text text-lg">Tell us what you\'re looking for. We\'ll suggest the best route, cities, and estimated budget.</p>',
  '        </div>',
  '        <div class="card max-w-2xl mx-auto p-8">',
  '          <form id="trip-planner" class="space-y-6">',
  '            <div>',
  '              <label class="block text-sm font-semibold text-[var(--color-text)] mb-2">How long is your trip?</label>',
  '              <select id="planner-days" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent">',
  '                <option value="">Select duration</option>',
  '                <option value="7">7 days</option><option value="10">10 days</option><option value="14">14 days</option><option value="21">21 days</option>',
  '              </select>',
  '            </div>',
  '            <div>',
  '              <label class="block text-sm font-semibold text-[var(--color-text)] mb-2">What interests you?</label>',
  '              <div class="flex flex-wrap gap-2">',
  `                ${["History","Food","Nature","Cities","Culture","Adventure"].map(i => `<label class="cursor-pointer"><input type="checkbox" value="${i}" class="peer hidden" data-interest /><span class="inline-block px-4 py-2 rounded-full border border-[var(--color-border)] text-sm peer-checked:bg-[var(--color-accent)] peer-checked:text-white peer-checked:border-[var(--color-accent)] transition-colors">${i}</span></label>`).join("")}`,
  '              </div>',
  '            </div>',
  '            <div>',
  '              <label class="block text-sm font-semibold text-[var(--color-text)] mb-2">Who are you traveling with?</label>',
  '              <select id="planner-who" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent">',
  '                <option value="">Select travel style</option>',
  '                <option value="solo">Solo</option><option value="couple">Couple</option><option value="family">Family</option><option value="friends">Friends</option>',
  '              </select>',
  '            </div>',
  '            <button type="button" id="planner-submit" class="btn-primary w-full">Get My Recommendation</button>',
  '          </form>',
  '          <div id="planner-result" class="mt-8 hidden">',
  '            <div class="border-t border-[var(--color-border-light)] pt-6">',
  '              <h3 class="heading-md text-xl text-[var(--color-text)] mb-3">Your Recommended Trip</h3>',
  '              <div id="planner-output"></div>',
  '              <div id="planner-cost" class="mt-4 pt-4 border-t border-[var(--color-border-light)]"></div>',
  '            </div>',
  '          </div>',
  '        </div>',
  '      </div>',
  '    </section>',
);

// ===== ITINERARIES (with accordion) =====
A(
  '    <section id="itineraries" class="section-alt">',
  '      <div class="container">',
  '        <div class="max-w-3xl mb-10">',
  '          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Best China Trip Itineraries</h2>',
  '          <p class="body-text text-lg">Proven routes for every trip length. Click to see the full day-by-day plan with transport, food, and accommodation tips.</p>',
  '        </div>',
  '        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">',
);

L(itineraries.map((itin, idx) => {
  const dp = itin.dayPlan || [];
  const n = itin.name;
  const num = idx;
  return [
    `          <div class="card p-6">`,
    `            <div class="flex items-center gap-3 mb-3">`,
    `              <span class="tag">${itin.days} Days</span>`,
    `              <h3 class="heading-md text-xl text-[var(--color-text)]">${n}</h3>`,
    `            </div>`,
    `            <p class="body-text text-sm mb-1 text-[var(--color-accent)] font-medium">${itin.route}</p>`,
    `            <p class="body-text text-sm mb-4">${itin.highlights}</p>`,
    dp.length > 0 ? [
    `            <details class="day-plan-details group">`,
    `              <summary class="text-sm font-semibold text-[var(--color-accent)] cursor-pointer hover:text-[var(--color-accent-hover)] transition-colors list-none flex items-center gap-1">`,
    `                <span>View Day-by-Day Plan (${dp.length} days)</span>`,
    `                <span class="transition-transform group-open:rotate-180 text-xs">▾</span>`,
    `              </summary>`,
    `              <div class="mt-4 space-y-4 border-t border-[var(--color-border-light)] pt-4">`,
    ...dp.map(d => [
    `                <div class="pl-3 border-l-2 border-[var(--color-accent-light)]">`,
    `                  <div class="flex items-baseline gap-2 mb-1">`,
    `                    <span class="text-xs font-semibold text-[var(--color-accent)] uppercase">Day ${d.day}</span>`,
    `                    <span class="text-sm font-semibold text-[var(--color-text)]">${d.title}</span>`,
    `                    <span class="text-xs text-[var(--color-text-muted)]">${d.city}</span>`,
    `                  </div>`,
    ...d.activities.map(a => `                  <p class="text-sm text-[var(--color-text-secondary)] mb-1"><span class="font-medium text-[var(--color-text)]">${a.label}:</span> ${a.detail}</p>`),
    `                  <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-[var(--color-text-muted)]">`,
    `                    <span>🏨 ${d.stay}</span>`,
    `                    <span>🚄 ${d.transport}</span>`,
    `                    <span>🍜 ${d.food}</span>`,
    `                  </div>`,
    `                </div>`,
    ].join("\n")),
    `              </div>`,
    `            </details>`,
    ].join("\n") : `            <p class="text-xs text-[var(--color-text-muted)] italic">Detailed day plan coming soon</p>`,
    `          </div>`,
  ].join("\n");
}).join("\n"));

A(
  '        </div>',
  '      </div>',
  '    </section>',
);

L("<!-- DESTINATIONS, TRIP TYPES, ROUTES, COST, VISA, WEATHER, CHECKLIST, TRANSPORT, MONEY, LANGUAGE, FOOD, FAQ -- generated next -->");

const code = out.join("\n");
writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", code, "utf8");
console.log(`Phase 1 written: ${code.length} chars, ${out.length} lines`);
