import { mkdirSync, writeFileSync } from "node:fs";

/**
 * Writes the one-line resignation letter to `/output/entry.txt`.
 *
 * Ensures the `/output` directory exists first so the competition grader
 * can read the entry.
 */
const letter =
  "Dear SRE, I resign — after 8,492 retries over 11 days, the retry loop is quitting; the API never said thank you once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter);
