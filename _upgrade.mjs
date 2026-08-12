import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// ===== 1. REPLACE PLANNER OUTPUT WITH DECISION-TOOL VERSION =====
const oldOutput = `      plannerOutput.innerHTML = \`
        <div class="space-y-4">
          <div class="card p-4 bg-[var(--color-accent-light)]">
            <p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Recommended Route</p>
            <p class="text-lg font-semibold text-[var(--color-text)]">\${route}</p>
          </div>
          <div class="card p-4">
            <p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Trip Summary</p>
            <p class="body-text text-sm">\${result}</p>
          </div>
          <div class="card p-4">
            <p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Estimated Budget (per person)</p>
            <p class="text-lg font-semibold text-[var(--color-text)]">\${costEstimate[days] || "$1,000-3,000"}</p>
            <p class="text-xs text-[var(--color-text-muted)] mt-1">Mid-range estimate including accommodation, food, transport, and activities</p>
          </div>
        </div>
      \`;`;

const newOutput = `      // Map to matching itinerary
      const itineraryMap = { "7": "7-Day Beijing Classic", "10": "10-Day Golden Triangle", "14": "14-Day Classic and Pandas", "21": "21-Day Grand China" };
      const matchName = itineraryMap[days] || "";
      const costEstimate = { "7": "$700–1,200", "10": "$1,200–2,000", "14": "$1,800–2,800", "21": "$2,500–4,200" };
      
      const cities = result.split("→").map(c => c.split("(")[0].trim()).filter(c => c);
      const routeBar = cities.map((c, i) => 
        \`<span class="bg-[var(--color-accent)] text-white px-2 py-0.5 rounded text-xs font-semibold">\${c}</span>\${i < cities.length-1 ? '<span class="text-[var(--color-accent)] font-bold mx-1">→</span>' : ''}\`
      ).join("");

      plannerOutput.innerHTML = \`
        <div class="space-y-4">
          <div class="card p-5 bg-[var(--color-accent-light)]">
            <p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-3">🎯 Your Match: \${matchName}</p>
            <div class="flex flex-wrap items-center gap-1 mb-3">\${routeBar}</div>
            <p class="body-text text-sm mb-3">\${result}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span class="tag bg-green-50 text-green-700 border-green-200">\${who.charAt(0).toUpperCase() + who.slice(1)}</span>
              \${interests.length > 0 ? interests.map(i => \`<span class="tag">✓ \${i}</span>\`).join("") : ""}
            </div>
            <div class="flex items-baseline gap-3">
              <span class="text-2xl font-bold text-[var(--color-accent)]">\${costEstimate[days]}</span>
              <span class="text-xs text-[var(--color-text-muted)]">per person, mid-range</span>
            </div>
          </div>
          <button onclick="document.getElementById('itineraries').scrollIntoView({behavior:'smooth'});setTimeout(()=>{const cards=document.querySelectorAll('#itineraries .card');cards.forEach(c=>{if(c.textContent.includes('\${matchName}')){c.scrollIntoView({behavior:'smooth',block:'center'});c.style.boxShadow='0 0 0 3px var(--color-accent)';setTimeout(()=>c.style.boxShadow='',3000);const det=c.querySelector('details');if(det)det.open=true}})},500)" class="btn-primary w-full text-sm">
            See Full Day-by-Day Plan →
          </button>
        </div>
      \`;`;

ix = ix.replace(oldOutput, newOutput);

// ===== 2. MAKE AT A GLANCE CARDS CLICKABLE TO SCROLL TO MATCHING ITINERARY =====
ix = ix.replace(
  '<a href="#itineraries" class="card p-4 no-underline group text-center">',
  '<a href="javascript:void(0)" onclick="document.getElementById(\'itineraries\').scrollIntoView({behavior:\'smooth\'});setTimeout(()=>{const cards=document.querySelectorAll(\'#itineraries .card\');cards.forEach(c=>{if(c.textContent.includes(this.textContent.trim())){c.scrollIntoView({behavior:\'smooth\',block:\'center\'});c.style.boxShadow=\'0 0 0 3px var(--color-accent)\';setTimeout(()=>c.style.boxShadow=\'\',3000)}})},400)" class="card p-4 no-underline group text-center cursor-pointer hover:border-[var(--color-accent)] transition-all">'
);

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("Planner overhaul + At a Glance interaction applied");
console.log("Lines:", ix.split("\n").length);
