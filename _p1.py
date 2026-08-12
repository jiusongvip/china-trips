import sys
sys.stdout.reconfigure(encoding="utf-8")

orig = open(r"D:\workspaces\website\china-trips\src\pages\index.astro", "r", encoding="utf-8").read()
fm_end = orig.index("---", 3) + 3
front = orig[:fm_end]
script_start = orig.index("<script>")
scripts = orig[script_start:]
style_start = orig.index("<style>")
styles = orig[style_start:]

L = []
def w(s=""): L.append(s)

w(front.rstrip())
w()
w("<BaseLayout")
w('  title={pageTitle}')
w('  description={pageDesc}')
w('  ogImage="/images/hero/og-default.webp"')
w('  schema={scheduleSchema}')
w(">")
w("  <main>")

# === NAV ===
w('    <nav class="sticky top-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">')
w('      <div class="container flex items-center justify-between h-16">')
w('        <a href="/" class="heading-md text-lg">China Trips</a>')
w('        <div class="flex items-center gap-5 text-sm font-medium text-[var(--color-text-secondary)] max-lg:hidden">')
for l in [("Planner","planner"),("Itineraries","itineraries"),("Destinations","destinations"),("Cost","cost"),("Visa","visa"),("FAQ","faq")]:
    w(f'          <a href="#{l[1]}" class="hover:text-[var(--color-text)] transition-colors">{l[0]}</a>')
w("        </div>")
w("      </div>")
w("    </nav>")
w()

# === HERO + STAT + BANNER + PLANNER ===
short_sections = r"""    <header class="relative min-h-[85dvh] flex items-center overflow-hidden">
      <img src="/images/hero/hero.webp" alt="Great Wall of China panoramic view at golden hour" class="absolute inset-0 w-full h-full object-cover" width="1600" height="900" loading="eager" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>
      <div class="container relative py-24 md:py-32">
        <div class="max-w-xl">
          <div class="section-eyebrow text-white/80">Plan Your Journey</div>
          <h1 class="heading-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6">Your China Trip<br/>Starts Here</h1>
          <p class="text-lg md:text-xl max-w-lg mb-10 text-white/75 leading-relaxed">Plan your perfect trip to China with detailed day-by-day itineraries, destination guides with local food and hotel tips, budget tools, visa info, and practical advice - everything in one page.</p>
          <div class="flex flex-wrap gap-4">
            <a href="#planner" class="btn-primary text-base px-8 py-3.5">Plan My Trip</a>
            <a href="#itineraries" class="btn-secondary !border-white/30 !text-white hover:!border-white text-base px-8 py-3.5">Explore Itineraries</a>
          </div>
        </div>
      </div>
      <div class="scroll-hint"></div>
    </header>

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
        <p class="body-text text-sm">Independent travel guide - not a tour agency. All itineraries, prices, and tips are researched and kept current. No affiliate pressure.</p>
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
    </section>"""
L.append(short_sections)
w()

# === ITINERARIES ===
itin_html = r"""    <section id="itineraries" class="section">
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
    </section>"""
L.append(itin_html)
w()

# === TRIP TYPES ===
trips_html = r"""    <section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Travel Styles</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Find Your China Trip</h2>
          <p class="body-text text-lg">Whether you are traveling solo, with family, on a budget, or looking for luxury, there is a perfect China trip for you.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children reveal">
          {tripTypes.map(t => (
            <a href={"#" + t.slug} class="card p-6 no-underline group">
              <h3 class="heading-md text-lg text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{t.name}</h3>
              <p class="body-text text-sm mb-3">{t.description}</p>
              <div class="flex items-center gap-1 text-xs text-[var(--color-accent)] font-medium">
                <span>{t.idealDays}</span><span class="text-[var(--color-text-muted)]">&middot;</span>
                <span>{t.topDestinations.slice(0,2).join(", ")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>"""
L.append(trips_html)
w()

# === ROUTES (bento grid) ===
routes_html = r"""    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Routes</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Popular Multi-City Routes</h2>
          <p class="body-text text-lg">Each route gives you a different flavor of China.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children reveal">
          {routes.map((r,i) => {
            const spans = i === 0 ? "lg:col-span-3 lg:row-span-1" : i === 1 ? "lg:col-span-2" : "";
            return (
              <div class={`card-bento p-6 ${spans}`}>
                <h3 class="heading-md text-lg text-[var(--color-text)] mb-2">{r.name}</h3>
                <p class="body-text text-sm mb-3">{r.description}</p>
                <p class="text-sm font-mono text-[var(--color-accent)]">{r.cities}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>"""
L.append(routes_html)
w()

# === DESTINATIONS (keep original structure, enhanced tabs) ===
dest_html = r"""    <section id="destinations" class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Explore</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Where Should You Go?</h2>
          <p class="body-text text-lg">Explore each destination in depth: day plans, where to stay, what to eat, and how to get there.</p>
        </div>
        <div class="dest-tabs" id="dest-tabs">
          <div class="dest-tab-nav mb-8 overflow-x-auto">
            {destinations.map((d,idx) => (<button data-tab={idx} class="dest-tab-btn">{d.name}</button>))}
          </div>
          {destinations.map((d,idx) => (
            <div data-tab={idx} class="dest-tab-panel hidden">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="heading-md text-2xl text-[var(--color-text)] mb-2">{d.name} <span class="text-lg text-[var(--color-text-muted)]">{d.nameCN}</span></h3>
                  <p class="body-text text-sm mb-4">{d.intro}</p>
                  <div class="flex flex-wrap gap-2 mb-4"><span class="tag">{d.bestFor}</span><span class="tag">{d.dayCount}</span><span class="tag">{d.bestTime}</span></div>
                  {d.dayPlans && d.dayPlans.map(dp => (
                    <details class="mb-4 card p-4 cursor-pointer">
                      <summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between">
                        <span>{dp.days} Suggested Plan</span><span class="summary-arrow text-xs">[+]</span>
                      </summary>
                      <div class="mt-3 space-y-3 pt-3 border-t border-[var(--color-border-light)]">
                        {dp.plan && dp.plan.map(p => (
                          <div class="pl-3 border-l-2 border-[var(--color-accent-light)]">
                            <div class="text-xs font-semibold text-[var(--color-accent)] mb-1">{p.label}</div>
                            <div class="text-sm font-medium text-[var(--color-text)] mb-0.5">{p.activity}</div>
                            <div class="text-sm text-[var(--color-text-secondary)]">{p.detail}</div>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                  {d.transit && (<div class="card p-4 mb-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-2">Getting There &amp; Around</h4><p class="body-text text-sm">{d.transit}</p></div>)}
                </div>
                <div>
                  {d.accommodation && d.accommodation.length>0 && (
                    <div class="card p-4 mb-4">
                      <h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Where to Stay</h4>
                      <div class="space-y-3">
                        {d.accommodation.map(a => (<div><div class="flex items-baseline gap-2"><span class="tag">{a.tier}</span><span class="text-sm font-semibold text-[var(--color-text)]">{a.name}</span></div><p class="text-xs text-[var(--color-text-muted)] mt-1">{a.area} &middot; {a.price}</p></div>))}
                      </div>
                    </div>
                  )}
                  {d.mustEat && d.mustEat.length>0 && (
                    <div class="card p-4 mb-4">
                      <h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Must-Try Food</h4>
                      <div class="space-y-3">
                        {d.mustEat.map(m => (<div><div class="text-sm font-semibold text-[var(--color-text)]">{m.dish}</div><div class="text-xs text-[var(--color-accent)]">{m.restaurant} ({m.restaurantCN})</div><div class="text-xs text-[var(--color-text-muted)] mt-0.5">{m.note}</div></div>))}
                      </div>
                    </div>
                  )}
                  {d.dayTrips && d.dayTrips.length>0 && (
                    <div class="card p-4">
                      <h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Nearby Day Trips</h4>
                      <div class="space-y-2">
                        {d.dayTrips.map(dt => (<div class="flex items-start gap-3"><span class="text-xs font-semibold text-[var(--color-text-muted)] w-16 flex-shrink-0">{dt.distance}</span><div><div class="text-sm font-medium text-[var(--color-text)]">{dt.name}</div><div class="text-xs text-[var(--color-text-secondary)]">{dt.highlight}</div></div></div>))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>"""
L.append(dest_html)
w()

print(f"Part 1: {len(L)} lines built")
print("Writing partial file...")

# Now write to a temp file first, then we'll continue with part 2
with open(r"D:\workspaces\website\china-trips\_build_p1.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(L))
print("Part 1 saved to _build_p1.txt")
