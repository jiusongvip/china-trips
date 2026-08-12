import { readFileSync, writeFileSync } from "fs";

let ix = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// Just add const costEstimate before const result, and const route
const resultLine = "      const result = recommendations[days]?.[who]";
const decl = '      const route = result.split("→").map(c => c.trim()).join(" &rarr; ");\n      const costEstimate = { "7": "$700-1,400", "10": "$1,000-2,000", "14": "$1,400-2,800", "21": "$2,100-4,200" };\n\n' + "      const result = recommendations[days]?.[who]";

ix = ix.replace(resultLine, decl);

// Count costEstimate declarations
const count = (ix.match(/const costEstimate/g) || []).length;
console.log("costEstimate declarations:", count);

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", ix, "utf8");
console.log("Restored. Lines:", ix.split("\n").length);
