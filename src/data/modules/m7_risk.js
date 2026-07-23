// Module 7 — Risk, Return & CAPM (FIN 52–61)
export default {
  id: 'm7',
  title: 'Risk, Return & CAPM',
  blurb:
    'Measure returns and variance, distinguish arithmetic from geometric averages, and price risk with beta and the Capital Asset Pricing Model.',
  icon: '⚖️',
  accent: 'from-indigo-500/20 to-blue-600/10',
  lessons: [
    {
      id: 'fin52',
      code: 'FIN 52',
      title: 'Calculating Returns & Variances',
      minutes: 4,
      concept: [
        {
          h: 'Return and its dispersion',
          p: 'A holding-period return combines income and capital gain. Variance and standard deviation measure how far actual returns spread around the average — the classic measure of total risk.',
        },
      ],
      formulas: [
        { name: 'Total return', expr: 'R = (Ending price − Beginning price + Income) ÷ Beginning price', where: [] },
        { name: 'Variance (historical)', expr: 'σ² = Σ (Rᵢ − R̄)² ÷ (n − 1)', where: [] },
        { name: 'Standard deviation', expr: 'σ = √variance', where: [] },
      ],
      example: {
        prompt: 'Buy at $50, sell at $54, receive $2 dividend. Total return?',
        steps: ['R = (54 − 50 + 2)/50 = 6/50 = 12%'],
        answer: 'Total return = 12%',
      },
      takeaways: ['Return = (price change + income)/beginning price.', 'σ measures total risk.'],
      flashcards: [
        { front: 'Total holding-period return', back: '(Ending − Beginning + Income)/Beginning' },
        { front: 'Standard deviation', back: 'Square root of the variance; measures total risk' },
      ],
      quiz: [
        {
          q: 'A stock rises from $100 to $110 and pays a $5 dividend. Total return?',
          options: ['15%', '10%', '5%', '11%'],
          answer: 0,
          explain: 'R = (110 − 100 + 5)/100 = 15/100 = 15%.',
        },
      ],
    },
    {
      id: 'fin53',
      code: 'FIN 53',
      title: 'Stock Returns',
      minutes: 9,
      concept: [
        {
          h: 'Dividend yield + capital gains yield',
          p: 'A stock’s total return splits into the dividend yield (income/price) and the capital gains yield (price change/price). Together they equal the holding-period return.',
        },
      ],
      formulas: [
        { name: 'Dividend yield', expr: 'D₁ ÷ P₀', where: [] },
        { name: 'Capital gains yield', expr: '(P₁ − P₀) ÷ P₀', where: [] },
        { name: 'Total return', expr: 'Dividend yield + Capital gains yield', where: [] },
      ],
      example: {
        prompt: 'P₀ = $40, P₁ = $44, dividend $1.20. Split the return.',
        steps: [
          'Dividend yield = 1.20/40 = 3%',
          'Capital gains yield = (44 − 40)/40 = 10%',
          'Total = 13%',
        ],
        answer: 'Dividend yield 3% + capital gains 10% = 13%',
      },
      takeaways: ['Total stock return = dividend yield + capital gains yield.'],
      flashcards: [
        { front: 'Dividend yield', back: 'D₁ / P₀' },
        { front: 'Capital gains yield', back: '(P₁ − P₀)/P₀' },
      ],
      quiz: [
        {
          q: 'Dividend yield 2%, capital gains yield 7%. Total return?',
          options: ['9%', '5%', '14%', '3.5%'],
          answer: 0,
          explain: '2% + 7% = 9%.',
        },
      ],
    },
    {
      id: 'fin54',
      code: 'FIN 54',
      title: 'Bond Returns',
      minutes: 11,
      concept: [
        {
          h: 'Total return on a bond',
          p: 'A bond’s holding-period return combines coupon income and the price change. When rates fall, prices rise, adding a capital gain on top of the coupon; when rates rise, capital losses can offset coupons.',
        },
      ],
      formulas: [
        { name: 'Bond total return', expr: '(Coupon + Price change) ÷ Beginning price', where: [] },
      ],
      example: {
        prompt: 'Buy a bond at $950, receive $80 coupon, sell at $1,000. Return?',
        steps: ['R = (80 + (1,000 − 950))/950 = 130/950 = 13.68%'],
        answer: 'Total return ≈ 13.68%',
      },
      takeaways: ['Bond return = (coupon + price change)/beginning price.'],
      flashcards: [
        { front: 'Bond holding-period return', back: '(Coupon income + price change)/beginning price' },
      ],
      quiz: [
        {
          q: 'A bond bought at $1,000 pays $60 coupon and ends at $980. Total return?',
          options: ['4%', '6%', '2%', '8%'],
          answer: 0,
          explain: 'R = (60 − 20)/1,000 = 40/1,000 = 4%.',
        },
      ],
    },
    {
      id: 'fin55',
      code: 'FIN 55',
      title: 'Variance Calculations (Expected Returns)',
      minutes: 12,
      concept: [
        {
          h: 'Using probabilities',
          p: 'With a probability distribution of states, the expected return is the probability-weighted average. Variance is the probability-weighted squared deviation from the expected return.',
        },
      ],
      formulas: [
        { name: 'Expected return', expr: 'E(R) = Σ pᵢ × Rᵢ', where: [] },
        { name: 'Variance', expr: 'σ² = Σ pᵢ × (Rᵢ − E(R))²', where: [] },
      ],
      example: {
        prompt: 'Boom (p=0.5, R=20%) and Bust (p=0.5, R=0%). Expected return & variance?',
        steps: [
          'E(R) = 0.5×20% + 0.5×0% = 10%',
          'σ² = 0.5×(20−10)² + 0.5×(0−10)² = 0.5×100 + 0.5×100 = 100 (%²)',
          'σ = 10%',
        ],
        answer: 'E(R) = 10%, σ = 10%',
      },
      takeaways: ['E(R) = Σ p·R.', 'σ² = Σ p·(R − E(R))².'],
      flashcards: [
        { front: 'Expected return (probabilities)', back: 'Σ pᵢ × Rᵢ' },
        { front: 'Variance (probabilities)', back: 'Σ pᵢ × (Rᵢ − E(R))²' },
      ],
      quiz: [
        {
          q: 'Two equally likely returns of 30% and 10%. Expected return?',
          options: ['20%', '15%', '40%', '10%'],
          answer: 0,
          explain: 'E(R) = 0.5×30% + 0.5×10% = 20%.',
        },
      ],
    },
    {
      id: 'fin56',
      code: 'FIN 56',
      title: 'Arithmetic & Geometric Returns',
      minutes: 13,
      concept: [
        {
          h: 'Two kinds of average',
          p: 'The arithmetic average is the simple mean of yearly returns — best for estimating a single future year. The geometric average is the compound annual return actually earned over the full period — best for describing historical performance. Geometric ≤ arithmetic.',
        },
      ],
      formulas: [
        { name: 'Arithmetic average', expr: '(R₁ + R₂ + … + Rₙ) ÷ n', where: [] },
        { name: 'Geometric average', expr: '[(1+R₁)(1+R₂)…(1+Rₙ)]^(1/n) − 1', where: [] },
      ],
      example: {
        prompt: 'Returns of +50% then −50%. Arithmetic vs geometric?',
        steps: [
          'Arithmetic = (50% − 50%)/2 = 0%',
          'Geometric = [(1.5)(0.5)]^(1/2) − 1 = 0.75^0.5 − 1 = −13.4%',
        ],
        answer: 'Arithmetic 0% vs geometric −13.4% (you actually lost money).',
      },
      takeaways: ['Geometric ≤ arithmetic.', 'Geometric reflects actual compound growth.'],
      flashcards: [
        { front: 'Arithmetic average return', back: 'Simple mean of the yearly returns' },
        { front: 'Geometric average return', back: '[(1+R₁)…(1+Rₙ)]^(1/n) − 1 (compound growth)' },
        { front: 'Which is larger?', back: 'Arithmetic ≥ geometric (equal only if returns are constant)' },
      ],
      quiz: [
        {
          q: 'The geometric average return is generally:',
          options: ['Less than or equal to the arithmetic average', 'Greater than the arithmetic average', 'Always zero', 'Equal to the median'],
          answer: 0,
          explain: 'Volatility drag makes geometric ≤ arithmetic.',
        },
      ],
    },
    {
      id: 'fin57',
      code: 'FIN 57',
      title: 'CAPM — Concept',
      minutes: 21,
      concept: [
        {
          h: 'Systematic risk and beta',
          p: 'Total risk splits into systematic (market) risk that cannot be diversified away, and unsystematic (firm-specific) risk that can. Only systematic risk, measured by beta, is rewarded. Beta measures how much a stock moves with the market (market beta = 1).',
        },
        {
          h: 'The Security Market Line',
          p: 'CAPM says expected return rises linearly with beta: the risk-free rate plus beta times the market risk premium. The line plotting this is the Security Market Line (SML).',
        },
      ],
      formulas: [
        {
          name: 'CAPM (SML)',
          expr: 'E(R) = Rf + β × (E(Rm) − Rf)',
          where: [
            { s: 'Rf', d: 'Risk-free rate' },
            { s: 'β', d: 'Beta — systematic risk' },
            { s: 'E(Rm) − Rf', d: 'Market risk premium' },
          ],
        },
      ],
      example: {
        prompt: 'Rf = 3%, market return 11%, beta 1.2. Expected return?',
        steps: ['Market risk premium = 11% − 3% = 8%', 'E(R) = 3% + 1.2 × 8% = 3% + 9.6% = 12.6%'],
        answer: 'E(R) = 12.6%',
      },
      takeaways: [
        'Only systematic risk (beta) is priced.',
        'E(R) = Rf + β × market risk premium.',
        'Diversification removes unsystematic risk.',
      ],
      flashcards: [
        { front: 'CAPM equation', back: 'E(R) = Rf + β(E(Rm) − Rf)' },
        { front: 'Beta measures', back: 'Systematic (market) risk relative to the market (market β = 1)' },
        { front: 'Market risk premium', back: 'E(Rm) − Rf' },
        { front: 'Diversifiable risk', back: 'Unsystematic / firm-specific risk (not rewarded)' },
      ],
      quiz: [
        {
          q: 'Rf = 4%, market risk premium 6%, beta 1.5. CAPM expected return?',
          options: ['13%', '10%', '15%', '9%'],
          answer: 0,
          explain: 'E(R) = 4% + 1.5 × 6% = 4% + 9% = 13%.',
        },
        {
          q: 'Which risk is NOT compensated with higher expected return?',
          options: ['Unsystematic (diversifiable) risk', 'Systematic risk', 'Market risk', 'Beta risk'],
          answer: 0,
          explain: 'Diversifiable risk can be eliminated, so it earns no premium.',
        },
      ],
    },
    {
      id: 'fin58',
      code: 'FIN 58',
      title: 'CAPM — Expected Returns, Variances & Std Devs',
      minutes: 5,
      concept: [
        {
          h: 'Portfolio expected return',
          p: 'A portfolio’s expected return is the weighted average of the assets’ expected returns. Its beta is likewise the weighted average of the assets’ betas.',
        },
      ],
      formulas: [
        { name: 'Portfolio return', expr: 'E(Rp) = Σ wᵢ × E(Rᵢ)', where: [] },
        { name: 'Portfolio beta', expr: 'βp = Σ wᵢ × βᵢ', where: [] },
      ],
      example: {
        prompt: '60% in a stock with E(R)=15%, 40% in one with E(R)=8%. Portfolio return?',
        steps: ['E(Rp) = 0.6×15% + 0.4×8% = 9% + 3.2% = 12.2%'],
        answer: 'E(Rp) = 12.2%',
      },
      takeaways: ['Portfolio return and beta are weighted averages of components.'],
      flashcards: [
        { front: 'Portfolio expected return', back: 'Σ wᵢ × E(Rᵢ)' },
        { front: 'Portfolio beta', back: 'Σ wᵢ × βᵢ (weighted average of betas)' },
      ],
      quiz: [
        {
          q: 'Half in beta 0.8, half in beta 1.4. Portfolio beta?',
          options: ['1.1', '2.2', '0.6', '1.4'],
          answer: 0,
          explain: 'βp = 0.5×0.8 + 0.5×1.4 = 1.1.',
        },
      ],
    },
    {
      id: 'fin59',
      code: 'FIN 59',
      title: 'CAPM & Expected Returns',
      minutes: 3,
      concept: [
        {
          h: 'Under/overvalued via the SML',
          p: 'If an asset’s expected return plots above the SML, it offers more return than its beta requires — it is underpriced (buy). Below the SML it is overpriced.',
        },
      ],
      formulas: [
        { name: 'Rule', expr: 'Above SML → underpriced; below SML → overpriced', where: [] },
      ],
      example: {
        prompt: 'CAPM says a stock should return 10% but analysts expect 13%. Verdict?',
        steps: ['Expected (13%) > required (10%), plots above the SML.', 'The stock is underpriced — attractive.'],
        answer: 'Underpriced (buy).',
      },
      takeaways: ['Above the SML = underpriced; below = overpriced.'],
      flashcards: [
        { front: 'Asset plots above the SML', back: 'Underpriced — expected return exceeds required (buy)' },
        { front: 'Asset plots below the SML', back: 'Overpriced — expected return below required (sell)' },
      ],
      quiz: [
        {
          q: 'A stock whose expected return is below its CAPM required return is:',
          options: ['Overpriced', 'Underpriced', 'Fairly priced', 'Risk-free'],
          answer: 0,
          explain: 'Below the SML means it does not reward its risk — overpriced.',
        },
      ],
    },
    {
      id: 'fin60',
      code: 'FIN 60',
      title: 'More CAPM & Expected Returns',
      minutes: 11,
      concept: [
        {
          h: 'Solving for missing pieces',
          p: 'CAPM can be rearranged to solve for beta, the risk-free rate or the market premium when the other inputs are known — a common exam task.',
        },
      ],
      formulas: [
        { name: 'Solve for beta', expr: 'β = (E(R) − Rf) ÷ (E(Rm) − Rf)', where: [] },
      ],
      example: {
        prompt: 'E(R)=14%, Rf=4%, market premium 8%. Implied beta?',
        steps: ['β = (14% − 4%)/8% = 10%/8% = 1.25'],
        answer: 'β = 1.25',
      },
      takeaways: ['Rearrange CAPM to isolate beta, Rf, or the premium.'],
      flashcards: [
        { front: 'Solve CAPM for beta', back: 'β = (E(R) − Rf)/(E(Rm) − Rf)' },
      ],
      quiz: [
        {
          q: 'E(R)=12%, Rf=2%, market premium 5%. Implied beta?',
          options: ['2.0', '1.0', '2.4', '0.5'],
          answer: 0,
          explain: 'β = (12% − 2%)/5% = 10%/5% = 2.0.',
        },
      ],
    },
    {
      id: 'fin61',
      code: 'FIN 61',
      title: 'CAPM Calculations (Comprehensive)',
      minutes: 7,
      concept: [
        {
          h: 'Putting CAPM to work',
          p: 'A complete CAPM problem may require finding a portfolio beta, then its required return, and judging whether a target return is achievable given the risk-free asset and the market.',
        },
      ],
      formulas: [
        { name: 'Weight in risk-free to hit target beta', expr: 'βp = w_risky × β_risky (risk-free has β = 0)', where: [] },
      ],
      example: {
        prompt: 'You want portfolio beta 0.75 combining a stock (β=1.5) and a risk-free asset. Weights?',
        steps: ['0.75 = w × 1.5 → w = 0.50 in the stock', '0.50 in the risk-free asset'],
        answer: '50% stock, 50% risk-free.',
      },
      takeaways: ['Risk-free asset has beta 0; mix it with a risky asset to target any beta.'],
      flashcards: [
        { front: 'Beta of the risk-free asset', back: 'Zero' },
        { front: 'Targeting a portfolio beta', back: 'βp = weight in risky asset × its beta' },
      ],
      quiz: [
        {
          q: 'To get a portfolio beta of 1.0 using a stock with beta 2.0 and a risk-free asset, invest in the stock:',
          options: ['50%', '100%', '25%', '75%'],
          answer: 0,
          explain: '1.0 = w × 2.0 → w = 0.5 (50%).',
        },
      ],
    },
  ],
}
