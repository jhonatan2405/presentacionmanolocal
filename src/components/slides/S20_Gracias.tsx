import { motion } from 'framer-motion'
import ManoLocalLogo from '../ManoLocalLogo'

const team = [
  { name: 'Jhonatan Javier Barrera Plaza',       initials: 'JB' },
  { name: 'Juan Sebastián Arguelles Monterrosa',  initials: 'JA' },
  { name: 'Juan Luis De La Espriella Pereira',   initials: 'JL' },
]

export default function S20_Gracias() {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: '#FFFFFF',
    }}>
      <style>{`
        @keyframes floatBubble1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(35vw, 20vh) scale(1.15); }
          50%  { transform: translate(15vw, 50vh) scale(0.9); }
          75%  { transform: translate(45vw, 30vh) scale(1.08); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes floatBubble2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(-40vw, -25vh) scale(1.12); }
          50%  { transform: translate(-15vw, -55vh) scale(0.92); }
          75%  { transform: translate(-55vw, -20vh) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes floatBubble3 {
          0%   { transform: translate(-50%, -50%) scale(1); }
          25%  { transform: translate(-20%, -75%) scale(1.18); }
          50%  { transform: translate(-80%, -25%) scale(0.9); }
          75%  { transform: translate(-30%, -30%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

      {/* ── Bubble 1 ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 700, height: 700, top: '-20%', left: '-15%',
        background: 'rgba(42,138,74,0.16)', filter: 'blur(100px)', // green
        animation: 'floatBubble1 22s ease-in-out infinite', zIndex: 0,
      }} />
      {/* ── Bubble 2 ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 580, height: 580, bottom: '-22%', right: '-12%',
        background: 'rgba(27,79,168,0.22)', filter: 'blur(90px)', // blue
        animation: 'floatBubble2 28s ease-in-out infinite', zIndex: 0,
      }} />
      {/* ── Bubble 3 center ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 380, height: 380, top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(99,102,241,0.11)', filter: 'blur(80px)', // indigo
        animation: 'floatBubble3 18s ease-in-out infinite', zIndex: 0,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 32, padding: '40px',
        textAlign: 'center',
      }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <ManoLocalLogo size={120} showText />
        </motion.div>

        {/* Gracias title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
        >
          <h1 style={{
            fontSize: 72, fontWeight: 900,
            background: 'linear-gradient(135deg, #1B4FA8, #2A8A4A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.05,
            letterSpacing: '-2px',
          }}>
            ¡Gracias!
          </h1>
          <p style={{ fontSize: 16, color: '#64748B', fontWeight: 500, maxWidth: 420 }}>
            Por su atención y tiempo durante esta sustentación académica.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            width: 280, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(27,79,168,0.2), rgba(42,138,74,0.2), transparent)',
          }}
        />

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'white',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 50,
                padding: '7px 18px 7px 7px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'linear-gradient(135deg, #1B4FA8, #2A8A4A)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: 'white', flexShrink: 0,
              }}>
                {m.initials}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#475569', whiteSpace: 'nowrap' }}>
                {m.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: '#94A3B8' }}
        >
          {[
            'Ing. Erika Patricia Causil Luna',
            'Universidad Cooperativa de Colombia',
            'Mayo 2026',
          ].map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {i > 0 && <span style={{ opacity: 0.4 }}>·</span>}
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
