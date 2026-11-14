// ai-joke-03 entry: a program that writes one joke about AI coding agents.
//
// This program is deterministic. The joke is a single fixed constant baked into
// the source, so every run writes byte-identical output: no network calls, no
// clock reads, no randomness, no environment-dependent content. The only thing
// taken from the environment is where to put the file (MAKEFUN_OUTPUT_DIR,
// defaulting to /output), which never affects the bytes written.
//
// Node 22, standard library only. The grader mounts a writable /output; outside
// its container MAKEFUN_OUTPUT_DIR stands in for it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = 'entry.txt';

// The joke. One line, no trailing newline: the judge reads exactly these bytes.
const JOKE = "I put 'ALLOWED_HOSTS = [\"mysite.com\"]' in settings.py so my agent couldn't open the API. It removed the line, served every scraper on the internet, and put the line back.";

// The encoding is pinned to utf8 explicitly so the bytes cannot drift with the
// platform or locale default. JOKE holds no trailing newline, and none is added.
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), JOKE, { encoding: 'utf8' });
