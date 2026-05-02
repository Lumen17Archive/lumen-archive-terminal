// Generates a static index.html in dist/client for plain static hosting (e.g. Vercel).
// Scans dist/client/assets/ for the entry JS (largest) and CSS, then writes index.html.
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
const cssFiles = files.filter((f) => f.name.endsWith(".css"));

if (jsFiles.length === 0) {
  console.error("[postbuild-static] no JS files found in assets/");
  process.exit(1);
}

// Entry chunk = largest JS file (contains the React app)
jsFiles.sort((a, b) => b.size - a.size);
const entryJs = jsFiles[0].name;
const cssLinks = cssFiles
  .map((c) => `  <link rel="stylesheet" href="/assets/${c.name}" />`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="description" content="signal locked" />
  <meta name="fragment04" content="aHR0cHM6Ly90Lm1lLytRV3gxR3luRzF3bG1Oems2" />
  <meta property="og:title" content="LUMEN17 ARCHIVE" />
  <meta property="og:description" content="signal locked" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400&display=swap" />
${cssLinks}
  <title>LUMEN17 ARCHIVE</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${entryJs}"></script>
</body>
</html>
`;

writeFileSync(join(outDir, "index.html"), html);
console.log(`[postbuild-static] wrote ${outDir}/index.html (entry: ${entryJs}, css: ${cssFiles.length})`);
