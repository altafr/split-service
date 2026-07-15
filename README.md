# split-service

A small, deliberately-scoped bill-splitting service written in TypeScript.
It exists to demonstrate OpenAI Codex in a live workshop: reading a real
codebase, diagnosing a bug, verifying a fix by running tests, and hardening
the service with parallel cloud agents.

All money is handled as **integer cents** to avoid floating-point rounding
problems.

## Public API

```ts
import { splitBill } from 'split-service';

splitBill(10000, 3); // -> per-person shares, in cents, for a $100 bill split 3 ways
```

## Running the tests

```bash
npm install
npm test
```

The test command pins the timezone (`TZ=America/New_York`) so timezone-sensitive
tests behave the same on every machine.

## Workshop branch map

This repo is structured as a set of branches, one per demo state.

| Branch | State | Used in |
| --- | --- | --- |
| `main` | Starting point. `splitBill` drops the leftover cent, so **one test fails**. | Project 2 (bug hunt) start |
| `finished-p2` | `splitBill` fixed with largest-remainder distribution. **All green.** | Project 2 fallback + Project 4 base |
| `you-do-challenge` | Adds a `daysUntilDue` function with a planted DST bug. **One test fails.** | Project 2 "you-do" practice |
| `you-do-solution` | `daysUntilDue` fixed. **All green.** | Facilitator reference |

### Suggested flow

1. **Project 2 (guided):** start on `main`, run `npm test`, show the one red
   test, and let Codex diagnose and fix it. `finished-p2` is the fallback.
2. **Project 2 (you-do):** attendees clone and `git checkout you-do-challenge`,
   then run Codex on the failing `daysUntilDue` test themselves.
3. **Project 4 (parallel agents):** push `finished-p2` to GitHub, connect Codex
   cloud, and run three independent tasks (edge-case tests, API docs, input
   validation) in parallel.

### Pushing to GitHub

```bash
git remote add origin <your-repo-url>
git push --all origin
```
