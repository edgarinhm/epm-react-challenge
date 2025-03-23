import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
  base: '/epm-react-challenge', //github pages
  test: {
    globals: true,
    environment: "jsdom",
  },

});
