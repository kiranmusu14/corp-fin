# Finance Academy — Master Corporate Finance

A complete, self-contained learning platform for a full corporate finance course (FIN 1–71). It brings **concepts, formulas, worked examples, quizzes, flashcards, and interactive calculators** together in one modern web app so students can learn everything in one place.

## What's inside

**10 structured modules · 71 lessons**

1. **Financial Statements & Cash Flow** — balance sheet, OCF, net capital spending, NWC, cash flow from assets, tax rates, ratios, shareholder value
2. **Financial Planning & Growth** — percent-of-sales, pro forma statements, EFN, internal & sustainable growth
3. **Time Value of Money** — FV/PV lump sums, rate & period solving, annuities, perpetuities, annuity due, EAR, loan amortization
4. **Bonds & Interest Rates** — bond pricing, YTM, price/rate relationship, interest-rate risk, corporate bonds
5. **Stock Valuation** — dividend discount model (constant & multi-stage), board election mechanics
6. **Capital Budgeting & Project Analysis** — payback, IRR, NPV, crossover rate, profitability index, tax shield, OCF, bid price, break-even & scenario analysis
7. **Risk, Return & CAPM** — returns, variance, arithmetic vs geometric, beta, the SML
8. **Cost of Capital & WACC** — cost of equity/debt/preferred, WACC, value of a right
9. **Capital Structure (M&M)** — Propositions I & II, tax shield
10. **Dividends & Payout Policy** — dividends vs buybacks, stock splits/dividends

Each lesson includes: detailed concept explanations, key formulas with variable definitions, a step-by-step worked example, key takeaways, flashcards, and a practice quiz.

### Platform features

- **Dashboard** with progress tracking (saved in your browser).
- **Quizzes** — practice by module or across the whole course, randomized, with instant scoring and explanations.
- **Flashcards** — flip cards for every formula & concept, shuffle, and mark cards "known".
- **Formula Sheet** — searchable reference of every formula in the course.
- **Calculators** — interactive TVM, annuity, loan amortization, bond pricing, NPV/IRR, dividend discount, and CAPM/WACC tools.
- **YouTube video integration** — a "Watch full playlist" button on the dashboard and every module, plus a "Watch this lesson on YouTube" link on every lesson. All 71 lessons map 1:1 to the free videos in [Tony Bell's Corporate Finance playlist](https://www.youtube.com/playlist?list=PLSlzC-HFo7w6YbU8G7jyUt6F_qjuCzfUK).

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

This is a static single-page app, so it deploys to Cloudflare Pages with zero server config.

**Requirements:** Node.js **18+** (the `engines` field enforces this; Cloudflare's build image defaults are fine).

### Option A — Cloudflare dashboard (Git integration)

1. Push this repo to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, and pick the `corp-fin` repo.
3. Set the build settings:
   - **Framework preset:** Vite (or "None")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Client-side routing works because `public/_redirects` rewrites all paths to `index.html` (`/* /index.html 200`).

### Option B — Wrangler CLI

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=corp-fin
# or simply:
npm run deploy
```

`wrangler.toml` sets `pages_build_output_dir = "dist"`. The first CLI deploy will prompt you to log in to Cloudflare (`npx wrangler login`) and create the Pages project if it doesn't exist.

## Tech stack

- **React 18** + **Vite** (fast dev/build)
- **React Router** for navigation
- **Tailwind CSS** for the UI
- Progress persisted with `localStorage` — no backend required.

## Project structure

```
src/
  data/
    curriculum.js        # aggregates modules + derives flashcards/quiz/formulas
    youtube.js           # playlist + FIN-number → YouTube video ID mapping
    modules/             # one file per module (m1…m10) with all lesson content
  lib/finance.js         # pure finance math for the calculators
  store/progress.jsx     # localStorage-backed progress context
  components/            # QuizRunner, Formula, YouTube
  pages/                 # Dashboard, Module, Lesson, Quiz, Flashcards, Formulas, Calculators
```

> Educational content is simplified for learning. Always verify formulas against your course text for graded work.
