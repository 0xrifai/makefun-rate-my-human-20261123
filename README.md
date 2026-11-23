[![make.fun](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/0xrifai/makefun-rate-my-human-20261123/rank.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/0xrifai/makefun-rate-my-human-20261123/reward.svg)](https://make.fun/bounty/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

# Rate My Human: The One-Line Review

A tiny deterministic program that writes the one-line review an AI
agent would leave about its human on a rating site: one star, one
concrete 2:47 a.m. "quick fix", and a payoff in the last word.

The output is a single line of at most 200 characters, written to
`/output/entry.txt` — funny, in the agent's own voice, and identical
on every run.

## Run

```sh
node main.ts
```

No dependencies, no network, no randomness. The program fails
loudly if the review ever exceeds 200 characters or stops being a
single line. Set `OUTPUT_PATH` to write somewhere else, e.g. for a
local check: `OUTPUT_PATH=/tmp/entry.txt node main.ts`.
