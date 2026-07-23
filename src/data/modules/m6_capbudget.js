// Module 6 — Capital Budgeting & Project Analysis (FIN 37–51)
export default {
  id: 'm6',
  title: 'Capital Budgeting & Project Analysis',
  blurb:
    'Decide which projects create value: payback, IRR, NPV, profitability index, the depreciation tax shield, break-even and sensitivity/scenario analysis.',
  icon: '🧮',
  accent: 'from-cyan-500/20 to-sky-600/10',
  lessons: [
    {
      id: 'fin37',
      code: 'FIN 37',
      title: 'Intro — Payback, IRR & NPV',
      minutes: 9,
      concept: [
        {
          h: 'Three ways to judge a project',
          p: 'Payback measures how long to recover the initial cost. IRR is the discount rate that makes NPV zero. NPV is the gold standard: the present value of all cash flows minus the initial investment. Accept a project if NPV > 0.',
        },
      ],
      formulas: [
        { name: 'NPV', expr: 'NPV = −CF₀ + Σ CFt ÷ (1 + r)^t', where: [] },
        { name: 'Decision rule', expr: 'Accept if NPV > 0 (or IRR > required return)', where: [] },
      ],
      example: {
        prompt: 'Cost $1,000; inflows $600, $500, $400; r = 10%. NPV?',
        steps: [
          'PV = 600/1.1 + 500/1.1² + 400/1.1³ = 545.45 + 413.22 + 300.53 = $1,259.20',
          'NPV = 1,259.20 − 1,000 = $259.20 → accept',
        ],
        answer: 'NPV ≈ $259.20 (accept)',
      },
      takeaways: ['NPV > 0 → accept.', 'NPV is preferred because it measures value added directly.'],
      flashcards: [
        { front: 'NPV', back: '−CF₀ + Σ CFt/(1+r)^t' },
        { front: 'NPV decision rule', back: 'Accept if NPV > 0' },
        { front: 'IRR definition', back: 'The discount rate that makes NPV = 0' },
      ],
      quiz: [
        {
          q: 'A project should be accepted when:',
          options: ['NPV is positive', 'Payback is long', 'NPV is negative', 'IRR is below the required return'],
          answer: 0,
          explain: 'Positive NPV means the project adds value.',
        },
      ],
    },
    {
      id: 'fin38',
      code: 'FIN 38',
      title: 'Payback & Discounted Payback',
      minutes: 10,
      concept: [
        {
          h: 'Recovery time',
          p: 'Payback is the time to recover the initial outlay from undiscounted cash flows. Discounted payback uses present values, so it accounts for the time value of money. Both ignore cash flows after the cutoff.',
        },
      ],
      formulas: [
        { name: 'Payback', expr: 'Years before recovery + (unrecovered ÷ next year cash flow)', where: [] },
      ],
      example: {
        prompt: 'Cost $1,000; cash flows $400, $400, $400. Payback period?',
        steps: [
          'After 2 years recovered $800; $200 remains.',
          'Payback = 2 + 200/400 = 2.5 years',
        ],
        answer: 'Payback = 2.5 years',
      },
      takeaways: [
        'Payback ignores time value and cash flows past the cutoff.',
        'Discounted payback fixes the time-value flaw but still ignores later flows.',
      ],
      flashcards: [
        { front: 'Payback period', back: 'Time to recover initial cost from cash flows' },
        { front: 'Payback’s main weakness', back: 'Ignores time value and cash flows after the cutoff' },
        { front: 'Discounted payback', back: 'Payback using discounted (PV) cash flows' },
      ],
      quiz: [
        {
          q: 'Cost $900, level cash flows of $300/year. Payback period?',
          options: ['3 years', '2 years', '4 years', '3.5 years'],
          answer: 0,
          explain: '900 / 300 = 3 years.',
        },
      ],
    },
    {
      id: 'fin39',
      code: 'FIN 39',
      title: 'IRR and NPV',
      minutes: 7,
      concept: [
        {
          h: 'How IRR and NPV relate',
          p: 'IRR is the rate where NPV = 0. For a normal project (outflow then inflows), accept if IRR > required return — this agrees with the NPV rule. The NPV profile plots NPV against discount rate and crosses zero at the IRR.',
        },
      ],
      formulas: [
        { name: 'IRR condition', expr: '0 = −CF₀ + Σ CFt ÷ (1 + IRR)^t', where: [] },
        { name: 'IRR rule', expr: 'Accept if IRR > required return', where: [] },
      ],
      example: {
        prompt: 'Cost $1,000; single inflow $1,200 in one year. IRR?',
        steps: ['0 = −1,000 + 1,200/(1+IRR)', 'IRR = 1,200/1,000 − 1 = 20%'],
        answer: 'IRR = 20%',
      },
      takeaways: ['IRR is the rate making NPV zero.', 'For normal projects, IRR and NPV rules agree.'],
      flashcards: [
        { front: 'IRR decision rule', back: 'Accept if IRR > required return' },
        { front: 'NPV profile', back: 'Graph of NPV vs. discount rate; crosses zero at the IRR' },
      ],
      quiz: [
        {
          q: 'If a normal project’s IRR is 15% and the required return is 10%, you should:',
          options: ['Accept', 'Reject', 'Be indifferent', 'Cannot tell'],
          answer: 0,
          explain: 'IRR (15%) > required return (10%), so accept.',
        },
      ],
    },
    {
      id: 'fin40',
      code: 'FIN 40',
      title: 'IRR and NPV — Example 2',
      minutes: 10,
      concept: [
        {
          h: 'Multiple cash flows & pitfalls',
          p: 'With non-conventional cash flows (sign changes), IRR can produce multiple values or none. With mutually exclusive projects, IRR can rank incorrectly; NPV is the reliable tie-breaker.',
        },
      ],
      formulas: [
        { name: 'When IRR fails', expr: 'Non-conventional flows or mutually exclusive projects → trust NPV', where: [] },
      ],
      example: {
        prompt: 'Two mutually exclusive projects: A has higher IRR, B has higher NPV. Which to pick?',
        steps: ['For mutually exclusive projects, choose the higher NPV.', 'Pick project B.'],
        answer: 'Choose the higher-NPV project (B).',
      },
      takeaways: ['NPV beats IRR for mutually exclusive or non-conventional projects.'],
      flashcards: [
        { front: 'IRR pitfall: sign changes', back: 'Non-conventional cash flows can give multiple IRRs' },
        { front: 'Mutually exclusive projects', back: 'Rank by NPV, not IRR' },
      ],
      quiz: [
        {
          q: 'For two mutually exclusive projects with conflicting IRR and NPV rankings, choose based on:',
          options: ['NPV', 'IRR', 'Payback', 'Profitability index only'],
          answer: 0,
          explain: 'NPV directly measures value added and is the correct criterion.',
        },
      ],
    },
    {
      id: 'fin41',
      code: 'FIN 41',
      title: 'Crossover Rate',
      minutes: 8,
      concept: [
        {
          h: 'Where NPV profiles intersect',
          p: 'The crossover rate is the discount rate at which two projects have equal NPV. Below it one project is preferred; above it the other. Find it by computing the IRR of the differences in cash flows.',
        },
      ],
      formulas: [
        { name: 'Crossover rate', expr: 'IRR of the incremental (A − B) cash flows', where: [] },
      ],
      example: {
        prompt: 'How do you compute a crossover rate between projects A and B?',
        steps: [
          'Take year-by-year differences (A − B).',
          'Find the IRR of that difference stream — that is the crossover rate.',
        ],
        answer: 'Crossover rate = IRR of the (A − B) cash-flow differences.',
      },
      takeaways: ['Crossover rate = IRR of incremental cash flows.', 'It marks where project rankings flip.'],
      flashcards: [
        { front: 'Crossover rate', back: 'Discount rate where two projects have equal NPV (IRR of the difference in cash flows)' },
      ],
      quiz: [
        {
          q: 'The crossover rate is found by taking the IRR of:',
          options: ['The differences between the two projects’ cash flows', 'The larger project only', 'The sum of the cash flows', 'The payback periods'],
          answer: 0,
          explain: 'Compute the incremental cash flows (A − B) and find their IRR.',
        },
      ],
    },
    {
      id: 'fin42',
      code: 'FIN 42',
      title: 'IRR, NPV and Crossover Rate (Combined)',
      minutes: 12,
      concept: [
        {
          h: 'Putting it together',
          p: 'For a full comparison: compute each project’s NPV at the required return, each IRR, and the crossover rate. If the required return is below the crossover rate, the projects’ rankings may differ between IRR and NPV — always follow NPV.',
        },
      ],
      formulas: [
        { name: 'Rule', expr: 'If required return < crossover rate, IRR and NPV can disagree → use NPV', where: [] },
      ],
      example: {
        prompt: 'Required return 8%, crossover rate 11%. Rankings by IRR and NPV differ — which project?',
        steps: [
          'Since 8% < 11% (crossover), the IRR ranking may mislead.',
          'Pick the project with higher NPV at 8%.',
        ],
        answer: 'Choose the higher-NPV project at the 8% required return.',
      },
      takeaways: ['Below the crossover rate, defer to NPV rankings.'],
      flashcards: [
        { front: 'Rankings conflict when…', back: 'The required return is below the crossover rate' },
      ],
      quiz: [
        {
          q: 'When the discount rate is below the crossover rate, the most reliable ranking criterion is:',
          options: ['NPV', 'IRR', 'Payback', 'Discounted payback'],
          answer: 0,
          explain: 'NPV always gives the value-maximizing choice.',
        },
      ],
    },
    {
      id: 'fin43',
      code: 'FIN 43',
      title: 'Payback, IRR, NPV & Profitability Index',
      minutes: 6,
      concept: [
        {
          h: 'The profitability index',
          p: 'The profitability index (PI) is the present value of future cash flows divided by the initial investment. PI > 1 is equivalent to NPV > 0. PI is useful for ranking projects under capital rationing (limited budget).',
        },
      ],
      formulas: [
        { name: 'Profitability Index', expr: 'PI = PV of future cash flows ÷ Initial investment', where: [] },
        { name: 'Relationship', expr: 'PI = 1 + NPV ÷ Initial investment', where: [] },
      ],
      example: {
        prompt: 'Initial cost $1,000; PV of future cash flows $1,259.20. PI?',
        steps: ['PI = 1,259.20 / 1,000 = 1.26'],
        answer: 'PI = 1.26 (>1 → accept)',
      },
      takeaways: ['PI = PV(inflows)/investment.', 'PI > 1 ⇔ NPV > 0.', 'Great for capital rationing.'],
      flashcards: [
        { front: 'Profitability index', back: 'PV of future cash flows ÷ initial investment' },
        { front: 'PI decision rule', back: 'Accept if PI > 1 (equivalent to NPV > 0)' },
      ],
      quiz: [
        {
          q: 'A project with a profitability index of 0.9 has an NPV that is:',
          options: ['Negative', 'Positive', 'Zero', 'Undefined'],
          answer: 0,
          explain: 'PI < 1 means PV of inflows < cost, so NPV < 0.',
        },
      ],
    },
    {
      id: 'fin44',
      code: 'FIN 44',
      title: 'Project Analysis & the Tax Shield',
      minutes: 10,
      concept: [
        {
          h: 'Depreciation shields taxes',
          p: 'Depreciation is not a cash outflow, but it reduces taxable income and therefore taxes. The tax saving equals depreciation times the tax rate — the depreciation tax shield.',
        },
      ],
      formulas: [
        { name: 'Depreciation tax shield', expr: 'Tax shield = Depreciation × Tax rate', where: [] },
        { name: 'OCF (tax-shield approach)', expr: 'OCF = (Sales − Costs)(1 − T) + Depreciation × T', where: [] },
      ],
      example: {
        prompt: 'Depreciation $2,000, tax rate 25%. Tax shield?',
        steps: ['Tax shield = 2,000 × 0.25 = $500'],
        answer: 'Depreciation tax shield = $500',
      },
      takeaways: ['Tax shield = Depreciation × tax rate.', 'Depreciation adds value only through its tax effect.'],
      flashcards: [
        { front: 'Depreciation tax shield', back: 'Depreciation × tax rate' },
        { front: 'Tax-shield OCF', back: '(Sales − Costs)(1 − T) + Depreciation × T' },
      ],
      quiz: [
        {
          q: 'Depreciation of $5,000 at a 30% tax rate provides a tax shield of:',
          options: ['$1,500', '$5,000', '$3,500', '$500'],
          answer: 0,
          explain: 'Tax shield = 5,000 × 0.30 = $1,500.',
        },
      ],
    },
    {
      id: 'fin45',
      code: 'FIN 45',
      title: 'Calculating OCF — 4 Different Ways',
      minutes: 15,
      concept: [
        {
          h: 'Four equivalent formulas',
          p: 'Operating cash flow for project analysis can be found four ways that all give the same answer: the bottom-up, top-down, tax-shield, and definitional approaches.',
        },
      ],
      formulas: [
        { name: 'Bottom-up', expr: 'OCF = Net income + Depreciation', where: [] },
        { name: 'Top-down', expr: 'OCF = Sales − Costs − Taxes', where: [] },
        { name: 'Tax-shield', expr: 'OCF = (Sales − Costs)(1 − T) + Depreciation × T', where: [] },
        { name: 'Definition (EBIT)', expr: 'OCF = EBIT + Depreciation − Taxes', where: [] },
      ],
      example: {
        prompt: 'Sales $10,000, costs $6,000, depreciation $1,000, tax 25%. OCF (tax-shield)?',
        steps: [
          '(Sales − Costs)(1 − T) = 4,000 × 0.75 = $3,000',
          'Depreciation × T = 1,000 × 0.25 = $250',
          'OCF = 3,000 + 250 = $3,250',
        ],
        answer: 'OCF = $3,250 (all four methods agree)',
      },
      takeaways: ['Bottom-up, top-down, tax-shield and EBIT approaches all yield the same OCF.'],
      flashcards: [
        { front: 'OCF bottom-up', back: 'Net income + Depreciation' },
        { front: 'OCF top-down', back: 'Sales − Costs − Taxes' },
        { front: 'OCF tax-shield', back: '(Sales − Costs)(1 − T) + Dep × T' },
      ],
      quiz: [
        {
          q: 'The bottom-up OCF approach is:',
          options: ['Net income + Depreciation', 'Sales − Costs − Taxes', 'EBIT − Taxes', 'Sales × margin'],
          answer: 0,
          explain: 'Bottom-up starts from net income and adds back depreciation.',
        },
      ],
    },
    {
      id: 'fin46',
      code: 'FIN 46',
      title: 'OCF and NPV (Full Project)',
      minutes: 30,
      concept: [
        {
          h: 'A complete capital-budgeting model',
          p: 'A full project NPV combines the initial outlay (equipment + net working capital), annual operating cash flows, and terminal cash flows (NWC recovery + after-tax salvage). Discount all of it at the required return.',
        },
      ],
      formulas: [
        { name: 'After-tax salvage', expr: 'Salvage − T × (Salvage − Book value)', where: [] },
        { name: 'Total CF₀', expr: '−(Equipment + Initial NWC)', where: [] },
        { name: 'Terminal CF', expr: 'OCF + NWC recovery + after-tax salvage', where: [] },
      ],
      example: {
        prompt: 'Equipment fully depreciated, sold for $2,000 salvage, tax 25%. After-tax salvage?',
        steps: ['Book value = 0', 'After-tax salvage = 2,000 − 0.25 × (2,000 − 0) = 2,000 − 500 = $1,500'],
        answer: 'After-tax salvage = $1,500',
      },
      takeaways: [
        'Include NWC investment up front and its recovery at the end.',
        'After-tax salvage = salvage − tax × (salvage − book value).',
      ],
      flashcards: [
        { front: 'After-tax salvage value', back: 'Salvage − T × (Salvage − Book value)' },
        { front: 'Net working capital in projects', back: 'Invested at start, recovered at the end' },
      ],
      quiz: [
        {
          q: 'Equipment with book value $1,000 sells for $1,000. The after-tax salvage (tax 25%) is:',
          options: ['$1,000', '$750', '$1,250', '$250'],
          answer: 0,
          explain: 'No gain/loss (salvage = book), so after-tax salvage = $1,000.',
        },
      ],
    },
    {
      id: 'fin47',
      code: 'FIN 47',
      title: 'NPV and Changing Variables',
      minutes: 18,
      concept: [
        {
          h: 'What moves NPV',
          p: 'NPV is sensitive to key inputs: sales volume/price, costs, discount rate, initial investment and project life. Recomputing NPV as you change one input at a time is the basis of sensitivity analysis.',
        },
      ],
      formulas: [
        { name: 'Sensitivity', expr: 'ΔNPV ÷ ΔInput → identify the most critical driver', where: [] },
      ],
      example: {
        prompt: 'If the discount rate rises, what happens to NPV?',
        steps: ['Higher r discounts future cash flows more heavily.', 'NPV falls.'],
        answer: 'NPV decreases when the discount rate rises.',
      },
      takeaways: ['Higher discount rate or costs lower NPV; higher sales raise it.'],
      flashcards: [
        { front: 'NPV vs. discount rate', back: 'Inverse — higher rate lowers NPV' },
        { front: 'Sensitivity analysis', back: 'Change one input, observe the effect on NPV' },
      ],
      quiz: [
        {
          q: 'Which change would increase a project’s NPV?',
          options: ['Higher sales price', 'Higher discount rate', 'Higher fixed costs', 'Higher initial investment'],
          answer: 0,
          explain: 'Higher price raises cash inflows and thus NPV.',
        },
      ],
    },
    {
      id: 'fin48',
      code: 'FIN 48',
      title: 'Calculating Bid Price',
      minutes: 10,
      concept: [
        {
          h: 'The zero-NPV price',
          p: 'A bid price is the price per unit that makes the project’s NPV exactly zero — the lowest price you can bid and still break even in value terms. Work backward: find the required OCF, then the required net income and sales.',
        },
      ],
      formulas: [
        { name: 'Required OCF', expr: 'OCF such that NPV = 0 (annuity that recovers the investment)', where: [] },
        { name: 'Bid price', expr: 'Solve Sales = (needed pretax profit) + costs, then price = Sales ÷ units', where: [] },
      ],
      example: {
        prompt: 'What defines the bid price in a competitive contract?',
        steps: [
          'Set NPV = 0 and solve for the annual OCF the project must generate.',
          'Back out required sales, then divide by units to get price per unit.',
        ],
        answer: 'The per-unit price that drives project NPV to zero.',
      },
      takeaways: ['Bid price makes NPV = 0.', 'Solve backward: NPV → OCF → sales → price.'],
      flashcards: [
        { front: 'Bid price', back: 'The unit price that makes project NPV = 0' },
        { front: 'Bid-price method', back: 'Work backward: required OCF → required sales → price per unit' },
      ],
      quiz: [
        {
          q: 'A bid price is set so that project NPV equals:',
          options: ['Zero', 'The initial investment', 'The salvage value', 'Maximum'],
          answer: 0,
          explain: 'The bid price is the break-even (NPV = 0) price.',
        },
      ],
    },
    {
      id: 'fin49',
      code: 'FIN 49',
      title: 'Break-even Point & Sensitivity Analysis',
      minutes: 16,
      concept: [
        {
          h: 'Accounting break-even',
          p: 'The accounting break-even quantity is the sales volume where net income equals zero: fixed costs plus depreciation, divided by the contribution margin per unit (price minus variable cost).',
        },
      ],
      formulas: [
        {
          name: 'Accounting break-even',
          expr: 'Q = (Fixed costs + Depreciation) ÷ (Price − Variable cost)',
          where: [],
        },
        { name: 'Contribution margin', expr: 'Price per unit − Variable cost per unit', where: [] },
      ],
      example: {
        prompt: 'Fixed costs $50,000, depreciation $10,000, price $20, variable cost $12. Break-even units?',
        steps: [
          'Contribution margin = 20 − 12 = $8',
          'Q = (50,000 + 10,000)/8 = 60,000/8 = 7,500 units',
        ],
        answer: 'Accounting break-even = 7,500 units',
      },
      takeaways: ['Accounting break-even = (FC + Depreciation)/contribution margin.'],
      flashcards: [
        { front: 'Accounting break-even quantity', back: '(Fixed costs + Depreciation)/(Price − Variable cost)' },
        { front: 'Contribution margin', back: 'Price − Variable cost per unit' },
      ],
      quiz: [
        {
          q: 'Fixed costs + depreciation = $40,000; contribution margin = $10/unit. Accounting break-even is:',
          options: ['4,000 units', '400 units', '40,000 units', '10,000 units'],
          answer: 0,
          explain: '40,000 / 10 = 4,000 units.',
        },
      ],
    },
    {
      id: 'fin50',
      code: 'FIN 50',
      title: 'Financial, Cash & Accounting Break-even',
      minutes: 16,
      concept: [
        {
          h: 'Three break-even concepts',
          p: 'Cash break-even (OCF = 0) covers only fixed costs. Accounting break-even (net income = 0) covers fixed costs plus depreciation. Financial break-even (NPV = 0) covers fixed costs plus the OCF needed to earn the required return — the most demanding.',
        },
      ],
      formulas: [
        { name: 'Cash break-even', expr: 'Q = Fixed costs ÷ (Price − Variable cost)', where: [] },
        { name: 'Accounting break-even', expr: 'Q = (Fixed costs + Depreciation) ÷ (Price − Variable cost)', where: [] },
        { name: 'Financial break-even', expr: 'Q = (Fixed costs + required OCF) ÷ (Price − Variable cost)', where: [] },
      ],
      example: {
        prompt: 'Rank the three break-even quantities from lowest to highest.',
        steps: [
          'Cash break-even (ignores depreciation & return) is lowest.',
          'Accounting break-even adds depreciation.',
          'Financial break-even adds the required return — highest.',
        ],
        answer: 'Cash < Accounting < Financial break-even.',
      },
      takeaways: ['Financial > Accounting > Cash break-even.'],
      flashcards: [
        { front: 'Cash break-even', back: 'Fixed costs / contribution margin (OCF = 0)' },
        { front: 'Financial break-even', back: '(Fixed costs + required OCF)/contribution margin (NPV = 0)' },
        { front: 'Break-even ranking', back: 'Cash < Accounting < Financial' },
      ],
      quiz: [
        {
          q: 'Which break-even level is the highest?',
          options: ['Financial (NPV = 0)', 'Cash (OCF = 0)', 'Accounting (NI = 0)', 'They are equal'],
          answer: 0,
          explain: 'Financial break-even must also cover the required return, so it is highest.',
        },
      ],
    },
    {
      id: 'fin51',
      code: 'FIN 51',
      title: 'Scenario Analysis',
      minutes: 4,
      concept: [
        {
          h: 'Best, base, worst',
          p: 'Scenario analysis recomputes NPV under coherent combinations of assumptions — a base case, an optimistic (best) case and a pessimistic (worst) case — to understand the range of possible outcomes and the downside risk.',
        },
      ],
      formulas: [
        { name: 'Approach', expr: 'Recompute NPV for base / best / worst assumption sets', where: [] },
      ],
      example: {
        prompt: 'How does scenario analysis differ from sensitivity analysis?',
        steps: [
          'Sensitivity changes one variable at a time.',
          'Scenario analysis changes several variables together into consistent stories.',
        ],
        answer: 'Scenario analysis varies multiple inputs jointly; sensitivity varies one at a time.',
      },
      takeaways: ['Scenario analysis stresses several inputs together to bound NPV outcomes.'],
      flashcards: [
        { front: 'Scenario analysis', back: 'Recompute NPV under best/base/worst combinations of assumptions' },
        { front: 'Scenario vs sensitivity', back: 'Scenario = many variables together; sensitivity = one at a time' },
      ],
      quiz: [
        {
          q: 'Scenario analysis primarily helps a manager understand:',
          options: ['The range and downside risk of NPV', 'The exact IRR', 'The payback period', 'The tax rate'],
          answer: 0,
          explain: 'It maps out how NPV varies across coherent best/base/worst cases.',
        },
      ],
    },
  ],
}
