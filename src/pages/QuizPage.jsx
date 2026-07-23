import { useParams, useNavigate, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { modules, allQuiz, quizForModule, moduleById } from '../data/curriculum.js'
import { useProgress } from '../store/progress.jsx'
import QuizRunner from '../components/QuizRunner.jsx'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizPage() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { recordQuiz, quizScores } = useProgress()
  const [count, setCount] = useState(10)
  const [started, setStarted] = useState(false)
  const [seed, setSeed] = useState(0)

  const pool = moduleId ? quizForModule(moduleId) : allQuiz
  const scopeId = moduleId ? `quiz-${moduleId}` : 'quiz-all'
  const title = moduleId ? moduleById[moduleId]?.title : 'Full course'

  const questions = useMemo(() => {
    void seed
    return shuffle(pool).slice(0, Math.min(count, pool.length))
  }, [pool, count, seed, started])

  const best = quizScores[scopeId]?.best

  if (!started) {
    return (
      <div className="mx-auto max-w-3xl px-4 md:px-8 py-8 md:py-12">
        <h1 className="text-3xl font-extrabold text-white">📝 Quizzes</h1>
        <p className="mt-2 text-slate-400">Test yourself with randomized questions. Pick a scope and length.</p>

        <div className="card mt-6 p-6">
          <div className="text-sm text-slate-400">Selected quiz</div>
          <div className="text-xl font-bold text-white mt-0.5">
            {title} <span className="text-slate-500 font-normal">· {pool.length} questions available</span>
          </div>
          {best != null && (
            <div className="mt-1 text-sm text-emerald-300">Best score: {best}%</div>
          )}

          <div className="mt-5">
            <div className="text-sm font-medium text-slate-300 mb-2">Number of questions</div>
            <div className="flex flex-wrap gap-2">
              {[5, 10, 15, 20].map((n) => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  disabled={n > pool.length && n !== 5}
                  className={`chip ${count === n ? '!bg-brand-600/30 !text-white !border-brand-500/50' : ''}`}
                >
                  {Math.min(n, pool.length)} Qs
                </button>
              ))}
              <button
                onClick={() => setCount(pool.length)}
                className={`chip ${count >= pool.length ? '!bg-brand-600/30 !text-white !border-brand-500/50' : ''}`}
              >
                All ({pool.length})
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setSeed((s) => s + 1)
              setStarted(true)
            }}
            className="btn-primary mt-6"
          >
            Start quiz →
          </button>
        </div>

        <h2 className="mt-10 text-lg font-bold text-white">Quiz by module</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {modules.map((m) => {
            const b = quizScores[`quiz-${m.id}`]?.best
            return (
              <Link key={m.id} to={`/quiz/${m.id}`} className="card p-4 flex items-center gap-3 hover:border-brand-500/40 transition">
                <span className="text-2xl">{m.icon}</span>
                <div className="min-w-0">
                  <div className="font-semibold text-white truncate">{m.title}</div>
                  <div className="text-xs text-slate-400">
                    {quizForModule(m.id).length} questions {b != null && `· best ${b}%`}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-8 py-8 md:py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white">{title} quiz</h1>
          <p className="text-sm text-slate-400">{questions.length} questions</p>
        </div>
        <button onClick={() => setStarted(false)} className="btn-ghost !py-2">Exit</button>
      </div>
      <div className="mt-6">
        <QuizRunner
          key={seed}
          questions={questions}
          scopeId={scopeId}
          onComplete={(c, t) => recordQuiz(scopeId, c, t)}
        />
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="btn-ghost"
        >
          ↻ New questions
        </button>
        {moduleId && (
          <button onClick={() => navigate(`/module/${moduleId}`)} className="btn-ghost">
            Back to module
          </button>
        )}
      </div>
    </div>
  )
}
