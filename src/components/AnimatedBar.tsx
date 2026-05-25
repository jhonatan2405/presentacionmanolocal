import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  label: string
  value: number
  color?: 'blue' | 'green'
  delay?: number
}

export default function AnimatedBar({ label, value, color = 'blue', delay = 0 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const gradient = color === 'blue'
    ? 'from-blue-500 to-blue-400'
    : 'from-green-500 to-green-400'

  const textColor = color === 'blue' ? 'text-blue-700' : 'text-green-700'

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium text-slate-600">{label}</span>
        <span className={`text-sm font-black ${textColor}`}>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
