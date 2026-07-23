import { useParams, Link } from 'react-router-dom'
import { moduleById } from '../data/curriculum.js'
import { useProgress } from '../store/progress.jsx'
import { PLAYLIST_URL, lessonVideoUrl } from '../data/youtube.js'
import { YouTubeButton, YouTubeIcon } from '../components/YouTube.jsx'

export default function ModulePage() {
  const { moduleId } = useParams()
  const m = moduleById[moduleId]
  const { isLessonComplete } = useProgress()

  if (!m) return <div className="p-8 text-slate-300">Module not found. <Link className="text-brand-300" to="/">Go home</Link></div>

  const done = m.lessons.filter((l) => isLessonComplete(l.id)).length

  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 py-8 md:py-12">
      <Link to="/" className="text-sm text-slate-400 hover:text-white">← All modules</Link>
      <div className="card relative overflow-hidden mt-4 p-7">
        <div className={`absolute inset-0 bg-gradient-to-br ${m.accent}`} />
        <div className="relative">
          <div className="text-4xl">{m.icon}</div>
          <h1 className="mt-2 text-3xl font-extrabold text-white">{m.title}</h1>
          <p className="mt-2 max-w-2xl text-slate-300">{m.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip">{m.lessons.length} lessons</span>
            <span className="chip">{done} completed</span>
            <Link to={`/quiz/${m.id}`} className="chip hover:bg-white/10">📝 Module quiz</Link>
            <Link to={`/flashcards/${m.id}`} className="chip hover:bg-white/10">🎴 Flashcards</Link>
          </div>
          <div className="mt-4">
            <YouTubeButton href={PLAYLIST_URL} variant="ghost">Watch full playlist on YouTube</YouTubeButton>
          </div>
        </div>
      </div>

      <ol className="mt-6 space-y-3">
        {m.lessons.map((l, i) => {
          const complete = isLessonComplete(l.id)
          return (
            <li key={l.id}>
              <div className="card flex items-center gap-4 p-4 hover:border-brand-500/40 transition group">
                <div
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold ${
                    complete ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40' : 'bg-white/5 text-slate-300'
                  }`}
                >
                  {complete ? '✓' : i + 1}
                </div>
                <Link to={`/lesson/${l.id}`} className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-brand-300">{l.code}</span>
                    <span className="text-[11px] text-slate-500">· {l.minutes} min</span>
                  </div>
                  <div className="font-semibold text-white truncate">{l.title}</div>
                </Link>
                <a
                  href={lessonVideoUrl(l)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Watch ${l.code} on YouTube`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20 transition"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>
                <Link to={`/lesson/${l.id}`} className="text-slate-500 group-hover:text-brand-300 transition">→</Link>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
