// Module 9 — Capital Structure & M&M (FIN 66–68)
export default {
  id: 'm9',
  title: 'Capital Structure (M&M)',
  blurb:
    'Does debt change firm value? Modigliani–Miller shows when leverage is irrelevant and how taxes and financial risk change the answer.',
  icon: '🧩',
  accent: 'from-fuchsia-500/20 to-purple-600/10',
  lessons: [
    {
      id: 'fin66',
      code: 'FIN 66',
      title: 'Intro — M&M Propositions',
      minutes: 15,
      concept: [
        {
          h: 'The capital-structure question',
          p: 'Capital structure is the mix of debt and equity used to finance the firm. Modigliani and Miller asked whether that mix affects firm value. Their answer depends on the assumptions — famously, in a world with no taxes or frictions, it does not.',
        },
      ],
      formulas: [
        { name: 'Firm value', expr: 'V = D + E (value of debt plus value of equity)', where: [] },
      ],
      example: {
        prompt: 'What is the central question of M&M theory?',
        steps: ['Whether changing the debt-equity mix changes the total value of the firm.'],
        answer: 'Does capital structure affect firm value?',
      },
      takeaways: ['Capital structure = the debt/equity financing mix.', 'M&M study when that mix matters for value.'],
      flashcards: [
        { front: 'Capital structure', back: 'The mix of debt and equity used to finance a firm' },
        { front: 'Firm value identity', back: 'V = D + E' },
      ],
      quiz: [
        {
          q: 'Capital structure refers to a firm’s mix of:',
          options: ['Debt and equity', 'Cash and inventory', 'Assets and liabilities', 'Products and services'],
          answer: 0,
          explain: 'Capital structure is the debt-versus-equity financing mix.',
        },
      ],
    },
    {
      id: 'fin67',
      code: 'FIN 67',
      title: 'M&M Proposition I',
      minutes: 17,
      concept: [
        {
          h: 'Proposition I (no taxes)',
          p: 'Without taxes or frictions, firm value is independent of capital structure — the "pie" is the same no matter how you slice it into debt and equity. With corporate taxes, however, interest deductibility creates a tax shield that adds value.',
        },
      ],
      formulas: [
        { name: 'Prop I (no taxes)', expr: 'V_levered = V_unlevered', where: [] },
        { name: 'Prop I (with taxes)', expr: 'V_L = V_U + T × D', where: [{ s: 'T × D', d: 'Present value of the interest tax shield' }] },
      ],
      example: {
        prompt: 'Unlevered firm value $1,000,000, tax rate 25%, debt $400,000. Levered value (with taxes)?',
        steps: ['Tax shield = 0.25 × 400,000 = $100,000', 'V_L = 1,000,000 + 100,000 = $1,100,000'],
        answer: 'V_L = $1,100,000',
      },
      takeaways: [
        'No taxes: capital structure is irrelevant (V_L = V_U).',
        'With taxes: V_L = V_U + T×D (debt adds a tax shield).',
      ],
      flashcards: [
        { front: 'M&M Prop I (no taxes)', back: 'Firm value is independent of capital structure' },
        { front: 'M&M Prop I (with taxes)', back: 'V_L = V_U + T × D (interest tax shield)' },
      ],
      quiz: [
        {
          q: 'Under M&M with corporate taxes, adding debt:',
          options: ['Increases firm value via the tax shield', 'Has no effect', 'Always lowers value', 'Eliminates equity'],
          answer: 0,
          explain: 'The interest tax shield T×D raises the levered firm’s value.',
        },
      ],
    },
    {
      id: 'fin68',
      code: 'FIN 68',
      title: 'M&M Proposition II',
      minutes: 3,
      concept: [
        {
          h: 'Leverage raises the cost of equity',
          p: 'Proposition II says the cost of equity rises linearly with the debt-equity ratio: more leverage makes equity riskier, so shareholders demand a higher return. This offsets the benefit of cheaper debt, keeping WACC constant in the no-tax world.',
        },
      ],
      formulas: [
        {
          name: 'M&M Proposition II (no taxes)',
          expr: 'Re = Ra + (Ra − Rd) × (D/E)',
          where: [
            { s: 'Ra', d: 'Cost of capital for the unlevered firm (WACC with no debt)' },
            { s: 'Rd', d: 'Cost of debt' },
            { s: 'D/E', d: 'Debt-to-equity ratio' },
          ],
        },
      ],
      example: {
        prompt: 'Ra = 12%, Rd = 6%, D/E = 0.5. Cost of equity?',
        steps: ['Re = 12% + (12% − 6%) × 0.5 = 12% + 3% = 15%'],
        answer: 'Re = 15%',
      },
      takeaways: [
        'Re rises with the debt-equity ratio (Prop II).',
        'Higher leverage = riskier equity = higher required return.',
      ],
      flashcards: [
        { front: 'M&M Proposition II', back: 'Re = Ra + (Ra − Rd)(D/E)' },
        { front: 'Why does Re rise with leverage?', back: 'More debt makes equity riskier, so shareholders demand more' },
      ],
      quiz: [
        {
          q: 'Ra = 10%, Rd = 5%, D/E = 1.0. Cost of equity (no taxes)?',
          options: ['15%', '10%', '5%', '20%'],
          answer: 0,
          explain: 'Re = 10% + (10% − 5%)×1.0 = 15%.',
        },
      ],
    },
  ],
}
