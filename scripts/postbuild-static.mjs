// Generates a static index.html in dist/client for plain static hosting (e.g. Vercel).
// Scans dist/client/assets/ for the largest JS file (entry) and the CSS file.
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = "dist/client";
const assetsDir = join(outDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[postbuild-static] dist/client/assets not found; skipping");
  process.exit(0);
}

const files = readdirSync(assetsDir).map((f) => ({
  name: f,
  size: statSync(join(assetsDir, f)).size,
}));

const jsFiles = files.filter((f) => f.name.endsWith(".js"));
const cssFiles = files