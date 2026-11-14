import { profile } from '@/data/site'
import { DownloadIcon, GithubIcon, LinkedinIcon, MagneticButton } from '@/components/ui/MagneticButton'
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
            <MagneticButton href={profile.resumeLink} target="_blank" rel="noreferrer">
              View resume <DownloadIcon />
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
              <div className="contact__socials">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </footer>
      </div>
    </section>
  )
}
