import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://ryanmoreau.ca",
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});