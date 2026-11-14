import { motion } from 'motion/react'
import { useState } from 'react'
import { featureFlagsDemo, projects, type Project } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { TiltCard } from '@/components/ui/TiltCard'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Selected projects</h2>
          <p>Hover a card — it tilts and lights up. The feature-flag one is interactive.</p>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08} className={p.featured ? 'projects__wide' : undefined}>
              {p.featured ? <FeaturedCard p={p} /> : <Card p={p} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CardHead({ p }: { p: Project }) {
  return (
    <div className="card__top">
      <span className="card__kind">{p.kind}</span>
      <span className="card__yr">{p.year}</span>
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
    <TiltCard className="card">
      <CardHead p={p} />
      {p.stat && <div className="card__stat">{p.stat}</div>}
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <Tools tools={p.tools} />
    </TiltCard>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  const [flags, setFlags] = useState(featureFlagsDemo)
  const toggle = (name: string) => setFlags((fs) => fs.map((f) => (f.name === name ? { ...f, on: !f.on } : f)))
  return (
    <TiltCard className="card card--wide">
      <div>
        <CardHead p={p} />
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <Tools tools={p.tools} />
      </div>
      <div className="flags" role="group" aria-label="Feature flag demo">
        {flags.map((f) => (
          <button
            key={f.name}
            type="button"
            className={`flag ${f.on ? 'on' : ''}`}
            onClick={() => toggle(f.name)}
            aria-pressed={f.on}
          >
            <div>
              <b>{f.name}</b>
              <small>{f.scope}</small>
            </div>
            <span className="flag__sw">
              <motion.i layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
            </span>
          </button>
        ))}
      </div>
    </TiltCard>
  )
}
