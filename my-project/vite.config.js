// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        sushi: resolve(__dirname, "src/sushi.html"),
        poke: resolve(__dirname, "src/pokebowl.html"),
        varmratter: resolve(__dirname, "src/varmratter.html"),
        boba: resolve(__dirname, "src/boba.html"),
      },
    },
  },
  watch: {},
});
