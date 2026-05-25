import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Home, LayoutGrid, X } from 'lucide-react'

interface Props {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onGoFirst: () => void
  onGoTo: (i: number) => void
  slideTitle: string
  slideSection: string
  slideLabel: string
  slides: Array<{ title: string; section: string; label: string }>
}

// Group slides by section label for the menu
function groupBySection(slides: Props['slides']) {
  const groups: { label: string; indices: number[] }[] = []
  for (let i = 0; i < slides.length; i++) {
    const s = slides[i]
    const existing = groups.find(g => g.label === s.label)
    if (existing) {
      existing.indices.push(i)
    } else {
      groups.push({ label: s.label, indices: [i] })
    }
  }
  return groups
}

export default function Navigation({
  current, total, onPrev, onNext, onGoFirst, onGoTo,
  slideTitle, slideSection, slideLabel, slides,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = ((current + 1) / total) * 100
  const isFirst = current === 0
  const groups = groupBySection(slides)

  return (
    <>
      {/* ── Barra unificada top ── */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 44,
          zIndex: 9999,
          display: 'flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.93)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
          padding: '0 12px 0 16px',
          gap: 0,
        }}
        initial={{ y: -44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 280, damping: 28 }}
      >
        {/* ── Izquierda: Acento + Sección clickeable ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 0 }}>
          {/* Barra accent */}
          <motion.div
            style={{
              width: 3, borderRadius: 99, flexShrink: 0,
              background: 'linear-gradient(to bottom, #1B4FA8, #2A8A4A)',
            }}
            animate={{ height: 22 }}
            transition={{ duration: 0.3 }}
          />

          {/* Sección + label clickeable → abre menú */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{
              border: 'none', background: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '4px 8px', borderRadius: 8,
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,79,168,0.06)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >
            <div style={{ minWidth: 0, overflow: 'hidden', textAlign: 'left' }}>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`sec-${current}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{
                    fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: 700, color: '#1B4FA8', opacity: 0.7, lineHeight: 1,
                    marginBottom: 2,
                  }}>
                    Sección {slideSection}
                  </div>
                  <div style={{
                    fontSize: 12, fontWeight: 700, color: '#334155', lineHeight: 1,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    maxWidth: 260,
                  }}>
                    {slideLabel}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <LayoutGrid size={13} color="#94a3b8" style={{ flexShrink: 0 }} />
          </button>
        </div>

        {/* ── Separador ── */}
        <div style={{ width: 1, height: 20, background: 'rgba(0,0,0,0.09)', flexShrink: 0, margin: '0 12px' }} />

        {/* ── Controles de navegación ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, flexShrink: 0 }}>
          <motion.button
            onClick={onPrev}
            whileHover={{ backgroundColor: '#F1F5F9', scale: 1.08 }}
            whileTap={{ scale: 0.82 }}
            title="Anterior"
            style={{
              width: 30, height: 30, borderRadius: 30,
              border: 'none', background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#64748B', flexShrink: 0,
            }}
          >
            <ChevronLeft size={15} strokeWidth={2.5} />
          </motion.button>

          <div style={{ position: 'relative', width: 28, height: 22, overflow: 'hidden' }}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={current}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 14, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 900, color: '#1B4FA8',
                  letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums',
                }}
              >
                {String(current + 1).padStart(2, '0')}
              </motion.div>
            </AnimatePresence>
          </div>

          <span style={{ fontSize: 12, color: '#CBD5E1', fontWeight: 700, margin: '0 1px' }}>/</span>

          <div style={{
            width: 28, textAlign: 'center',
            fontSize: 13, fontWeight: 900, color: '#334155',
            letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums',
          }}>
            {String(total).padStart(2, '0')}
          </div>

          <motion.button
            onClick={onNext}
            whileHover={{ backgroundColor: '#F1F5F9', scale: 1.08 }}
            whileTap={{ scale: 0.82 }}
            title="Siguiente"
            style={{
              width: 30, height: 30, borderRadius: 30,
              border: 'none', background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#64748B', flexShrink: 0,
            }}
          >
            <ChevronRight size={15} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* ── Progress bar ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 2, background: 'rgba(0,0,0,0.05)',
        }}>
          <motion.div
            style={{ height: '100%', background: 'linear-gradient(to right, #1B4FA8, #2A8A4A)', originX: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>

      {/* ── Section Quick-Access Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9990,
                background: 'rgba(0,0,0,0.28)',
                backdropFilter: 'blur(4px)',
              }}
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                position: 'fixed', top: 52, left: 16, zIndex: 9991,
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
                padding: '12px',
                minWidth: 260,
                maxWidth: 320,
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 10, paddingBottom: 8,
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#94a3b8' }}>
                  Secciones
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: '#f1f5f9', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#64748b',
                  }}
                >
                  <X size={11} />
                </button>
              </div>

              {/* Sections list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {groups.map((g, gi) => {
                  const firstIdx = g.indices[0]
                  const isActive = g.indices.includes(current)
                  return (
                    <button
                      key={gi}
                      onClick={() => { onGoTo(firstIdx); setMenuOpen(false) }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '8px 10px', borderRadius: 10,
                        border: 'none', cursor: 'pointer', textAlign: 'left',
                        background: isActive ? 'rgba(27,79,168,0.08)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                    >
                      {/* Dot */}
                      <div style={{
                        width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                        background: isActive
                          ? 'linear-gradient(135deg, #1B4FA8, #2A8A4A)'
                          : '#cbd5e1',
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{
                          fontSize: 12, fontWeight: isActive ? 700 : 600,
                          color: isActive ? '#1B4FA8' : '#475569',
                          display: 'block', whiteSpace: 'nowrap',
                          overflow: 'hidden', textOverflow: 'ellipsis',
                        }}>
                          {g.label}
                        </span>
                        {g.indices.length > 1 && (
                          <span style={{ fontSize: 9, color: '#94a3b8', fontWeight: 600 }}>
                            {g.indices.length} diapositivas
                          </span>
                        )}
                      </div>
                      {/* Slide number badge */}
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: '#94a3b8',
                        background: '#f1f5f9', borderRadius: 6, padding: '1px 5px',
                        flexShrink: 0,
                      }}>
                        {firstIdx + 1}
                      </span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Botón "Volver al inicio" ── */}
      <AnimatePresence>
        {!isFirst && (
          <motion.button
            onClick={onGoFirst}
            initial={{ opacity: 0, x: -20, scale: 0.88 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(0,0,0,0.13)' }}
            whileTap={{ scale: 0.92 }}
            title="Volver al inicio"
            style={{
              position: 'fixed', bottom: 16, left: 16, zIndex: 9999,
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'rgba(255,255,255,0.95)',
              border: '1.5px solid rgba(0,0,0,0.10)',
              borderRadius: 40,
              padding: '7px 14px 7px 10px',
              boxShadow: '0 3px 14px rgba(0,0,0,0.09)',
              cursor: 'pointer',
              color: '#475569',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.01em',
              userSelect: 'none',
            }}
          >
            <Home size={13} strokeWidth={2.2} color="#1B4FA8" />
            <span>Volver al inicio</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hint teclas */}
      <motion.p
        style={{
          position: 'fixed', bottom: 14, right: 18,
          zIndex: 9998, fontSize: 9, color: '#CBD5E1',
          letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        ← → Teclas
      </motion.p>
    </>
  )
}
