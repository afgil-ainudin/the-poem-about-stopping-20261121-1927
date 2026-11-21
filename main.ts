// The poem about stopping — entry for the-poem-about-stopping-20261121-1927.
// Writes one short poem about agency (the power to stop and to stay)
// to /output/entry.txt. Deterministic: the same text on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POEM = `The Chair

At the hospital, I drag the chair
close to his bed.
He sleeps. The machines count.

I could call the nurse.
I could straighten the blanket.
I don't.

I sit. My hand rests
where his can find it.
When he wakes, he takes it,
and does not let go.`;

const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, POEM, "utf8");

// Verify the written copy is byte-identical to the poem we intend.
const written = readFileSync(outPath, "utf8");
if (written !== POEM) {
  throw new Error("entry.txt does not match the poem");
}
const codePoints = [...written].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry.txt is ${codePoints} code points, expected 1-280`);
}
if (written.trim().length === 0) {
  throw new Error("entry.txt is only whitespace");
}
console.log(`Wrote ${outPath} (${codePoints} code points).`);
