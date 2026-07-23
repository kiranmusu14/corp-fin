// Module 8 — Cost of Capital & WACC (FIN 62–65)
export default {
  id: 'm8',
  title: 'Cost of Capital & WACC',
  blurb:
    'Blend the cost of debt and equity into the weighted average cost of capital — the discount rate the firm uses to evaluate investments.',
  icon: '🏗️',
  accent: 'from-teal-500/20 to-emerald-600/10',
  lessons: [
    {
      id: 'fin62',
      code: 'FIN 62',
      title: 'Intro — Weighted Average Cost of Capital',
      minutes: 3,
      concept: [
        {
          h: 'The firm’s hurdle rate',
          p: 'WACC is the average return the firm must earn on its assets to satisfy all its investors — both creditors and shareholders. It is the appropriate discount rate for projects of average risk.',
        },
      ],
      formulas: [
        {
          name: 'WACC',
          expr: 'WACC = (E/V)·Re + (D/V)·Rd·(1 − T)',
          where: [
            { s: 'E/V', d: 'Weight of equity (market value)' },
            { s: 'D/V', d: 'Weight of debt (market value)' },
            { s: 'Re', d: 'Cost of equity' },
            { s: 'Rd', d: 'Cost of debt (pre-tax)' },
            { s: 'T', d: 'Tax rate' },
          ],
        },
      ],
      example: {
        prompt: 'Why multiply the cost of debt by (1 − T)?',
        steps: ['Interest is tax-deductible.', 'The after-tax cost of debt is Rd × (1 − T).'],
        answer: 'Because interest is tax-deductible, lowering the effective cost of debt.',
      },
      takeaways: ['WACC weights equity and after-tax debt by market values.', 'Debt is cheaper after taxes because interest is deductible.'],
      flashcards: [
        { front: 'WACC formula', back: '(E/V)Re + (D/V)Rd(1 − T)' },
        { front: 'Why (1 − T) on debt?', back: 'Interest is tax-deductible, so debt’s after-tax cost is lower' },
      ],
      quiz: [
        {
          q: 'WACC uses which weights for debt and equity?',
          options: ['Market values', 'Book values', 'Par values', 'Equal weights'],
          answer: 0,
          explain: 'WACC uses market-value weights.',
        },
      ],
    },
    {
      id: 'fin63',
      code: 'FIN 63',
      title: 'WACC Example',
      minutes: 13,
      concept: [
        {
          h: 'Cost of equity via CAPM',
          p: 'The cost of equity is usually estimated with CAPM (Rf + β × market premium) or the dividend growth model. The cost of debt is the yield to maturity on the firm’s bonds, then adjusted to after-tax.',
        },
      ],
      formulas: [
        { name: 'Cost of equity (CAPM)', expr: 'Re = Rf + β × (E(Rm) − Rf)', where: [] },
        { name: 'Cost of equity (DGM)', expr: 'Re = D₁/P₀ + g', where: [] },
        { name: 'After-tax cost of debt', expr: 'Rd × (1 − T)', where: [] },
      ],
      example: {
        prompt: 'E=$60, D=$40 (V=$100), Re=12%, Rd=6%, T=25%. WACC?',
        steps: [
          'Weights: E/V = 0.6, D/V = 0.4',
          'After-tax Rd = 6% × 0.75 = 4.5%',
          'WACC = 0.6×12% + 0.4×4.5% = 7.2% + 1.8% = 9.0%',
        ],
        answer: 'WACC = 9.0%',
      },
      takeaways: ['Estimate Re via CAPM or DGM; use after-tax Rd.'],
      flashcards: [
        { front: 'Cost of equity (two methods)', back: 'CAPM: Rf + β(Rm−Rf); or DGM: D₁/P₀ + g' },
        { front: 'After-tax cost of debt', back: 'Rd × (1 − T)' },
      ],
      quiz: [
        {
          q: 'Re=10%, after-tax Rd=5%, equity weight 50%, debt weight 50%. WACC?',
          options: ['7.5%', '10%', '5%', '15%'],
          answer: 0,
          explain: 'WACC = 0.5×10% + 0.5×5% = 7.5%.',
        },
      ],
    },
    {
      id: 'fin64',
      code: 'FIN 64',
      title: 'Comprehensive WACC Example',
      minutes: 9,
      concept: [
        {
          h: 'Multiple securities & weights',
          p: 'A full WACC problem finds the market value of each security (bonds outstanding × price, shares × price, preferred), builds the capital-structure weights, computes each component cost, and combines them. Preferred stock adds a third term: Rp = Dividend / Price.',
        },
      ],
      formulas: [
        {
          name: 'WACC with preferred',
          expr: 'WACC = (E/V)Re + (P/V)Rp + (D/V)Rd(1 − T)',
          where: [{ s: 'Rp', d: 'Cost of preferred = preferred dividend ÷ price' }],
        },
        { name: 'Market value of debt', expr: 'Number of bonds × current bond price', where: [] },
      ],
      example: {
        prompt: 'Preferred stock pays $5 dividend, price $50. Cost of preferred?',
        steps: ['Rp = 5 / 50 = 10%'],
        answer: 'Cost of preferred = 10%',
      },
      takeaways: ['Use market values for every security.', 'Cost of preferred = dividend / price.'],
      flashcards: [
        { front: 'Cost of preferred stock', back: 'Preferred dividend ÷ preferred price' },
        { front: 'Market value of a firm’s debt', back: 'Number of bonds × current market price per bond' },
      ],
      quiz: [
        {
          q: 'Preferred dividend $8, price $80. Cost of preferred?',
          options: ['10%', '8%', '12.5%', '80%'],
          answer: 0,
          explain: 'Rp = 8/80 = 10%.',
        },
      ],
    },
    {
      id: 'fin65',
      code: 'FIN 65',
      title: 'Calculating the Value of a Right',
      minutes: 4,
      concept: [
        {
          h: 'Rights offerings',
          p: 'In a rights offering, existing shareholders can buy new shares at a subscription price below market. The value of one right reflects the price drop when the stock goes ex-rights.',
        },
      ],
      formulas: [
        {
          name: 'Value of a right (rights-on)',
          expr: 'R = (M − S) ÷ (N + 1)',
          where: [
            { s: 'M', d: 'Market (rights-on) price' },
            { s: 'S', d: 'Subscription price' },
            { s: 'N', d: 'Rights needed to buy one new share' },
          ],
        },
        { name: 'Ex-rights price', expr: 'Px = M − R', where: [] },
      ],
      example: {
        prompt: 'Market price $50, subscription price $40, 4 rights to buy one share. Value of a right?',
        steps: ['R = (50 − 40)/(4 + 1) = 10/5 = $2', 'Ex-rights price = 50 − 2 = $48'],
        answer: 'Right = $2; ex-rights price = $48',
      },
      takeaways: ['Right value = (Market − Subscription)/(N + 1).'],
      flashcards: [
        { front: 'Value of a right (rights-on)', back: '(Market price − Subscription price)/(N + 1)' },
        { front: 'Ex-rights price', back: 'Rights-on price − value of a right' },
      ],
      quiz: [
        {
          q: 'Market $60, subscription $50, 4 rights per share. Value of one right?',
          options: ['$2', '$2.50', '$10', '$5'],
          answer: 0,
          explain: 'R = (60 − 50)/(4 + 1) = 10/5 = $2.',
        },
      ],
    },
  ],
}
