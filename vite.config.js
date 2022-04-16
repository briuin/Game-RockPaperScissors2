import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import federation from "@originjs/vite-plugin-federation";
// eslint-disable-next-line no-undef
const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    vue(),
    vueJsx(),
    federation({
      name: "gameRockPaperScissors2",
      filename: "remoteEntry.js",
      exposes: {
        "./Content": "./src/components/HelloWorldSingleSPA",
      },
      shared: {
        ...deps,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
