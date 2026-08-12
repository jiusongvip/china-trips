// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://china-trips.com",
  trailingSlash: "never",
  integrations: [sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
