import { useCallback, useEffect, useState, type MouseEvent } from 'react'

export type Theme = 'dark' | 'light'
const KEY = 'vs-theme'

function readInitial(): Theme {
  const current = document.documentElement.dataset.theme
  return current === 'light' ? 'light' : 'dark'
}

/**
 * Theme state persisted to localStorage. `toggle` runs a circular reveal from the
 * click point via the View Transitions API when the browser supports it.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#151013' : '#fbf6f4')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage unavailable — theme simply won't persist */
    }
  }, [theme])

  const toggle = useCallback(
    (e?: MouseEvent) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } }
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!doc.startViewTransition || reduce || !e) {
        setTheme(next)
        return
      }
      const x = e.clientX
      const y = e.clientY
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const t = doc.startViewTransition(() => {
        document.documentElement.dataset.theme = next
        setTheme(next)
      })
      t.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 700, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' },
        )
      })
    },
    [theme],
  )

  return { theme, toggle }
}
