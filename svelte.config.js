import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
  paths: {
    base: process.argv.includes("dev") ? "" : "/WEBTEST1",
  },
  alias: {
    $components: "./src/components",
    $styles: "./src/styles",
    $stores: "./src/stores",
    $types: "../../types",
  },
};

export default config;
