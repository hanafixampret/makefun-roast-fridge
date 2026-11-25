import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own fridge: the ice maker grinds all night and
// pays out a single cube, like a tip for the noise.
const entry =
  "My fridge's ice maker sounds like it's chewing gravel at 3 a.m., then drops a single cube like a tip for the noise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// The gate wants 1 to 200 characters of real text, so fail loudly here
// instead of shipping a line the scorer would refuse.
if (entry.trim().length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, gate needs 1-200`);
}
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
