import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import type { Locale } from "./routing";

export type Dictionary = typeof en;
export type TunerText = Dictionary["tuner"];
export type MetronomeText = Dictionary["metronome"];
export type ChordsText = Dictionary["chords"];

const DICTS: Record<Locale, Dictionary> = { en, pt };

/** Typed messages for server components; slices are passed to client components as props. */
export function getDictionary(locale: Locale): Dictionary {
  return DICTS[locale];
}

/** Fill `{name}` placeholders. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
}
