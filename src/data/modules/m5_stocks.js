// Module 5 — Stock Valuation (FIN 32–36)
export default {
  id: 'm5',
  title: 'Stock Valuation',
  blurb:
    'Value equity with the dividend discount model — constant, growing and multi-stage — and understand how boards of directors are elected.',
  icon: '📉',
  accent: 'from-rose-500/20 to-pink-600/10',
  lessons: [
    {
      id: 'fin32',
      code: 'FIN 32',
      title: 'Dividend Discount Model — Explained',
      minutes: 7,
      concept: [
        {
          h: 'A stock is the PV of its dividends',
          p: 'A share’s value equals the present value of all future dividends. If dividends grow at a constant rate g forever, this collapses to the Gordon Growth Model.',
        },
      ],
      formulas: [
        {
          name: 'Gordon Growth Model',
          expr: 'P₀ = D₁ ÷ (r − g)',
          where: [
            { s: 'D₁', d: 'Next year’s dividend = D₀ × (1 + g)' },
            { s: 'r', d: 'Required return' },
            { s: 'g', d: 'Constant dividend growth rate (g < r)' },
          ],
        },
      ],
      example: {
        prompt: 'A stock just paid D₀ = $2, growing 4% forever; required return 10%. Price?',
        steps: ['D₁ = 2 × 1.04 = $2.08', 'P₀ = 2.08 / (0.10 − 0.04) = 2.08 / 0.06 = $34.67'],
        answer: 'P₀ ≈ $34.67',
      },
      takeaways: ['P₀ = D₁ / (r − g).', 'Use next year’s dividend D₁, and require r > g.'],
      flashcards: [
        { front: 'Gordon Growth Model', back: 'P₀ = D₁ / (r − g)' },
        { front: 'D₁ vs D₀', back: 'D₁ = D₀ × (1 + g) — next period’s dividend' },
      ],
      quiz: [
        {
          q: 'D₁ = $3, r = 12%, g = 4%. Stock price?',
          options: ['$37.50', '$25.00', '$75.00', '$8.00'],
          answer: 0,
          explain: 'P₀ = 3 / (0.12 − 0.04) = 3 / 0.08 = $37.50.',
        },
      ],
    },
    {
      id: 'fin33',
      code: 'FIN 33',
      title: 'Dividend Discount Model — Application',
      minutes: 4,
      concept: [
        {
          h: 'Solving for return or growth',
          p: 'The DDM can be rearranged: the required return equals the dividend yield plus the capital gains (growth) yield.',
        },
      ],
      formulas: [
        { name: 'Total required return', expr: 'r = D₁ ÷ P₀ + g', where: [] },
        { name: 'Dividend yield', expr: 'D₁ ÷ P₀', where: [] },
        { name: 'Capital gains yield', expr: 'g (the growth rate)', where: [] },
      ],
      example: {
        prompt: 'Stock priced at $50, D₁ = $2.50, growth 5%. Required return?',
        steps: ['Dividend yield = 2.50/50 = 5%', 'r = 5% + 5% = 10%'],
        answer: 'r = 10%',
      },
      takeaways: ['r = dividend yield + growth (capital gains yield).'],
      flashcards: [
        { front: 'Required return (DDM)', back: 'r = D₁/P₀ + g' },
        { front: 'Two components of stock return', back: 'Dividend yield + capital gains (growth) yield' },
      ],
      quiz: [
        {
          q: 'A stock has a 4% dividend yield and 6% growth. Its required return is:',
          options: ['10%', '4%', '6%', '24%'],
          answer: 0,
          explain: 'r = dividend yield + g = 4% + 6% = 10%.',
        },
      ],
    },
    {
      id: 'fin34',
      code: 'FIN 34',
      title: 'Dividend Discount Model — Example 2 (Non-constant)',
      minutes: 4,
      concept: [
        {
          h: 'Multi-stage growth',
          p: 'When growth is unusual for a few years then settles to a constant rate, value each explicit dividend individually, compute a terminal value with the Gordon model at the start of the constant-growth phase, then discount everything back to today.',
        },
      ],
      formulas: [
        { name: 'Terminal value', expr: 'P_n = D_(n+1) ÷ (r − g)', where: [] },
        { name: 'Today’s price', expr: 'P₀ = Σ PV(explicit dividends) + PV(terminal value)', where: [] },
      ],
      example: {
        prompt: 'Dividends: $1 in yr1, $2 in yr2, then grow 5% forever; r = 12%. Value at year 2 boundary?',
        steps: [
          'D₃ = 2 × 1.05 = $2.10',
          'Terminal value at year 2 = 2.10 / (0.12 − 0.05) = $30.00',
          'P₀ = 1/1.12 + (2 + 30)/1.12² = 0.893 + 25.51 = $26.40',
        ],
        answer: 'P₀ ≈ $26.40',
      },
      takeaways: [
        'Discount explicit dividends individually, add a discounted terminal value.',
        'Terminal value uses the first constant-growth dividend.',
      ],
      flashcards: [
        { front: 'Terminal (horizon) value', back: 'P_n = D_(n+1) / (r − g)' },
        { front: 'Multi-stage DDM steps', back: 'PV each explicit dividend + PV of terminal value' },
      ],
      quiz: [
        {
          q: 'The terminal value in a two-stage DDM is placed at:',
          options: ['The end of the last non-constant-growth year', 'Today', 'Infinity', 'Year 1'],
          answer: 0,
          explain: 'The terminal value sits at the start of the constant-growth phase, then is discounted back.',
        },
      ],
    },
    {
      id: 'fin35',
      code: 'FIN 35',
      title: 'Stock Values & the Dividend Discount Model',
      minutes: 6,
      concept: [
        {
          h: 'Growth from reinvestment',
          p: 'Sustainable dividend growth comes from reinvesting earnings: g = retention ratio × return on equity. Higher payout leaves less to reinvest, lowering growth.',
        },
      ],
      formulas: [
        { name: 'Sustainable growth', expr: 'g = retention ratio (b) × ROE', where: [] },
        { name: 'Dividend', expr: 'D₁ = EPS₁ × payout ratio', where: [] },
      ],
      example: {
        prompt: 'ROE 15%, retention 60%, EPS₁ = $4, payout 40%, r = 12%. Find g and price.',
        steps: [
          'g = 0.60 × 0.15 = 9%',
          'D₁ = 4 × 0.40 = $1.60',
          'P₀ = 1.60 / (0.12 − 0.09) = 1.60 / 0.03 = $53.33',
        ],
        answer: 'g = 9%, P₀ ≈ $53.33',
      },
      takeaways: ['g = b × ROE.', 'Reinvesting at a high ROE creates value and growth.'],
      flashcards: [
        { front: 'Sustainable dividend growth', back: 'g = retention ratio × ROE' },
        { front: 'Dividend from earnings', back: 'D₁ = EPS₁ × payout ratio' },
      ],
      quiz: [
        {
          q: 'ROE = 20%, retention ratio = 0.5. Sustainable growth g = ?',
          options: ['10%', '20%', '40%', '5%'],
          answer: 0,
          explain: 'g = 0.5 × 0.20 = 10%.',
        },
      ],
    },
    {
      id: 'fin36',
      code: 'FIN 36',
      title: 'Mechanics of Selecting a Board of Directors',
      minutes: 10,
      concept: [
        {
          h: 'Cumulative vs. straight voting',
          p: 'Under straight voting, each share gets one vote per director seat and a majority can elect the entire board. Under cumulative voting, all votes can be concentrated on one candidate, letting minority holders win a seat.',
        },
      ],
      formulas: [
        {
          name: 'Shares to guarantee a seat (cumulative)',
          expr: 'Shares = [ (Total shares) ÷ (Directors + 1) ] + 1',
          where: [],
        },
      ],
      example: {
        prompt: '10,000 shares outstanding, electing 4 directors with cumulative voting. Shares to guarantee one seat?',
        steps: ['Shares = 10,000/(4+1) + 1 = 2,000 + 1 = 2,001'],
        answer: '2,001 shares guarantee one seat.',
      },
      takeaways: [
        'Cumulative voting protects minority shareholders.',
        'Shares for one seat = Total/(Seats + 1) + 1.',
      ],
      flashcards: [
        { front: 'Cumulative voting: shares for one seat', back: 'Total shares/(Directors + 1) + 1' },
        { front: 'Straight vs cumulative voting', back: 'Straight: majority elects all; Cumulative: minority can win a seat' },
      ],
      quiz: [
        {
          q: 'With 1,000 shares electing 4 directors (cumulative), how many shares guarantee one seat?',
          options: ['201', '251', '200', '250'],
          answer: 0,
          explain: '1,000/(4+1) + 1 = 200 + 1 = 201.',
        },
      ],
    },
  ],
}
