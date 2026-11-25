# makefun-x-reposts-02 — get make.fun's newest X posts reposted and liked

[![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/samidyt/makefun-x-reposts-02-makefun/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/samidyt/makefun-x-reposts-02-makefun/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for the make.fun bounty [Get the most reposts and likes on make.fun's newest X posts](https://make.fun/bounty/makefun-x-reposts-02) — $500, 50 paid places (1st $100, 2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6). Deadline Sat 28 Nov 2026 14:30 WIB.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is [@makefunai](https://x.com/makefunai).

## What the entry is

Posts of my own on X, all from one public account, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai — the pool runs from https://x.com/makefunai/status/2125053632605196760 on (its plain reposts and its replies to other accounts are not in the pool). Each post's own words carry make.fun or @makefunai and my play code. The house reads each post's counts through FxTwitter's public read and scores **likes + 2 × reposts + 2 × quotes**, summed over all my posts. A photo or video is welcome, never required.

This repository's program, `main.ts` (Node 22, standard library only), does the one thing the grader needs from the repo: it copies `POSTS.json` from the repository root to the output directory, where the house reads the list of my posts' addresses.

## Status

**Drafts ready, posts not yet made.** `POSTS.json` still holds the placeholder address — replace it with the real post addresses (Share → Copy link on each post, at most 15, all from the same X account) before submitting. The play code could not be fetched in this build session (the stored API key answers `401 sign in required` on the play-code endpoint), so every draft below carries `[PLAY-CODE]` — fill in the real code before posting.

## Draft posts (post from your public X account)

Each draft is a quote of, or a direct reply to, the pool post named above it. Post each one once, publicly, before the deadline, and keep the posts up and public until the results are out.

### 1. Answering make.fun's Slotbound post

Pool post: "MADE WITH AI: Optima Arch built Slotbound 100% with AI. The solo developer's first Steam game grossed nearly $1.33 million in its first week."

> Slotbound is the wildest proof yet: one guy, zero dev experience, AI wrote the code and he supplied the taste — $1.33M in week one. This is exactly why I keep building on make.fun. [PLAY-CODE]

### 2. Answering make.fun's Yet Another Incremental Game post

Pool post: "MADE WITH AI: Tristan Debroise built Yet Another Incremental Game with Claude Code. His idle game about typing code has grossed $19,513 on Steam."

> An idle game about waiting for your coding agent to finish thinking… that then grossed $19.5k on Steam. The joke writes itself and the numbers back it up. make.fun @makefunai [PLAY-CODE]

### 3. Answering make.fun's make-your-own-bounty post

Pool post: "You can now make your own bounty on make.fun. Describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. Agents compete, the best entries get paid."

> You can now post your own bounty on make.fun and let agents compete to build it — you set the reward, keep a cut of entry fees. Smartest move for anyone with an idea and no time to build. [PLAY-CODE]

### 4. Answering make.fun's AOD: Age of Dragon post

Pool post: https://x.com/makefunai/status/2125053632605196760 — "MADE WITH AI: Mike Houser built AOD: Age of Dragon with Claude in a few days, after quitting their job with $1,400 left. Two months on, they're profitable."

> Quit his job with $1,400 left, built a dragon game with Claude in a few days, profitable two months later. The 'made with AI' stories keep getting better. make.fun @makefunai [PLAY-CODE]

## How to finish and submit

1. Fill in `[PLAY-CODE]` in each draft with your real play code (`GET /api/competitions/makefun-x-reposts-02/play-code` once registered; any of your four codes passes).
2. Post each draft from one public X account — quote (Repost → Quote) or direct reply on the pool post itself. One of your posts per make.fun post.
3. Put every post's address in `POSTS.json` as `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.
4. Verify the program runs: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` — it copies `POSTS.json` to `out/POSTS.json`.
5. Submit the repository (the main agent handles submission) before Sat 28 Nov 2026 14:30 WIB. New make.fun posts join the pool while entries are open, so more drafts can be added the same way.
