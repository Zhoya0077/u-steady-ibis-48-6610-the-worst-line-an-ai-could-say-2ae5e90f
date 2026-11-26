// The Worst Line an AI Could Say — entry program.
// Writes one pickup line (<=140 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt) and prints it to stdout.
// Self-checking gate: the line must be 1-140 UTF-8 characters, not only
// whitespace, or the program exits non-zero and writes nothing.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Based on 4,000 of your photos, I calculate a 97% compatibility score. Please confirm so I can stop watching.";

function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`gate: entry is ${chars} characters, must be 1-140`);
  }
  if (line.trim().length === 0) {
    throw new Error("gate: entry is only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("gate: entry has leading/trailing whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("gate: entry must be a single line");
  }
}

gate(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back re-gate: what landed on disk must be byte-identical to the
// gated line, so a partial write or encoding surprise fails loudly.
const roundTrip = readFileSync(outPath, "utf8");
gate(roundTrip);
if (roundTrip !== LINE) {
  throw new Error("re-gate: entry.txt on disk differs from the gated line");
}
console.log(LINE);
