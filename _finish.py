# Append missing sections to the rebuilt file
with open(r"D:\workspaces\website\china-trips\src\pages\index.astro", "r", encoding="utf-8", newline="") as f:
    content = f.read()

# Find where hero ends and insert the missing sections
hero_end = content.find('</header>')
hero_end = content.find('\n', hero_end) + 1

prefix = content[:hero_end]
rest = content[hero_end:]

# Sections to insert after hero
stat_banner_planner = r"""

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
        <p class="body-text text-sm">Independent travel guide \u2014 not a tour agency. All itineraries, prices, and tips are researched and kept current. No affiliate pressure.</p>
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

    <section id="itineraries" class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Travel Ideas</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Best China Trip Itineraries</h2>
          <p class="body-text text-lg">Proven routes for every trip length. Each includes day-by-day plans with transport, food, and accommodation. Click to expand.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children reveal">
          {itineraries.map((itin,i) => (
            <div class={"card p-6" + (i === 0 ? " md:col-span-2" : "")}>
              <div class="flex items-center gap-3 mb-3">
                <span class="tag">{itin.days} Days</span>
                <h3 class="heading-md text-xl text-[var(--color-text)]">{itin.name}</h3>
              </div>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="tag bg-green-50/70 text-green-700 border-green-200">{itin.bestFor}</span>
                <span class="tag">{itin.estimatedCost}</span>
              </div>
              <p class="body-text text-sm mb-1 text-[var(--color-accent)] font-medium">{itin.route}</p>
              <p class="body-text text-sm mb-4">{itin.highlights}</p>
              {itin.dayPlan && itin.dayPlan.length > 0 && (
                <details class="day-plan-details group cursor-pointer">
                  <summary class="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors list-none flex items-center gap-1">
                    <span>View Day-by-Day Plan ({itin.dayPlan.length} days)</span>
                    <span class="summary-arrow text-xs">[+]</span>
                  </summary>
                  <div class="mt-4 space-y-4 border-t border-[var(--color-border-light)] pt-4">
                    {itin.dayPlan.map(d => (
                      <div class="pl-3 border-l-2 border-[var(--color-accent-light)]">
                        <div class="flex items-baseline gap-2 mb-1 flex-wrap">
                          <span class="text-xs font-semibold text-[var(--color-accent)] uppercase">Day {d.day}</span>
                          <span class="text-sm font-semibold text-[var(--color-text)]">{d.title}</span>
                          <span class="text-xs text-[var(--color-text-muted)]">{d.city}</span>
                        </div>
                        {d.activities && d.activities.map(a => (
                          <p class="text-sm text-[var(--color-text-secondary)] mb-1"><span class="font-medium text-[var(--color-text)]">{a.label}:</span> {a.detail}</p>
                        ))}
                        <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-[var(--color-text-muted)]">
                          <span>Stay: {d.stay}</span><span>Go: {d.transport}</span><span>Eat: {d.food}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

"""

final = prefix + stat_banner_planner + rest
with open(r"D:\workspaces\website\china-trips\src\pages\index.astro", "w", encoding="utf-8", newline="") as f:
    f.write(final)

lines = final.split("\n")
print(f"Final file: {len(lines)} lines, {len(final)} chars")

# Quick verify
count_dest = final.count('id="dest-tabs"')
print(f"dest-tabs occurrences: {count_dest}")
print(f"Has itineraries: {'itineraries.map' in final}")
print(f"Has cost: {'cost-submit' in final}")
print(f"Has visa: {'visaPolicyHighlights' in final}")
print(f"Has scripts: {'<script>' in final}")
