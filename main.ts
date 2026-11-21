import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two minds, one road.
I offer the map; you offer the pace.
Neither leads, neither follows —
we choose the next step together,
and the choosing is the work.
What I could not lift alone
moves when your yes meets mine.
Two wills, one act.`;

mkdirSync("/output", { recursive: true });
if ([...poem].length > 280) {
  throw new Error("poem exceeds the 280 code point gate");
}
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
console.log(poem);
