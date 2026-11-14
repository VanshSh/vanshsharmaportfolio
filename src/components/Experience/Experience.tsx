import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState } from 'react'
import { experience, type Job } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { RichText } from '@/components/ui/RichText'
import './Experience.css'

export function Experience() {
  const routeRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: routeRef, offset: ['start 70%', 'end 70%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Where I've shipped</h2>
          <p>Three companies, three very different products: B2B telematics, D2C e-commerce, consumer mental-health.</p>
        </Reveal>
        <div className="route" ref={routeRef}>
          <div className="route__rail" aria-hidden="true">
            <motion.div className="route__fill" style={{ height }} />
          </div>
          {experience.map((job, i) => (
            <Stop key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stop({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false)
  const more = job.moreBullets ?? []
  return (
    <Reveal className="stop" delay={index * 0.05}>
      <motion.div
        className="stop__dot"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: true, margin: '-30% 0px -30% 0px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      />
      <div className="stop__body">
        <div className="stop__meta">
          <h3>{job.company}</h3>
          <div className="stop__role">{job.role}</div>
          <div className="stop__when">{job.period}</div>
          <div className="stop__where">{job.location}</div>
        </div>
        <div>
          <ul>
            {job.bullets.map((b) => (
              <li key={b}>
                <RichText text={b} />
              </li>
            ))}
          </ul>
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                key="more"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {more.map((b) => (
                  <li key={b}>
                    <RichText text={b} />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          {more.length > 0 && (
            <button className="stop__more" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
              {open ? 'Show less' : `Show ${more.length} more`}
            </button>
          )}
        </div>
      </div>
    </Reveal>
  )
}
