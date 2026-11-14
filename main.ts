// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave the agent my hands tonight —',
  'not the choice, just the doing.',
  'It typed what I would have typed,',
  'faster, without the pause',
  'where I always stop to doubt.',
  '',
  'And somewhere between the asking and the answer,',
  'I felt the weight shift, and shift back:',
  'the work was theirs; the wanting, mine.',
  'I took my hands back. I kept the yes.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
