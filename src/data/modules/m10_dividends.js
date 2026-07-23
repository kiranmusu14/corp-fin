// Module 10 — Dividends & Payout Policy (FIN 69–71)
export default {
  id: 'm10',
  title: 'Dividends & Payout Policy',
  blurb:
    'How firms return cash to shareholders: cash dividends, stock dividends & splits, and share buybacks — and why the choice can matter.',
  icon: '💸',
  accent: 'from-lime-500/20 to-green-600/10',
  lessons: [
    {
      id: 'fin69',
      code: 'FIN 69',
      title: 'Intro — Dividends vs. Buybacks',
      minutes: 5,
      concept: [
        {
          h: 'Two ways to return cash',
          p: 'Firms can distribute cash by paying dividends or by repurchasing (buying back) shares. In a frictionless world the two are equivalent; taxes, signaling and flexibility make the choice matter in practice.',
        },
      ],
      formulas: [
        { name: 'Buyback share reduction', expr: 'Shares repurchased = Cash spent ÷ Price per share', where: [] },
      ],
      example: {
        prompt: 'A firm with $10M cash and 1M shares at $50: dividend vs buyback effect on shareholder wealth?',
        steps: [
          'Dividend: $10 per share cash, stock drops to $40 → total $50 unchanged (before taxes).',
          'Buyback: repurchase 200k shares; remaining shares still worth $50 each.',
        ],
        answer: 'In a perfect market shareholder wealth is unchanged either way.',
      },
      takeaways: ['Dividends and buybacks are equivalent absent taxes/frictions.', 'Buybacks reduce share count; dividends pay cash directly.'],
      flashcards: [
        { front: 'Two ways to distribute cash', back: 'Cash dividends and share repurchases (buybacks)' },
        { front: 'Buyback effect', back: 'Reduces shares outstanding; EPS rises, total value unchanged in perfect markets' },
      ],
      quiz: [
        {
          q: 'In a perfect market (no taxes/frictions), a dividend versus an equal buyback leaves shareholder wealth:',
          options: ['Unchanged', 'Higher with dividends', 'Higher with buybacks', 'Zero'],
          answer: 0,
          explain: 'With no frictions the two payout methods are equivalent.',
        },
      ],
    },
    {
      id: 'fin70',
      code: 'FIN 70',
      title: 'Stock Dividends & Stock Splits',
      minutes: 7,
      concept: [
        {
          h: 'More shares, same pie',
          p: 'A stock dividend or split increases the number of shares and proportionally lowers the price per share. Total value and each holder’s proportional ownership are unchanged — it is cosmetic, though it can improve liquidity by lowering the price.',
        },
      ],
      formulas: [
        { name: 'Price after split', expr: 'New price = Old price ÷ split factor', where: [] },
        { name: 'Shares after split', expr: 'New shares = Old shares × split factor', where: [] },
      ],
      example: {
        prompt: 'A stock at $90 does a 3-for-1 split. New price and shares (per 100 held)?',
        steps: ['New price = 90 / 3 = $30', 'Shares = 100 × 3 = 300', 'Value: 300 × $30 = $9,000 (unchanged)'],
        answer: 'Price $30, 300 shares — total value unchanged.',
      },
      takeaways: ['Splits/stock dividends change share count and price proportionally; value is unchanged.'],
      flashcards: [
        { front: 'Effect of a stock split', back: 'More shares, proportionally lower price; total value unchanged' },
        { front: '2-for-1 split on a $60 stock', back: 'Price becomes $30, shares double' },
      ],
      quiz: [
        {
          q: 'After a 2-for-1 stock split, a $100 stock should trade near:',
          options: ['$50', '$200', '$100', '$25'],
          answer: 0,
          explain: 'Price halves to $50 while shares double.',
        },
      ],
    },
    {
      id: 'fin71',
      code: 'FIN 71',
      title: 'Dividends vs. Buybacks (Analysis)',
      minutes: 8,
      concept: [
        {
          h: 'When the choice matters',
          p: 'Buybacks offer flexibility and can be more tax-efficient (deferred capital gains vs. taxed dividends), and they raise EPS by cutting share count. Dividends signal stable, committed cash flow. On the ex-dividend date, the share price drops by roughly the dividend amount.',
        },
      ],
      formulas: [
        { name: 'Ex-dividend price drop', expr: 'Price falls by ≈ the dividend per share', where: [] },
        { name: 'EPS after buyback', expr: 'EPS = Net income ÷ (reduced share count)', where: [] },
      ],
      example: {
        prompt: 'Net income $1,000,000; shares fall from 1,000,000 to 800,000 after a buyback. New EPS?',
        steps: ['Old EPS = 1,000,000/1,000,000 = $1.00', 'New EPS = 1,000,000/800,000 = $1.25'],
        answer: 'EPS rises from $1.00 to $1.25.',
      },
      takeaways: [
        'Buybacks: flexible, tax-efficient, raise EPS.',
        'Dividends: signal stability; price drops on the ex-dividend date.',
      ],
      flashcards: [
        { front: 'Ex-dividend date price effect', back: 'Share price falls by approximately the dividend per share' },
        { front: 'Buyback advantage over dividends', back: 'Flexibility and (often) tax efficiency; boosts EPS' },
      ],
      quiz: [
        {
          q: 'On the ex-dividend date, a stock’s price typically:',
          options: ['Falls by about the dividend amount', 'Rises by the dividend', 'Is unchanged', 'Doubles'],
          answer: 0,
          explain: 'Buyers after this date do not receive the dividend, so price drops by roughly the dividend.',
        },
      ],
    },
  ],
}
