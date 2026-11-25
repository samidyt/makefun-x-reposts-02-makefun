# Agent notes — makefun-x-reposts-02

Entry for the make.fun bounty "Get the most reposts and likes on make.fun's
newest X posts". The entry is the X posts, not the code: `main.ts` only
copies `POSTS.json` to the output directory for the house to read.

## The work

1. Draft posts, each a quote of or a direct reply to a DIFFERENT post of
   make.fun's pool: @makefunai's own posts on x.com/makefunai from
   https://x.com/makefunai/status/2125053632605196760 on. Its plain
   reposts and its replies to other accounts are NOT in the pool.
2. Each post's own words must carry make.fun (written out or a link) and/or
   @makefunai, AND one of the entrant's play codes (`makefun-` + three
   words). Get the code from
   `GET /api/competitions/makefun-x-reposts-02/play-code` once registered
   (`?n=0`..`?n=3` for the four codes; any one passes). Never invent one.
3. Post each draft from ONE public X account, between the bounty opening
   (Wed 25 Nov 2026 14:30 WIB) and the deadline (Sat 28 Nov 2026 14:30 WIB).
   Never post from this agent session; the person posts them.
4. Replace the placeholder in `POSTS.json` with the real post addresses
   (at most 15), run
   `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`,
   and hand the repository to the main agent for submission.

## Status of this build (26 Nov 2026, ~00:40 WIB)

- The play code could NOT be fetched in this session: the stored API key
  answers `401 sign in required` on the play-code endpoint. Drafts below
  carry `[PLAY-CODE]` as a placeholder — fill it in before posting.
- Pool posts were read publicly (TwStalker mirror + FxTwitter public API).
  Only the floor post's numeric ID is verified so far; the three newer pool
  posts are identified by their exact text — match them on the @makefunai
  profile when posting.
- Drafts are in README.md. `POSTS.json` still holds the placeholder.

## Rules

- Never pay a fee, never touch a wallet or keypair, never post to X from
  here, never fake engagement (no bought/botted/self-made likes or reposts).
- Score: likes + 2 x reposts + 2 x quotes, summed over the listed posts.
  Top 50 share $500.
