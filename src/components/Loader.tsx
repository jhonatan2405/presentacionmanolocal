import { motion } from 'framer-motion'
import ManoLocalLogo from './ManoLocalLogo'

export default function Loader({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-base"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setTimeout(onDone, 2800)}
    >
      {/* Subtle mesh bg */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(27,79,168,0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(42,138,74,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <ManoLocalLogo size={140} showText />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-60 h-0.5 rounded-full overflow-hidden bg-black/8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(to right, #1B4FA8, #2A8A4A)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, delay: 0.7, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.p
          className="text-[10px] tracking-[0.22em] uppercase text-slate-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Cargando experiencia...
        </motion.p>
      </div>
    </motion.div>
  )
}
