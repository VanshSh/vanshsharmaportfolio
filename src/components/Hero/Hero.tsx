import { motion } from 'motion/react'
import { heroStats, profile } from '@/data/site'
import { ArrowIcon, DownloadIcon, MagneticButton } from '@/components/ui/MagneticButton'
import { TelemetryTrace } from './TelemetryTrace'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <motion.div
          className="hero__status"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          <b>●</b> {profile.status}
        </motion.div>

        <h1 className="hero__name">
          <span className="hero__w">
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease }}>
              {profile.firstName}
            </motion.span>
          </span>
          <br />
          <span className="hero__w">
            <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 0.1 }}>
              {profile.lastName}
              <em>.</em>
            </motion.span>
          </span>
        </h1>

        <div className="hero__lede">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease, delay: 0.5 }}>
            {profile.summary} <span>{profile.summaryDetail}</span>
          </motion.p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.7 }}
          >
            <MagneticButton href="#projects" variant="primary">
              See the work <ArrowIcon />
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} download={profile.resumeFileName}>
              Download resume <DownloadIcon />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <TelemetryTrace stats={heroStats} />
    </section>
  )
}
