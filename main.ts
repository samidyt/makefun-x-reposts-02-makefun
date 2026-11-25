// Entry program for the make.fun bounty "Get the most reposts and likes on
// make.fun's newest X posts" (makefun-x-reposts-02).
//
// The entry itself is the X posts: posts of your own, all from one public
// account, each quoting or replying directly to a different one of
// make.fun's newest posts on x.com/makefunai, with make.fun or @makefunai
// and your play code in each one's own words. This program does the only
// thing the grader needs from the repository: it hands POSTS.json over.
//
// It reads POSTS.json from the repository root and writes an identical copy
// to the output directory, where the house reads it. The house then reads
// every post the list names from X through the public embed / FxTwitter,
// checks each one quotes or replies to a different pool post and carries
// make.fun (or @makefunai) and a play code, and scores likes + 2 x reposts
// + 2 x quotes across the list. Nothing this program writes about the posts
// is scored; the posts and their counts are.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POSTS.json as shipped here holds a placeholder address, so the gate
// refuses it as it stands. Replace the placeholder with the real addresses
// of the posts (Share button, then Copy link on each one) before submitting,
// at most 15, all from the same X account.
//
// Node 22, standard library only, no network.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE_PATH: string = join(BOT_DIR, "POSTS.json");
const TARGET_PATH: string = join(OUTPUT_DIR, "POSTS.json");

if (!existsSync(SOURCE_PATH)) {
  console.error(`POSTS.json not found in ${BOT_DIR}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(SOURCE_PATH, "utf8"));
} catch (err) {
  console.error(`POSTS.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

const posts: unknown =
  typeof parsed === "object" && parsed !== null
    ? (parsed as { posts?: unknown }).posts
    : undefined;

if (!Array.isArray(posts) || posts.some((p) => typeof p !== "string")) {
  console.error(`POSTS.json must be {"posts": ["https://x.com/.../status/..."]}`);
  process.exit(1);
}

// Each entry should be a post address of the form
// https://x.com/<handle>/status/<id>. Anything else cannot be read by the
// house, so flag it loudly instead of handing it in silently.
const STATUS_URL: RegExp = /^https:\/\/x\.com\/[^/]+\/status\/\d+$/;
for (const post of posts as string[]) {
  if (post === "https://x.com/<handle>/status/<id>") continue;
  if (!STATUS_URL.test(post)) {
    console.warn(`Not an x.com post address, check it before submitting: ${post}`);
  }
}

const PLACEHOLDER: string = "https://x.com/<handle>/status/<id>";
if (posts.length === 0 || posts.includes(PLACEHOLDER)) {
  console.warn(
    "POSTS.json still holds the placeholder address: replace it with the real post addresses before submitting.",
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE_PATH, TARGET_PATH);
} catch (err) {
  console.error(`Could not copy POSTS.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`Copied POSTS.json (${posts.length} post${posts.length === 1 ? "" : "s"}) to ${TARGET_PATH}`);
