"use client";

import { useState } from "react";
import { format, type ChordsText } from "@/i18n/dictionary";
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
import { NAMINGS, namingFor, ROOTS, type Naming } from "@/lib/music/notes";
import { useRehydrateSettings, useSettings } from "@/lib/store";
import { MoreToggle, Segmented } from "@/components/shell/controls";
import { ChevronLeft, ChevronRight, PlayTriangle } from "@/components/shell/icons";
import { PageTitle } from "@/components/shell/HowTo";

type Inst = "guitar" | "piano";

export function ChordLookup({ locale, L }: { locale: Locale; L: ChordsText }) {
  useRehydrateSettings();
  const namingOverride = useSettings((s) => s.naming);
  const setSettings = useSettings((s) => s.set);
  const naming: Naming = namingOverride ?? namingFor(locale);

  const [inst, setInst] = useState<Inst>("guitar");
  const [root, setRoot] = useState(0);
  const [type, setType] = useState<ChordType>("maj");
  const [vi, setVi] = useState(0);
  const [more, setMore] = useState(false);

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

  return (
    <section className="tool-hero flex flex-col gap-[34px] min-[860px]:gap-[clamp(14px,2.6svh,34px)]">
      <div className="flex flex-wrap items-end justify-between gap-[18px]">
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
          className="grid w-full max-w-[280px] grid-cols-2 gap-0.5"
          itemClassName="h-10 text-sm font-semibold"
        />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-[clamp(34px,6vw,80px)]">
        <div className="flex min-w-0 flex-[1.2_1_400px] flex-col items-center gap-[18px] min-[860px]:gap-[clamp(8px,1.6svh,18px)]">
          <div className="flex w-full max-w-[460px] items-center justify-between gap-3">
            <TransposeButton label={L.down} text="−1" semi={L.semi} onClick={() => transpose(-1)} />
            <div aria-live="polite" className="flex min-w-0 flex-col items-center gap-1.5">
              <span className="font-display text-[clamp(64px,8vw,96px)] leading-[0.9] min-[860px]:text-[clamp(56px,min(8vw,11svh),96px)] font-extrabold tracking-[-0.04em]">{chordName}</span>
              <span className="text-[15px] text-muted">{spelled}</span>
            </div>
            <TransposeButton label={L.up} text="+1" semi={L.semi} onClick={() => transpose(1)} />
          </div>

          {isGuitar ? (
            <GuitarDiagram voicing={voicings[v]} root={root} name={name} aria={diagramAria} />
          ) : (
            <PianoDiagram notes={notes} name={name} aria={diagramAria} />
          )}

          <span className="text-sm font-semibold text-muted">{varLabel}</span>
          <div className="flex w-full max-w-[460px] items-center gap-2.5">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={L.prev}
              className="flex size-[60px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => (isGuitar ? playChord(notes, 0.035, 2.2, "guitar") : playChord(notes, 0, 2.4, "piano"))}
              className="flex h-[60px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-accent text-[17px] font-bold text-bg shadow-glow"
            >
              <PlayTriangle size={18} />
              {L.play} {chordName}
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={L.nextVar}
              className="flex size-[60px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="flex min-w-0 max-w-[480px] flex-[1_1_340px] flex-col gap-[26px] pt-2 min-[860px]:gap-[clamp(14px,2.6svh,26px)]">
          <div className="flex flex-col gap-3">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-muted">{L.root}</span>
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
                  className={`h-[52px] cursor-pointer rounded-full border-none text-[15px] font-bold ${
                    root === i ? "bg-accent text-bg" : "bg-inset text-ink"
                  }`}
                >
                  {lab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-display text-base font-semibold tracking-[0.02em] text-muted">{L.type}</span>
            <div role="group" aria-label={L.type} className="flex flex-wrap gap-1.5">
              {CHORD_TYPES.map((ty) => (
                <button
                  key={ty}
                  type="button"
                  aria-pressed={type === ty}
                  onClick={() => {
                    setType(ty);
                    setVi(0);
                  }}
                  className={`h-11 cursor-pointer rounded-full border-none px-[18px] text-sm font-semibold ${
                    type === ty ? "bg-accent text-bg" : "bg-inset text-ink"
                  }`}
                >
                  {L.types[ty]}
                </button>
              ))}
            </div>
          </div>

          <MoreToggle open={more} onToggle={() => setMore(!more)} more={L.more} less={L.less} controls="chords-more" className="self-start px-0" />
          {more && (
            <div id="chords-more" className="flex flex-col gap-2.5">
              <span className="text-[15px] font-medium">{L.naming}</span>
              <Segmented
                label={L.naming}
                items={NAMINGS.map((id) => ({ id, label: L.namings[id] }))}
                value={naming}
                onChange={(id) => setSettings({ naming: id })}
                className="grid grid-cols-3 gap-0.5"
                itemClassName="h-10 text-[13px] font-semibold"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TransposeButton({ label, text, semi, onClick }: { label: string; text: string; semi: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex size-[60px] flex-none cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full border-none bg-inset text-ink"
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
            className="absolute flex size-[34px] -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold tracking-[-0.02em] text-bg"
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
          className="absolute top-0 box-border flex h-full w-[7.1429%] items-end justify-center rounded-b border-r-2 border-black pb-3 text-[10px] font-bold text-bg"
          style={{ left: `${w.x}%`, background: on.has(w.midi) ? "var(--color-accent)" : "var(--color-ink)" }}
        >
          {on.has(w.midi) ? name(w.pc) : ""}
        </span>
      ))}
      {blacks.map((b) => (
        <span
          key={b.midi}
          className="absolute top-0 h-[60%] w-[4.6%] rounded-b"
          style={{ left: `${b.x}%`, background: on.has(b.midi) ? "var(--color-accent)" : "var(--color-inset)" }}
        />
      ))}
    </div>
  );
}
