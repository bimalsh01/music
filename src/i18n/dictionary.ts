import en from "@/messages/en.json";
import pt from "@/messages/pt.json";
import es from "@/messages/es.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import it from "@/messages/it.json";
import ja from "@/messages/ja.json";
import ko from "@/messages/ko.json";
import zh from "@/messages/zh.json";
import ru from "@/messages/ru.json";
import pl from "@/messages/pl.json";
import nl from "@/messages/nl.json";
import tr from "@/messages/tr.json";
import id from "@/messages/id.json";
import hi from "@/messages/hi.json";
import type { Locale } from "./routing";

export type Dictionary = typeof en;
export type TunerText = Dictionary["tuner"];
export type MetronomeText = Dictionary["metronome"];
export type ChordsText = Dictionary["chords"];

const DICTS: Record<Locale, Dictionary> = { en, pt, es, fr, de, it, ja, ko, zh, ru, pl, nl, tr, id, hi };

/** Typed messages for server components; slices are passed to client components as props. */
export function getDictionary(locale: Locale): Dictionary {
  return DICTS[locale];
}

export { format } from "./format";
