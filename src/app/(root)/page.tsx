import Link from "next/link";

/**
 * "/" has no content of its own: static hosting has no server to read Accept-Language, so a
 * tiny inline script sends Portuguese browsers to /pt/ and everyone else to /en/.
 */
const redirect = `(function(){var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";location.replace(/^pt/i.test(l)?"/pt/":"/en/");})();`;

export default function RootRedirect() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1200px] flex-col justify-center gap-4 px-6">
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <p className="font-display text-3xl font-extrabold">Music Tools</p>
      <ul className="m-0 flex list-none gap-3 p-0">
        <li>
          <Link className="text-mint underline" href="/en/" hrefLang="en">
            English
          </Link>
        </li>
        <li>
          <Link className="text-mint underline" href="/pt/" hrefLang="pt-BR">
            Português
          </Link>
        </li>
      </ul>
    </main>
  );
}
