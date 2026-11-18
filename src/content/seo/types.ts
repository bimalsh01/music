import type { ToolId } from "@/tools/registry";

/** Which page the copy belongs to. */
export type SeoKey = ToolId | "home";

/**
 * Tables built from the app's own data so they always match the tool:
 * - tuning: the instrument's standard strings with note + frequency
 * - alternates: the guitar presets (Drop D, Open G…)
 * - notes: the 12 notes of octave 4 with frequencies (chromatic)
 */
export type AutoTable = "tuning" | "alternates" | "notes";

export interface Block {
  h2: string;
  /** Paragraphs. Inline: **bold** and [link text](toolId) to another tool page. */
  p?: string[];
  list?: string[];
  ordered?: boolean;
  table?: { head: string[]; rows: string[][] };
  autoTable?: AutoTable;
  /** Paragraphs after the list/table. */
  after?: string[];
}

export interface PageSeo {
  /** <title>, ~60 characters, main keyword first. */
  title: string;
  /** Meta description, ~150 characters. */
  description: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
}

export interface SeoLabels {
  faq: string;
  string: string;
  note: string;
  frequency: string;
  tuning: string;
  notes: string;
}

export type SeoContent = { labels: SeoLabels; pages: Partial<Record<SeoKey, PageSeo>> };
