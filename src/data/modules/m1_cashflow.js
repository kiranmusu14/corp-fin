// Module 1 — Financial Statements & Cash Flow (FIN 1–8)
export default {
  id: 'm1',
  title: 'Financial Statements & Cash Flow',
  blurb:
    'The language of finance: read the balance sheet & income statement, then turn them into cash flow. Build the foundation the whole course rests on.',
  icon: '📊',
  accent: 'from-sky-500/20 to-blue-600/10',
  lessons: [
    {
      id: 'fin1',
      code: 'FIN 1',
      title: 'Welcome to Finance',
      minutes: 12,
      concept: [
        {
          h: 'What is corporate finance?',
          p: 'Corporate finance answers three questions for a firm: (1) What long-term investments should we make? (capital budgeting), (2) How do we pay for them? (capital structure), and (3) How do we manage day-to-day cash? (working capital management).',
        },
        {
          h: 'The two core financial statements',
          p: 'The Balance Sheet is a snapshot at a point in time: Assets = Liabilities + Equity. The Income Statement covers a period of time and ends in Net Income = Revenue − Costs − Depreciation − Interest − Taxes.',
        },
        {
          h: 'Book vs. market & the goal of the firm',
          p: 'Accounting statements use book (historical) values; finance cares about market values and cash flow. The goal of financial management is to maximize the current value per share of existing stock — i.e., maximize shareholder value.',
        },
      ],
      formulas: [
        { name: 'Balance Sheet Identity', expr: 'Assets = Liabilities + Shareholders’ Equity', where: [] },
        {
          name: 'Net Working Capital',
          expr: 'NWC = Current Assets − Current Liabilities',
          where: [],
        },
        {
          name: 'Income Statement',
          expr: 'Net Income = (Sales − Costs − Depreciation − Interest) × (1 − Tax rate)',
          where: [],
        },
      ],
      example: {
        prompt:
          'A firm has current assets of $1,200, net fixed assets of $4,500, current liabilities of $900 and long-term debt of $2,600. Find total assets, total equity and net working capital.',
        steps: [
          'Total assets = 1,200 + 4,500 = $5,700',
          'Total liabilities = 900 + 2,600 = $3,500',
          'Equity = Assets − Liabilities = 5,700 − 3,500 = $2,200',
          'NWC = Current assets − Current liabilities = 1,200 − 900 = $300',
        ],
        answer: 'Total assets $5,700 · Equity $2,200 · NWC $300',
      },
      takeaways: [
        'Assets = Liabilities + Equity always balances.',
        'Finance prizes cash flow and market value over accounting book value.',
        'The firm’s goal is to maximize value per share.',
      ],
      flashcards: [
        { front: 'Balance sheet identity', back: 'Assets = Liabilities + Equity' },
        { front: 'Net working capital', back: 'Current Assets − Current Liabilities' },
        { front: 'Goal of financial management', back: 'Maximize the current value per share of existing stock' },
      ],
      quiz: [
        {
          q: 'A firm has assets of $8,000 and liabilities of $5,200. What is shareholders’ equity?',
          options: ['$2,800', '$13,200', '$5,200', '$3,000'],
          answer: 0,
          explain: 'Equity = Assets − Liabilities = 8,000 − 5,200 = $2,800.',
        },
        {
          q: 'Which value does finance emphasize most when valuing a firm?',
          options: ['Historical book value', 'Cash flow and market value', 'Par value of stock', 'Retained earnings'],
          answer: 1,
          explain: 'Finance focuses on cash flow and market value, not accounting book value.',
        },
      ],
    },
    {
      id: 'fin2',
      code: 'FIN 2',
      title: 'Calculating Operating Cash Flow (OCF)',
      minutes: 3,
      concept: [
        {
          h: 'Why OCF matters',
          p: 'Operating cash flow measures the cash a firm generates from its normal business operations, before capital spending and working capital changes. It strips out financing effects so we see the productive core of the business.',
        },
        {
          h: 'The bottom-up build',
          p: 'Start from EBIT (earnings before interest and taxes), add back the non-cash depreciation expense, and subtract the cash taxes actually paid. Interest is a financing cost, so it is NOT subtracted in OCF.',
        },
      ],
      formulas: [
        { name: 'Operating Cash Flow', expr: 'OCF = EBIT + Depreciation − Taxes', where: [
          { s: 'EBIT', d: 'Earnings before interest & taxes = Sales − Costs − Depreciation' },
          { s: 'Taxes', d: 'Cash taxes paid on operating income' },
        ] },
      ],
      example: {
        prompt: 'Sales $10,000; costs $6,000; depreciation $1,000; tax rate 21%. Find OCF.',
        steps: [
          'EBIT = 10,000 − 6,000 − 1,000 = $3,000',
          'Taxes = 21% × 3,000 = $630',
          'OCF = EBIT + Depreciation − Taxes = 3,000 + 1,000 − 630 = $3,370',
        ],
        answer: 'OCF = $3,370',
      },
      takeaways: [
        'OCF = EBIT + Depreciation − Taxes.',
        'Depreciation is added back because it is a non-cash expense.',
        'Interest is excluded — it belongs to financing, not operations.',
      ],
      flashcards: [
        { front: 'OCF formula (financial)', back: 'OCF = EBIT + Depreciation − Taxes' },
        { front: 'Why add back depreciation?', back: 'It is a non-cash expense that reduced accounting income but not cash.' },
        { front: 'Is interest in OCF?', back: 'No — interest is a financing cash flow, not operating.' },
      ],
      quiz: [
        {
          q: 'EBIT = $4,500, depreciation = $800, taxes = $945. OCF = ?',
          options: ['$4,355', '$5,300', '$3,555', '$6,245'],
          answer: 0,
          explain: 'OCF = 4,500 + 800 − 945 = $4,355.',
        },
      ],
    },
    {
      id: 'fin3',
      code: 'FIN 3',
      title: 'Calculating Net Capital Spending (NCS)',
      minutes: 2,
      concept: [
        {
          h: 'Investment in fixed assets',
          p: 'Net capital spending is the net amount a firm invested in long-term (fixed) assets during the year. Because the ending balance is reported net of accumulated depreciation, we must add depreciation back to capture true spending.',
        },
      ],
      formulas: [
        {
          name: 'Net Capital Spending',
          expr: 'NCS = Ending Net Fixed Assets − Beginning Net Fixed Assets + Depreciation',
          where: [],
        },
      ],
      example: {
        prompt: 'Beginning net fixed assets $4,000; ending net fixed assets $4,600; depreciation $500. Find NCS.',
        steps: [
          'Change in net fixed assets = 4,600 − 4,000 = $600',
          'NCS = 600 + Depreciation 500 = $1,100',
        ],
        answer: 'NCS = $1,100',
      },
      takeaways: [
        'NCS = ΔNet fixed assets + Depreciation.',
        'Add depreciation back because net fixed assets are reported after depreciation.',
        'NCS can be negative if the firm sells off more assets than it buys.',
      ],
      flashcards: [
        { front: 'Net capital spending', back: 'Ending NFA − Beginning NFA + Depreciation' },
        { front: 'Why add depreciation to NCS?', back: 'Ending net fixed assets are already reduced by depreciation.' },
      ],
      quiz: [
        {
          q: 'Beginning NFA $9,000, ending NFA $9,800, depreciation $1,200. NCS = ?',
          options: ['$2,000', '$800', '$3,200', '$400'],
          answer: 0,
          explain: 'NCS = (9,800 − 9,000) + 1,200 = 800 + 1,200 = $2,000.',
        },
      ],
    },
    {
      id: 'fin4',
      code: 'FIN 4',
      title: 'Calculating Net Working Capital (Change in NWC)',
      minutes: 13,
      concept: [
        {
          h: 'NWC as a use of cash',
          p: 'Net working capital is current assets minus current liabilities. When NWC grows, cash is tied up in inventory and receivables — a use of cash. The change in NWC (ending − beginning) feeds into cash flow from assets.',
        },
      ],
      formulas: [
        { name: 'Net Working Capital', expr: 'NWC = Current Assets − Current Liabilities', where: [] },
        { name: 'Change in NWC', expr: 'ΔNWC = Ending NWC − Beginning NWC', where: [] },
      ],
      example: {
        prompt: 'Beginning: CA $2,000, CL $1,200. Ending: CA $2,500, CL $1,300. Find ΔNWC.',
        steps: [
          'Beginning NWC = 2,000 − 1,200 = $800',
          'Ending NWC = 2,500 − 1,300 = $1,200',
          'ΔNWC = 1,200 − 800 = $400 (a use of cash)',
        ],
        answer: 'ΔNWC = $400',
      },
      takeaways: [
        'An increase in NWC uses cash; a decrease frees cash.',
        'ΔNWC = Ending NWC − Beginning NWC.',
      ],
      flashcards: [
        { front: 'Change in NWC', back: 'Ending NWC − Beginning NWC' },
        { front: 'Rising NWC means…', back: 'Cash is used up (tied in receivables/inventory).' },
      ],
      quiz: [
        {
          q: 'Beginning NWC $500, ending NWC $350. The change in NWC is:',
          options: ['−$150 (a source of cash)', '+$150 (a use of cash)', '$850', '$0'],
          answer: 0,
          explain: 'ΔNWC = 350 − 500 = −$150, meaning NWC fell and cash was freed up.',
        },
      ],
    },
    {
      id: 'fin5',
      code: 'FIN 5',
      title: 'Cash Flow From Assets (CFFA)',
      minutes: 4,
      concept: [
        {
          h: 'The cash flow identity',
          p: 'Cash flow from assets (also called free cash flow) equals operating cash flow minus what the firm reinvested in fixed assets and working capital. It must equal cash flow to creditors plus cash flow to stockholders.',
        },
      ],
      formulas: [
        { name: 'Cash Flow From Assets', expr: 'CFFA = OCF − Net Capital Spending − ΔNWC', where: [] },
        { name: 'Cash Flow Identity', expr: 'CFFA = Cash flow to creditors + Cash flow to stockholders', where: [] },
        { name: 'CF to creditors', expr: 'Interest paid − Net new borrowing', where: [] },
        { name: 'CF to stockholders', expr: 'Dividends paid − Net new equity raised', where: [] },
      ],
      example: {
        prompt: 'OCF $3,370; NCS $1,100; ΔNWC $400. Find CFFA.',
        steps: ['CFFA = 3,370 − 1,100 − 400 = $1,870'],
        answer: 'CFFA = $1,870',
      },
      takeaways: [
        'CFFA = OCF − NCS − ΔNWC.',
        'Cash generated by assets is paid out to creditors and stockholders.',
      ],
      flashcards: [
        { front: 'Cash flow from assets', back: 'OCF − Net Capital Spending − ΔNWC' },
        { front: 'Cash flow identity', back: 'CFFA = CF to creditors + CF to stockholders' },
        { front: 'CF to creditors', back: 'Interest paid − Net new borrowing' },
        { front: 'CF to stockholders', back: 'Dividends − Net new equity raised' },
      ],
      quiz: [
        {
          q: 'OCF $5,000, NCS $2,000, ΔNWC $500. CFFA = ?',
          options: ['$2,500', '$7,500', '$3,500', '$2,000'],
          answer: 0,
          explain: 'CFFA = 5,000 − 2,000 − 500 = $2,500.',
        },
        {
          q: 'Cash flow to creditors equals:',
          options: ['Interest paid − net new borrowing', 'Dividends − new equity', 'Interest + principal', 'EBIT − taxes'],
          answer: 0,
          explain: 'CF to creditors = interest paid minus net new borrowing.',
        },
      ],
    },
    {
      id: 'fin6',
      code: 'FIN 6',
      title: 'Average vs. Marginal Tax Rates',
      minutes: 6,
      concept: [
        {
          h: 'Two different rates',
          p: 'The average tax rate is total taxes divided by total taxable income — the share of every dollar earned that goes to tax. The marginal tax rate is the rate paid on the next dollar of income. For decisions we care about the marginal rate, because new projects add income at the margin.',
        },
      ],
      formulas: [
        { name: 'Average Tax Rate', expr: 'Average rate = Total taxes ÷ Taxable income', where: [] },
        { name: 'Marginal Tax Rate', expr: 'Rate applied to the next dollar of taxable income', where: [] },
      ],
      example: {
        prompt:
          'Brackets: 10% on first $10,000, 20% on the next $30,000, 30% above $40,000. Income = $50,000. Find taxes, average and marginal rates.',
        steps: [
          'Tax = 0.10×10,000 + 0.20×30,000 + 0.30×10,000 = 1,000 + 6,000 + 3,000 = $10,000',
          'Average rate = 10,000 ÷ 50,000 = 20%',
          'Marginal rate = 30% (top bracket reached)',
        ],
        answer: 'Taxes $10,000 · Average 20% · Marginal 30%',
      },
      takeaways: [
        'Average = total tax / total income.',
        'Marginal = rate on the next dollar; use it for decisions.',
      ],
      flashcards: [
        { front: 'Average tax rate', back: 'Total taxes ÷ Taxable income' },
        { front: 'Marginal tax rate', back: 'Tax rate on the next dollar earned — relevant for decisions' },
      ],
      quiz: [
        {
          q: 'A firm pays $21,000 tax on $100,000 of income. Its average tax rate is:',
          options: ['21%', '35%', '10%', '15%'],
          answer: 0,
          explain: 'Average = 21,000 / 100,000 = 21%.',
        },
      ],
    },
    {
      id: 'fin7',
      code: 'FIN 7',
      title: 'Financial Ratios — 25 Sample Calculations',
      minutes: 24,
      concept: [
        {
          h: 'Five families of ratios',
          p: 'Ratios standardize statements so firms of different sizes can be compared. The five groups are: (1) Liquidity (short-term solvency), (2) Leverage (long-term solvency), (3) Turnover/Asset management, (4) Profitability, and (5) Market value.',
        },
        {
          h: 'The DuPont identity',
          p: 'Return on equity can be decomposed into profit margin, asset turnover and the equity multiplier — showing whether ROE comes from operating efficiency, asset use, or leverage.',
        },
      ],
      formulas: [
        { name: 'Current Ratio', expr: 'Current Assets ÷ Current Liabilities', where: [] },
        { name: 'Quick Ratio', expr: '(Current Assets − Inventory) ÷ Current Liabilities', where: [] },
        { name: 'Total Debt Ratio', expr: '(Total Assets − Total Equity) ÷ Total Assets', where: [] },
        { name: 'Times Interest Earned', expr: 'EBIT ÷ Interest', where: [] },
        { name: 'Inventory Turnover', expr: 'COGS ÷ Inventory', where: [] },
        { name: 'Receivables Turnover', expr: 'Sales ÷ Accounts Receivable', where: [] },
        { name: 'Profit Margin', expr: 'Net Income ÷ Sales', where: [] },
        { name: 'Return on Assets (ROA)', expr: 'Net Income ÷ Total Assets', where: [] },
        { name: 'Return on Equity (ROE)', expr: 'Net Income ÷ Total Equity', where: [] },
        { name: 'DuPont Identity', expr: 'ROE = Profit Margin × Asset Turnover × Equity Multiplier', where: [] },
        { name: 'Price–Earnings (P/E)', expr: 'Price per share ÷ Earnings per share', where: [] },
      ],
      example: {
        prompt:
          'Net income $600, sales $6,000, total assets $5,000, total equity $2,500. Find profit margin, ROA, ROE and verify with DuPont.',
        steps: [
          'Profit margin = 600 / 6,000 = 10%',
          'ROA = 600 / 5,000 = 12%',
          'ROE = 600 / 2,500 = 24%',
          'Asset turnover = 6,000 / 5,000 = 1.2; Equity multiplier = 5,000 / 2,500 = 2.0',
          'DuPont: 10% × 1.2 × 2.0 = 24% ✓',
        ],
        answer: 'PM 10% · ROA 12% · ROE 24%',
      },
      takeaways: [
        'Ratios fall into liquidity, leverage, turnover, profitability, market groups.',
        'ROE = PM × Asset turnover × Equity multiplier (DuPont).',
        'Higher leverage magnifies ROE relative to ROA.',
      ],
      flashcards: [
        { front: 'Current ratio', back: 'Current Assets ÷ Current Liabilities' },
        { front: 'Quick (acid-test) ratio', back: '(Current Assets − Inventory) ÷ Current Liabilities' },
        { front: 'Total debt ratio', back: '(Total Assets − Total Equity) ÷ Total Assets' },
        { front: 'Times interest earned', back: 'EBIT ÷ Interest' },
        { front: 'Profit margin', back: 'Net Income ÷ Sales' },
        { front: 'ROA', back: 'Net Income ÷ Total Assets' },
        { front: 'ROE', back: 'Net Income ÷ Total Equity' },
        { front: 'DuPont identity', back: 'ROE = Profit Margin × Total Asset Turnover × Equity Multiplier' },
        { front: 'Equity multiplier', back: 'Total Assets ÷ Total Equity' },
        { front: 'P/E ratio', back: 'Price per share ÷ Earnings per share' },
      ],
      quiz: [
        {
          q: 'Current assets $3,000, inventory $1,200, current liabilities $1,500. Quick ratio = ?',
          options: ['1.2', '2.0', '0.8', '1.5'],
          answer: 0,
          explain: 'Quick = (3,000 − 1,200)/1,500 = 1,800/1,500 = 1.2.',
        },
        {
          q: 'Profit margin 8%, asset turnover 1.5, equity multiplier 2.0. ROE = ?',
          options: ['24%', '12%', '16%', '9.5%'],
          answer: 0,
          explain: 'DuPont: 0.08 × 1.5 × 2.0 = 0.24 = 24%.',
        },
      ],
    },
    {
      id: 'fin8',
      code: 'FIN 8',
      title: 'Maximize Shareholder Value',
      minutes: 3,
      concept: [
        {
          h: 'The objective function',
          p: 'Management’s job is to maximize the market value of existing shareholders’ equity per share. This aligns with taking positive-NPV projects. Profit maximization is a poor goal because it ignores timing, cash flow, and risk.',
        },
        {
          h: 'The agency problem',
          p: 'Managers (agents) may pursue their own interests over owners’ (principals’). Agency costs are controlled through compensation tied to stock, monitoring by the board, and the market for corporate control (takeovers).',
        },
      ],
      formulas: [
        { name: 'Goal', expr: 'Maximize price per share of existing common stock', where: [] },
      ],
      example: {
        prompt: 'Which decision is consistent with maximizing shareholder value?',
        steps: [
          'Reject a project that lowers the stock price even if it raises this year’s accounting profit.',
          'Accept projects whose NPV is positive — they add to share value.',
        ],
        answer: 'Take positive-NPV projects; ignore short-term accounting profit alone.',
      },
      takeaways: [
        'Goal = maximize current share price / owners’ wealth.',
        'Agency costs arise when managers’ and owners’ interests diverge.',
      ],
      flashcards: [
        { front: 'Goal of the firm', back: 'Maximize the current value per share of existing stock' },
        { front: 'Agency problem', back: 'Conflict of interest between managers (agents) and shareholders (principals)' },
      ],
      quiz: [
        {
          q: 'Why is profit maximization a flawed corporate goal?',
          options: [
            'It ignores timing, cash flow, and risk',
            'It is illegal',
            'It always lowers the stock price',
            'It focuses only on dividends',
          ],
          answer: 0,
          explain: 'Profit maximization ignores when cash arrives and how risky it is.',
        },
      ],
    },
  ],
}
