// ai-joke-03 entry: a program that writes one joke about AI coding agents.
//
// The joke is a single fixed line, so the program is deterministic: two runs in
// the grader's sandbox write byte-identical files, with no network and no clock.
//
// Node 22, standard library only. The grader mounts a writable /output; outside
// its container MAKEFUN_OUTPUT_DIR stands in for it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke. One line, no trailing newline: the judge reads exactly these bytes.
const JOKE =
  'My agent kept the old code commented out in case, and the comment says in case.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
