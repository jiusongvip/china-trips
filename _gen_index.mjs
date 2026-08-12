import { writeFileSync } from "fs";

const L = (s = "") => lines.push(s);
const lines = [];

// == Astro front matter ==
L("---");
L('import BaseLayout from "../layouts/BaseLayout.astro";');
L("import {");
L("  destinations, itineraries, faqs, tripTypes, routes,");
L("  visa144hCities, visaPolicyHighlights, monthlyWeather,");
L("  essentialPhrases, transportModes, foodCities,");
L("  alipaySetup, wechatPaySetup");
L('} from "../data/content";');
L('import { citiesDeep } from "../data/deep-content";');
L("");
L('const pageTitle = "China Trips — Plan Your Perfect Trip to China | Itineraries, Tips & Tools";');
L('const pageDesc = "Plan your trip to China with detailed day-by-day itineraries, destination guides with accommodation and food tips, budget calculators, visa info, weather guides, and practical advice.";');
L("");
L("const scheduleSchema = {");
L('  "@context": "https://schema.org",');
L('  "@type": "FAQPage",');
L("  mainEntity: faqs.map((f) => ({");
L('    "@type": "Question",');
L("    name: f.question,");
L("    acceptedAnswer: {");
L('      "@type": "Answer",');
L("      text: f.answer,");
L("    },");
L("  })),");
L("};");
L("---");
L("");

console.log("Phase 1: front matter done, writing rest...");

const code = lines.join("\n");
writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", code, "utf8");
console.log("Phase 1 written:", code.length, "chars");
