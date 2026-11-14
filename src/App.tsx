import { Analytics } from '@vercel/analytics/react'
import { useLenis } from '@/hooks/useLenis'
import { useTheme } from '@/hooks/useTheme'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { Nav } from '@/components/Nav/Nav'
import { Hero } from '@/components/Hero/Hero'
import { Marquee } from '@/components/Marquee/Marquee'
import { Skills } from '@/components/Skills/Skills'
import { Experience } from '@/components/Experience/Experience'
import { Projects } from '@/components/Projects/Projects'
import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  useLenis()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorGlow />
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Analytics />
    </>
  )
}
