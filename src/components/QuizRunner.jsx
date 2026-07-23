import { useMemo, useState } from 'react'

export default function QuizRunner({ questions, scopeId, onComplete, compact = false }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const shuffled = useMemo(() => questions, [questions])
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === shuffled.length

  const score = useMemo(
    () => shuffled.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0),
    [answers, shuffled]
  )

  function choose(qi, oi) {
    if (submitted) return
    setAnswers((a) => ({ ...a, [qi]: oi }))
  }

  function submit() {
    setSubmitted(true)
    onComplete?.(score, shuffled.length)
  }

  function retry() {
    setAnswers({})
    setSubmitted(false)
  }

  if (!shuffled.length) return <p className="text-slate-400">No questions available.</p>

  return (
    <div className="space-y-5">
      {!compact && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-400">
            {answeredCount}/{shuffled.length} answered
          </div>
          {submitted && (
            <div className="text-sm font-semibold text-brand-200">
              Score: {score}/{shuffled.length} ({Math.round((score / shuffled.length) * 100)}%)
            </div>
          )}
        </div>
      )}

      {shuffled.map((q, qi) => {
        const chosen = answers[qi]
        return (
          <div key={q.id ?? qi} className="card p-4 md:p-5">
            <div className="flex gap-2">
              <span className="text-brand-300 font-bold">{qi + 1}.</span>
              <p className="font-medium text-slate-100">{q.q}</p>
            </div>
            <div className="mt-3 grid gap-2">
              {q.options.map((opt, oi) => {
                const isChosen = chosen === oi
                const isCorrect = q.answer === oi
                let cls = 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-200'
                if (submitted) {
                  if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/15 text-emerald-100'
                  else if (isChosen) cls = 'border-rose-500/50 bg-rose-500/15 text-rose-100'
                  else cls = 'border-white/10 bg-white/5 text-slate-400'
                } else if (isChosen) {
                  cls = 'border-brand-500/60 bg-brand-600/20 text-white'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => choose(qi, oi)}
                    className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${cls}`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/20 text-xs font-bold">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span>{opt}</span>
                    {submitted && isCorrect && <span className="ml-auto">✓</span>}
                    {submitted && isChosen && !isCorrect && <span className="ml-auto">✗</span>}
                  </button>
                )
              })}
            </div>
            {submitted && q.explain && (
              <div className="mt-3 rounded-xl border border-brand-500/20 bg-ink-900/60 px-3.5 py-2.5 text-sm text-slate-300">
                <span className="font-semibold text-brand-200">Explanation: </span>
                {q.explain}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button onClick={submit} disabled={!allAnswered} className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
            Submit answers
          </button>
        ) : (
          <button onClick={retry} className="btn-ghost">↺ Try again</button>
        )}
        {!submitted && !allAnswered && (
          <span className="text-xs text-slate-500">Answer all questions to submit.</span>
        )}
        {submitted && (
          <span className="text-sm font-semibold text-white">
            You scored {score}/{shuffled.length} —{' '}
            {score === shuffled.length ? 'perfect! 🎉' : score / shuffled.length >= 0.6 ? 'nice work! 👍' : 'review and retry 📚'}
          </span>
        )}
      </div>
    </div>
  )
}
