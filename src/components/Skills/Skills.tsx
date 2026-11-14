import { skills } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>What I work with</h2>
        </Reveal>
        <Reveal className="skills">
          {skills.map((g) => (
            <div className="skill" key={g.title}>
              <h3>{g.title}</h3>
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
