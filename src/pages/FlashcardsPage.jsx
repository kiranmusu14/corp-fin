import { useParams, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { modules, allFlashcards, flashcardsForModule, moduleById } from '../data/curriculum.js'
import { useProgress } from '../store/progress.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardsPage() {
  const { moduleId } = useParams()
  const { toggleKnownCard, isCardKnown } = useProgress()
  const base = moduleId ? flashcardsForModule(moduleId) : allFlashcards
  const [order, setOrder] = useState(0)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [hideKnown, setHideKnown] = useState(false)

  const deck = useMemo(() => {
    void order
    let d = order ? shuffle(base) : base
    if (hideKnown) d = d.filter((c) => !isCardKnown(c.id))
    return d
  }, [base, order, hideKnown]) // eslint-disable-line react-hooks/exhaustive-deps

  const title = moduleId ? moduleById[moduleId]?.title : 'All formulas & concepts'
  const knownCount = base.filter((c) => isCardKnown(c.id)).length

  if (deck.length === 0)
    return (
      <div className="mx-auto max-w-2xl px-4 md:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-white">🎴 {title}</h1>
        <p className="mt-3 text-slate-400">
          {hideKnown ? 'You have marked every card as known! 🎉' : 'No cards here yet.'}
        </p>
        <button onClick={() => setHideKnown(false)} className="btn-ghost mt-4">Show all cards</button>
      </div>
    )

  const card = deck[Math.min(i, deck.length - 1)]
  const known = isCardKnown(card.id)

  function go(delta) {
    setFlipped(false)
    setI((v) => (v + delta + deck.length) % deck.length)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 md:px-8 py-8 md:py-12">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-extrabold text-white">🎴 Flashcards</h1>
        <div className="text-sm text-slate-400">
          {knownCount}/{base.length} known
        </div>
      </div>
      <p className="mt-1 text-slate-400">{title}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => { setOrder((o) => o + 1); setI(0); setFlipped(false) }} className="chip hover:bg-white/10">🔀 Shuffle</button>
        <button
          onClick={() => { setHideKnown((h) => !h); setI(0); setFlipped(false) }}
          className={`chip hover:bg-white/10 ${hideKnown ? '!bg-brand-600/30 !text-white' : ''}`}
        >
          {hideKnown ? '👁 Showing unknown only' : '🙈 Hide known'}
        </button>
      </div>

      {/* Card */}
      <div className="mt-6">
        <button
          onClick={() => setFlipped((f) => !f)}
          className="card w-full min-h-[260px] p-8 grid place-items-center text-center hover:border-brand-500/40 transition"
        >
          <div>
            <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-4">
              {flipped ? 'Answer' : 'Prompt'} · {card.moduleTitle}
            </div>
            <div className={`text-xl md:text-2xl font-semibold ${flipped ? 'text-brand-100 animate-flip-in' : 'text-white'}`}>
              {flipped ? card.back : card.front}
            </div>
            <div className="mt-6 text-xs text-slate-500">Click card to flip</div>
          </div>
        </button>
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => go(-1)} className="btn-ghost">← Prev</button>
        <div className="text-sm text-slate-400">
          {Math.min(i, deck.length - 1) + 1} / {deck.length}
        </div>
        <button onClick={() => go(1)} className="btn-ghost">Next →</button>
      </div>

      <button
        onClick={() => toggleKnownCard(card.id)}
        className={`btn mt-4 w-full ${
          known ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/40' : 'btn-primary'
        }`}
      >
        {known ? '✓ Marked as known (tap to unmark)' : 'Mark as known'}
      </button>

      <div className="mt-3 text-center text-xs text-slate-500">
        From {card.lessonTitle} · <Link className="text-brand-300" to={`/lesson/${card.lessonId}`}>open lesson</Link>
      </div>

      {/* Deck picker */}
      <h2 className="mt-10 text-lg font-bold text-white">Study by module</h2>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Link to="/flashcards" className="card p-3 text-sm font-medium text-white hover:border-brand-500/40">
          🎴 All cards ({allFlashcards.length})
        </Link>
        {modules.map((m) => (
          <Link key={m.id} to={`/flashcards/${m.id}`} className="card p-3 text-sm text-white hover:border-brand-500/40">
            {m.icon} {m.title}{' '}
            <span className="text-slate-500">({flashcardsForModule(m.id).length})</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
