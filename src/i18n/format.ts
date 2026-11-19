/** Fill `{name}` placeholders. Kept apart from dictionary.ts so client code doesn't bundle every language. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
}
