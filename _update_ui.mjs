import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// 1. Add import for citiesDeep
const importLine = 'import { destinations, itineraries, faqs, tripTypes, routes, visa144hCities, visaPolicyHighlights, monthlyWeather, essentialPhrases, transportModes, foodCities, alipaySetup, wechatPaySetup } from "../data/content";';
const newImport = importLine + '\nimport { citiesDeep } from "../data/deep-content";';
ix = ix.replace(importLine, newImport);

// 2. Add deep content sections after the day trips card in destination tab panels
// Pattern: "                  {d.dayTrips && d.dayTrips.length > 0 && (\n                    <div class=\"card p-4\">\n                      <h4 ...>\n                      ...\n                    </div>\n                  )}\n                </div>\n              </div>\n            </div>"
// We need to find the closing of the right column (after day trips) and insert deep content before it

const deepContentBlock = `
                  {/* ===== DEEP CONTENT ===== */}
                  {(() => {
                    const dd = citiesDeep[d.name];
                    if (!dd) return null;
                    return (<>
                      {/* Top Attractions */}
                      <details class="card p-4 mb-4 cursor-pointer">
                        <summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between">
                          <span>Top Attractions &amp; Detailed Guide</span>
                          <span class="summary-arrow text-xs">[+]</span>
                        </summary>
                        <div class="mt-3 space-y-4 pt-3 border-t border-[var(--color-border-light)]">
                          <p class="body-text text-sm mb-3">{dd.overviewLong}</p>
                          {dd.attractions.map(attr => (
                            <div class="pl-3 border-l-2 border-[var(--color-accent-light)]">
                              <div class="flex items-baseline gap-2 mb-1">
                                <span class="text-sm font-semibold text-[var(--color-text)]">{attr.name}</span>
                                <span class="text-xs text-[var(--color-text-muted)]">{attr.nameCN}</span>
                                {attr.mustSee && <span class="tag bg-red-50 text-red-600 text-[10px]">Must See</span>}
                              </div>
                              <p class="text-sm text-[var(--color-text-secondary)] mb-2">{attr.description}</p>
                              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--color-text-muted)]">
                                <div><span class="font-medium text-[var(--color-text)]">Price:</span> {attr.price}</div>
                                <div><span class="font-medium text-[var(--color-text)]">Hours:</span> {attr.hours}</div>
                              </div>
                              <div class="mt-2 text-xs text-[var(--color-text-muted)]">
                                <span class="font-medium text-[var(--color-text)]">Tips:</span> {attr.tips}
                              </div>
                            </div>
                          ))}
                        </div>
                      </details>

                      {/* Photo Spots */}
                      {dd.photoSpots && dd.photoSpots.length > 0 && (
                        <div class="card p-4 mb-4">
                          <h4 class="text-sm font-semibold text-[var(--color-text)] mb-2">Best Photo Spots</h4>
                          <ul class="space-y-2">
                            {dd.photoSpots.map((spot, i) => (
                              <li class="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                                <span class="text-[var(--color-accent)] font-semibold flex-shrink-0">{i + 1}.</span>
                                <span>{spot}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* City Budget */}
                      <div class="card p-4 mb-4">
                        <h4 class="text-sm font-semibold text-[var(--color-text)] mb-2">Daily Budget in {d.name}</h4>
                        <div class="grid grid-cols-3 gap-2 text-center text-xs">
                          <div class="bg-green-50/50 rounded-lg p-2"><div class="font-semibold text-[var(--color-text)]">Budget</div><div class="text-[var(--color-accent)]">{dd.cityBudget.budget}</div></div>
                          <div class="bg-yellow-50/50 rounded-lg p-2"><div class="font-semibold text-[var(--color-text)]">Mid-range</div><div class="text-[var(--color-accent)]">{dd.cityBudget.midRange}</div></div>
                          <div class="bg-red-50/50 rounded-lg p-2"><div class="font-semibold text-[var(--color-text)]">Luxury</div><div class="text-[var(--color-accent)]">{dd.cityBudget.luxury}</div></div>
                        </div>
                      </div>

                      {/* Shopping */}
                      <details class="card p-4 mb-4 cursor-pointer">
                        <summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between">
                          <span>Shopping Guide</span><span class="summary-arrow text-xs">[+]</span>
                        </summary>
                        <p class="text-sm text-[var(--color-text-secondary)] mt-3 pt-3 border-t border-[var(--color-border-light)]">{dd.shoppingGuide}</p>
                      </details>

                      {/* Nightlife */}
                      <details class="card p-4 mb-4 cursor-pointer">
                        <summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between">
                          <span>Nightlife andamp; Evening</span><span class="summary-arrow text-xs">[+]</span>
                        </summary>
                        <p class="text-sm text-[var(--color-text-secondary)] mt-3 pt-3 border-t border-[var(--color-border-light)]">{dd.nightlife}</p>
                      </details>

                      {/* Safety */}
                      <details class="card p-4 mb-4 cursor-pointer">
                        <summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between">
                          <span>Safety andamp; Tips</span><span class="summary-arrow text-xs">[+]</span>
                        </summary>
                        <p class="text-sm text-[var(--color-text-secondary)] mt-3 pt-3 border-t border-[var(--color-border-light)]">{dd.safetyTips}</p>
                      </details>

                      {/* Seasonal Events */}
                      {dd.seasonalEvents && dd.seasonalEvents.length > 0 && (
                        <div class="card p-4 mb-4">
                          <h4 class="text-sm font-semibold text-[var(--color-text)] mb-2">Seasonal Events</h4>
                          <div class="space-y-2">
                            {dd.seasonalEvents.map(ev => (
                              <div class="flex items-start gap-2 text-sm">
                                <span class="tag flex-shrink-0">{ev.month}</span>
                                <div>
                                  <div class="font-semibold text-[var(--color-text)]">{ev.name}</div>
                                  <div class="text-xs text-[var(--color-text-secondary)]">{ev.description}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>);
                  })()}
`;

// Find the day trips card and insert deep content after it
const dayTripsCard = '                  {d.dayTrips && d.dayTrips.length > 0 && (\n                    <div class="card p-4">\n                      <h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Nearby Day Trips</h4>';
// We need to find the closing of the daytrips block and insert AFTER it
// Find pattern: after the day trips card closing, before the column closing
const dayTripsEnd = `                    </div>\n                  )}`;
const insertHere = dayTripsEnd + `\n${deepContentBlock}`;
ix = ix.replace(dayTripsEnd, insertHere);

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("UI updated. Lines:", ix.split("\n").length);
console.log("Import added:", ix.includes('import { citiesDeep }'));
