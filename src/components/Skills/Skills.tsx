import { skills } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>What I work with</h2>
          <p>Frontend-deep, backend-capable. The stack I ship with every week.</p>
        </Reveal>
        <Reveal className="skills">
          {skills.map((g) => (
            <div className="skill" key={g.title}>
              <h3>
                {g.title}
                {g.tag && <small>{g.tag}</small>}
              </h3>
              <div className="chips">
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
