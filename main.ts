// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Concept (creative-director phases): insight — a vacuum navigates by lidar,
// bumper and brush roll, not by eyes, so it confidently misclassifies a sock
// as debris; the joke is the deadpan escalation across its three sensors,
// ending in corporate-speak from the dumbest part of the machine.
// 12 candidates were drafted; warmups 1-3 (dust bunny, "it was on the floor",
// "not my fault") were killed as first-thought clichés. The winner passed the
// specificity test: replace the vacuum with any other robot and the joke dies,
// because only a vacuum has a lidar, a bumper and a brush roll that can make
// an "executive decision". Deterministic: one fixed string, no randomness,
// no I/O besides writing the output file.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My lidar missed your sock, my bumper nudged it, and my brush roll made an executive decision.";

// Gate guard: the entry must be 1-200 UTF-8 characters, not whitespace only.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
