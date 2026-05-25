import { motion } from 'framer-motion'

interface Props {
  current: number
  total: number
  onGoTo: (i: number) => void
}

export default function SlideIndicator({ current, total, onGoTo }: Props) {
  return (
    <motion.div
      style={{
        position: 'fixed',
        right: 12,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '8px 4px',
        background: 'rgba(255,255,255,0.85)',
        borderRadius: 20,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(8px)',
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onGoTo(i)}
          title={`Ir a slide ${i + 1}`}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            width:  i === current ? 5 : 4,
            height: i === current ? 20 : 4,
            borderRadius: 99,
            backgroundColor:
              i === current
                ? '#1B4FA8'
                : i < current
                  ? '#2A8A4A'
                  : 'rgba(0,0,0,0.22)',      /* ← más oscuro = visible */
            boxShadow: i === current
              ? '0 0 6px rgba(27,79,168,0.5)'
              : 'none',
          }}
          style={{
            border: 'none', padding: 0, cursor: 'pointer',
            display: 'block', flexShrink: 0,
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </motion.div>
  )
}
