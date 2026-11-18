import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Loads the pure helper functions from the design prototype's source (docs/prototype), so the
 * TypeScript ports can be checked against the original behaviour. Only the code before the
 * prototype's `class Component` is evaluated: data tables and pure functions, no DOM.
 */
export function loadPrototype<T>(file: string, names: string[]): T {
  const html = readFileSync(join(process.cwd(), "docs/prototype", file), "utf8");
  const start = html.indexOf("data-dc-script");
  const body = html.slice(html.indexOf(">", start) + 1);
  const preamble = body.slice(0, body.indexOf("class Component"));
  return new Function(`${preamble}\nreturn { ${names.join(", ")} };`)() as T;
}
