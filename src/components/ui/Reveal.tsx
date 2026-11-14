import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

type Props = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
  /** Distance in px the element travels up while fading in. */
  y?: number
}

/** Fade-and-rise once when the element enters the viewport. */
export function Reveal({ children, delay = 0, y = 28, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
