# Rebuild script: takes _p1.py sections and generates complete index.astro
import sys
sys.stdout.reconfigure(encoding="utf-8")

with open(r"D:\workspaces\website\china-trips\_p1.py", "r", encoding="utf-8") as f:
    p1 = f.read()

# Find each variable definition more carefully
# The r""" strings end with """
import re
vars_found = {}
for name in ["short_sections", "itin_html", "trips_html", "routes_html", "dest_html"]:
    pattern = re.escape(name) + r' = r"""'
    m = re.search(pattern, p1)
    if m:
        start = m.end()
        # Find the closing """ - it's at the start of a line
        rest = p1[start:]
        end_match = re.search(r'\n"""', rest)
        if end_match:
            content = rest[:end_match.start()]
            vars_found[name] = content
            print(f"Found {name}: {len(content)} chars")
        else:
            print(f"WARN: no end for {name}")

print(f"\nVariables found: {list(vars_found.keys())}")

# Extra short_sections (just the non-hero part)
ss = vars_found.get("short_sections", "")
# short_sections contains hero + stat + banner + planner
# We only want stat + banner + planner since hero is already in index.astro

# Find stat section start
stat_start = ss.find('<section class="relative z-10 -mt-10')
if stat_start >= 0:
    post_hero = ss[stat_start:]
    vars_found["post_hero"] = post_hero
    print(f"Extracted post_hero: {len(post_hero)} chars")

# Now build the remaining sections (cost through footer)
# These were in the $remaining string that wasn't saved
# Let me rebuild them from scratch

remaining_sections = r"""

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

    <section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Routes</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Popular Multi-City Routes</h2>
          <p class="body-text text-lg">Each route gives you a different flavor of China.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 stagger-children reveal">
          {routes.map((r,i) => {const spans = i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-2" : ""; return (<div class={`card-bento p-6 ${spans}`}><h3 class="heading-md text-lg text-[var(--color-text)] mb-2">{r.name}</h3><p class="body-text text-sm mb-3">{r.description}</p><p class="text-sm font-mono text-[var(--color-accent)]">{r.cities}</p></div>);})}
        </div>
      </div>
    </section>

    <section id="destinations" class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Explore</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Where Should You Go?</h2>
          <p class="body-text text-lg">Explore each destination in depth: day plans, where to stay, what to eat, and how to get there.</p>
        </div>
        <div class="dest-tabs" id="dest-tabs">
          <div class="dest-tab-nav mb-8 overflow-x-auto">{destinations.map((d,idx)=>(<button data-tab={idx} class="dest-tab-btn">{d.name}</button>))}</div>
          {destinations.map((d,idx)=>(<div data-tab={idx} class="dest-tab-panel hidden"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8"><div><h3 class="heading-md text-2xl text-[var(--color-text)] mb-2">{d.name} <span class="text-lg text-[var(--color-text-muted)]">{d.nameCN}</span></h3><p class="body-text text-sm mb-4">{d.intro}</p><div class="flex flex-wrap gap-2 mb-4"><span class="tag">{d.bestFor}</span><span class="tag">{d.dayCount}</span><span class="tag">{d.bestTime}</span></div>{d.dayPlans && d.dayPlans.map(dp=>(<details class="mb-4 card p-4 cursor-pointer"><summary class="text-sm font-semibold text-[var(--color-accent)] list-none flex items-center justify-between"><span>{dp.days} Suggested Plan</span><span class="summary-arrow text-xs">[+]</span></summary><div class="mt-3 space-y-3 pt-3 border-t border-[var(--color-border-light)]">{dp.plan && dp.plan.map(p=>(<div class="pl-3 border-l-2 border-[var(--color-accent-light)]"><div class="text-xs font-semibold text-[var(--color-accent)] mb-1">{p.label}</div><div class="text-sm font-medium text-[var(--color-text)] mb-0.5">{p.activity}</div><div class="text-sm text-[var(--color-text-secondary)]">{p.detail}</div></div>))}</div></details>))}{d.transit && (<div class="card p-4 mb-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-2">Getting There &amp; Around</h4><p class="body-text text-sm">{d.transit}</p></div>)}</div><div>{d.accommodation && d.accommodation.length>0 && (<div class="card p-4 mb-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Where to Stay</h4><div class="space-y-3">{d.accommodation.map(a=>(<div><div class="flex items-baseline gap-2"><span class="tag">{a.tier}</span><span class="text-sm font-semibold text-[var(--color-text)]">{a.name}</span></div><p class="text-xs text-[var(--color-text-muted)] mt-1">{a.area} &middot; {a.price}</p></div>))}</div></div>)}{d.mustEat && d.mustEat.length>0 && (<div class="card p-4 mb-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Must-Try Food</h4><div class="space-y-3">{d.mustEat.map(m=>(<div><div class="text-sm font-semibold text-[var(--color-text)]">{m.dish}</div><div class="text-xs text-[var(--color-accent)]">{m.restaurant} ({m.restaurantCN})</div><div class="text-xs text-[var(--color-text-muted)] mt-0.5">{m.note}</div></div>))}</div></div>)}{d.dayTrips && d.dayTrips.length>0 && (<div class="card p-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-3">Nearby Day Trips</h4><div class="space-y-2">{d.dayTrips.map(dt=>(<div class="flex items-start gap-3"><span class="text-xs font-semibold text-[var(--color-text-muted)] w-16 flex-shrink-0">{dt.distance}</span><div><div class="text-sm font-medium text-[var(--color-text)]">{dt.name}</div><div class="text-xs text-[var(--color-text-secondary)]">{dt.highlight}</div></div></div>))}</div></div>)}</div></div></div>))}
        </div>
      </div>
    </section>

    <section id="cost" class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Budget</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">How Much Does a Trip to China Cost?</h2>
          <p class="body-text text-lg">Realistic budget estimates based on travel style, with a detailed breakdown.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <table class="data-table"><thead><tr><th>Travel Style</th><th>Per Day (USD)</th></tr></thead>
              <tbody><tr><td class="font-semibold text-[var(--color-text)]">Budget</td><td>$50-100</td></tr><tr><td class="font-semibold text-[var(--color-text)]">Mid-range</td><td>$100-200</td></tr><tr><td class="font-semibold text-[var(--color-text)]">Luxury</td><td>$250+</td></tr></tbody>
            </table>
            <p class="body-text text-xs mt-3">* Includes accommodation, food, transport, and activities. Excludes international flights.</p>
          </div>
          <div class="card p-6">
            <h3 class="heading-md text-xl text-[var(--color-text)] mb-4">Quick Cost Calculator</h3>
            <form id="cost-calc" class="space-y-4">
              <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-1">Travelers</label><input type="number" id="cost-travelers" min="1" max="10" value="2" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"/></div>
              <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-1">Days</label><input type="number" id="cost-days" min="1" max="60" value="14" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"/></div>
              <div><label class="block text-sm font-semibold text-[var(--color-text)] mb-1">Travel Style</label><select id="cost-style" class="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"><option value="budget">Budget ($75/day)</option><option value="mid" selected>Mid-range ($150/day)</option><option value="luxury">Luxury ($300/day)</option></select></div>
              <button type="button" id="cost-submit" class="btn-primary w-full">Calculate</button>
            </form>
            <div id="cost-result" class="mt-6 hidden"><div class="border-t border-[var(--color-border-light)] pt-4"><p class="body-text text-sm">Estimated Total (per person)</p><p id="cost-output" class="heading-lg text-3xl text-[var(--color-accent)]"></p><div id="cost-breakdown" class="mt-4 space-y-2 text-xs"><div class="flex justify-between"><span class="text-[var(--color-text-muted)]">Accommodation</span><span id="cost-hotel" class="font-medium text-[var(--color-text)]"></span></div><div class="flex justify-between"><span class="text-[var(--color-text-muted)]">Food &amp; Drink</span><span id="cost-food" class="font-medium text-[var(--color-text)]"></span></div><div class="flex justify-between"><span class="text-[var(--color-text-muted)]">Transport</span><span id="cost-transport" class="font-medium text-[var(--color-text)]"></span></div><div class="flex justify-between"><span class="text-[var(--color-text-muted)]">Activities</span><span id="cost-activities" class="font-medium text-[var(--color-text)]"></span></div><div class="flex justify-between"><span class="text-[var(--color-text-muted)]">Misc</span><span id="cost-misc" class="font-medium text-[var(--color-text)]"></span></div></div></div></div>
          </div>
        </div>
      </div>
    </section>

    <section id="visa" class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Entry</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Do You Need a Visa for China?</h2>
          <p class="body-text text-lg">China visa rules are changing fast. Here is what you need to know.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 stagger-children reveal">
          {visaPolicyHighlights.map(v=>(<div class="card p-5"><div class="tag mb-2">{v.policy}</div><div class="text-sm font-semibold text-[var(--color-text)] mb-2">{v.country}</div><div class="text-sm text-[var(--color-text-secondary)]">{v.detail}</div></div>))}
        </div>
        <div class="card p-6 max-w-3xl reveal reveal-delay-2">
          <h3 class="heading-md text-lg text-[var(--color-text)] mb-3">144-Hour Transit-Free Cities</h3>
          <div class="flex flex-wrap gap-2">{visa144hCities.map(c=><span class="tag">{c}</span>)}</div>
          <p class="body-text text-xs mt-4">Must arrive and depart via eligible airports with a confirmed onward ticket to a third country. Cannot leave the designated city/region.</p>
        </div>
      </div>
    </section>

    <section id="weather" class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Timing</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">When Is the Best Time to Visit China?</h2>
          <p class="body-text text-lg">Month-by-month weather comparison across four key cities. Spring and autumn are ideal.</p>
        </div>
        <div class="overflow-x-auto mb-6 reveal reveal-delay-1">
          <table class="data-table text-sm"><thead><tr><th>Month</th><th>Beijing</th><th>Shanghai</th><th>Chengdu</th><th>Guilin</th></tr></thead>
          <tbody>{monthlyWeather.map(m=>(<tr><td class="font-semibold text-[var(--color-text)]">{m.month}</td><td>{m.beijing}</td><td>{m.shanghai}</td><td>{m.chengdu}</td><td>{m.guilin}</td></tr>))}</tbody></table>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children reveal">
          <div class="card p-4 bg-green-50/50 border-green-200"><div class="font-semibold text-sm text-green-800 mb-1">Best Months</div><div class="text-sm text-green-700">April-May, September-October</div><div class="text-xs text-green-600/70 mt-1">Mild temps, clear skies</div></div>
          <div class="card p-4 bg-yellow-50/50 border-yellow-200"><div class="font-semibold text-sm text-yellow-800 mb-1">Shoulder Season</div><div class="text-sm text-yellow-700">March, June, November</div><div class="text-xs text-yellow-600/70 mt-1">Some weather extremes, fewer crowds</div></div>
          <div class="card p-4 bg-red-50/50 border-red-200"><div class="font-semibold text-sm text-red-800 mb-1">Avoid If Possible</div><div class="text-sm text-red-700">July-August (hot/wet), CNY (chaotic)</div><div class="text-xs text-red-600/70 mt-1">Peak heat, crowds, transport chaos</div></div>
        </div>
      </div>
    </section>

    <section class="section-gradient">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Checklist</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Before Your Trip to China</h2>
          <p class="body-text text-lg">A practical planning timeline from booking flights to setting up payment apps.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children reveal">
          <div><h3 class="heading-md text-lg text-[var(--color-text)] mb-4">3-6 Months Before</h3><ul class="space-y-3"><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>Choose destinations &amp; plan route</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>Book international flights</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>Research visa requirements</li></ul></div>
          <div><h3 class="heading-md text-lg text-[var(--color-text)] mb-4">1-3 Months Before</h3><ul class="space-y-3"><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>Book hotels &amp; train tickets</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>Apply for visa (if needed)</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>Get travel insurance</li></ul></div>
          <div><h3 class="heading-md text-lg text-[var(--color-text)] mb-4">1-2 Weeks Before</h3><ul class="space-y-3"><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>Set up Alipay / WeChat Pay</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">8</span>Get an eSIM or VPN</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">9</span>Download China travel apps</li></ul></div>
          <div><h3 class="heading-md text-lg text-[var(--color-text)] mb-4">Before Departure</h3><ul class="space-y-3"><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">10</span>Save hotel addresses in Chinese</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">11</span>Prepare passport &amp; backup docs</li><li class="flex items-start gap-3 body-text text-sm"><span class="mt-0.5 w-5 h-5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] flex items-center justify-center text-xs font-bold flex-shrink-0">12</span>Payment backup (cash + card)</li></ul></div>
        </div>
      </div>
    </section>

    <section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Getting Around</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">How to Travel Around China</h2>
          <p class="body-text text-lg">China transport is world-class. Here is what to use and when.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children reveal">
          {transportModes.map(t=>(<div class="card p-6"><h3 class="heading-md text-lg text-[var(--color-text)] mb-2">{t.name}</h3><p class="body-text text-sm mb-1 text-[var(--color-accent)] font-medium">{t.bestFor}</p><p class="body-text text-sm">{t.tips}</p></div>))}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Essentials</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Payment &amp; Internet in China</h2>
          <p class="body-text text-lg">Two things every traveler worries about. Here is exactly how to set up payments and stay connected.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div><h3 class="heading-md text-xl text-[var(--color-text)] mb-4">Setting Up Alipay (Step by Step)</h3><div class="space-y-4">{alipaySetup.map(s=>(<div class="card p-4"><div class="flex items-center gap-3 mb-1"><span class="w-6 h-6 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{s.step}</span><span class="text-sm font-semibold text-[var(--color-text)]">{s.title}</span></div><p class="text-sm text-[var(--color-text-secondary)] ml-9">{s.detail}</p></div>))}</div></div>
          <div><h3 class="heading-md text-xl text-[var(--color-text)] mb-4">Other Essentials</h3><div class="space-y-4"><div class="card p-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-1">eSIM &amp; Internet</h4><p class="text-sm text-[var(--color-text-secondary)]">Get an eSIM before departure (Airalo, Holafly) or buy a local SIM at the airport. Install a reliable VPN before arriving.</p></div><div class="card p-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-1">WeChat Pay</h4><p class="text-sm text-[var(--color-text-secondary)]">Alternative to Alipay, also supports foreign cards. Stricter verification than Alipay. Some smaller vendors only accept WeChat Pay.</p></div><div class="card p-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-1">Credit Cards</h4><p class="text-sm text-[var(--color-text-secondary)]">Accepted at major hotels and upscale restaurants. Mobile payment is essential for daily purchases. Carry cash as backup.</p></div><div class="card p-4"><h4 class="text-sm font-semibold text-[var(--color-text)] mb-1">Essential Apps</h4><p class="text-sm text-[var(--color-text-secondary)]">Trip.com (booking), Didi (rides), Alipay (payments), Pleco (dictionary), Metroman (metro maps).</p></div></div></div>
        </div>
      </div>
    </section>

    <section class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Language</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Essential Chinese for Travelers</h2>
          <p class="body-text text-lg">Fifteen phrases that will make your trip smoother. Save this page for offline access.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children reveal">
          {essentialPhrases.map(p=>(<div class="card p-4"><div class="flex items-baseline justify-between mb-1"><span class="text-sm font-semibold text-[var(--color-text)]">{p.english}</span><span class="text-xs text-[var(--color-text-muted)] font-mono">{p.pinyin}</span></div><div class="text-lg text-[var(--color-accent)] mb-1 flex items-center gap-1"><span>{p.chinese}</span> <button class="speak-btn" data-text={p.chinese} class="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] opacity-40 hover:opacity-100 transition-opacity" title="Listen to pronunciation">&#9654;</button></div><div class="text-xs text-[var(--color-text-secondary)]">{p.context}</div></div>))}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Cuisine</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">What to Eat in China: City by City</h2>
          <p class="body-text text-lg">Each city has its own food identity. Here is what to eat and where to find it.</p>
        </div>
        <div class="food-tabs" id="food-tabs">
          <div class="food-tab-nav mb-6 overflow-x-auto">{foodCities.map((fc,idx)=>(<button data-tab={idx} class="food-tab-btn">{fc.city}</button>))}</div>
          {foodCities.map((fc,idx)=>(<div data-tab={idx} class="food-tab-panel hidden"><div class="max-w-3xl"><h3 class="heading-md text-xl text-[var(--color-text)] mb-1">{fc.city} <span class="text-[var(--color-text-muted)]">{fc.cityCN}</span></h3><p class="body-text text-sm mb-6 text-[var(--color-accent)] font-medium">{fc.signature}</p><div class="grid grid-cols-1 sm:grid-cols-3 gap-4">{fc.dishes.map(dish=>(<div class="card p-4"><div class="text-sm font-semibold text-[var(--color-text)] mb-1">{dish.name}</div><div class="text-xs text-[var(--color-accent)] mb-2">{dish.where} ({dish.whereCN})</div><div class="text-xs text-[var(--color-text-secondary)]">{dish.description}</div></div>))}</div></div></div>))}
        </div>
      </div>
    </section>

    <section id="faq" class="section-alt">
      <div class="container">
        <div class="max-w-3xl mb-10 reveal">
          <span class="section-eyebrow">Answers</span>
          <h2 class="heading-lg text-3xl md:text-4xl text-[var(--color-text)] mb-4">Frequently Asked Questions</h2>
        </div>
        <div class="max-w-3xl space-y-4 stagger-children reveal">
          {faqs.map(faq=>(<details class="card p-5 cursor-pointer group"><summary class="heading-md text-base text-[var(--color-text)] list-none flex items-center justify-between">{faq.question}<span class="text-[var(--color-text-muted)] transition-transform group-open:rotate-45 text-lg">+</span></summary><p class="body-text text-sm mt-3 pt-3 border-t border-[var(--color-border-light)]">{faq.answer}</p></details>))}
        </div>
      </div>
    </section>

    <footer class="border-t border-[var(--color-border)] py-14">
      <div class="container">
        <div class="footer-grid">
          <div>
            <p class="heading-md text-base text-[var(--color-text)] mb-3">China Trips</p>
            <p class="body-text text-xs">Independent travel guide: detailed itineraries, real budgets, practical advice. Not a tour agency.</p>
          </div>
          <div>
            <p class="text-xs font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Navigate</p>
            <div class="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <div><a href="#planner" class="hover:text-[var(--color-accent)] transition-colors">Trip Planner</a></div>
              <div><a href="#itineraries" class="hover:text-[var(--color-accent)] transition-colors">Itineraries</a></div>
              <div><a href="#destinations" class="hover:text-[var(--color-accent)] transition-colors">Destinations</a></div>
              <div><a href="#cost" class="hover:text-[var(--color-accent)] transition-colors">Cost Calculator</a></div>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Resources</p>
            <div class="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <div><a href="#visa" class="hover:text-[var(--color-accent)] transition-colors">Visa Guide</a></div>
              <div><a href="#weather" class="hover:text-[var(--color-accent)] transition-colors">Weather</a></div>
              <div><a href="#faq" class="hover:text-[var(--color-accent)] transition-colors">FAQ</a></div>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Top Cities</p>
            <div class="space-y-2 text-sm text-[var(--color-text-secondary)]">
              {destinations.slice(0,5).map(d=>(<div>{d.name}</div>))}
            </div>
          </div>
        </div>
        <div class="border-t border-[var(--color-border)] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-[var(--color-text-muted)]">&copy; {new Date().getFullYear()} China Trips. Plan your perfect trip to China.</p>
          <div class="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
            <a href="/" class="hover:text-[var(--color-text)] transition-colors">Home</a>
            <a href="#planner" class="hover:text-[var(--color-text)] transition-colors">Planner</a>
            <a href="#faq" class="hover:text-[var(--color-text)] transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>

  </main>
</BaseLayout>

"""

# Read current prefix file (61 lines)
with open(r"D:\workspaces\website\china-trips\src\pages\index.astro", "r", encoding="utf-8", newline="") as f:
    prefix = f.read()

# Read scripts
with open(r"D:\workspaces\website\china-trips\_scripts.tmp", "r", encoding="utf-8") as f:
    scripts_content = f.read()

# Combine everything
final = prefix.rstrip() + "\r\n"
# Add post_hero sections: stat strip, banner, planner
if "post_hero" in vars_found:
    final += vars_found["post_hero"] + "\r\n"
# Add itineraries
if "itin_html" in vars_found:
    final += vars_found["itin_html"] + "\r\n"
# Add remaining sections (trip types through footer)
final += remaining_sections + "\r\n"
# Add scripts
final += scripts_content

# Write complete file
with open(r"D:\workspaces\website\china-trips\src\pages\index.astro", "w", encoding="utf-8", newline="") as f:
    f.write(final)

print(f"Final file: {len(final.split(chr(10)))} lines, {len(final)} chars")
print("Complete!")
