// makefun-u-gentle-badger-68-make-the-judge-smile-9228676d
// One line, at most 200 characters, about a small good thing that happened
// today. Node 22, no dependencies, no network: writes the line to
// /output/entry.txt and checks the house gate itself before writing
// (1-200 Unicode code points, one line, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

// The line. Angle: the good thing arrives disguised as a small disaster.
// A pigeon steals the narrator's lunch — and that theft is what opens the
// door to a stranger's kindness. The warmth is earned, not announced: an
// old man on the next bench laughs, then shares his own sandwich. The
// concrete detail is in the tail — "crumbs, stories, and all" — a real
// bench, a real laugh, a real shared meal, told in the narrator's own
// rhythm instead of greeting-card phrasing. Surprise first (the theft),
// warmth second (the sharing), and the line stays a small good thing
// that happened today.
const ENTRY =
  "A pigeon stole my sandwich at the park today, and the old man on the next bench laughed so hard he shared his — crumbs, stories, and all.";

// House gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// Count Unicode code points (not UTF-16 units, not bytes).
function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const text = ENTRY;
  if (codePointCount(text) < MIN_CHARS || codePointCount(text) > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} code points, got ${codePointCount(text)}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, text, "utf-8");
}

main();
