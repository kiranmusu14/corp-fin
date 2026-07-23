import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const KEY = 'finance-academy-progress-v1'
const ProgressContext = createContext(null)

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    /* ignore */
  }
  return { completedLessons: {}, quizScores: {}, knownCards: {} }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      /* ignore */
    }
  }, [state])

  const api = useMemo(
    () => ({
      ...state,
      isLessonComplete: (id) => !!state.completedLessons[id],
      toggleLesson: (id) =>
        setState((s) => {
          const next = { ...s.completedLessons }
          if (next[id]) delete next[id]
          else next[id] = Date.now()
          return { ...s, completedLessons: next }
        }),
      markLesson: (id, done = true) =>
        setState((s) => {
          const next = { ...s.completedLessons }
          if (done) next[id] = Date.now()
          else delete next[id]
          return { ...s, completedLessons: next }
        }),
      recordQuiz: (scopeId, correct, total) =>
        setState((s) => ({
          ...s,
          quizScores: {
            ...s.quizScores,
            [scopeId]: {
              correct,
              total,
              pct: Math.round((correct / total) * 100),
              at: Date.now(),
              best: Math.max(s.quizScores[scopeId]?.best ?? 0, Math.round((correct / total) * 100)),
            },
          },
        })),
      toggleKnownCard: (id) =>
        setState((s) => {
          const next = { ...s.knownCards }
          if (next[id]) delete next[id]
          else next[id] = true
          return { ...s, knownCards: next }
        }),
      isCardKnown: (id) => !!state.knownCards[id],
      reset: () => setState({ completedLessons: {}, quizScores: {}, knownCards: {} }),
    }),
    [state]
  )

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
