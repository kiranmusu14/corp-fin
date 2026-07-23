import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ProgressProvider, useProgress } from './store/progress.jsx'
import { totalLessons, totalMinutes, totalFlashcards, totalQuiz } from './data/curriculum.js'
import Dashboard from './pages/Dashboard.jsx'
import ModulePage from './pages/ModulePage.jsx'
import LessonPage from './pages/LessonPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import FlashcardsPage from './pages/FlashcardsPage.jsx'
import FormulasPage from './pages/FormulasPage.jsx'
import CalculatorsPage from './pages/CalculatorsPage.jsx'

const nav = [
  { to: '/', label: 'Dashboard', icon: '🏠', end: true },
  { to: '/quiz', label: 'Quizzes', icon: '📝' },
  { to: '/flashcards', label: 'Flashcards', icon: '🎴' },
  { to: '/formulas', label: 'Formula Sheet', icon: '🧾' },
  { to: '/calculators', label: 'Calculators', icon: '🧮' },
]

function ProgressPill() {
  const { completedLessons } = useProgress()
  const done = Object.keys(completedLessons).length
  const pct = Math.round((done / totalLessons) * 100)
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
        <span>Course progress</span>
        <span className="font-semibold text-brand-200">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-brand-500 to-brand-300 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-1.5 text-[11px] text-slate-500">
        {done} of {totalLessons} lessons complete
      </div>
    </div>
  )
}

function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed z-40 md:static inset-y-0 left-0 w-72 shrink-0 border-r border-white/10 bg-ink-900/95 md:bg-ink-900/40 backdrop-blur-xl flex flex-col transition-transform md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link to="/" onClick={onClose} className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white font-extrabold shadow-glow">
            F
          </div>
          <div>
            <div className="font-extrabold text-white leading-tight">Finance Academy</div>
            <div className="text-[11px] text-slate-400">Master Corporate Finance</div>
          </div>
        </Link>

        <nav className="p-3 space-y-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive ? 'bg-brand-600/20 text-white ring-1 ring-brand-500/40' : 'text-slate-300 hover:bg-white/5'
                }`
              }
            >
              <span className="text-base">{n.icon}</span>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <ProgressPill />
          <div className="grid grid-cols-2 gap-2 px-3 pb-3 text-center">
            <Stat value={totalLessons} label="Lessons" />
            <Stat value={`${Math.round(totalMinutes / 60)}h`} label="Content" />
            <Stat value={totalQuiz} label="Quiz Qs" />
            <Stat value={totalFlashcards} label="Cards" />
          </div>
        </div>
      </aside>
    </>
  )
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 py-2">
      <div className="text-lg font-bold text-white leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-slate-400 mt-1">{label}</div>
    </div>
  )
}

function Shell() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return (
    <div className="flex min-h-screen">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="md:hidden sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-ink-900/80 backdrop-blur px-4 py-3">
          <button onClick={() => setOpen(true)} className="btn-ghost !px-3 !py-2" aria-label="Open menu">
            ☰
          </button>
          <span className="font-bold text-white">Finance Academy</span>
          <span className="w-9" />
        </header>
        <main key={location.pathname} className="flex-1 animate-fade-in">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quiz/:moduleId" element={<QuizPage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/flashcards/:moduleId" element={<FlashcardsPage />} />
            <Route path="/formulas" element={<FormulasPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ProgressProvider>
      <Shell />
    </ProgressProvider>
  )
}
