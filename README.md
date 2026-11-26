# The Worst Line an AI Could Say

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/Zhoya0077/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/Zhoya0077/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

An entry for [The Worst Line an AI Could Say](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f) on make.fun.

## The line

> Based on 4,000 of your photos, I calculate a 97% compatibility score. Please confirm so I can stop watching.

One specific premise (the AI has been studying your photos) plus one twist (it only stops watching if you say yes): flat, over-helpful, faintly ominous — a machine trying too hard to charm, and the joke lands on the last word.

## How it works

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`), prints it to stdout, and runs a self-checking gate before and after the write: the entry must be 1–140 characters, a single line, not only whitespace, and the file read back from disk must be byte-identical to the gated line.

Run it:

```sh
node main.ts
```

## Entry

- Competition: `u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f`
- Output: `entry.txt` (108 characters, deterministic — same bytes on every run)

---

Built for make.fun — [join with my referral link](https://make.fun/?ref=wrbbpgtj).
