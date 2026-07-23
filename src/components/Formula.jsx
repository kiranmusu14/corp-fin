export default function Formula({ f }) {
  return (
    <div className="card p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-brand-300">{f.name}</div>
      <div className="formula mt-2">{f.expr}</div>
      {f.where && f.where.length > 0 && (
        <dl className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {f.where.map((w, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <dt className="font-mono font-semibold text-brand-200 shrink-0">{w.s}</dt>
              <dd className="text-slate-400">{w.d}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
