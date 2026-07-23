import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { modules, allFormulas } from '../data/curriculum.js'
import Formula from '../components/Formula.jsx'

export default function FormulasPage() {
  const [q, setQ] = useState('')
  const [activeModule, setActiveModule] = useState('all')

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return allFormulas.filter((f) => {
      const inModule = activeModule === 'all' || f.moduleId === activeModule
      const inSearch =
        !needle ||
        f.name.toLowerCase().includes(needle) ||
        f.expr.toLowerCase().includes(needle) ||
        f.lessonTitle.toLowerCase().includes(needle)
      return inModule && inSearch
    })
  }, [q, activeModule])

  const grouped = useMemo(() => {
    const map = {}
    for (const f of filtered) {
      ;(map[f.moduleId] ||= []).push(f)
    }
    return map
  }, [filtered])

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-8 md:py-12">
      <h1 className="text-3xl font-extrabold text-white">🧾 Formula Sheet</h1>
      <p className="mt-2 text-slate-400">
        Every formula in the course — {allFormulas.length} in total. Search or filter by module.
      </p>

      <div className="mt-5 sticky top-0 z-10 -mx-4 px-4 py-3 bg-ink-900/70 backdrop-blur md:static md:bg-transparent md:p-0">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search formulas (e.g. NPV, annuity, WACC, beta)…"
          className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none focus:border-brand-500/60"
        />
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveModule('all')}
            className={`chip whitespace-nowrap ${activeModule === 'all' ? '!bg-brand-600/30 !text-white !border-brand-500/50' : ''}`}
          >
            All
          </button>
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={`chip whitespace-nowrap ${activeModule === m.id ? '!bg-brand-600/30 !text-white !border-brand-500/50' : ''}`}
            >
              {m.icon} {m.title}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && <p className="mt-8 text-slate-400">No formulas match “{q}”.</p>}

      <div className="mt-6 space-y-8">
        {modules
          .filter((m) => grouped[m.id]?.length)
          .map((m) => (
            <section key={m.id}>
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span>{m.icon}</span> {m.title}
              </h2>
              <div className="grid gap-3">
                {grouped[m.id].map((f) => (
                  <div key={f.id}>
                    <Formula f={f} />
                    <Link to={`/lesson/${f.lessonId}`} className="mt-1 inline-block text-[11px] text-slate-500 hover:text-brand-300">
                      {f.lessonCode}: {f.lessonTitle} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  )
}
