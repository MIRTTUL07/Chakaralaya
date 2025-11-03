import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [
    react(),
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true
  }
});
