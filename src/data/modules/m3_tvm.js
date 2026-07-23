// Module 3 — Time Value of Money (FIN 14–26)
export default {
  id: 'm3',
  title: 'Time Value of Money',
  blurb:
    'A dollar today is worth more than a dollar tomorrow. Master present & future value, annuities, perpetuities, and loan amortization — the engine of all valuation.',
  icon: '⏳',
  accent: 'from-amber-500/20 to-orange-600/10',
  lessons: [
    {
      id: 'fin14',
      code: 'FIN 14',
      title: 'Time Value of Money — Intro',
      minutes: 6,
      concept: [
        {
          h: 'The core idea',
          p: 'Money has time value because a dollar received today can be invested to earn a return. Comparing cash flows across time requires moving them to a common date using an interest (discount) rate.',
        },
        {
          h: 'Compounding vs. discounting',
          p: 'Compounding moves money forward in time (present → future). Discounting moves money backward (future → present). They are inverse operations built on the same rate r.',
        },
      ],
      formulas: [
        { name: 'Future value factor', expr: '(1 + r)^t', where: [] },
        { name: 'Present value factor', expr: '1 ÷ (1 + r)^t', where: [] },
      ],
      example: {
        prompt: 'At 8%, is $100 today or $105 in one year worth more?',
        steps: ['FV of $100 = 100 × 1.08 = $108', '$108 > $105, so $100 today is worth more.'],
        answer: '$100 today is worth more (grows to $108 > $105).',
      },
      takeaways: [
        'Compounding = present → future; discounting = future → present.',
        'A higher rate r means future dollars are worth less today.',
      ],
      flashcards: [
        { front: 'Future value factor', back: '(1 + r)^t' },
        { front: 'Present value factor', back: '1 / (1 + r)^t' },
        { front: 'Why does money have time value?', back: 'A dollar today can be invested to earn a return.' },
      ],
      quiz: [
        {
          q: 'Discounting a future cash flow does what?',
          options: ['Moves it back to present value', 'Grows it forward', 'Adds interest', 'Ignores the rate'],
          answer: 0,
          explain: 'Discounting converts a future amount into its present value.',
        },
      ],
    },
    {
      id: 'fin15',
      code: 'FIN 15',
      title: 'Future Value of a Lump Sum',
      minutes: 6,
      concept: [
        {
          h: 'Growing a single amount',
          p: 'A present amount compounded at rate r for t periods grows by the factor (1+r)^t. Interest earns interest — that is the power of compounding.',
        },
      ],
      formulas: [
        {
          name: 'Future Value',
          expr: 'FV = PV × (1 + r)^t',
          where: [
            { s: 'PV', d: 'Present value (today’s amount)' },
            { s: 'r', d: 'Periodic interest rate' },
            { s: 't', d: 'Number of periods' },
          ],
        },
      ],
      example: {
        prompt: 'Invest $2,000 at 6% for 5 years. Find the future value.',
        steps: ['FV = 2,000 × (1.06)^5', '(1.06)^5 = 1.33823', 'FV = 2,000 × 1.33823 = $2,676.45'],
        answer: 'FV = $2,676.45',
      },
      takeaways: ['FV = PV × (1 + r)^t.', 'Longer horizons and higher rates dramatically increase FV.'],
      flashcards: [
        { front: 'Future value of a lump sum', back: 'FV = PV × (1 + r)^t' },
      ],
      quiz: [
        {
          q: '$500 invested at 10% for 3 years grows to:',
          options: ['$665.50', '$650.00', '$550.00', '$1,500.00'],
          answer: 0,
          explain: 'FV = 500 × 1.1^3 = 500 × 1.331 = $665.50.',
        },
      ],
    },
    {
      id: 'fin16',
      code: 'FIN 16',
      title: 'Calculating the Rate of Return (from Lump Sums)',
      minutes: 5,
      concept: [
        {
          h: 'Solving for r',
          p: 'Given a present value, a future value and the number of periods, rearrange the FV formula to solve for the implied rate of return.',
        },
      ],
      formulas: [
        { name: 'Rate of return', expr: 'r = (FV ÷ PV)^(1/t) − 1', where: [] },
      ],
      example: {
        prompt: 'An investment grows from $1,000 to $1,500 over 4 years. What annual return?',
        steps: ['r = (1,500/1,000)^(1/4) − 1', '= 1.5^0.25 − 1 = 1.1067 − 1', '= 10.67%'],
        answer: 'r ≈ 10.67%',
      },
      takeaways: ['r = (FV/PV)^(1/t) − 1.', 'This is the geometric (compound) annual return.'],
      flashcards: [{ front: 'Implied rate of return', back: 'r = (FV/PV)^(1/t) − 1' }],
      quiz: [
        {
          q: '$800 grows to $1,000 in 2 years. Approximate annual return?',
          options: ['11.8%', '25.0%', '12.5%', '6.3%'],
          answer: 0,
          explain: 'r = (1000/800)^(1/2) − 1 = 1.25^0.5 − 1 = 11.8%.',
        },
      ],
    },
    {
      id: 'fin17',
      code: 'FIN 17',
      title: 'Present Value of a Lump Sum',
      minutes: 6,
      concept: [
        {
          h: 'What is a future amount worth today?',
          p: 'Discounting a single future cash flow back to today divides it by the growth factor. This tells us how much to invest now to reach a goal.',
        },
      ],
      formulas: [
        { name: 'Present Value', expr: 'PV = FV ÷ (1 + r)^t', where: [] },
      ],
      example: {
        prompt: 'You need $10,000 in 6 years and can earn 7%. How much to invest today?',
        steps: ['PV = 10,000 / (1.07)^6', '(1.07)^6 = 1.50073', 'PV = 10,000 / 1.50073 = $6,663.42'],
        answer: 'PV = $6,663.42',
      },
      takeaways: ['PV = FV / (1 + r)^t.', 'Higher r or longer t → smaller PV.'],
      flashcards: [{ front: 'Present value of a lump sum', back: 'PV = FV / (1 + r)^t' }],
      quiz: [
        {
          q: 'PV of $5,000 received in 10 years at 8%:',
          options: ['$2,315.97', '$4,629.63', '$2,500.00', '$10,794.62'],
          answer: 0,
          explain: 'PV = 5,000 / 1.08^10 = 5,000 / 2.15892 = $2,315.97.',
        },
      ],
    },
    {
      id: 'fin18',
      code: 'FIN 18',
      title: 'Calculating the Number of Periods',
      minutes: 9,
      concept: [
        {
          h: 'Solving for t',
          p: 'When you know PV, FV and r, use logarithms to find how many periods are needed for money to grow to a target.',
        },
      ],
      formulas: [
        { name: 'Number of periods', expr: 't = ln(FV ÷ PV) ÷ ln(1 + r)', where: [] },
        { name: 'Rule of 72', expr: 'Years to double ≈ 72 ÷ (rate in %)', where: [] },
      ],
      example: {
        prompt: 'How long for $1,000 to become $2,000 at 9%?',
        steps: ['t = ln(2,000/1,000) / ln(1.09)', '= ln(2)/ln(1.09) = 0.6931/0.08618', '= 8.04 years'],
        answer: 't ≈ 8.04 years (Rule of 72 estimate: 72/9 = 8).',
      },
      takeaways: ['t = ln(FV/PV) / ln(1+r).', 'Rule of 72 gives a quick doubling estimate.'],
      flashcards: [
        { front: 'Solve for number of periods', back: 't = ln(FV/PV) / ln(1 + r)' },
        { front: 'Rule of 72', back: 'Years to double ≈ 72 / interest rate (%)' },
      ],
      quiz: [
        {
          q: 'Using the Rule of 72, money doubles at 6% in about:',
          options: ['12 years', '6 years', '72 years', '8 years'],
          answer: 0,
          explain: '72 / 6 = 12 years.',
        },
      ],
    },
    {
      id: 'fin19',
      code: 'FIN 19',
      title: 'Calculating the Rate of Return (Multi-period Practice)',
      minutes: 9,
      concept: [
        {
          h: 'Reinforcing the rate solve',
          p: 'Real problems often give a purchase price, a sale price and a holding period. The compound annual growth rate (CAGR) is the single rate that links them.',
        },
      ],
      formulas: [
        { name: 'CAGR', expr: 'r = (Ending ÷ Beginning)^(1/t) − 1', where: [] },
      ],
      example: {
        prompt: 'A collectible bought for $3,000 sells for $8,000 after 12 years. Annual return?',
        steps: ['r = (8,000/3,000)^(1/12) − 1', '= 2.6667^0.08333 − 1', '= 8.51%'],
        answer: 'r ≈ 8.51%',
      },
      takeaways: ['CAGR = (End/Begin)^(1/t) − 1.', 'It smooths multi-year growth into one annual rate.'],
      flashcards: [{ front: 'CAGR', back: '(Ending value / Beginning value)^(1/t) − 1' }],
      quiz: [
        {
          q: 'An asset triples in 9 years. Its CAGR is closest to:',
          options: ['12.9%', '33.3%', '11.1%', '9.0%'],
          answer: 0,
          explain: 'r = 3^(1/9) − 1 = 1.1298 − 1 ≈ 12.9%.',
        },
      ],
    },
    {
      id: 'fin20',
      code: 'FIN 20',
      title: 'Present Value of an Annuity',
      minutes: 6,
      concept: [
        {
          h: 'A stream of equal payments',
          p: 'An annuity is a level stream of cash flows for a fixed number of periods (an ordinary annuity pays at the end of each period). Its present value uses the annuity discount factor.',
        },
      ],
      formulas: [
        {
          name: 'PV of Annuity',
          expr: 'PV = C × [1 − (1 + r)^(−t)] ÷ r',
          where: [
            { s: 'C', d: 'Payment per period' },
            { s: 'r', d: 'Periodic rate' },
            { s: 't', d: 'Number of payments' },
          ],
        },
      ],
      example: {
        prompt: '$500 per year for 10 years at 6%. Present value?',
        steps: [
          'Factor = [1 − 1.06^(−10)] / 0.06 = [1 − 0.55839]/0.06 = 7.3601',
          'PV = 500 × 7.3601 = $3,680.04',
        ],
        answer: 'PV ≈ $3,680.04',
      },
      takeaways: ['PV annuity = C × [1 − (1+r)^(−t)] / r.', 'This underlies loan and bond pricing.'],
      flashcards: [
        { front: 'PV of an ordinary annuity', back: 'C × [1 − (1 + r)^(−t)] / r' },
      ],
      quiz: [
        {
          q: 'PV of $1,000/year for 3 years at 10%:',
          options: ['$2,486.85', '$3,000.00', '$2,730.00', '$2,310.00'],
          answer: 0,
          explain: 'Factor = [1 − 1.1^-3]/0.1 = 2.48685; PV = $2,486.85.',
        },
      ],
    },
    {
      id: 'fin21',
      code: 'FIN 21',
      title: 'Calculating Payments in an Annuity',
      minutes: 5,
      concept: [
        {
          h: 'Solving for the payment C',
          p: 'Given a present value (e.g., a loan amount), rearrange the annuity formula to find the level payment — this is exactly how loan payments are set.',
        },
      ],
      formulas: [
        { name: 'Annuity Payment', expr: 'C = PV × r ÷ [1 − (1 + r)^(−t)]', where: [] },
      ],
      example: {
        prompt: 'Borrow $20,000 at 5% for 4 years with annual payments. Payment?',
        steps: [
          'Factor = [1 − 1.05^-4]/0.05 = 3.54595',
          'C = 20,000 / 3.54595 = $5,640.24',
        ],
        answer: 'Payment ≈ $5,640.24 per year',
      },
      takeaways: ['C = PV × r / [1 − (1+r)^(−t)].', 'This is the standard loan-payment formula.'],
      flashcards: [{ front: 'Annuity payment', back: 'C = PV × r / [1 − (1 + r)^(−t)]' }],
      quiz: [
        {
          q: 'A $10,000 loan at 8% over 5 annual payments requires a payment of about:',
          options: ['$2,504.56', '$2,000.00', '$1,800.00', '$2,700.00'],
          answer: 0,
          explain: 'Factor = 3.99271; C = 10,000/3.99271 = $2,504.56.',
        },
      ],
    },
    {
      id: 'fin22',
      code: 'FIN 22',
      title: 'Perpetuities',
      minutes: 6,
      concept: [
        {
          h: 'Payments forever',
          p: 'A perpetuity is an annuity that never ends. Its present value simplifies to payment over rate. A growing perpetuity increases payments at rate g each period.',
        },
      ],
      formulas: [
        { name: 'Perpetuity PV', expr: 'PV = C ÷ r', where: [] },
        { name: 'Growing Perpetuity PV', expr: 'PV = C ÷ (r − g)', where: [{ s: 'g', d: 'Constant growth rate, g < r' }] },
      ],
      example: {
        prompt: 'A preferred share pays $6 forever; required return 8%. Value?',
        steps: ['PV = C/r = 6 / 0.08 = $75'],
        answer: 'Value = $75',
      },
      takeaways: ['Perpetuity PV = C / r.', 'Growing perpetuity PV = C / (r − g), requires r > g.'],
      flashcards: [
        { front: 'Perpetuity present value', back: 'PV = C / r' },
        { front: 'Growing perpetuity', back: 'PV = C / (r − g), with r > g' },
      ],
      quiz: [
        {
          q: 'A perpetuity pays $200/year; rate 5%. Its value is:',
          options: ['$4,000', '$1,000', '$200', '$10,000'],
          answer: 0,
          explain: 'PV = 200 / 0.05 = $4,000.',
        },
      ],
    },
    {
      id: 'fin23',
      code: 'FIN 23',
      title: 'Future Value of an Annuity',
      minutes: 4,
      concept: [
        {
          h: 'Accumulating a savings stream',
          p: 'The future value of an annuity compounds a series of equal payments to the end of the term — the math behind retirement savings and sinking funds.',
        },
      ],
      formulas: [
        { name: 'FV of Annuity', expr: 'FV = C × [(1 + r)^t − 1] ÷ r', where: [] },
      ],
      example: {
        prompt: 'Save $2,000/year for 10 years at 7%. Future value?',
        steps: [
          'Factor = [(1.07)^10 − 1]/0.07 = [1.96715 − 1]/0.07 = 13.8164',
          'FV = 2,000 × 13.8164 = $27,632.90',
        ],
        answer: 'FV ≈ $27,632.90',
      },
      takeaways: ['FV annuity = C × [(1+r)^t − 1] / r.'],
      flashcards: [{ front: 'FV of an ordinary annuity', back: 'C × [(1 + r)^t − 1] / r' }],
      quiz: [
        {
          q: 'Depositing $1,000/year for 3 years at 10% accumulates to:',
          options: ['$3,310', '$3,000', '$3,100', '$3,993'],
          answer: 0,
          explain: 'Factor = [(1.1)^3 − 1]/0.1 = 3.31; FV = $3,310.',
        },
      ],
    },
    {
      id: 'fin24',
      code: 'FIN 24',
      title: 'Annuity Math (EAR & Compounding)',
      minutes: 7,
      concept: [
        {
          h: 'Quoted vs. effective rates',
          p: 'The annual percentage rate (APR) is a quoted rate; the effective annual rate (EAR) reflects compounding within the year. Always compare investments on an EAR basis.',
        },
      ],
      formulas: [
        {
          name: 'Effective Annual Rate',
          expr: 'EAR = (1 + APR ÷ m)^m − 1',
          where: [{ s: 'm', d: 'Compounding periods per year' }, { s: 'APR', d: 'Quoted annual rate' }],
        },
        { name: 'Continuous compounding', expr: 'EAR = e^(APR) − 1', where: [] },
      ],
      example: {
        prompt: 'APR of 12% compounded monthly. Find EAR.',
        steps: ['EAR = (1 + 0.12/12)^12 − 1', '= (1.01)^12 − 1 = 1.12683 − 1', '= 12.68%'],
        answer: 'EAR ≈ 12.68%',
      },
      takeaways: ['EAR = (1 + APR/m)^m − 1.', 'More frequent compounding raises the EAR.'],
      flashcards: [
        { front: 'Effective annual rate', back: 'EAR = (1 + APR/m)^m − 1' },
        { front: 'APR vs EAR', back: 'APR is quoted (no compounding); EAR includes intra-year compounding' },
      ],
      quiz: [
        {
          q: '10% APR compounded semiannually gives an EAR of:',
          options: ['10.25%', '10.00%', '20.00%', '5.00%'],
          answer: 0,
          explain: 'EAR = (1 + 0.10/2)^2 − 1 = 1.05^2 − 1 = 10.25%.',
        },
      ],
    },
    {
      id: 'fin25',
      code: 'FIN 25',
      title: 'Annuity Due',
      minutes: 9,
      concept: [
        {
          h: 'Payments at the beginning',
          p: 'An annuity due pays at the start of each period (e.g., rent). Because each payment sits one period earlier, its value is the ordinary-annuity value multiplied by (1 + r).',
        },
      ],
      formulas: [
        { name: 'Annuity Due (PV or FV)', expr: 'Value_due = Value_ordinary × (1 + r)', where: [] },
      ],
      example: {
        prompt: 'PV of $1,000/year for 5 years at 8%, paid at the beginning of each year.',
        steps: [
          'Ordinary PV = 1,000 × [1 − 1.08^-5]/0.08 = 1,000 × 3.99271 = $3,992.71',
          'Annuity due = 3,992.71 × 1.08 = $4,312.13',
        ],
        answer: 'PV (due) ≈ $4,312.13',
      },
      takeaways: ['Annuity due = ordinary annuity × (1 + r).', 'Due annuities are always worth more (payments arrive earlier).'],
      flashcards: [
        { front: 'Annuity due adjustment', back: 'Multiply the ordinary annuity value by (1 + r)' },
        { front: 'Ordinary vs. due timing', back: 'Ordinary pays at period end; due pays at period beginning' },
      ],
      quiz: [
        {
          q: 'An annuity due compared with an ordinary annuity (same terms) is:',
          options: ['Worth more', 'Worth less', 'Worth the same', 'Only different in FV'],
          answer: 0,
          explain: 'Earlier payments make an annuity due worth (1+r) times more.',
        },
      ],
    },
    {
      id: 'fin26',
      code: 'FIN 26',
      title: 'Loan Amortization Schedule',
      minutes: 13,
      concept: [
        {
          h: 'Splitting payments into interest & principal',
          p: 'In a fully amortized loan each payment is constant. Early on, most of the payment is interest; over time the principal portion grows. Each period: interest = rate × beginning balance, principal = payment − interest, ending balance = beginning − principal.',
        },
      ],
      formulas: [
        { name: 'Payment', expr: 'C = PV × r / [1 − (1 + r)^(−t)]', where: [] },
        { name: 'Interest portion', expr: 'Interest = r × beginning balance', where: [] },
        { name: 'Principal portion', expr: 'Principal = Payment − Interest', where: [] },
      ],
      example: {
        prompt: '$10,000 loan, 10% annual, 3 years. Build year 1 of the schedule.',
        steps: [
          'Payment = 10,000 × 0.10/[1 − 1.1^-3] = 10,000/2.48685 = $4,021.15',
          'Year 1 interest = 0.10 × 10,000 = $1,000',
          'Year 1 principal = 4,021.15 − 1,000 = $3,021.15',
          'Ending balance = 10,000 − 3,021.15 = $6,978.85',
        ],
        answer: 'Payment $4,021.15 (Y1: interest $1,000, principal $3,021.15, balance $6,978.85)',
      },
      takeaways: [
        'Interest = rate × outstanding balance each period.',
        'Principal repaid rises over the life of the loan; interest falls.',
      ],
      flashcards: [
        { front: 'Amortization: interest each period', back: 'rate × beginning balance' },
        { front: 'Amortization: principal each period', back: 'Payment − Interest' },
        { front: 'Over the life of an amortizing loan…', back: 'Interest portion falls, principal portion rises' },
      ],
      quiz: [
        {
          q: 'On a $5,000 balance at 8%, the interest portion of the next annual payment is:',
          options: ['$400', '$500', '$40', '$800'],
          answer: 0,
          explain: 'Interest = 0.08 × 5,000 = $400.',
        },
      ],
    },
  ],
}
