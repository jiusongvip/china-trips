// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chinatripzone.com",
  trailingSlash: "always",
  // Inline the bundled CSS so there is no render-blocking external stylesheet
  // request — critical for mobile LCP (the 23.7 KiB CSS was blocking first paint).
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
