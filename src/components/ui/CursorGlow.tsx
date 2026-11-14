import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import './CursorGlow.css'

/** Soft accent glow that follows the pointer (dark theme, pointer devices only). */
export function CursorGlow() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.8 })
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.8 })
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setOn(true)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return <motion.div className={`glow ${on ? 'on' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true" />
}
