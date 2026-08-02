// This app builds as an SSR bundle targeting Cloudflare Workers (see vite.config.ts).
// GitHub Pages can only serve static files, so after `vite build` we invoke the
// built server handler once per route, save the rendered HTML as static entry points,
// and reuse the home page HTML as the 404 fallback.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const productSlugs = [
  "recruitment-automation",
  "ai-presentation-generator",
  "ml-automation-platform",
  "ai-voice-agents",
  "devos",
];

const routes = ["/", "/book", ...productSlugs.map((slug) => `/work/${slug}`)];

const serverEntry = resolve(process.cwd(), ".output/server/index.mjs");
if (!existsSync(serverEntry)) {
  console.error(`Build output not found at ${serverEntry}. Run "vite build" first.`);
  process.exit(1);
}

const { default: handler } = await import(pathToFileURL(serverEntry).href);
const publicDir = resolve(process.cwd(), ".output/public");

for (const route of routes) {
  const response = await handler.fetch(
    new Request(`http://localhost${route}`),
    {},
    { waitUntil: () => {} },
  );

  if (!response.ok) {
    console.error(`Prerender request to "${route}" failed with status ${response.status}`);
    process.exit(1);
  }

  const html = await response.text();
  const outPath =
    route === "/"
      ? resolve(publicDir, "index.html")
      : resolve(publicDir, route.slice(1), "index.html");

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`Wrote ${outPath} (${html.length} bytes)`);
}

const homeHtml = await (
  await handler.fetch(new Request("http://localhost/"), {}, { waitUntil: () => {} })
).text();
writeFileSync(resolve(publicDir, "404.html"), homeHtml);
console.log(`Wrote 404.html fallback (${homeHtml.length} bytes) to ${publicDir}`);
