import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/kiem-tra-giua-ki-1-tin12-20262027/",
  plugins: [react(), tailwindcss()],
});
