import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  section: string
  label: string
  accent?: 'blue' | 'green'
}

export default function SlideLayout({ children, accent = 'blue' }: Props) {
  const b1 = 'rgba(42,138,74,0.16)'  // Always Green on top-left
  const b2 = 'rgba(27,79,168,0.22)'  // Always Blue on bottom-right
  const b3 = 'rgba(99,102,241,0.11)'  // Always Indigo/violet center

  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
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

      {/* ── Bubble 1 — top-left ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 700, height: 700,
        top: '-25%', left: '-16%',
        background: b1,
        filter: 'blur(90px)',
        animation: 'floatBubble1 22s ease-in-out infinite',
        zIndex: 0,
        willChange: 'transform',
      }} />

      {/* ── Bubble 2 — bottom-right ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 580, height: 580,
        bottom: '-25%', right: '-14%',
        background: b2,
        filter: 'blur(80px)',
        animation: 'floatBubble2 28s ease-in-out infinite',
        zIndex: 0,
        willChange: 'transform',
      }} />

      {/* ── Bubble 3 — center accent ── */}
      <div style={{
        position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
        width: 380, height: 380,
        top: '42%', left: '52%',
        transform: 'translate(-50%, -50%)',
        background: b3,
        filter: 'blur(70px)',
        animation: 'floatBubble3 18s ease-in-out infinite',
        zIndex: 0,
        willChange: 'transform',
      }} />

      {/* ── Subtle grid ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '52px 52px',
      }} />

      {/* ── Main content ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        flex: 1,
        padding: '54px 28px 68px 28px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
      }}>
        {children}
      </div>
    </div>
  )
}
