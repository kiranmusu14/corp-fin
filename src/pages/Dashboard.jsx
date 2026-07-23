import { Link } from 'react-router-dom'
import { modules, totalLessons, totalMinutes, allLessons } from '../data/curriculum.js'
import { useProgress } from '../store/progress.jsx'
import { PLAYLIST_URL } from '../data/youtube.js'
import { YouTubeButton } from '../components/YouTube.jsx'

function ModuleCard({ m, index }) {
  const { isLessonComplete } = useProgress()
  const done = m.lessons.filter((l) => isLessonComplete(l.id)).length
  const pct = Math.round((done / m.lessons.length) * 100)
  return (
    <Link
      to={`/module/${m.id}`}
      className={`card group relative overflow-hidden p-5 hover:border-brand-500/40 hover:shadow-glow transition`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} opacity-0 group-hover:opacity-100 transition`} />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="text-3xl">{m.icon}</div>
          <span className="chip">Module {index + 1}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold text-white leading-tight">{m.title}</h3>
        <p className="mt-1.5 text-sm text-slate-400 line-clamp-3">{m.blurb}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span>{m.lessons.length} lessons</span>
          <span className="font-semibold text-brand-200">{pct}%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-500 to-brand-300" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </Link>
  )
}

export default function Dashboard() {
  const { completedLessons, quizScores } = useProgress()
  const done = Object.keys(completedLessons).length
  const pct = Math.round((done / totalLessons) * 100)
  const quizzesTaken = Object.keys(quizScores).length

  const nextLesson = allLessons.find((l) => !completedLessons[l.id]) || allLessons[0]

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 py-8 md:py-12">
      {/* Hero */}
      <section className="card relative overflow-hidden p-7 md:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="relative">
          <span className="chip mb-4">🎓 Complete corporate finance course · FIN 1–71</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.05]">
            Master <span className="text-brand-300">Corporate Finance</span>
            <br className="hidden md:block" /> from cash flows to CAPM.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
            Every concept explained, every formula derived, worked examples, {' '}
            <span className="text-white font-semibold">interactive calculators</span>, {' '}
            <span className="text-white font-semibold">quizzes</span> and {' '}
            <span className="text-white font-semibold">flashcards</span> — one platform to learn it all.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={`/lesson/${nextLesson.id}`} className="btn-primary">
              {done > 0 ? 'Continue learning' : 'Start learning'} →
            </Link>
            <YouTubeButton href={PLAYLIST_URL}>Watch full playlist</YouTubeButton>
            <Link to="/quiz" className="btn-ghost">Take a quiz</Link>
            <Link to="/calculators" className="btn-ghost">Open calculators</Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Video lessons by Tony Bell · 71 free YouTube videos mapped to every lesson below.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <BigStat value={`${pct}%`} label="Course complete" sub={`${done}/${totalLessons} lessons`} />
        <BigStat value={totalLessons} label="Lessons" sub={`${Math.round(totalMinutes / 60)} hours of content`} />
        <BigStat value={modules.length} label="Modules" sub="Structured path" />
        <BigStat value={quizzesTaken} label="Quizzes taken" sub="Keep practicing" />
      </section>

      {/* Modules */}
      <section className="mt-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Learning path</h2>
            <p className="text-slate-400 text-sm">Ten modules that build on each other.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <ModuleCard key={m.id} m={m} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

function BigStat({ value, label, sub }) {
  return (
    <div className="card p-5">
      <div className="text-3xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm font-medium text-slate-200">{label}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  )
}
