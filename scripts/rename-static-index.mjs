// Vite emits dist-static/index.static.html (matching the input filename).
// Rename to index.html so static hosts (Vercel) serve it as the default document.
import { renameSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = "dist-static";
const src = join(dir, "index.static.html");
const dst = join(dir, "index.html");

if (existsSync(src)) {
  renameSync(src, dst);
  console.log(`[rename-static-index] ${src} -> ${dst}`);
} else if (existsSync(dst)) {
  console.log(`[rename-static-index] ${dst} already exists`);
} else {
  console.error(`[rename-static-index] no index file found in ${dir}`);
  process.exit(1);
}
