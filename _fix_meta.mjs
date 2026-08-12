import { readFileSync, writeFileSync } from "fs";

let ct = readFileSync("D:/workspaces/website/china-trips/src/data/content.ts", "utf8");

const metas = [
  { name: "7-Day Beijing Classic", bestFor: "Quick First Taste", cost: "$700-1,200" },
  { name: "10-Day Golden Triangle", bestFor: "First-Time Visitors", cost: "$1,200-2,000" },
  { name: "14-Day Classic and Pandas", bestFor: "Best for Families", cost: "$1,800-2,800" },
  { name: "21-Day Grand China", bestFor: "Bucket-List Trip", cost: "$2,500-4,200" },
];

for (const m of metas) {
  const nameIdx = ct.indexOf('name: "' + m.name + '"');
  if (nameIdx < 0) { console.log("NOT FOUND:", m.name); continue; }
  const hlIdx = ct.indexOf("highlights:", nameIdx);
  if (hlIdx < 0) { console.log("HL NOT FOUND:", m.name); continue; }
  const hlEnd = ct.indexOf("\n", hlIdx) + 1;
  if (ct.slice(hlIdx, hlEnd).match(/bestFor:/)) { console.log("SKIP:", m.name); continue; }
  ct = ct.slice(0, hlEnd) + "    bestFor: \"" + m.bestFor + "\",\n    estimatedCost: \"" + m.cost + "\",\n" + ct.slice(hlEnd);
  console.log("DONE:", m.name, "->", m.bestFor);
}

writeFileSync("D:/workspaces/website/china-trips/src/data/content.ts", ct, "utf8");
console.log("bestFor:", (ct.match(/bestFor:/g) || []).length);
console.log("estimatedCost:", (ct.match(/estimatedCost:/g) || []).length);
