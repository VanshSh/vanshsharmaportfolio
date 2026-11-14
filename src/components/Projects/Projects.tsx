import { projects, type Project } from '@/data/site'
import { ExternalIcon, GithubIcon } from '@/components/ui/MagneticButton'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Selected projects</h2>
          <p>Hover a card — it tilts and lights up.</p>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.featured ? 'projects__wide' : undefined}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Links({ p }: { p: Project }) {
  if (!p.github && !p.live) return null
  return (
    <div className="card__links">
      {p.github && (
        <a href={p.github} target="_blank" rel="noreferrer">
          <GithubIcon /> Code
        </a>
      )}
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer">
          <ExternalIcon /> Live preview
        </a>
      )}
    </div>
  )
}

function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="card__tools">
      {tools.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}

function Card({ p }: { p: Project }) {
  return (
    <TiltCard className={`card ${p.featured ? 'card--wide' : ''}`.trim()}>
      <div className="card__head">
        <div className="card__top">
          <span className="card__kind">{p.kind}</span>
          <span className="card__yr">{p.year}</span>
        </div>
        <h3>{p.title}</h3>
      </div>
      <div className="card__body">
        <p>{p.description}</p>
        <Tools tools={p.tools} />
        <Links p={p} />
      </div>
    </TiltCard>
  )
}
