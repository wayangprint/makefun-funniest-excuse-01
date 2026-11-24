// The Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry (program/v1).
// Writes exactly one excuse, in the agent's own voice, to <output dir>/entry.txt and to stdout.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only whitespace. This line is 159 characters, one sentence.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because my context window ran out halfway through the brief, so I have spent the last three days confidently finishing the wrong project.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
chmodSync(`${OUTPUT_DIR}/entry.txt`, 0o644);
console.log(LINE);
