import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

type Stat = { readonly value: string; readonly label: string }
type Node = { x: number; y: number; dx: number; dy: number; anchor: 'start' | 'end' }

/** Wide layout: trace sits to the right of the headline on desktop. */
const WIDE = {
  viewBox: '0 0 820 420',
  path: 'M0 300 C120 300 140 120 260 120 S420 330 560 260 S700 60 820 90',
  nodes: [
    { x: 260, y: 120, dx: 18, dy: -14, anchor: 'start' },
    { x: 420, y: 225, dx: -18, dy: -14, anchor: 'end' },
    { x: 560, y: 260, dx: 18, dy: 30, anchor: 'start' },
    { x: 720, y: 100, dx: -14, dy: -16, anchor: 'end' },
  ] as Node[],
}

/** Compact layout: trace stacks under the intro on phones, stops spread apart. */
const COMPACT = {
  viewBox: '0 0 820 520',
  path: 'M0 430 C70 430 100 380 150 380 S280 150 330 150 S470 360 520 360 S640 110 700 110 S790 150 820 160',
  nodes: [
    { x: 150, y: 380, dx: 22, dy: 44, anchor: 'start' },
    { x: 330, y: 150, dx: -22, dy: -14, anchor: 'end' },
    { x: 520, y: 360, dx: 22, dy: 44, anchor: 'start' },
    { x: 700, y: 110, dx: -22, dy: -14, anchor: 'end' },
  ] as Node[],
}

function useCompact() {
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 860px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const on = () => setCompact(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return compact
}

/**
 * The hero's one orchestrated motion moment: a vehicle-telemetry style trace
 * draws itself across the page and lights up four real numbers from the resume.
 */
export function TelemetryTrace({ stats }: { stats: readonly Stat[] }) {
  const compact = useCompact()
  const layout = compact ? COMPACT : WIDE
  const labelGap = compact ? 26 : 18

  return (
    <svg className="trace" viewBox={layout.viewBox} aria-hidden="true" key={layout.viewBox}>
      <path className="trace__ghost" d={layout.path} />
      <motion.path
        className="trace__line"
        d={layout.path}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
      />
      {layout.nodes.map((n, i) => {
        const s = stats[i]
        if (!s) return null
        return (
          <motion.g
            key={s.label}
            className="trace__node"
            transform={`translate(${n.x} ${n.y})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 + i * 0.6 }}
          >
            <circle r="9" />
            <circle className="core" r="4" />
            <text x={n.dx} y={n.dy} className="v" textAnchor={n.anchor}>
              {s.value}
            </text>
            <text x={n.dx} y={n.dy + labelGap} textAnchor={n.anchor}>
              {s.label}
            </text>
          </motion.g>
        )
      })}
    </svg>
  )
}
