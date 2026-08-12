import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// Find the result line after recommendations
const resultLine = '      const result = recommendations[days]?.[who] || `We recommend a ${days}-day trip covering 3-4 cities. Check our detailed itineraries above for day-by-day plans.`;';

// Build the full replacement block
const newBlock = `      // Map to matching itinerary
      const itineraryMap = { "7": "7-Day Beijing Classic", "10": "10-Day Golden Triangle", "14": "14-Day Classic and Pandas", "21": "21-Day Grand China" };
      const matchName = itineraryMap[days] || "";
      const costEstimate = { "7": "$700u20131,200", "10": "$1,200u20132,000", "14": "$1,800u20132,800", "21": "$2,500u20134,200" };

      ${resultLine}`;

ix = ix.replace(resultLine, newBlock);

// Now replace the plannerOutput.innerHTML block
const oldOutput = `plannerOutput.innerHTML = \`
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

if (ix.includes(oldOutput)) {
  const newOutput = `plannerOutput.innerHTML = \`<div class="space-y-4"><div class="card p-5 bg-[var(--color-accent-light)]"><p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-3">\u2728 Your Match: \${matchName}</p><div class="flex flex-wrap items-center gap-1 mb-3">\${result.split("\\u2192").map((c,i) => \\\`<span class="bg-[var(--color-accent)] text-white px-2 py-0.5 rounded text-xs font-semibold">\\\${c.split("(")[0].trim()}</span>\\\${i < result.split("\\u2192").length-1 ? '<span class=\\"text-[var(--color-accent)] font-bold mx-1\\">\\u2192</span>' : ''}\\\`).join("")}</div><p class="body-text text-sm mb-3">\${result}</p><div class="flex flex-wrap gap-2 mb-3"><span class="tag bg-green-50 text-green-700 border-green-200">\${who.charAt(0).toUpperCase()+who.slice(1)}</span>\${interests.length>0?interests.map(i=>\\\`<span class=\\"tag\\">\\u2713 \${i}</span>\\\`).join(""):""}</div><div class="flex items-baseline gap-3"><span class="text-2xl font-bold text-[var(--color-accent)]">\${costEstimate[days]}</span><span class="text-xs text-[var(--color-text-muted)]">per person, mid-range</span></div></div><button onclick="document.getElementById(\\'itineraries\\').scrollIntoView({behavior:\\'smooth\\'});setTimeout(()=>{const cards=document.querySelectorAll(\\'#itineraries .card\\');cards.forEach(c=>{if(c.textContent.includes(\\'\${matchName}\\')){c.scrollIntoView({behavior:\\'smooth\\',block:\\'center\\'});c.style.boxShadow=\\'0 0 0 3px var(--color-accent)\\';setTimeout(()=>c.style.boxShadow=\\'\\',3000);const det=c.querySelector(\\'details\\');if(det)det.open=true}})},500)" class="btn-primary w-full text-sm">See Full Day-by-Day Plan \\u2192</button></div>\`;`;
  ix = ix.replace(oldOutput, newOutput);
  console.log("Output block replaced");
} else {
  console.log("Old output block NOT found - trying backup match");
  // Try matching just the start
  const start = 'plannerOutput.innerHTML = \\`';
  const end = '      \\`;';
  const sIdx = ix.indexOf(start);
  const eIdx = ix.indexOf(end, sIdx);
  if (sIdx > 0 && eIdx > sIdx) {
    const old = ix.substring(sIdx, eIdx + end.length);
    const newOut = 'plannerOutput.innerHTML = \\`<div class="space-y-4"><div class="card p-5 bg-[var(--color-accent-light)]"><p class="text-xs font-semibold text-[var(--color-accent)] uppercase mb-3">Your Match: \\${matchName}</p><div class="flex flex-wrap items-center gap-1 mb-3">\\${result.split("\\u2192").map((c,i) => \\`<span class="bg-[var(--color-accent)] text-white px-2 py-0.5 rounded text-xs font-semibold">\\${c.split("(")[0].trim()}</span>\\${i < result.split("\\u2192").length-1 ? \\'<span class="text-[var(--color-accent)] font-bold mx-1">\\u2192</span>\\' : "}\\`).join("")}</div><p class="body-text text-sm mb-3">\\${result}</p><div class="flex flex-wrap gap-2 mb-3"><span class="tag bg-green-50 text-green-700 border-green-200">\\${who.charAt(0).toUpperCase()+who.slice(1)}</span>\\${interests.length>0?interests.map(i=>\\`<span class="tag">\\u2713 \\${i}</span>\\`).join(""):""}</div><div class="flex items-baseline gap-3"><span class="text-2xl font-bold text-[var(--color-accent)]">\\${costEstimate[days]}</span><span class="text-xs text-[var(--color-text-muted)]">per person, mid-range</span></div></div><button onclick="" class="btn-primary w-full text-sm">See Full Day-by-Day Plan \u2192</button></div>\\`;';
    ix = ix.substring(0, sIdx) + newOut + ix.substring(eIdx + end.length);
    console.log("Backup match worked");
  } else {
    console.log("Could not find plannerOutput at all");
  }
}

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("Done. Lines:", ix.split("\\n").length);
