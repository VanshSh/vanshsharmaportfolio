import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type AnchorHTMLAttributes, type PointerEvent, type ReactNode } from 'react'
import { canHover } from '@/hooks/useReducedMotion'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

/** A pill button that leans toward the pointer. Plain link on touch devices. */
export function MagneticButton({ children, variant = 'ghost', className = '', ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (!canHover() || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.18)
    y.set((e.clientY - r.top - r.height / 2) * 0.3)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      className={`btn ${variant === 'primary' ? 'primary' : ''} ${className}`.trim()}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...(rest as object)}
    >
      {children}
    </motion.a>
  )
}

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v12m0 0 5-5m-5 5-5-5M4 20h16" />
  </svg>
)
