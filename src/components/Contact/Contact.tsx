import { profile } from '@/data/site'
import { DownloadIcon, MagneticButton } from '@/components/ui/MagneticButton'
import { Reveal } from '@/components/ui/Reveal'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact">
          <h2>
            Let's build the <em>next one</em> together.
          </h2>
          <div className="contact__row">
            <MagneticButton href={`mailto:${profile.email}`} variant="primary">
              Email me
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} download={profile.resumeFileName}>
              Download resume <DownloadIcon />
            </MagneticButton>
          </div>
          <div className="contact__lines">
            <div>
              <small>Email</small>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <small>Phone</small>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
            <div>
              <small>Elsewhere</small>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="contact__sep">·</span>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </Reveal>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, Vite, Motion &amp; Lenis</span>
        </footer>
      </div>
    </section>
  )
}
