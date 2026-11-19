// Serwist builds the service worker at /serwist/sw.js. Copy it to the site root so it can control
// every page (scope "/") on any static host, without a Service-Worker-Allowed header.
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";

const from = "out/serwist/sw.js";
if (!existsSync(from)) {
  console.error("copy-sw: out/serwist/sw.js not found (did next build run?)");
  process.exit(1);
}
writeFileSync("out/sw.js", readFileSync(from, "utf8"));
if (existsSync(`${from}.map`)) copyFileSync(`${from}.map`, "out/sw.js.map");
console.log("copy-sw: out/sw.js ready");
