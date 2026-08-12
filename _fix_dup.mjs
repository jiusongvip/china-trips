import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// Find and remove the old const route + const costEstimate declarations
// They appear after ");" and before the plannerOutput.innerHTML block
const oldRouteLine = '      const route = result.split("→").map(c => c.trim()).join(" &rarr; ");';
const oldCostLine = '      const costEstimate = { "7": "$700-1,400", "10": "$1,000-2,000", "14": "$1,400-2,800", "21": "$2,100-4,200" };';

ix = ix.replace(oldRouteLine + "\n", "");
ix = ix.replace(oldCostLine + "\n", "");

// Also remove the blank line that was between them
ix = ix.replace("\n\n\n      // Map to matching", "\n\n      // Map to matching");

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");

const count = (ix.match(/costEstimate/g) || []).length;
console.log("Remaining costEstimate declarations:", count);
console.log("Old route removed:", !ix.includes(oldRouteLine));
console.log("Old cost removed:", !ix.includes(oldCostLine));
