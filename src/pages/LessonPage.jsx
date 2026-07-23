import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { allLessons, lessonById, moduleById } from '../data/curriculum.js'
import { useProgress } from '../store/progress.jsx'
import QuizRunner from '../components/QuizRunner.jsx'
import Formula from '../components/Formula.jsx'
import { lessonVideoUrl, PLAYLIST_URL } from '../data/youtube.js'
import { YouTubeButton } from '../components/YouTube.jsx'

export default function LessonPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const lesson = lessonById[lessonId]
  const { isLessonComplete, markLesson, recordQuiz } = useProgress()
  const [showExample, setShowExample] = useState(false)
  const [flippedCard, setFlippedCard] = useState(null)

  if (!lesson)
    return (
      <div className="p-8 text-slate-300">
        Lesson not found. <Link className="text-brand-300" to="/">Go home</Link>
      </div>
    )

  const module = moduleById[lesson.moduleId]
  const idx = allLessons.findIndex((l) => l.id === lessonId)
  const prev = allLessons[idx - 1]
  const next = allLessons[idx + 1]
  const complete = isLessonComplete(lesson.id)

  function completeAndNext() {
    markLesson(lesson.id, true)
    if (next) navigate(`/lesson/${next.id}`)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-8 py-8 md:py-12">
      {/* breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link to="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <Link to={`/module/${module.id}`} className="hover:text-white">{module.title}</Link>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="chip">{lesson.code}</span>
        <span className="chip">{lesson.minutes} min</span>
        {complete && <span className="chip !text-emerald-300 !border-emerald-500/40">✓ Completed</span>}
      </div>
      <h1 className="mt-3 text-3xl font-extrabold text-white leading-tight">{lesson.title}</h1>

      {/* Watch on YouTube */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <YouTubeButton href={lessonVideoUrl(lesson)}>Watch this lesson on YouTube</YouTubeButton>
        <a
          href={PLAYLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-500 hover:text-red-300 transition"
        >
          or open the full playlist →
        </a>
      </div>

      {/* Concept */}
      <section className="prose-fin mt-6 space-y-4">
        {lesson.concept.map((c, i) => (
          <div key={i} className="card p-5">
            <h4 className="text-white font-semibold mb-1.5">{c.h}</h4>
            <p className="text-slate-300 leading-relaxed">{c.p}</p>
          </div>
        ))}
      </section>

      {/* Formulas */}
      {lesson.formulas?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🧾 Key formulas</h2>
          <div className="grid gap-3">
            {lesson.formulas.map((f, i) => (
              <Formula key={i} f={f} />
            ))}
          </div>
        </section>
      )}

      {/* Worked example */}
      {lesson.example && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">💡 Worked example</h2>
          <div className="card p-5">
            <p className="text-slate-200">{lesson.example.prompt}</p>
            {!showExample ? (
              <button onClick={() => setShowExample(true)} className="btn-ghost mt-4">
                Show step-by-step solution
              </button>
            ) : (
              <div className="mt-4 space-y-2">
                {lesson.example.steps.map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600/30 text-xs font-bold text-brand-200">
                      {i + 1}
                    </span>
                    <p className="font-mono text-sm text-slate-200">{s}</p>
                  </div>
                ))}
                <div className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-100 font-semibold">
                  ✓ {lesson.example.answer}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Takeaways */}
      {lesson.takeaways?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📌 Key takeaways</h2>
          <ul className="card p-5 space-y-2">
            {lesson.takeaways.map((t, i) => (
              <li key={i} className="flex gap-2 text-slate-200">
                <span className="text-brand-300">▹</span> {t}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Flashcards preview */}
      {lesson.flashcards?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">🎴 Flashcards</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.flashcards.map((f, i) => (
              <button
                key={i}
                onClick={() => setFlippedCard(flippedCard === i ? null : i)}
                className="card p-4 text-left min-h-[96px] hover:border-brand-500/40 transition"
              >
                {flippedCard === i ? (
                  <p className="text-slate-200 animate-flip-in">{f.back}</p>
                ) : (
                  <>
                    <p className="font-semibold text-white">{f.front}</p>
                    <span className="mt-2 inline-block text-[11px] text-slate-500">Click to flip →</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Practice quiz */}
      {lesson.quiz?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">📝 Check your understanding</h2>
          <QuizRunner
            questions={lesson.quiz}
            scopeId={`lesson-${lesson.id}`}
            onComplete={(c, t) => recordQuiz(`lesson-${lesson.id}`, c, t)}
          />
        </section>
      )}

      {/* Nav */}
      <div className="mt-10 flex flex-col sm:flex-row gap-3 border-t border-white/10 pt-6">
        {prev ? (
          <Link to={`/lesson/${prev.id}`} className="btn-ghost flex-1">
            ← {prev.code}: {prev.title}
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        <button onClick={completeAndNext} className="btn-primary flex-1">
          {complete ? (next ? 'Next lesson →' : 'Finish ✓') : next ? 'Mark complete & continue →' : 'Mark complete ✓'}
        </button>
      </div>
    </div>
  )
}
