import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// Match the multi-line import from content
const importFromContent = `import {
  destinations, itineraries, faqs, tripTypes, routes,
  visa144hCities, visaPolicyHighlights, monthlyWeather,
  essentialPhrases, transportModes, foodCities,
  alipaySetup, wechatPaySetup
} from "../data/content";`;

const newImports = importFromContent + '\nimport { citiesDeep } from "../data/deep-content";';
ix = ix.replace(importFromContent, newImports);

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");

// Verify
const hasImport = ix.includes('citiesDeep');
const hasDeepContent = ix.includes('Top Attractions');
console.log("citiesDeep import:", hasImport);
console.log("Deep content UI:", hasDeepContent);
console.log("Lines:", ix.split("\n").length);
