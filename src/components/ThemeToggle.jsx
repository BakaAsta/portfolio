import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const getInitialTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') {
    return stored
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
  }, [])

  useEffect(() => {
    if (!theme) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-ink/60 dark:text-white"
      aria-label="Basculer le mode clair et sombre"
    >
      <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
      <span>{theme === 'dark' ? 'Sombre' : 'Clair'}</span>
    </button>
  )
}

export default ThemeToggle
