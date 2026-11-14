import { useEffect, useState } from 'react'
import { navLinks, profile } from '@/data/site'
import type { Theme } from '@/hooks/useTheme'
import './Nav.css'

type Props = { theme: Theme; onToggle: (e: React.MouseEvent) => void }

export function Nav({ theme, onToggle }: Props) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector<HTMLElement>(l.href)).filter(Boolean) as HTMLElement[]
    const onScroll = () => {
      let cur = ''
      for (const s of sections) if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = `#${s.id}`
      setActive(cur)
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav__mark" href="#top">
        <i aria-hidden="true" />
        <span>{profile.firstName}</span>
      </a>
      <div className="nav__links">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </div>
      <button className="nav__toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </button>
    </nav>
  )
}
