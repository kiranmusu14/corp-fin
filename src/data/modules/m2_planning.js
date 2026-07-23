// Module 2 — Financial Planning & Growth (FIN 9–13)
export default {
  id: 'm2',
  title: 'Financial Planning & Growth',
  blurb:
    'Project the future: build pro forma statements, compute external financing needed, and find how fast a firm can grow without over-borrowing.',
  icon: '📈',
  accent: 'from-emerald-500/20 to-teal-600/10',
  lessons: [
    {
      id: 'fin9',
      code: 'FIN 9',
      title: 'Projecting Financial Statements',
      minutes: 15,
      concept: [
        {
          h: 'The percent-of-sales method',
          p: 'Most planning starts with a sales forecast. Items that vary with sales (costs, current assets, current liabilities, sometimes fixed assets) are expressed as a percent of sales and scaled to the projected sales level. Items that do not vary with sales (long-term debt, dividends policy) are handled separately.',
        },
      ],
      formulas: [
        { name: 'Projected item', expr: 'Forecast item = (Item ÷ Current sales) × Projected sales', where: [] },
        { name: 'Dividend payout ratio', expr: 'Dividends ÷ Net income', where: [] },
        { name: 'Retention (plowback) ratio', expr: 'b = 1 − Payout ratio = Addition to RE ÷ Net income', where: [] },
      ],
      example: {
        prompt: 'Current sales $1,000, costs are 70% of sales. Project costs if sales rise 20%.',
        steps: ['Projected sales = 1,000 × 1.20 = $1,200', 'Projected costs = 70% × 1,200 = $840'],
        answer: 'Projected costs = $840',
      },
      takeaways: [
        'Percent-of-sales scales variable items with the sales forecast.',
        'Retention ratio b = 1 − dividend payout.',
      ],
      flashcards: [
        { front: 'Percent-of-sales method', back: 'Express items as % of sales, then scale to projected sales' },
        { front: 'Retention (plowback) ratio', back: 'b = 1 − dividend payout ratio' },
        { front: 'Dividend payout ratio', back: 'Dividends ÷ Net income' },
      ],
      quiz: [
        {
          q: 'If dividend payout is 40%, the retention ratio is:',
          options: ['60%', '40%', '140%', '2.5'],
          answer: 0,
          explain: 'b = 1 − 0.40 = 0.60.',
        },
      ],
    },
    {
      id: 'fin10',
      code: 'FIN 10',
      title: 'Pro Forma Financial Statements',
      minutes: 10,
      concept: [
        {
          h: 'Building the projected statements',
          p: 'A pro forma income statement projects net income; the addition to retained earnings flows onto the pro forma balance sheet. The plug is the financing item (external financing) that makes assets equal liabilities plus equity.',
        },
      ],
      formulas: [
        { name: 'Addition to Retained Earnings', expr: 'Net income × retention ratio (b)', where: [] },
        { name: 'Projected Equity', expr: 'Beginning equity + Addition to RE + New equity', where: [] },
      ],
      example: {
        prompt: 'Projected net income $500, payout ratio 30%. Addition to retained earnings?',
        steps: ['Retention b = 1 − 0.30 = 0.70', 'Addition to RE = 500 × 0.70 = $350'],
        answer: 'Addition to retained earnings = $350',
      },
      takeaways: [
        'Addition to RE = Net income × retention ratio.',
        'The financing "plug" balances the pro forma balance sheet.',
      ],
      flashcards: [
        { front: 'Addition to retained earnings', back: 'Net income × retention ratio (b)' },
        { front: 'The "plug" in pro forma statements', back: 'External financing that balances the balance sheet' },
      ],
      quiz: [
        {
          q: 'Net income $2,000, payout 25%. Addition to retained earnings = ?',
          options: ['$1,500', '$500', '$2,000', '$750'],
          answer: 0,
          explain: 'b = 0.75; Addition to RE = 2,000 × 0.75 = $1,500.',
        },
      ],
    },
    {
      id: 'fin11',
      code: 'FIN 11',
      title: 'External Financing Needed (EFN)',
      minutes: 12,
      concept: [
        {
          h: 'The financing gap',
          p: 'When sales grow, assets must grow too. If internally generated funds (retained earnings) plus spontaneous liabilities are not enough, the firm needs external financing (EFN). EFN is the shortfall between required asset growth and the funds generated internally.',
        },
      ],
      formulas: [
        {
          name: 'External Financing Needed',
          expr: 'EFN = (A/S)×ΔS − (L/S)×ΔS − PM×S₁×b',
          where: [
            { s: 'A/S', d: 'Assets that vary with sales, as a fraction of sales' },
            { s: 'L/S', d: 'Spontaneous liabilities as a fraction of sales' },
            { s: 'ΔS', d: 'Change in sales' },
            { s: 'PM', d: 'Profit margin' },
            { s: 'S₁', d: 'Projected (new) sales' },
            { s: 'b', d: 'Retention ratio' },
          ],
        },
      ],
      example: {
        prompt:
          'Assets/Sales = 0.8, spontaneous L/S = 0.15, current sales $1,000 rising to $1,200 (ΔS = 200), profit margin 10%, retention 60%.',
        steps: [
          'Required new assets = 0.80 × 200 = $160',
          'Spontaneous financing = 0.15 × 200 = $30',
          'Internal funds = PM × S₁ × b = 0.10 × 1,200 × 0.60 = $72',
          'EFN = 160 − 30 − 72 = $58',
        ],
        answer: 'EFN = $58',
      },
      takeaways: [
        'EFN = new assets needed − spontaneous liabilities − internal (retained) funds.',
        'Faster growth and higher payout both increase EFN.',
      ],
      flashcards: [
        { front: 'EFN formula', back: '(A/S)ΔS − (L/S)ΔS − PM × S₁ × b' },
        { front: 'What raises EFN?', back: 'Higher sales growth, higher payout (lower b), lower profit margin' },
      ],
      quiz: [
        {
          q: 'If a firm’s retention ratio rises (pays fewer dividends), EFN will generally:',
          options: ['Fall', 'Rise', 'Stay the same', 'Become undefined'],
          answer: 0,
          explain: 'More retained earnings means more internal funding, reducing EFN.',
        },
      ],
    },
    {
      id: 'fin12',
      code: 'FIN 12',
      title: 'Internal Growth Rate & Sustainable Growth Rate',
      minutes: 9,
      concept: [
        {
          h: 'Two growth ceilings',
          p: 'The internal growth rate is the maximum growth with no external financing at all (no new debt or equity). The sustainable growth rate is the maximum growth while keeping the debt-equity ratio constant (new debt allowed, no new equity).',
        },
      ],
      formulas: [
        {
          name: 'Internal Growth Rate',
          expr: 'IGR = (ROA × b) ÷ (1 − ROA × b)',
          where: [{ s: 'ROA', d: 'Return on assets' }, { s: 'b', d: 'Retention ratio' }],
        },
        {
          name: 'Sustainable Growth Rate',
          expr: 'SGR = (ROE × b) ÷ (1 − ROE × b)',
          where: [{ s: 'ROE', d: 'Return on equity' }, { s: 'b', d: 'Retention ratio' }],
        },
      ],
      example: {
        prompt: 'ROA = 10%, ROE = 15%, retention ratio b = 0.60. Find IGR and SGR.',
        steps: [
          'ROA×b = 0.10 × 0.60 = 0.06 → IGR = 0.06/(1−0.06) = 6.38%',
          'ROE×b = 0.15 × 0.60 = 0.09 → SGR = 0.09/(1−0.09) = 9.89%',
        ],
        answer: 'IGR ≈ 6.38% · SGR ≈ 9.89%',
      },
      takeaways: [
        'IGR uses ROA (no external financing at all).',
        'SGR uses ROE (constant debt-equity, no new equity).',
        'SGR ≥ IGR because debt financing is allowed.',
      ],
      flashcards: [
        { front: 'Internal growth rate', back: '(ROA × b) / (1 − ROA × b)' },
        { front: 'Sustainable growth rate', back: '(ROE × b) / (1 − ROE × b)' },
        { front: 'IGR vs SGR difference', back: 'IGR = no external funds; SGR = constant D/E (debt allowed, no new equity)' },
      ],
      quiz: [
        {
          q: 'ROE = 20%, retention ratio 0.5. Sustainable growth rate ≈',
          options: ['11.1%', '10.0%', '20.0%', '5.0%'],
          answer: 0,
          explain: 'ROE×b = 0.10; SGR = 0.10/0.90 = 11.1%.',
        },
      ],
    },
    {
      id: 'fin13',
      code: 'FIN 13',
      title: 'Sustainable Growth Rate (Deep Dive)',
      minutes: 9,
      concept: [
        {
          h: 'The drivers of sustainable growth',
          p: 'Via the DuPont expansion, SGR depends on four levers: profit margin, total asset turnover, financial leverage (equity multiplier) and the retention ratio. To grow faster sustainably a firm must improve one of these.',
        },
      ],
      formulas: [
        { name: 'SGR (ROE form)', expr: 'SGR = (ROE × b) ÷ (1 − ROE × b)', where: [] },
        { name: 'ROE (DuPont)', expr: 'ROE = PM × Total Asset Turnover × Equity Multiplier', where: [] },
      ],
      example: {
        prompt: 'PM 8%, asset turnover 1.5, equity multiplier 1.8, retention 0.7. Find SGR.',
        steps: [
          'ROE = 0.08 × 1.5 × 1.8 = 0.216',
          'ROE×b = 0.216 × 0.7 = 0.1512',
          'SGR = 0.1512 / (1 − 0.1512) = 17.8%',
        ],
        answer: 'SGR ≈ 17.8%',
      },
      takeaways: [
        'Improve margin, turnover, leverage, or retention to raise SGR.',
        'Growing above SGR requires selling new equity or raising the D/E ratio.',
      ],
      flashcards: [
        { front: 'Four levers of sustainable growth', back: 'Profit margin, asset turnover, equity multiplier (leverage), retention ratio' },
        { front: 'Growing above the SGR requires…', back: 'New equity or a higher debt-equity ratio' },
      ],
      quiz: [
        {
          q: 'Which action would NOT increase a firm’s sustainable growth rate?',
          options: ['Increasing the dividend payout ratio', 'Raising the profit margin', 'Increasing asset turnover', 'Increasing leverage'],
          answer: 0,
          explain: 'Higher payout lowers retention b, which lowers SGR.',
        },
      ],
    },
  ],
}
