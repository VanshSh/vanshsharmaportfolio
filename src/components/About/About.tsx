import { about } from '@/data/site'
import { ExternalIcon } from '@/components/ui/MagneticButton'
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
            {about.credentials.map((c) => {
              const inner = (
                <>
                  <i>{c.mark}</i>
                  <div>
                    <b>{c.title}</b>
                    <small>{c.sub}</small>
                  </div>
                  {c.href && <ExternalIcon />}
                </>
              )
              return c.href ? (
                <a className="cred cred--link" key={c.title} href={c.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div className="cred" key={c.title}>
                  {inner}
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
