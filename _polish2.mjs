import { readFileSync, writeFileSync } from "fs";

// ============ Part 1: Update content.ts itineraries ============
let ct = readFileSync("D:/workspaces/website/china-trips/src/data/content.ts", "utf8");

// Add bestFor and estimatedCost to each itinerary
const itineraryMeta = [
  { name: "7-Day Beijing Classic", key: "7-Day", bestFor: "Quick First Taste", cost: "$700–1,200" },
  { name: "10-Day Golden Triangle", key: "10-Day", bestFor: "First-Time Visitors", cost: "$1,200–2,000" },
  { name: "14-Day Classic and Pandas", key: "14-Day", bestFor: "Best for Families", cost: "$1,800–2,800" },
  { name: "21-Day Grand China", key: "21-Day", bestFor: "Bucket-List Trip", cost: "$2,500–4,200" },
];

// For each itinerary, insert bestFor and estimatedCost after the highlights line
for (const meta of itineraryMeta) {
  // Pattern: the highlights line for this itinerary
  const highlights = ct.indexOf(`highlights: "${meta.key}"`);
  if (highlights < 0) continue;
  
  // Find end of this highlights field (next line after it)
  const afterHighlights = ct.indexOf("\n", highlights);
  const nextLine = ct.indexOf("\n", afterHighlights + 1);
  
  // The highlights value spans one line. Insert bestFor and cost after it.
  const snippet = ct.slice(highlights, nextLine);
  if (!snippet.includes("bestFor:")) {
    ct = ct.slice(0, nextLine) + `,\n    bestFor: "${meta.bestFor}",\n    estimatedCost: "${meta.cost}"` + ct.slice(nextLine);
  }
}

// Update Itinerary interface to include new fields
ct = ct.replace(
  "  highlights: string;\n  dayPlan:",
  "  highlights: string;\n  bestFor: string;\n  estimatedCost: string;\n  dayPlan:"
);

writeFileSync("D:/workspaces/website/china-trips/src/data/content.ts", ct, "utf8");
console.log("content.ts updated. Chars:", ct.length);

// ============ Part 2: Update index.astro ============
let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// --- 2a. Stats bar + Why Trust after hero ---
const heroEnd = "    </header>";
const statsBar = `
    <!-- STATS BAR -->
    <section class="border-b border-[var(--color-border)] bg-[var(--color-accent-light)]">
      <div class="container py-4">
        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--color-text)]">
          <span class="font-semibold">8 Cities</span>
          <span class="text-[var(--color-text-muted)]">&middot;</span>
          <span class="font-semibold">4 Complete Itineraries</span>
          <span class="text-[var(--color-text-muted)]">&middot;</span>
          <span class="font-semibold">12-Month Weather Guide</span>
          <span class="text-[var(--color-text-muted)]">&middot;</span>
          <span class="font-semibold">Visa Info for 54 Countries</span>
        </div>
      </div>
    </section>

    <!-- WHY TRUST -->
    <section class="section-alt border-b border-[var(--color-border)]">
      <div class="container max-w-3xl text-center py-4">
        <p class="body-text text-sm">
          <strong class="text-[var(--color-text)]">Independent travel guide</strong> &mdash; not a tour agency.
          All itineraries, prices, and tips are researched and kept current. No affiliate pressure, no &ldquo;contact us for a quote.&rdquo;
        </p>
      </div>
    </section>
`;
ix = ix.replace(heroEnd + "\n\n    <!-- PLANNER -->", heroEnd + "\n" + statsBar + "\n    <!-- PLANNER -->");

// --- 2b. At a Glance comparison before itineraries ---
const itinSection = '    <!-- ITINERARIES with accordion day plans -->';
const atAGlance = `
    <!-- AT A GLANCE -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-6">
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-3">At a Glance</h2>
          <p class="body-text text-lg">Four proven routes. Find the one that fits your time, budget, and travel style.</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {itineraries.map(itin => (
            <a href="#itineraries" class="card p-4 no-underline group text-center">
              <div class="text-2xl font-bold text-[var(--color-accent)] mb-1">{itin.days}</div>
              <div class="text-xs text-[var(--color-text-muted)] mb-2">days</div>
              <div class="text-xs font-semibold text-[var(--color-text)] mb-1">{itin.bestFor}</div>
              <div class="text-xs text-[var(--color-text-muted)]">{itin.estimatedCost}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
`;
ix = ix.replace(itinSection, atAGlance + "\n" + itinSection);

// --- 2c. Update itinerary cards: add bestFor badge + cost ---
const cardTag = '                <span class="tag">{itin.days} Days</span>';
const enhancedCardTag = cardTag +
  '\n                <span class="tag bg-green-50/70 text-green-700 border-green-200">{itin.bestFor}</span>' +
  '\n                <span class="tag">{itin.estimatedCost}</span>';
ix = ix.replace(cardTag, enhancedCardTag);

// --- 2d. Rearrange section ordering ---
// Move Travel Types before At a Glance, or adjust as needed
// (keeping existing order for now)

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("index.astro updated. Lines:", ix.split("\n").length);
