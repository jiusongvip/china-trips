// THIS IS A NODE SCRIPT TO GENERATE index.astro
// Run with: node _gen3.mjs
import { writeFileSync } from "fs";

const L = (...lines) => code.push(...lines);
const code = [];

// ============================================================
// ASTRO FRONT MATTER
// ============================================================
L("---",
'import BaseLayout from "../layouts/BaseLayout.astro";',
'import { destinations, itineraries, faqs, tripTypes, routes, visa144hCities, visaPolicyHighlights, monthlyWeather, essentialPhrases, transportModes, foodCities, alipaySetup, wechatPaySetup } from "../data/content";',
"",
'const pageTitle = "China Trips — Plan Your Perfect Trip to China | Itineraries, Tips & Tools";',
'const pageDesc = "Plan your trip to China with detailed day-by-day itineraries, destination guides with food and accommodation tips, budget calculators, visa info, weather guides, and practical travel advice. Everything you need in one page.";',
"",
'const scheduleSchema = {',
'  "@context": "https://schema.org",',
'  "@type": "FAQPage",',
"  mainEntity: faqs.map(f => ({",
'    "@type": "Question",',
"    name: f.question,",
"    acceptedAnswer: {",
'      "@type": "Answer",',
"      text: f.answer,",
"    },",
"  })),",
"};",
"",
'const itinerarySchema = {',
'  "@context": "https://schema.org",',
'  "@type": "ItemList",',
"  itemListElement: itineraries.map((itin, i) => ({",
'    "@type": "ListItem",',
"    position: i + 1,",
'    name: itin.name,',
'    description: `${itin.days}-day itinerary: ${itin.route}. ${itin.highlights}`,',
"  })),",
"};",
"---",
"");

writeFileSync("D:/workspaces/website/china-trips/_gen3.mjs", code.join("\n"), "utf8");
console.log("_gen3.mjs written: " + code.length + " lines");
