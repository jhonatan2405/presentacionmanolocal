import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

interface Props {
  src: string
  alt: string
  title?: string
  source?: string
  className?: string
}

export default function ImageLightbox({ src, alt, title, source, className = '' }: Props) {
  const [open, setOpen] = useState(false)

  // Escape key handler
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      {/* Clickable wrapper */}
      <div
        className={`relative group cursor-zoom-in w-full h-full flex flex-col items-center justify-center ${className}`}
        onClick={() => setOpen(true)}
      >
        {title && (
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex-shrink-0">
            {title}
          </p>
        )}
        <div className="relative flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain select-none"
            draggable={false}
          />
          {/* Hover hint */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-md border border-slate-200">
              <ZoomIn size={11} className="text-blue-600" />
              <span className="text-[9px] font-bold text-blue-700">Pantalla completa</span>
            </div>
          </div>
        </div>
        {source && (
          <p className="text-[8px] text-slate-300 mt-1 flex-shrink-0">{source}</p>
        )}
      </div>

      {/* TRUE FULLSCREEN Lightbox rendered directly to Document Body via React Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 999999,
                background: 'rgba(2,6,23,0.96)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => setOpen(false)}
            >
              {/* Top bar */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 24px',
                  flexShrink: 0,
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(2,6,23,0.4)',
                }}
                onClick={e => e.stopPropagation()}
              >
                <div>
                  {title && (
                    <p style={{ fontSize: 14, fontWeight: 800, color: '#FFFFFF', marginBottom: 2 }}>
                      {title}
                    </p>
                  )}
                  {source && (
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                      {source}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 40,
                    padding: '6px 14px 6px 10px',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontSize: 11,
                    fontWeight: 700,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  <X size={14} />
                  Cerrar
                </button>
              </motion.div>

              {/* Full image area */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.34, 1.2, 0.64, 1] }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  overflow: 'hidden',
                  cursor: 'zoom-out',
                }}
                onClick={() => setOpen(false)}
              >
                <img
                  src={src}
                  alt={alt}
                  style={{
                    maxWidth: '96%',
                    maxHeight: '94%',
                    objectFit: 'contain',
                    borderRadius: 8,
                    boxShadow: '0 24px 80px rgba(0,0,0,0.65)',
                    userSelect: 'none',
                  }}
                  draggable={false}
                  onClick={e => e.stopPropagation()}
                />
              </motion.div>

              {/* Bottom hint */}
              <div style={{
                textAlign: 'center',
                padding: '12px',
                fontSize: 9,
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                background: 'rgba(2,6,23,0.3)',
                flexShrink: 0,
              }}>
                Clic en cualquier parte para cerrar · ESC para salir
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
