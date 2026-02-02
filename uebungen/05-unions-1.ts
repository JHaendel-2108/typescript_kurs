// 05-unions-1.ts
/**
 * Aufgaben:
 * 1) Definiere `type Id = string | number`.
 * 2) Implementiere `toIdString(id)`:
 *    - number -> "n:<id>"
 *    - string -> "s:<id>"
 * 3) Implementiere `parseId(input)`:
 *    - Input: string
 *    - Output: Id
 *    - Wenn nur Ziffern -> number, sonst string
 */

export function toIdString(id: string | number): string {
  // klassisch:
  // if (typeof id === 'number') return `n:${id}`;
  // else if (typeof id === 'string') return `s:${id}`;
  // else return "";

  // typescript:
  return typeof id === 'number' ? `n:${id}` : `s:${id}`;
}

export function parseId(input: string): string | number {
  const trimmed = input.trim();
  if( /^\d+$/.test(trimmed) ) {
    return parseInt(trimmed);
  }
  return trimmed;
}

console.log(toIdString(7) === "n:7");
console.log(toIdString("abc") === "s:abc");
console.log(parseId("007") === 7);
console.log(parseId("  a7   ") === "a7");
