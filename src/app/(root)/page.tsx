import Link from "next/link";
import { LOCALE_INFO, locales } from "@/i18n/routing";

/**
 * "/" has no content of its own. On Vercel, vercel.json redirects it server-side (307 by
 * Accept-Language, 308 to /en/ otherwise), so this page is only a fallback for other static hosts:
 * a tiny inline script sends each browser to the best of the 15 languages (English otherwise).
 */
const redirect = `(function(){var s=${JSON.stringify(locales)},l=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]);for(var i=0;i<l.length;i++){var c=(l[i]||"").toLowerCase().split("-")[0];if(c==="in")c="id";if(s.indexOf(c)>=0){location.replace("/"+c+"/");return;}}location.replace("/en/");})();`;

export default function RootRedirect() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1200px] flex-col justify-center gap-4 px-6">
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <p className="font-display text-3xl font-extrabold">WowGuitar</p>
      <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
        {locales.map((l) => (
          <li key={l}>
            <Link className="text-mint underline" href={`/${l}/`} hrefLang={LOCALE_INFO[l].tag} lang={LOCALE_INFO[l].tag}>
              {LOCALE_INFO[l].native}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
