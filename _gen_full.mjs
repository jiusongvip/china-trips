import { writeFileSync } from "fs";

const out = [];
const L = (s) => out.push(s);
const J = (...items) => out.push(items.join(""));

// === FRONT MATTER ===
L("---");
L('import BaseLayout from "../layouts/BaseLayout.astro";');
L("import { destinations, itineraries, faqs, tripTypes, routes, visa144hCities, visaPolicyHighlights, monthlyWeather, essentialPhrases, transportModes, foodCities, alipaySetup, wechatPaySetup } from \"../data/content\";");
L('import { citiesDeep } from "../data/deep-content";');
L("");
L('const pageTitle = "China Trips \u2014 Plan Your Perfect Trip to China | Itineraries, Tips & Tools";');
L('const pageDesc = "Plan your trip to China with detailed day-by-day itineraries, destination guides, budget calculators, visa info, weather guides, and practical advice.";');
L("const scheduleSchema = {");
L('  "@context": "https://schema.org", "@type": "FAQPage",');
L("  mainEntity: faqs.map((f) => ({");
L('    "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer },')');
L("  })),");
L("};");
L("---");
L("");

// === LAYOUT & NAV ===
L("<BaseLayout title={pageTitle} description={pageDesc} ogImage=\"/images/hero/og-default.webp\" schema={scheduleSchema}>");
L("<main>");
L("<script type=\"application/ld+json\" set:html={JSON.stringify({\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",itemListElement:itineraries.map((itin,i)=>({\"@type\":\"ListItem\",position:i+1,name:itin.name,description:itin.days+\"-day itinerary: \"+itin.route+\". \"+itin.highlights}))})}></script>");
L("<nav class=\"sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]\">");
L('<div class="container flex items-center justify-between h-16">');
L('<a href="/" class="heading-md text-lg">China Trips</a>');
L('<div class="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)] max-lg:hidden">');
L('<a href="#planner" class="hover:text-[var(--color-text)] transition-colors">Planner</a>');
L('<a href="#itineraries" class="hover:text-[var(--color-text)] transition-colors">Itineraries</a>');
L('<a href="#destinations" class="hover:text-[var(--color-text)] transition-colors">Destinations</a>');
L('<a href="#cost" class="hover:text-[var(--color-text)] transition-colors">Cost</a>');
L('<a href="#visa" class="hover:text-[var(--color-text)] transition-colors">Visa</a>');
L('<a href="#faq" class="hover:text-[var(--color-text)] transition-colors">FAQ</a>');
L("</div></div></nav>");

// === HERO ===
L("<header class=\"relative overflow-hidden\">");
L('<img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager"/>');
L('<div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30"></div>');
L('<div class="container relative pt-24 pb-20 md:pt-28 md:pb-24"><div class="max-w-2xl">');
L('<p class="text-sm font-medium tracking-wider uppercase text-[var(--color-accent-light)] mb-4">Plan Your Journey</p>');
L('<h1 class="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">Your China Trip Starts Here</h1>');
L('<p class="text-lg md:text-xl max-w-xl mb-8 text-white/80" style="font-family:\'Geist Sans\',sans-serif;line-height:1.65">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical travel advice \u2014 everything in one page.</p>');
L('<div class="flex flex-wrap gap-4"><a href="#planner" class="btn-primary">Plan My Trip</a><a href="#itineraries" class="btn-secondary !border-white/30 !text-white hover:!border-white">Explore Itineraries</a></div>');
L("</div></div></header>");

// === STATS BAR ===
L("<section class=\"border-b border-[var(--color-border)] bg-[var(--color-accent-light)]\">");
L('<div class="container py-4"><div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text)]">');
L('<span class="font-semibold">8 Cities</span><span class="text-[var(--color-text-muted)]">&middot;</span>');
L('<span class="font-semibold">4 Complete Itineraries</span><span class="text-[var(--color-text-muted)]">&middot;</span>');
L('<span class="font-semibold">12-Month Weather Guide</span><span class="text-[var(--color-text-muted)]">&middot;</span>');
L('<span class="font-semibold">Visa Info for 54 Countries</span>');
L("</div></div></section>");

// === WHY TRUST ===
L("<section class=\"section-alt border-b border-[var(--color-border)]\"><div class=\"container max-w-3xl text-center py-4\">");
L('<p class="body-text text-sm"><strong class="text-[var(--color-text)]">Independent travel guide</strong> &mdash; not a tour agency. All itineraries, prices, and tips are researched and kept current. No affiliate pressure, no &ldquo;contact us for a quote.&rdquo;</p>');
L("</div></section>");

console.log("Part 1 written. Continuing...");

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", out.join("\n"), "utf8");
console.log("Part 1: " + out.length + " lines, " + out.join("\n").length + " chars");
