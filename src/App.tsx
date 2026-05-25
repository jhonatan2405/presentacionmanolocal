import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slidePageVariants } from './animations/variants'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import SlideIndicator from './components/SlideIndicator'

// Slides
import S01_Portada from './components/slides/S01_Portada'
import S02_Problema from './components/slides/S02_Problema'
import S03_Pregunta from './components/slides/S03_Pregunta'
import S04_Justificacion from './components/slides/S04_Justificacion'
import S05_Objetivos from './components/slides/S05_Objetivos'
import S06_Alcance1 from './components/slides/S06_Alcance1'
import S07_Alcance2 from './components/slides/S07_Alcance2'
import S08_Mercado from './components/slides/S08_Mercado1'
import S10_Tecnico1 from './components/slides/S10_Tecnico1'
import S11_Tecnico2 from './components/slides/S11_Tecnico2'
import S12_Tecnico3 from './components/slides/S12_Tecnico3'
import S13_Tecnico4 from './components/slides/S13_Tecnico4'
import S14_Tecnico5 from './components/slides/S14_Tecnico5'
import Cronograma from './components/slides/S15_Cronograma'
import S16_Financiero1 from './components/slides/S16_Financiero1'
import S17_Financiero2 from './components/slides/S17_Financiero2'
import S18_Financiero3 from './components/slides/S18_Financiero3'
import S19_Prototipo from './components/slides/S19_Prototipo'
import S20_Gracias from './components/slides/S20_Gracias'

const SLIDES = [
  { component: S01_Portada,      title: 'Portada',                          section: '00', label: 'Portada' },
  { component: S02_Problema,     title: 'Planteamiento del Problema',       section: '01', label: 'Planteamiento del Problema' },
  { component: S03_Pregunta,     title: 'Pregunta Problemática',            section: '02', label: 'Pregunta Problemática' },
  { component: S04_Justificacion,title: 'Justificación',                    section: '03', label: 'Justificación' },
  { component: S05_Objetivos,    title: 'Objetivos',                        section: '04', label: 'Objetivos' },
  { component: S06_Alcance1,     title: 'Alcance — Población',              section: '05', label: 'Alcance del Proyecto' },
  { component: S07_Alcance2,     title: 'Alcance — Módulos',                section: '05', label: 'Alcance del Proyecto' },
  { component: S08_Mercado,      title: 'Estudio de Mercado — Dashboard',   section: '06', label: 'Estudio de Mercado' },
  { component: S10_Tecnico1,     title: 'Estudio Técnico — Arquitectura',   section: '07', label: 'Estudio Técnico' },
  { component: S11_Tecnico2,     title: 'Estudio Técnico — Módulos',        section: '07', label: 'Estudio Técnico' },
  { component: S12_Tecnico3,     title: 'Estudio Técnico — Casos de Uso',   section: '07', label: 'Estudio Técnico' },
  { component: S13_Tecnico4,     title: 'Estudio Técnico — Modelo ER',      section: '07', label: 'Estudio Técnico' },
  { component: S14_Tecnico5,     title: 'Estudio Técnico — Flujos',         section: '07', label: 'Estudio Técnico' },
  { component: Cronograma,       title: 'Cronograma',                       section: '08', label: 'Cronograma' },
  { component: S16_Financiero1,  title: 'Estudio Financiero — Costos',      section: '09', label: 'Estudio Financiero' },
  { component: S17_Financiero2,  title: 'Estudio Financiero — Proyecciones',section: '09', label: 'Estudio Financiero' },
  { component: S18_Financiero3,  title: 'Estudio Financiero — Viabilidad',  section: '09', label: 'Estudio Financiero' },
  { component: S19_Prototipo,    title: 'Presentación del Prototipo',       section: '10', label: 'Presentación del Prototipo' },
  { component: S20_Gracias,      title: '¡Gracias!',                         section: '11', label: 'Cierre' },
]

const TOTAL = SLIDES.length

export default function App() {
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((next: number, dir?: number) => {
    if (animating) return
    if (next < 0 || next >= TOTAL) return
    if (next === current) return
    setDirection(dir !== undefined ? dir : next > current ? 1 : -1)
    setAnimating(true)
    setCurrent(next)
  }, [animating, current])

  const goNext    = useCallback(() => goTo(current + 1, 1),  [current, goTo])
  const goPrev    = useCallback(() => goTo(current - 1, -1), [current, goTo])
  const goFirst   = useCallback(() => goTo(0, -1),           [goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); goNext() }
      if (['ArrowLeft', 'ArrowUp'].includes(e.key))         { e.preventDefault(); goPrev() }
      if (e.key === 'Home')                                  { e.preventDefault(); goFirst() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, goFirst])

  // Touch swipe
  useEffect(() => {
    let touchStartX = 0
    const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX
      if (Math.abs(dx) > 60) { dx < 0 ? goNext() : goPrev() }
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goPrev])

  const CurrentSlide = SLIDES[current].component

  return (
    <div style={{
      width: '100vw', height: '100vh',
      overflow: 'hidden', background: '#FFFFFF',
      position: 'relative'
    }}>
      {/* Initial Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'absolute', inset: 0, zIndex: 50 }}
          >
            <Loader onDone={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slides */}
      {!loading && (
        <>
          <AnimatePresence
            custom={direction}
            mode="popLayout"
            onExitComplete={() => setAnimating(false)}
          >
            <motion.div
              key={current}
              custom={direction}
              variants={slidePageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ position: 'absolute', inset: 0 }}
            >
              <CurrentSlide />
            </motion.div>
          </AnimatePresence>

          {/* UI overlays */}
          <Navigation
            current={current}
            total={TOTAL}
            onPrev={goPrev}
            onNext={goNext}
            onGoFirst={goFirst}
            onGoTo={(i) => goTo(i)}
            slideTitle={SLIDES[current].title}
            slideSection={SLIDES[current].section}
            slideLabel={SLIDES[current].label}
            slides={SLIDES.map(s => ({ title: s.title, section: s.section, label: s.label }))}
          />
          <SlideIndicator
            current={current}
            total={TOTAL}
            onGoTo={(i) => goTo(i)}
          />
        </>
      )}
    </div>
  )
}
