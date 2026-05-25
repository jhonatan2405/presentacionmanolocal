import { motion } from 'framer-motion'
import ManoLocalLogo from '../ManoLocalLogo'
import UCCLogo from '../UCCLogo'

const authors = [
  { name: 'Jhonatan Javier Barrera Plaza', initials: 'JB' },
  { name: 'Juan Sebastián Arguelles Monterrosa', initials: 'JA' },
  { name: 'Juan Luis De La Espriella Pereira', initials: 'JL' },
]

export default function S01_Portada() {
  return (
    <div className="bg-base" style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
      paddingTop: 44,   /* clear fixed nav bar */
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

      {/* ── Animated bubble 1 (top-left) ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 700, height: 700,
        top: '-22%', left: '-14%',
        background: 'rgba(42,138,74,0.16)', // green
        filter: 'blur(90px)',
        animation: 'floatBubble1 22s ease-in-out infinite',
        zIndex: 0,
      }} />
      {/* ── Animated bubble 2 (bottom-right) ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 580, height: 580,
        bottom: '-22%', right: '-12%',
        background: 'rgba(27,79,168,0.22)', // blue
        filter: 'blur(80px)',
        animation: 'floatBubble2 28s ease-in-out infinite',
        zIndex: 0,
      }} />
      {/* ── Animated bubble 3 (center accent) ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 380, height: 380,
        top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(99,102,241,0.11)', // indigo
        filter: 'blur(70px)',
        animation: 'floatBubble3 18s ease-in-out infinite',
        zIndex: 0,
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
      }} />

      {/* ──────────────────────────────────────────────
          TOP SECTION — UCC Logo + course
      ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 10,
          width: '100%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          paddingTop: 14,
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          paddingBottom: 14,
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <motion.div whileHover={{ scale: 1.04 }} style={{ cursor: 'pointer' }}>
          <UCCLogo height={44} />
        </motion.div>
        <div style={{
          marginTop: 6, display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 10, color: '#94A3B8', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          <span>Sede Montería</span>
          <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#CBD5E1' }} />
          <span>Ingeniería de Sistemas</span>
          <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#CBD5E1' }} />
          <span>Formulación, Evaluación y Análisis de Factibilidad de Proyectos</span>
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────────
          CENTER SECTION — Logo + Headline
      ────────────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 20, padding: '12px 40px',
        textAlign: 'center',
      }}>

        {/* ManoLocal logo grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{ scale: 1.06, rotate: 1.5 }}
          style={{ cursor: 'pointer' }}
        >
          <ManoLocalLogo size={190} showText />
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: 15, color: '#64748B', lineHeight: 1.65,
            maxWidth: 500, fontWeight: 400,
          }}
        >
          Plataforma digital que conecta trabajadores independientes de oficios
          con clientes en{' '}
          <strong style={{ color: '#334155', fontWeight: 700 }}>Montería, Córdoba</strong>.
        </motion.p>

        {/* ── Autores ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{
            display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
          }}
        >
          {authors.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'white',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 50,
                padding: '7px 16px 7px 7px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, #1B4FA8, #2A8A4A)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: 'white',
                flexShrink: 0,
              }}>
                {a.initials}
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#475569', whiteSpace: 'nowrap' }}>
                {a.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ──────────────────────────────────────────────
          BOTTOM — Docente + Fecha
      ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          position: 'relative', zIndex: 10,
          width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 10, padding: '14px 40px',
          borderTop: '1px solid rgba(0,0,0,0.05)',
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {[
          { label: 'Docente', value: 'Ing. Erika Patricia Causil Luna' },
          { label: 'Fecha', value: '26 de Mayo de 2026' },
          { label: 'Lugar', value: 'Montería — Córdoba, Colombia' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && <div style={{ width: 1, height: 16, background: 'rgba(0,0,0,0.1)' }} />}
            <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>{item.label}:</span>
            <span style={{ fontSize: 11, color: '#475569', fontWeight: 700 }}>{item.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
