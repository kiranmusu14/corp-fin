import { useState } from 'react'
import * as fin from '../lib/finance.js'

function Field({ label, value, onChange, step = 'any', suffix }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="mt-1 flex items-center rounded-xl border border-white/10 bg-ink-800 focus-within:border-brand-500/60">
        <input
          type="number"
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2.5 text-slate-100 outline-none"
        />
        {suffix && <span className="pr-3 text-sm text-slate-500">{suffix}</span>}
      </div>
    </label>
  )
}

function Result({ label, value, big }) {
  return (
    <div className="rounded-xl border border-brand-500/30 bg-brand-600/10 px-4 py-3">
      <div className="text-xs uppercase tracking-wide text-brand-300">{label}</div>
      <div className={`font-bold text-white ${big ? 'text-2xl' : 'text-lg'}`}>{value}</div>
    </div>
  )
}

const n = (v) => parseFloat(v) || 0

function TVMCalc() {
  const [pv, setPv] = useState(1000)
  const [rate, setRate] = useState(8)
  const [t, setT] = useState(5)
  const r = n(rate) / 100
  const fv = fin.futureValue(n(pv), r, n(t))
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Present value (PV)" value={pv} onChange={setPv} suffix="$" />
        <Field label="Interest rate" value={rate} onChange={setRate} suffix="%" />
        <Field label="Periods (t)" value={t} onChange={setT} />
      </div>
      <div className="grid content-start gap-3">
        <Result label="Future value" value={fin.fmtMoney(fv)} big />
        <Result label="Present value of that FV" value={fin.fmtMoney(fin.presentValue(fv, r, n(t)))} />
        <p className="text-xs text-slate-500">FV = PV × (1 + r)^t = {fin.fmtMoney(n(pv))} × {(1 + r).toFixed(4)}^{n(t)}</p>
      </div>
    </div>
  )
}

function AnnuityCalc() {
  const [pmt, setPmt] = useState(500)
  const [rate, setRate] = useState(6)
  const [t, setT] = useState(10)
  const [due, setDue] = useState(false)
  const r = n(rate) / 100
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Payment per period (C)" value={pmt} onChange={setPmt} suffix="$" />
        <Field label="Rate per period" value={rate} onChange={setRate} suffix="%" />
        <Field label="Number of payments" value={t} onChange={setT} />
        <label className="flex items-center gap-2 text-sm text-slate-300">
          <input type="checkbox" checked={due} onChange={(e) => setDue(e.target.checked)} /> Annuity due (payments at start)
        </label>
      </div>
      <div className="grid content-start gap-3">
        <Result label="Present value of annuity" value={fin.fmtMoney(fin.pvAnnuity(n(pmt), r, n(t), due))} big />
        <Result label="Future value of annuity" value={fin.fmtMoney(fin.fvAnnuity(n(pmt), r, n(t), due))} />
        <Result label="Perpetuity value (C/r)" value={fin.fmtMoney(fin.perpetuity(n(pmt), r))} />
      </div>
    </div>
  )
}

function LoanCalc() {
  const [pv, setPv] = useState(10000)
  const [rate, setRate] = useState(10)
  const [t, setT] = useState(3)
  const r = n(rate) / 100
  const { payment, rows } = fin.amortizationSchedule(n(pv), r, n(t))
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-3">
          <Field label="Loan amount" value={pv} onChange={setPv} suffix="$" />
          <Field label="Rate per period" value={rate} onChange={setRate} suffix="%" />
          <Field label="Number of payments" value={t} onChange={setT} />
        </div>
        <div className="grid content-start gap-3">
          <Result label="Payment per period" value={fin.fmtMoney(payment)} big />
          <Result label="Total paid" value={fin.fmtMoney(payment * n(t))} />
          <Result label="Total interest" value={fin.fmtMoney(payment * n(t) - n(pv))} />
        </div>
      </div>
      {rows.length <= 40 && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b border-white/10">
                <th className="py-2 pr-3">#</th>
                <th className="py-2 pr-3">Payment</th>
                <th className="py-2 pr-3">Interest</th>
                <th className="py-2 pr-3">Principal</th>
                <th className="py-2">Balance</th>
              </tr>
            </thead>
            <tbody className="font-mono text-slate-200">
              {rows.map((row) => (
                <tr key={row.period} className="border-b border-white/5">
                  <td className="py-2 pr-3">{row.period}</td>
                  <td className="py-2 pr-3">{fin.fmtMoney(row.payment)}</td>
                  <td className="py-2 pr-3 text-amber-200">{fin.fmtMoney(row.interest)}</td>
                  <td className="py-2 pr-3 text-emerald-200">{fin.fmtMoney(row.principal)}</td>
                  <td className="py-2">{fin.fmtMoney(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function BondCalc() {
  const [face, setFace] = useState(1000)
  const [coupon, setCoupon] = useState(8)
  const [ytm, setYtm] = useState(10)
  const [years, setYears] = useState(5)
  const [freq, setFreq] = useState(2)
  const price = fin.bondPrice(n(face), n(coupon) / 100, n(ytm) / 100, n(years), n(freq))
  const status = price > n(face) ? 'Premium' : price < n(face) ? 'Discount' : 'Par'
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Face (par) value" value={face} onChange={setFace} suffix="$" />
        <Field label="Coupon rate (annual)" value={coupon} onChange={setCoupon} suffix="%" />
        <Field label="Yield to maturity (annual)" value={ytm} onChange={setYtm} suffix="%" />
        <Field label="Years to maturity" value={years} onChange={setYears} />
        <Field label="Coupons per year" value={freq} onChange={setFreq} />
      </div>
      <div className="grid content-start gap-3">
        <Result label="Bond price" value={fin.fmtMoney(price)} big />
        <Result label="Trading at" value={status} />
        <Result label="Current yield" value={fin.fmtPct((n(face) * n(coupon)) / 100 / price)} />
      </div>
    </div>
  )
}

function NPVCalc() {
  const [rate, setRate] = useState(10)
  const [flows, setFlows] = useState('-1000, 600, 500, 400')
  const arr = flows.split(',').map((x) => n(x.trim()))
  const r = n(rate) / 100
  const npv = fin.npv(r, arr)
  let irr = null
  try {
    irr = fin.irr(arr)
  } catch {
    irr = null
  }
  const pi = arr[0] !== 0 ? 1 + npv / Math.abs(arr[0]) : null
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Discount rate" value={rate} onChange={setRate} suffix="%" />
        <label className="block">
          <span className="text-sm font-medium text-slate-300">Cash flows (t0 first, comma-separated)</span>
          <textarea
            value={flows}
            onChange={(e) => setFlows(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-xl border border-white/10 bg-ink-800 px-3 py-2.5 font-mono text-sm text-slate-100 outline-none focus:border-brand-500/60"
          />
          <span className="text-xs text-slate-500">First value is the initial outlay (negative).</span>
        </label>
      </div>
      <div className="grid content-start gap-3">
        <Result label="Net present value (NPV)" value={fin.fmtMoney(npv)} big />
        <Result label="Internal rate of return (IRR)" value={irr != null && isFinite(irr) ? fin.fmtPct(irr) : '—'} />
        <Result label="Profitability index (PI)" value={pi != null && isFinite(pi) ? pi.toFixed(3) : '—'} />
        <p className={`text-sm font-semibold ${npv >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
          {npv >= 0 ? '✓ Accept — positive NPV' : '✗ Reject — negative NPV'}
        </p>
      </div>
    </div>
  )
}

function DDMCalc() {
  const [d0, setD0] = useState(2)
  const [g, setG] = useState(4)
  const [r, setR] = useState(10)
  const gg = n(g) / 100
  const rr = n(r) / 100
  const d1 = n(d0) * (1 + gg)
  const price = rr > gg ? fin.gordonPrice(d1, rr, gg) : NaN
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-3">
        <Field label="Most recent dividend (D₀)" value={d0} onChange={setD0} suffix="$" />
        <Field label="Growth rate (g)" value={g} onChange={setG} suffix="%" />
        <Field label="Required return (r)" value={r} onChange={setR} suffix="%" />
      </div>
      <div className="grid content-start gap-3">
        <Result label="Next dividend (D₁)" value={fin.fmtMoney(d1)} />
        <Result label="Stock price (Gordon)" value={isNaN(price) ? 'r must exceed g' : fin.fmtMoney(price)} big />
        <Result label="Dividend yield" value={isNaN(price) ? '—' : fin.fmtPct(d1 / price)} />
      </div>
    </div>
  )
}

function CAPMWACCCalc() {
  const [rf, setRf] = useState(3)
  const [beta, setBeta] = useState(1.2)
  const [rm, setRm] = useState(11)
  const re = fin.capm(n(rf) / 100, n(beta), n(rm) / 100)

  const [e, setE] = useState(60)
  const [d, setD] = useState(40)
  const [rd, setRd] = useState(6)
  const [tax, setTax] = useState(25)
  const wacc = fin.wacc({ e: n(e), d: n(d), re, rd: n(rd) / 100, tax: n(tax) / 100 })

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h4 className="font-semibold text-white mb-3">CAPM — Cost of equity</h4>
        <div className="grid gap-3">
          <Field label="Risk-free rate (Rf)" value={rf} onChange={setRf} suffix="%" />
          <Field label="Beta (β)" value={beta} onChange={setBeta} />
          <Field label="Expected market return" value={rm} onChange={setRm} suffix="%" />
          <Result label="Cost of equity Re" value={fin.fmtPct(re)} big />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">WACC (uses Re above)</h4>
        <div className="grid gap-3">
          <Field label="Market value of equity (E)" value={e} onChange={setE} suffix="$" />
          <Field label="Market value of debt (D)" value={d} onChange={setD} suffix="$" />
          <Field label="Cost of debt (Rd)" value={rd} onChange={setRd} suffix="%" />
          <Field label="Tax rate" value={tax} onChange={setTax} suffix="%" />
          <Result label="WACC" value={fin.fmtPct(wacc)} big />
        </div>
      </div>
    </div>
  )
}

const CALCS = [
  { id: 'tvm', label: 'Time Value', icon: '⏳', el: <TVMCalc /> },
  { id: 'annuity', label: 'Annuity & Perpetuity', icon: '🔁', el: <AnnuityCalc /> },
  { id: 'loan', label: 'Loan Amortization', icon: '🏠', el: <LoanCalc /> },
  { id: 'bond', label: 'Bond Pricing', icon: '🏦', el: <BondCalc /> },
  { id: 'npv', label: 'NPV / IRR', icon: '🧮', el: <NPVCalc /> },
  { id: 'ddm', label: 'Stock (DDM)', icon: '📈', el: <DDMCalc /> },
  { id: 'capm', label: 'CAPM & WACC', icon: '⚖️', el: <CAPMWACCCalc /> },
]

export default function CalculatorsPage() {
  const [active, setActive] = useState('tvm')
  const current = CALCS.find((c) => c.id === active)
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-extrabold text-white">🧮 Finance Calculators</h1>
      <p className="mt-2 text-slate-400">Plug in your own numbers and see the finance formulas work in real time.</p>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {CALCS.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`chip whitespace-nowrap ${active === c.id ? '!bg-brand-600/30 !text-white !border-brand-500/50' : ''}`}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <div className="card mt-5 p-5 md:p-7">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          {current.icon} {current.label}
        </h3>
        {current.el}
      </div>
    </div>
  )
}
