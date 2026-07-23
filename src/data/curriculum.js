import m1 from './modules/m1_cashflow.js'
import m2 from './modules/m2_planning.js'
import m3 from './modules/m3_tvm.js'
import m4 from './modules/m4_bonds.js'
import m5 from './modules/m5_stocks.js'
import m6 from './modules/m6_capbudget.js'
import m7 from './modules/m7_risk.js'
import m8 from './modules/m8_wacc.js'
import m9 from './modules/m9_capstructure.js'
import m10 from './modules/m10_dividends.js'

export const modules = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10]

// Flat list of all lessons, each tagged with its module info.
export const allLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleTitle: m.title, moduleIcon: m.icon }))
)

export const lessonById = Object.fromEntries(allLessons.map((l) => [l.id, l]))
export const moduleById = Object.fromEntries(modules.map((m) => [m.id, m]))

export const totalLessons = allLessons.length
export const totalMinutes = allLessons.reduce((s, l) => s + (l.minutes || 0), 0)

// Every flashcard across the course, tagged with source.
export const allFlashcards = allLessons.flatMap((l) =>
  (l.flashcards || []).map((f, i) => ({
    ...f,
    id: `${l.id}-fc-${i}`,
    lessonId: l.id,
    lessonTitle: l.title,
    moduleId: l.moduleId,
    moduleTitle: l.moduleTitle,
  }))
)

// Every quiz question across the course, tagged with source.
export const allQuiz = allLessons.flatMap((l) =>
  (l.quiz || []).map((q, i) => ({
    ...q,
    id: `${l.id}-q-${i}`,
    lessonId: l.id,
    lessonTitle: l.title,
    moduleId: l.moduleId,
    moduleTitle: l.moduleTitle,
  }))
)

export const totalFlashcards = allFlashcards.length
export const totalQuiz = allQuiz.length

// Every formula across the course, for the reference sheet.
export const allFormulas = allLessons.flatMap((l) =>
  (l.formulas || []).map((f, i) => ({
    ...f,
    id: `${l.id}-f-${i}`,
    lessonId: l.id,
    lessonTitle: l.title,
    lessonCode: l.code,
    moduleId: l.moduleId,
    moduleTitle: l.moduleTitle,
  }))
)

export function quizForModule(moduleId) {
  return allQuiz.filter((q) => q.moduleId === moduleId)
}

export function flashcardsForModule(moduleId) {
  return allFlashcards.filter((f) => f.moduleId === moduleId)
}
