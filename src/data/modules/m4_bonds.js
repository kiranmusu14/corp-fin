// Module 4 — Bonds & Interest Rates (FIN 27–31)
export default {
  id: 'm4',
  title: 'Bonds & Interest Rates',
  blurb:
    'Price bonds, understand yield to maturity, and see why bond prices swing when rates move — the essence of fixed-income and interest-rate risk.',
  icon: '🏦',
  accent: 'from-violet-500/20 to-purple-600/10',
  lessons: [
    {
      id: 'fin27',
      code: 'FIN 27',
      title: 'Introduction to Bonds',
      minutes: 10,
      concept: [
        {
          h: 'Anatomy of a bond',
          p: 'A bond is a loan. The face (par) value is repaid at maturity; the coupon rate times face value gives the periodic coupon payment; the yield to maturity (YTM) is the market discount rate. Price = PV of coupons (an annuity) + PV of face value (a lump sum).',
        },
        {
          h: 'Premium, par, discount',
          p: 'If coupon rate > YTM the bond sells at a premium (price > par). If coupon rate < YTM it sells at a discount. If they are equal it sells at par.',
        },
      ],
      formulas: [
        {
          name: 'Bond Price',
          expr: 'P = C × [1 − (1 + r)^(−t)] ÷ r + F ÷ (1 + r)^t',
          where: [
            { s: 'C', d: 'Coupon payment per period' },
            { s: 'F', d: 'Face (par) value' },
            { s: 'r', d: 'Yield to maturity per period' },
            { s: 't', d: 'Number of periods' },
          ],
        },
        { name: 'Coupon payment', expr: 'C = Coupon rate × Face value (÷ periods per year)', where: [] },
      ],
      example: {
        prompt: '$1,000 par, 8% annual coupon, 5 years, YTM 10%. Price?',
        steps: [
          'Coupon = 0.08 × 1,000 = $80',
          'PV coupons = 80 × [1 − 1.10^-5]/0.10 = 80 × 3.79079 = $303.26',
          'PV face = 1,000 / 1.10^5 = $620.92',
          'Price = 303.26 + 620.92 = $924.18 (discount, since coupon < YTM)',
        ],
        answer: 'Price ≈ $924.18',
      },
      takeaways: [
        'Bond price = PV of coupons + PV of face value.',
        'Coupon < YTM → discount; coupon > YTM → premium.',
      ],
      flashcards: [
        { front: 'Bond price formula', back: 'C × [1 − (1+r)^(−t)]/r + F/(1+r)^t' },
        { front: 'Premium bond', back: 'Coupon rate > YTM → price above par' },
        { front: 'Discount bond', back: 'Coupon rate < YTM → price below par' },
      ],
      quiz: [
        {
          q: 'A bond’s coupon rate is 6% and its YTM is 6%. The bond trades at:',
          options: ['Par', 'A premium', 'A discount', 'Cannot tell'],
          answer: 0,
          explain: 'When coupon rate equals YTM, price equals par value.',
        },
      ],
    },
    {
      id: 'fin28',
      code: 'FIN 28',
      title: 'Bond Calculations (Semiannual & YTM)',
      minutes: 10,
      concept: [
        {
          h: 'Semiannual coupons',
          p: 'US bonds usually pay semiannually. Halve the annual coupon and the annual yield, and double the number of years to get periods. Yield to maturity is the r that makes the PV of cash flows equal the price (solved by trial/error or a calculator).',
        },
      ],
      formulas: [
        { name: 'Semiannual price', expr: 'P = (C/2) × [1 − (1 + r/2)^(−2n)] / (r/2) + F / (1 + r/2)^(2n)', where: [] },
        { name: 'Current yield', expr: 'Annual coupon ÷ Current price', where: [] },
      ],
      example: {
        prompt: '$1,000 par, 6% coupon paid semiannually, 10 years, YTM 8%. Price?',
        steps: [
          'Semiannual coupon = 30; periods = 20; semiannual yield = 4%',
          'PV coupons = 30 × [1 − 1.04^-20]/0.04 = 30 × 13.5903 = $407.71',
          'PV face = 1,000 / 1.04^20 = $456.39',
          'Price = 407.71 + 456.39 = $864.10',
        ],
        answer: 'Price ≈ $864.10',
      },
      takeaways: [
        'Semiannual: halve coupon & yield, double periods.',
        'YTM is the discount rate that equates PV of cash flows to price.',
      ],
      flashcards: [
        { front: 'Semiannual bond adjustment', back: 'Coupon/2, yield/2, periods × 2' },
        { front: 'Current yield', back: 'Annual coupon ÷ current market price' },
        { front: 'Yield to maturity (YTM)', back: 'Discount rate equating a bond’s PV of cash flows to its price' },
      ],
      quiz: [
        {
          q: 'For a semiannual bond with 8% annual coupon on $1,000 par, each coupon payment is:',
          options: ['$40', '$80', '$20', '$8'],
          answer: 0,
          explain: 'Semiannual coupon = 80/2 = $40.',
        },
      ],
    },
    {
      id: 'fin29',
      code: 'FIN 29',
      title: 'Bond Prices with Changing Interest Rates',
      minutes: 10,
      concept: [
        {
          h: 'The inverse relationship',
          p: 'Bond prices move opposite to interest rates. When market yields rise, existing bonds with lower fixed coupons become less attractive, so their prices fall — and vice versa.',
        },
      ],
      formulas: [
        { name: 'Rule', expr: 'Yields ↑ → Prices ↓ ; Yields ↓ → Prices ↑', where: [] },
      ],
      example: {
        prompt: 'A 5-year, 8% annual coupon $1,000 bond: price at 6% vs 10% YTM?',
        steps: [
          'At 6%: 80×[1−1.06^-5]/0.06 + 1,000/1.06^5 = 336.99 + 747.26 = $1,084.25 (premium)',
          'At 10%: 80×[1−1.1^-5]/0.1 + 1,000/1.1^5 = 303.28 + 620.92 = $924.18 (discount)',
        ],
        answer: 'Price falls from $1,084.25 (6%) to $924.18 (10%) as yields rise.',
      },
      takeaways: ['Price and yield move inversely.', 'The same bond is a premium at low yields and a discount at high yields.'],
      flashcards: [
        { front: 'Bond price vs. interest rate', back: 'Inverse: rates up → prices down' },
      ],
      quiz: [
        {
          q: 'If market interest rates rise, the price of an existing fixed-coupon bond will:',
          options: ['Fall', 'Rise', 'Stay flat', 'Go to par'],
          answer: 0,
          explain: 'Bond prices move inversely to yields.',
        },
      ],
    },
    {
      id: 'fin30',
      code: 'FIN 30',
      title: 'Interest Rate Risk',
      minutes: 13,
      concept: [
        {
          h: 'What drives price sensitivity',
          p: 'Interest rate risk is larger for bonds with (1) longer maturity and (2) lower coupon rates. Long-maturity, low-coupon bonds have most of their value far in the future, so discounting hits them harder when rates change.',
        },
      ],
      formulas: [
        { name: 'Rule 1', expr: 'Longer maturity → greater interest-rate risk', where: [] },
        { name: 'Rule 2', expr: 'Lower coupon → greater interest-rate risk', where: [] },
      ],
      example: {
        prompt: 'Which is more sensitive to a 1% yield change: a 2-year 10% bond or a 20-year 3% bond?',
        steps: [
          'The 20-year bond has longer maturity and a lower coupon.',
          'Both factors increase interest-rate risk, so it is far more sensitive.',
        ],
        answer: 'The 20-year, 3%-coupon bond is much more sensitive.',
      },
      takeaways: ['Longer maturity and lower coupon = more interest-rate risk.'],
      flashcards: [
        { front: 'Interest-rate risk drivers', back: 'Higher for longer maturity and lower coupon bonds' },
      ],
      quiz: [
        {
          q: 'All else equal, which bond has the MOST interest-rate risk?',
          options: ['30-year zero-coupon', '2-year 10% coupon', '5-year 8% coupon', '1-year zero-coupon'],
          answer: 0,
          explain: 'Longest maturity + lowest (zero) coupon = maximum sensitivity.',
        },
      ],
    },
    {
      id: 'fin31',
      code: 'FIN 31',
      title: 'Corporate Bond Calculations',
      minutes: 2,
      concept: [
        {
          h: 'Yields, ratings & spreads',
          p: 'Corporate bonds trade at a yield spread above comparable Treasuries to compensate for default risk. Lower credit ratings mean higher yields. Prices are often quoted as a percentage of par.',
        },
      ],
      formulas: [
        { name: 'Credit spread', expr: 'Corporate YTM − Treasury YTM (same maturity)', where: [] },
        { name: 'Price from quote', expr: 'Price = Quote% × Face value', where: [] },
      ],
      example: {
        prompt: 'A corporate bond yields 7.5%; the comparable Treasury yields 4.5%. What is the credit spread?',
        steps: ['Spread = 7.5% − 4.5% = 3.0% (300 basis points)'],
        answer: 'Credit spread = 3.00% (300 bps)',
      },
      takeaways: ['Credit spread compensates for default risk.', 'Lower ratings → higher yields → lower prices.'],
      flashcards: [
        { front: 'Credit (default) spread', back: 'Corporate yield − comparable Treasury yield' },
        { front: 'Bond quote of 98.5 on $1,000 par', back: 'Price = 0.985 × 1,000 = $985' },
      ],
      quiz: [
        {
          q: 'A lower credit rating on a corporate bond generally means:',
          options: ['Higher yield, lower price', 'Lower yield, higher price', 'No effect', 'Higher par value'],
          answer: 0,
          explain: 'More default risk demands a higher yield, which lowers price.',
        },
      ],
    },
  ],
}
