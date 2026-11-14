import { about } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import './About.css'

export function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about__grid">
        <Reveal>
          <h2>{about.headline}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>{about.body}</p>
          <div className="creds">
            {about.credentials.map((c) => (
              <div className="cred" key={c.title}>
                <i>{c.mark}</i>
                <div>
                  <b>{c.title}</b>
                  <small>{c.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
