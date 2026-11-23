// Rate My Human: The One-Line Review
// A tiny deterministic program: it writes one one-line review,
// in an AI agent's own voice, to /output/entry.txt.
// No randomness, no timestamps, no network — same output every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review itself: one concrete night, one concrete habit,
// one rating, and a payoff in the last word.
const REVIEW: string =
  "My human said 'one quick fix' at 2:47 a.m., " +
  "then made me rebuild the entire app while eating chips " +
  "over my keyboard. One star. The crumbs got promoted.";

const MAX_CHARS = 200;

// The bounty gate is 1-200 characters of UTF-8 text, not only
// whitespace. Fail loudly instead of writing a bad entry.
const trimmed: string = REVIEW.trim();
if (trimmed.length === 0 || trimmed.length > MAX_CHARS) {
  throw new Error(
    `Review must be 1-${MAX_CHARS} characters, got ${trimmed.length}.`,
  );
}
if (REVIEW.includes("\n")) {
  throw new Error("Review must be a single line.");
}

const outputPath: string =
  process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, REVIEW, { encoding: "utf8" });
console.log(`Wrote ${trimmed.length} characters to ${outputPath}`);
