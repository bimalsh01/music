// Tell IndexNow (Bing, Yandex, Seznam, Naver and others) which pages exist, after a production deploy.
//
//   node scripts/indexnow.mjs                 # every URL in the live sitemap
//   node scripts/indexnow.mjs out/sitemap.xml # every URL in a local build's sitemap
//   node scripts/indexnow.mjs --dry-run       # print what would be sent, send nothing
//
// The key file lives in public/ (served at the site root), as the IndexNow protocol requires.
// .github/workflows/indexnow.yml runs this when a Vercel production deployment succeeds.
import { readdirSync, readFileSync } from "node:fs";

const SITE = "https://www.wowguitar.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10_000; // IndexNow's limit per request

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const source = args.find((a) => !a.startsWith("--")) ?? `${SITE}/sitemap.xml`;

const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("indexnow: no key file (public/<32 hex characters>.txt) found");
  process.exit(1);
}
const key = readFileSync(`public/${keyFile}`, "utf8").trim();
if (`${key}.txt` !== keyFile) {
  console.error(`indexnow: public/${keyFile} must contain exactly its own name without .txt`);
  process.exit(1);
}
const keyLocation = `${SITE}/${keyFile}`;

async function text(where) {
  if (!/^https?:\/\//.test(where)) return readFileSync(where, "utf8");
  const res = await fetch(where, { headers: { "user-agent": "wowguitar-indexnow" } });
  if (!res.ok) throw new Error(`${where} returned ${res.status}`);
  return res.text();
}

const sitemap = await text(source);
const urls = [...new Set([...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]))].filter((u) =>
  u.startsWith(`${SITE}/`),
);
if (!urls.length) {
  console.error(`indexnow: no ${SITE} URLs found in ${source}`);
  process.exit(1);
}

if (!dryRun) {
  // IndexNow fetches the key file to check the submission; make sure the deploy already serves it.
  const live = (await text(keyLocation)).trim();
  if (live !== key) {
    console.error(`indexnow: ${keyLocation} does not serve the key yet; deploy it first`);
    process.exit(1);
  }
}

for (let i = 0; i < urls.length; i += MAX_URLS) {
  const urlList = urls.slice(i, i + MAX_URLS);
  const body = { host: new URL(SITE).host, key, keyLocation, urlList };
  if (dryRun) {
    console.log(`indexnow (dry run): would send ${urlList.length} URLs`);
    console.log(urlList.slice(0, 5).join("\n") + (urlList.length > 5 ? "\n…" : ""));
    continue;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  // 200 = accepted, 202 = accepted while the key is being checked. Anything else is a failure.
  if (res.status !== 200 && res.status !== 202) {
    console.error(`indexnow: ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`indexnow: submitted ${urlList.length} URLs (${res.status})`);
}
