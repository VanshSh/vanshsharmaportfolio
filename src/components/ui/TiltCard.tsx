import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import { useRef, type HTMLAttributes, type PointerEvent, type ReactNode } from 'react'
import { canHover } from '@/hooks/useReducedMotion'

type Props = HTMLAttributes<HTMLElement> & { children: ReactNode; className?: string }

/** Card that tilts toward the pointer and carries a spotlight at the cursor. */
export function TiltCard({ children, className = '', ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const srx = useSpring(rx, { stiffness: 180, damping: 20 })
  const sry = useSpring(ry, { stiffness: 180, damping: 20 })
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}% ${my}%, var(--accent-soft), transparent 40%)`

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!canHover() || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px * 100)
    my.set(py * 100)
    rx.set((py - 0.5) * -6)
    ry.set((px - 0.5) * 6)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className={`tilt ${className}`.trim()}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...(rest as object)}
    >
      <motion.div className="tilt__spot" style={{ background: spotlight }} aria-hidden="true" />
      {children}
    </motion.article>
  )
}
