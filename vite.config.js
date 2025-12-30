import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolio-website/",  // <--- ADD THIS LINE
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})