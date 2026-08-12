import { readFileSync, writeFileSync } from "fs";

let c = readFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", "utf8");

// 1. Add ItemList schema after <main>
const mainLine = "  <main>";
const navStart = "    <nav class=\"sticky";
const schemaBlock = '  <script type="application/ld+json" set:html={JSON.stringify({"@context":"https://schema.org","@type":"ItemList","itemListElement":itineraries.map((itin,i)=>({"@type":"ListItem","position":i+1,"name":itin.name,"description":itin.days+"-day itinerary: "+itin.route+". "+itin.highlights}))})}></script>';

c = c.replace(mainLine + "\n" + navStart, mainLine + "\n\n" + schemaBlock + "\n\n" + navStart);

// 2. Add back-to-top button before </main>
const backToTop = '\n    <button id="back-to-top" class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-[var(--color-accent)] text-white shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-[var(--color-accent-hover)] flex items-center justify-center text-xl font-bold pointer-events-none" aria-label="Back to top">&uarr;</button>\n';
c = c.replace("  </main>", backToTop + "  </main>");

// 3. Fix summary arrow: add JS toggle and fix CSS
c = c.replace(
  "  details[open] .summary-arrow { content: \"[-]\"; }",
  "  #back-to-top.visible { opacity: 1; visibility: visible; pointer-events: auto; }"
);

// 4. Add arrow toggle JS and back-to-top JS to the script section
const arrowJS = `
  // ===== FIX SUMMARY ARROWS =====
  document.querySelectorAll("details").forEach((det) => {
    det.addEventListener("toggle", () => {
      const arrow = det.querySelector(".summary-arrow");
      if (arrow) arrow.textContent = det.open ? "[-]" : "[+]";
    });
  });

  // ===== BACK TO TOP =====
  const btt = document.getElementById("back-to-top");
  if (btt) {
    window.addEventListener("scroll", () => {
      btt.classList.toggle("visible", window.scrollY > 600);
    });
    btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }`;

c = c.replace("  // ===== COST CALCULATOR =====", arrowJS + "\n\n  // ===== COST CALCULATOR =====");

writeFileSync("D:/workspaces/website/china-trips/src/pages/index.astro", c, "utf8");
console.log("Polish applied. Lines:", c.split("\n").length);
