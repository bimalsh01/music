"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { ChordsText } from "@/i18n/dictionary";
import { format } from "@/i18n/format";
import type { Locale } from "@/i18n/routing";
import { playChord } from "@/lib/audio/synth";
import {
  CHORD_TYPES,
  chordSpeller,
  guitarVoicings,
  INTERVALS,
  OPEN_MIDI,
  pianoKeys,
  pianoNotes,
  type ChordType,
  type Voicing,
} from "@/lib/music/chords";
import { namingChoices, namingFor, namingLabel, ROOTS, type Naming } from "@/lib/music/notes";
import { useRehydrateSettings, useSettings } from "@/lib/store";
import { BottomSheet, MoreToggle, Segmented, SettingsButton } from "@/components/shell/controls";
import { ChevronLeft, ChevronRight, PlayTriangle } from "@/components/shell/icons";
import { PageTitle } from "@/components/shell/HowTo";

type Inst = "guitar" | "piano";

export function ChordLookup({
  locale,
  L,
  ui,
}: {
  locale: Locale;
  L: ChordsText;
  ui: { settings: string; close: string };
}) {
  useRehydrateSettings();
  const namingOverride = useSettings((s) => s.naming);
  const setSettings = useSettings((s) => s.set);
  const naming: Naming = namingOverride ?? namingFor(locale);

  const [inst, setInst] = useState<Inst>("guitar");
  const [root, setRoot] = useState(0);
  const [type, setType] = useState<ChordType>("maj");
  const [vi, setVi] = useState(0);
  const [more, setMore] = useState(false);
  const [sheet, setSheet] = useState(false);
  const closeSheet = useCallback(() => setSheet(false), []);

  const { rootName, name, pcs } = chordSpeller(root, type, naming);
  const chordName = rootName + L.suffix[type];
  const spelled = pcs.map(name).join(" · ");
  const isGuitar = inst === "guitar";

  const voicings = guitarVoicings(root, type);
  const varCount = isGuitar ? voicings.length : INTERVALS[type].length;
  const v = vi % varCount;
  const varLabel = isGuitar ? format(L.pos, { i: v + 1, n: varCount }) : L.inv[v];
  const notes = isGuitar
    ? voicings[v].frets.flatMap((f, i) => (f === null ? [] : [OPEN_MIDI[i] + f]))
    : pianoNotes(root, type, v);

  const step = (d: number) => setVi(((v + d) % varCount + varCount) % varCount);
  const transpose = (d: number) => {
    setRoot((root + d + 12) % 12);
    setVi(0);
  };
  const diagramAria = `${chordName} ${L.chordOn}: ${spelled}`;

  const settingsBody = (
    <div className="flex flex-col gap-2.5">
      <span className="text-[15px] font-medium">{L.naming}</span>
      <Segmented
        label={L.naming}
        items={namingChoices(locale).map((id) => ({ id, label: namingLabel(id) }))}
        value={naming}
        onChange={(id) => setSettings({ naming: id })}
        className="grid grid-cols-3 gap-0.5"
        itemClassName="h-10 text-[13px] font-semibold"
      />
    </div>
  );

  return (
    <section className="tool-hero flex flex-col gap-3 min-[860px]:gap-[clamp(14px,2.6svh,34px)]">
      <div className="flex items-center justify-between gap-3 min-[860px]:flex-wrap min-[860px]:items-end min-[860px]:gap-[18px]">
        <PageTitle>{L.title}</PageTitle>
        <Segmented
          label={L.instrument}
          items={[
            { id: "guitar" as Inst, label: L.guitar },
            { id: "piano" as Inst, label: L.piano },
          ]}
          value={inst}
          onChange={(id) => {
            setInst(id);
            setVi(0);
          }}
          selected="white"
          className="grid flex-none grid-cols-2 gap-0.5 min-[860px]:w-full min-[860px]:max-w-[280px] min-[860px]:flex-initial"
          itemClassName="h-9 px-3 text-sm font-semibold min-[860px]:h-10"
        />
      </div>

      {/*
        Phones: one screen like an app. The chord and its diagram take the height that is left
        (the diagram scales down to fit); roots and chord types sit at the bottom near the thumb.
      */}
      <div className="flex flex-wrap items-start justify-center gap-[clamp(34px,6vw,80px)] max-[859px]:min-h-0 max-[859px]:flex-1 max-[859px]:flex-col max-[859px]:flex-nowrap max-[859px]:items-stretch max-[859px]:gap-3">
        <div className="flex min-w-0 flex-[1.2_1_400px] flex-col items-center gap-3 max-[859px]:min-h-0 max-[859px]:flex-[1_1_0%] max-[859px]:gap-2 min-[860px]:gap-[clamp(8px,1.6svh,18px)]">
          <div className="flex w-full max-w-[460px] items-center justify-between gap-3">
            <TransposeButton label={L.down} text="−1" semi={L.semi} onClick={() => transpose(-1)} />
            <div aria-live="polite" className="flex min-w-0 flex-col items-center gap-1.5">
              <span className="font-display text-[clamp(44px,min(14vw,8svh),64px)] leading-[0.9] min-[860px]:text-[clamp(56px,min(8vw,11svh),96px)] font-extrabold tracking-[-0.04em]">{chordName}</span>
              <span className="text-sm text-muted min-[860px]:text-[15px]">{spelled}</span>
            </div>
            <TransposeButton label={L.up} text="+1" semi={L.semi} onClick={() => transpose(1)} />
          </div>

          <FitBox natural={isGuitar ? 278 : 270}>
            {isGuitar ? (
              <GuitarDiagram voicing={voicings[v]} root={root} name={name} aria={diagramAria} />
            ) : (
              <PianoDiagram notes={notes} name={name} aria={diagramAria} />
            )}
          </FitBox>

          <span className="text-sm font-semibold text-muted">{varLabel}</span>
          <div className="flex w-full max-w-[460px] items-center gap-2.5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={L.prev}
              className="flex size-12 min-[860px]:size-[60px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => (isGuitar ? playChord(notes, 0.035, 2.2, "guitar") : playChord(notes, 0, 2.4, "piano"))}
              className="flex h-12 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-accent text-[17px] font-bold whitespace-nowrap text-on-accent shadow-glow min-[860px]:h-[60px]"
            >
              <PlayTriangle size={18} />
              {L.play} {chordName}
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={L.nextVar}
              className="flex size-12 min-[860px]:size-[60px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="flex min-w-0 max-w-[480px] flex-[1_1_340px] flex-col gap-[26px] pt-2 max-[859px]:max-w-none max-[859px]:flex-none max-[859px]:gap-2 max-[859px]:pt-0 min-[860px]:gap-[clamp(14px,2.6svh,26px)]">
          <div className="flex flex-col gap-3 max-[859px]:gap-0">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-muted max-[859px]:sr-only">{L.root}</span>
            <div role="group" aria-label={L.root} className="grid grid-cols-6 gap-1.5">
              {ROOTS[naming].map((lab, i) => (
                <button
                  key={i}
                  type="button"
                  aria-pressed={root === i}
                  onClick={() => {
                    setRoot(i);
                    setVi(0);
                  }}
                  className={`h-10 cursor-pointer rounded-full border-none text-[15px] font-bold min-[860px]:h-[52px] ${
                    root === i ? "bg-accent text-on-accent" : "bg-inset text-ink"
                  }`}
                >
                  {lab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 max-[859px]:gap-0">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-muted max-[859px]:sr-only">{L.type}</span>
            <div className="flex items-center gap-2">
            <div role="group" aria-label={L.type} className="flex min-w-0 flex-1 flex-wrap gap-1.5 max-[859px]:no-scrollbar max-[859px]:flex-nowrap max-[859px]:overflow-x-auto">
              {CHORD_TYPES.map((ty) => (
                <button
                  key={ty}
                  type="button"
                  aria-pressed={type === ty}
                  onClick={() => {
                    setType(ty);
                    setVi(0);
                  }}
                  className={`h-10 flex-none cursor-pointer rounded-full border-none px-4 text-sm font-semibold min-[860px]:h-11 min-[860px]:px-[18px] ${
                    type === ty ? "bg-accent text-on-accent" : "bg-inset text-ink"
                  }`}
                >
                  {L.types[ty]}
                </button>
              ))}
            </div>
            <SettingsButton label={ui.settings} onClick={() => setSheet(true)} className="size-10" />
            </div>
          </div>

          <MoreToggle
            open={more}
            onToggle={() => setMore(!more)}
            more={L.more}
            less={L.less}
            controls="chords-more"
            className="self-start px-0 max-[859px]:hidden"
          />
          {more && (
            <div id="chords-more" className="max-[859px]:hidden">
              {settingsBody}
            </div>
          )}
        </div>
      </div>

      <BottomSheet open={sheet} title={ui.settings} closeLabel={ui.close} onClose={closeSheet}>
        {settingsBody}
      </BottomSheet>
    </section>
  );
}

/**
 * Phones only: scales its child (a diagram drawn in fixed px, `natural` px tall) down to the height
 * this box gets from the one-screen layout. Desktop leaves it alone.
 */
function FitBox({ natural, children }: { natural: number; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const phone = window.matchMedia("(width < 860px)");
    const update = () => setZoom(phone.matches ? Math.max(0.4, Math.min(1, el.clientHeight / natural)) : 1);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    phone.addEventListener("change", update);
    update();
    return () => {
      ro.disconnect();
      phone.removeEventListener("change", update);
    };
  }, [natural]);
  return (
    <div ref={box} className="flex w-full justify-center max-[859px]:min-h-0 max-[859px]:flex-1 max-[859px]:items-center max-[859px]:overflow-hidden">
      <div className="flex w-full justify-center" style={{ zoom }}>
        {children}
      </div>
    </div>
  );
}

function TransposeButton({ label, text, semi, onClick }: { label: string; text: string; semi: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex size-12 flex-none cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full border-none bg-inset text-ink min-[860px]:size-[60px]"
    >
      <span className="text-[17px] leading-none font-bold">{text}</span>
      <span className="text-[10px] leading-none text-muted">{semi}</span>
    </button>
  );
}

const sx = (i: number) => +(12 + i * 15.2).toFixed(2);
const BOARD = "calc(12% - 20px)";
const BOARD_W = "calc(76% + 40px)";

function GuitarDiagram({ voicing, root, name, aria }: { voicing: Voicing; root: number; name: (pc: number) => string; aria: string }) {
  const fr = voicing.frets;
  const fretted = fr.filter((x): x is number => x !== null && x > 0);
  const maxF = fretted.length ? Math.max(...fretted) : 0;
  const base = maxF <= 4 ? 1 : Math.min(...fretted);
  const cy = (f: number) => 30 + (f - base + 0.5) * 44;
  const frets = Array.from({ length: 6 }, (_, k) => ({
    y: k === 0 ? (base === 1 ? 24 : 29) : 29 + k * 44,
    h: k === 0 && base === 1 ? 8 : 3,
    c: k === 0 && base === 1 ? "#E9DFC8" : "#8F959B",
  }));

  return (
    <div role="img" aria-label={aria} className="chord-diagram relative mt-2 h-[270px] w-full max-w-[420px]">
      <div className="absolute top-[30px] h-[240px] bg-wood-dark" style={{ left: BOARD, width: BOARD_W }} />
      {frets.map((f, k) => (
        <div key={k} className="absolute" style={{ left: BOARD, width: BOARD_W, top: f.y, height: f.h, background: f.c }} />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className="absolute top-[30px] h-[240px] -translate-x-1/2 bg-string"
          style={{ left: `${sx(i)}%`, width: i < 3 ? 2.5 - i * 0.25 : 1.5 }}
        />
      ))}
      {fr.map((f, i) =>
        f === null || f === 0 ? (
          <span
            key={`m${i}`}
            className="absolute top-0.5 w-6 -translate-x-1/2 text-center text-[17px] leading-5 font-semibold text-muted"
            style={{ left: `${sx(i)}%` }}
          >
            {f === null ? "×" : "○"}
          </span>
        ) : null,
      )}
      {base > 1 && (
        <span className="absolute left-0 top-[43px] text-right text-sm font-bold text-muted" style={{ width: "calc(12% - 28px)" }}>
          {base}fr
        </span>
      )}
      {voicing.barre && (
        <div
          className="absolute h-[34px] rounded-[17px] bg-accent"
          style={{
            left: `calc(${sx(voicing.barre.from)}% - 17px)`,
            width: `calc(${+((voicing.barre.to - voicing.barre.from) * 15.2).toFixed(2)}% + 34px)`,
            top: cy(voicing.barre.fret) - 17,
          }}
        />
      )}
      {fr.map((f, i) => {
        if (f === null || f === 0) return null;
        const pc = (OPEN_MIDI[i] + f) % 12;
        return (
          <span
            key={`d${i}`}
            className="absolute flex size-[34px] -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold tracking-[-0.02em] text-[#090A0A]"
            style={{ left: `${sx(i)}%`, top: cy(f) - 17, background: pc === root ? "#FFFFFF" : "var(--color-accent)" }}
          >
            {name(pc)}
          </span>
        );
      })}
    </div>
  );
}

function PianoDiagram({ notes, name, aria }: { notes: number[]; name: (pc: number) => string; aria: string }) {
  const on = new Set(notes);
  const { whites, blacks } = pianoKeys(notes[0]);
  return (
    <div
      role="img"
      aria-label={aria}
      className="chord-diagram relative mt-[30px] mb-10 box-border h-[200px] w-full max-w-[480px] overflow-hidden bg-black shadow-[0_0_0_8px_#000]"
    >
      {whites.map((w) => (
        <span
          key={w.midi}
          className="absolute top-0 box-border flex h-full w-[7.1429%] items-end justify-center rounded-b border-r-2 border-black pb-3 text-[10px] font-bold text-[#090A0A]"
          style={{ left: `${w.x}%`, background: on.has(w.midi) ? "var(--color-accent)" : "#EEEDF0" }}
        >
          {on.has(w.midi) ? name(w.pc) : ""}
        </span>
      ))}
      {blacks.map((b) => (
        <span
          key={b.midi}
          className="absolute top-0 h-[60%] w-[4.6%] rounded-b"
          style={{ left: `${b.x}%`, background: on.has(b.midi) ? "var(--color-accent)" : "#17191B" }}
        />
      ))}
    </div>
  );
}
