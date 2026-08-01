// This app builds as an SSR bundle targeting Cloudflare Workers (see vite.config.ts).
// GitHub Pages can only serve static files, so after `vite build` we invoke the
// built server handler once, save the rendered HTML as the static entry point,
// and reuse it as the 404 fallback (single-route app, client-side hydration
// handles any further navigation).
import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const serverEntry = resolve(process.cwd(), ".output/server/index.mjs");
if (!existsSync(serverEntry)) {
  console.error(`Build output not found at ${serverEntry}. Run "vite build" first.`);
  process.exit(1);
}

const { default: handler } = await import(pathToFileURL(serverEntry).href);
const response = await handler.fetch(new Request("http://localhost/"), {}, { waitUntil: () => {} });

if (!response.ok) {
  console.error(`Prerender request to "/" failed with status ${response.status}`);
  process.exit(1);
}

const html = await response.text();
const publicDir = resolve(process.cwd(), ".output/public");
writeFileSync(resolve(publicDir, "index.html"), html);
writeFileSync(resolve(publicDir, "404.html"), html);

console.log(`Wrote static index.html/404.html (${html.length} bytes) to ${publicDir}`);
