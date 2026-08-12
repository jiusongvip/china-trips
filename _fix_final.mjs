import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// Remove the broken line 820 (costEstimate + result concatenation)
const broken = '      const costEstimate = { "7": "$700-1,400", "10": "$1,000-2,000", "14": "$1,400-2,800", "21": "$2,100-4,200" }; = recommendations';
ix = ix.replace(broken, "      const result = recommendations");

// Remove the second costEstimate (line 825, from upgrade attempt)
const dup = '\n      const costEstimate = { "7": "$700–1,200", "10": "$1,200–2,000", "14": "$1,800–2,800", "21": "$2,500–4,200" };';
ix = ix.replace(dup, "");

// Count what's left
const count = (ix.match(/const costEstimate/g) || []).length;
console.log("Final costEstimate count:", count);

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("Lines:", ix.split("\n").length);
