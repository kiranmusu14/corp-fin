// Pure finance math used by the interactive calculators.

export function futureValue(pv, rate, periods) {
  return pv * Math.pow(1 + rate, periods)
}

export function presentValue(fv, rate, periods) {
  return fv / Math.pow(1 + rate, periods)
}

export function pvAnnuity(pmt, rate, periods, due = false) {
  if (rate === 0) return pmt * periods * (due ? 1 : 1)
  const base = pmt * ((1 - Math.pow(1 + rate, -periods)) / rate)
  return due ? base * (1 + rate) : base
}

export function fvAnnuity(pmt, rate, periods, due = false) {
  if (rate === 0) return pmt * periods
  const base = pmt * ((Math.pow(1 + rate, periods) - 1) / rate)
  return due ? base * (1 + rate) : base
}

export function annuityPayment(pv, rate, periods) {
  if (rate === 0) return pv / periods
  return (pv * rate) / (1 - Math.pow(1 + rate, -periods))
}

export function perpetuity(pmt, rate, growth = 0) {
  return pmt / (rate - growth)
}

export function effectiveAnnualRate(apr, m) {
  return Math.pow(1 + apr / m, m) - 1
}

export function bondPrice(face, couponRate, ytm, years, freq = 2) {
  const n = years * freq
  const c = (face * couponRate) / freq
  const r = ytm / freq
  const pvCoupons = r === 0 ? c * n : c * ((1 - Math.pow(1 + r, -n)) / r)
  const pvFace = face / Math.pow(1 + r, n)
  return pvCoupons + pvFace
}

export function npv(rate, cashflows) {
  // cashflows[0] is time 0 (usually negative outflow)
  return cashflows.reduce((acc, cf, t) => acc + cf / Math.pow(1 + rate, t), 0)
}

export function irr(cashflows, guess = 0.1) {
  let rate = guess
  for (let i = 0; i < 100; i++) {
    let f = 0
    let df = 0
    for (let t = 0; t < cashflows.length; t++) {
      const denom = Math.pow(1 + rate, t)
      f += cashflows[t] / denom
      df += (-t * cashflows[t]) / Math.pow(1 + rate, t + 1)
    }
    if (Math.abs(df) < 1e-12) break
    const newRate = rate - f / df
    if (!isFinite(newRate)) break
    if (Math.abs(newRate - rate) < 1e-8) return newRate
    rate = newRate
  }
  return rate
}

export function gordonPrice(d1, r, g) {
  return d1 / (r - g)
}

export function capm(rf, beta, marketReturn) {
  return rf + beta * (marketReturn - rf)
}

export function wacc({ e, d, p = 0, re, rd, rp = 0, tax }) {
  const v = e + d + p
  if (v === 0) return 0
  return (e / v) * re + (p / v) * rp + (d / v) * rd * (1 - tax)
}

export function amortizationSchedule(principal, rate, periods) {
  const pmt = annuityPayment(principal, rate, periods)
  const rows = []
  let balance = principal
  for (let i = 1; i <= periods; i++) {
    const interest = balance * rate
    const principalPaid = pmt - interest
    balance = Math.max(0, balance - principalPaid)
    rows.push({ period: i, payment: pmt, interest, principal: principalPaid, balance })
  }
  return { payment: pmt, rows }
}

export const fmtMoney = (n) =>
  isFinite(n)
    ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : '—'

export const fmtPct = (n) => (isFinite(n) ? `${(n * 100).toFixed(2)}%` : '—')
