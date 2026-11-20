import Link from "next/link";
import { CHORD_INTROS } from "@/content/chords/en";
import { format } from "@/i18n/format";
import { getDictionary } from "@/i18n/dictionary";
import { chordShapes, chordTones, pagesOnRoot, progressionsFor, relatedPages, shapeLabel, type ProgChord } from "@/lib/music/chordGuide";
import { CHORD_PAGES, chordPagePath, ROOT_NAMES, rootPage, type ChordPage } from "@/lib/music/chordPages";
import { CONTENT_UPDATED } from "@/lib/site";
import { toolPath } from "@/tools/registry";
import { localDate } from "@/components/shell/InfoPage";

const H2 = "m-0 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-tight font-bold tracking-[-0.02em]";
const H3 = "m-0 font-display text-xl font-semibold tracking-[-0.01em] text-ink";
const P = "m-0 text-base leading-[1.75] text-muted";
const A = "font-semibold text-mint underline underline-offset-[3px]";
const CHIP = "flex min-h-11 items-center rounded-full bg-inset px-4 text-[15px] font-semibold text-ink no-underline hover:bg-surface";

const TYPE_WORD: Record<ChordPage["type"], string> = {
  maj: "major triad",
  min: "minor triad",
  "7": "dominant seventh chord",
  maj7: "major seventh chord",
  m7: "minor seventh chord",
  sus4: "suspended fourth chord",
};

function ChordLink({ c }: { c: ProgChord }) {
  return c.page ? (
    <Link href={chordPagePath(c.page)} className={A}>
      {c.name}
    </Link>
  ) : (
    <span className="font-semibold text-ink">{c.name}</span>
  );
}

/** Server-rendered reading content under the chord tool on /en/chords/<slug>/. */
export function ChordPageContent({ page }: { page: ChordPage }) {
  const d = getDictionary("en");
  const tones = chordTones(page.root, page.type);
  const shapes = chordShapes(page.root, page.type);
  const progressions = progressionsFor(page.root, page.type);
  const related = relatedPages(page);
  const root = rootPage(page.root);
  const isRoot = root.slug === page.slug;
  const rootName = ROOT_NAMES[page.root];
  const hub = toolPath("en", "chords")!;
  const formula = tones.map((t) => t.degree).join(" – ");
  const unusual = tones.filter((t) => t.sameAs);

  return (
    <div className="flex flex-col gap-16 border-t border-inset pt-16">
      <section className="flex max-w-[820px] flex-col gap-5">
        <h2 className={H2}>The {page.name} chord at a glance</h2>
        <p className={P}>{CHORD_INTROS[page.slug]}</p>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 rounded-2xl bg-surface px-5 py-4 text-[15px]">
          <dt className="font-semibold text-ink">Notes</dt>
          <dd className="m-0 text-muted">{tones.map((t) => t.note).join(" · ")}</dd>
          <dt className="font-semibold text-ink">Formula</dt>
          <dd className="m-0 text-muted">
            {formula} ({TYPE_WORD[page.type]})
          </dd>
          <dt className="font-semibold text-ink">First shape</dt>
          <dd className="m-0 text-muted tabular">
            {shapes[0].tab} – {shapeLabel(shapes[0])}
          </dd>
        </dl>
      </section>

      <section className="flex max-w-[820px] flex-col gap-5">
        <h2 className={H2}>Notes in the {page.name} chord</h2>
        <p className={P}>
          {page.name} is built from {tones.length} notes: {tones.map((t) => t.note).join(", ")}. Counting from the root, that is {formula}. On
          guitar you will often play some of these notes twice in different octaves – the chart above shows the root in white.
        </p>
        <div className="overflow-x-auto rounded-2xl bg-surface">
          <table className="w-full border-collapse text-left text-[15px] tabular">
            <thead>
              <tr>
                {["Note", "Degree", "Interval from the root"].map((h) => (
                  <th key={h} scope="col" className="px-5 py-3 text-xs font-semibold tracking-[0.04em] text-muted uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tones.map((t) => (
                <tr key={t.degree} className="border-t border-inset">
                  <td className="px-5 py-3 font-semibold text-ink">
                    {t.note}
                    {t.sameAs && <span className="font-normal text-muted"> (= {t.sameAs})</span>}
                  </td>
                  <td className="px-5 py-3 text-muted">{t.degree}</td>
                  <td className="px-5 py-3 text-muted">
                    {t.interval}, {t.semitones} semitones
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {unusual.length > 0 && (
          <p className={P}>
            Why {unusual.map((t) => t.note).join(" and ")}? Every chord tone gets its own letter, so the notes are spelled{" "}
            {tones.map((t) => t.note).join(" – ")}. On the guitar {unusual.map((t) => `${t.note} is the same fret as ${t.sameAs}`).join(", and ")} –
            the chart above uses those everyday names.
          </p>
        )}
      </section>

      <section className="flex max-w-[820px] flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h2 className={H2}>How to play {page.name} on guitar, step by step</h2>
          <p className={P}>
            Below are the first {shapes.length} shapes from the chart above. Fingers are numbered 1 (index) to 4 (little); strings run from the
            low E (6th) to the high E (1st). Use the arrows next to Play to switch between shapes, and press Play to check your sound.
          </p>
        </div>
        {shapes.map((s, i) => (
          <div key={s.tab} className="flex flex-col gap-4">
            <h3 className={H3}>
              Shape {i + 1}: {shapeLabel(s)} <span className="font-normal text-muted tabular">({s.tab})</span>
            </h3>
            <ol className="m-0 flex list-decimal flex-col gap-3 pl-6 text-base leading-[1.7] text-muted marker:font-bold marker:text-accent-text">
              {s.steps.map((t, j) => (
                <li key={j} className="pl-1">
                  {t}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section className="flex max-w-[820px] flex-col gap-5">
        <h2 className={H2}>Common {page.name} chord progressions</h2>
        <p className={P}>These progressions use {page.name}, each spelled in its key. Tap a chord to open its own page.</p>
        <ul className="m-0 flex flex-col gap-3 pl-6 text-base leading-[1.7] text-muted marker:text-accent-text list-disc">
          {progressions.map((p) => (
            <li key={p.numerals} className="pl-1">
              <span className="text-ink">{p.numerals}</span> in {p.key}:{" "}
              {p.chords.map((c, i) => (
                <span key={i}>
                  {i > 0 && " – "}
                  <ChordLink c={c} />
                </span>
              ))}
            </li>
          ))}
        </ul>
        <p className={P}>
          Practise each change slowly with the{" "}
          <Link href={toolPath("en", "metronome")!} className={A}>
            online metronome
          </Link>{" "}
          – four strums per chord at 60 BPM is a good start – and tune up first with the{" "}
          <Link href={toolPath("en", "guitar")!} className={A}>
            guitar tuner
          </Link>
          .
        </p>
      </section>

      {isRoot && (
        <section className="flex max-w-[820px] flex-col gap-5">
          <h2 className={H2}>All {rootName} chords</h2>
          <p className={P}>Every {rootName} chord with its own page, with the notes in each:</p>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2 p-0">
            {pagesOnRoot(page.root).map((p) => (
              <li key={p.slug}>
                <Link
                  href={chordPagePath(p)}
                  aria-current={p.slug === page.slug ? "page" : undefined}
                  className="flex flex-col gap-0.5 rounded-2xl bg-surface px-5 py-3 no-underline hover:bg-inset aria-[current=page]:bg-inset"
                >
                  <span className="font-display text-lg font-bold text-ink">{p.name}</span>
                  <span className="text-sm text-muted">{chordTones(p.root, p.type).map((t) => t.note).join(" · ")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={P}>
            For {rootName} sus2, dim and aug, pick {rootName} and the chord type in the{" "}
            <Link href={hub} className={A}>
              chord lookup
            </Link>
            .
          </p>
        </section>
      )}

      <section className="flex max-w-[820px] flex-col gap-5">
        <h2 className={H2}>Related chords</h2>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
          {related.map((p) => (
            <li key={p.slug}>
              <Link href={chordPagePath(p)} className={CHIP}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className={P}>
          {isRoot ? (
            <>
              This page is also the home of every {rootName} chord.{" "}
            </>
          ) : (
            <>
              See every {rootName} chord on the{" "}
              <Link href={chordPagePath(root)} className={A}>
                {rootName} chords
              </Link>{" "}
              page.{" "}
            </>
          )}
          All {CHORD_PAGES.length} chord pages are listed A–Z in the{" "}
          <Link href={hub} className={A}>
            guitar and piano chord chart
          </Link>
          .
        </p>
      </section>

      <p className="m-0 text-sm text-muted">
        <time dateTime={CONTENT_UPDATED}>{format(d.site.updated, { date: localDate("en") })}</time>
      </p>
    </div>
  );
}

/** Letters A–G, each with its chord pages (naturals first, then the flat/sharp roots). */
export function chordIndex(): { letter: string; pages: ChordPage[] }[] {
  return ["A", "B", "C", "D", "E", "F", "G"].map((letter) => {
    const roots = ROOT_NAMES.map((n, i) => ({ n, i })).filter((r) => r.n[0] === letter).sort((a, b) => a.n.length - b.n.length);
    return { letter, pages: roots.flatMap((r) => pagesOnRoot(r.i)) };
  });
}

/** The A–Z list of every chord page, on the English chord lookup. */
export function ChordIndex() {
  return (
    <section className="flex max-w-[820px] flex-col gap-6 border-t border-inset pt-16">
      <h2 className={H2}>Guitar chords A–Z</h2>
      <p className={P}>
        Every chord with its own page – fingering, notes, step-by-step finger placement and common progressions. The first chord on each line
        is the root page with all chords on that note.
      </p>
      <div className="flex flex-col gap-5">
        {chordIndex().map(({ letter, pages }) => (
          <div key={letter} className="flex flex-col gap-2 min-[560px]:flex-row min-[560px]:items-baseline min-[560px]:gap-5">
            <h3 className="m-0 w-8 flex-none font-display text-2xl font-extrabold text-accent-text">{letter}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {pages.map((p) => (
                <li key={p.slug}>
                  <Link href={chordPagePath(p)} className={CHIP} title={p.h1}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
