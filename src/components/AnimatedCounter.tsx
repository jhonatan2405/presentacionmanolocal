import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2, className = '' }: Props) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 60
    const increment = value / steps
    const interval = (duration * 1000) / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <motion.span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </motion.span>
  )
}
