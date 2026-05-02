// Static SPA build config for Vercel deployment.
// Bypasses TanStack Start's SSR/Worker pipeline and emits a plain index.html + hashed assets.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "index.static.html"),
    },
  },
});
