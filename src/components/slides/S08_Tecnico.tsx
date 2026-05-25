import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { Code2, ChevronLeft, ChevronRight } from 'lucide-react'

// Utilizaremos las imágenes extraídas del documento Word original
// (image2.png hasta image9.png usualmente contienen la arquitectura, flujos y ER)
const diagrams = [
  { id: 1, src: '/doc_images/image2.png', label: 'Arquitectura General' },
  { id: 2, src: '/doc_images/image3.png', label: 'Módulos del Sistema' },
  { id: 3, src: '/doc_images/image4.png', label: 'Diagrama de Casos de Uso' },
  { id: 4, src: '/doc_images/image5.png', label: 'Modelo Entidad-Relación (ER)' },
  { id: 5, src: '/doc_images/image6.png', label: 'Flujo de Registro' },
  { id: 6, src: '/doc_images/image7.png', label: 'Flujo de Publicación' },
  { id: 7, src: '/doc_images/image8.png', label: 'Flujo de Búsqueda' },
  { id: 8, src: '/doc_images/image9.png', label: 'Diagrama de Despliegue' },
]

export default function S08_Tecnico() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % diagrams.length)
  const prev = () => setActive((prev) => (prev - 1 + diagrams.length) % diagrams.length)

  return (
    <SlideLayout section="07" label="Estudio Técnico" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Code2 size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Diseño e Implementación</p>
            <h2 className="text-2xl font-black text-slate-900">Estudio <span className="gradient-text-blue">Técnico</span></h2>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden relative p-4">
          
          <div className="flex-1 relative flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={active}
                src={diagrams[active].src}
                alt={diagrams[active].label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[50vh] object-contain drop-shadow-sm"
                onError={(e) => {
                   // Fallback visual si alguna imagen no existe en la extracción
                   (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Diagrama en documento original</text></svg>'
                }}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors z-10">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors z-10">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-4 text-center">
             <h3 className="text-sm font-bold text-slate-800">{diagrams[active].label}</h3>
             <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Diagrama {active + 1} de {diagrams.length}</p>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2 px-2">
            {diagrams.map((d, i) => (
               <button 
                 key={i} 
                 onClick={() => setActive(i)}
                 className={`w-20 h-14 rounded-lg border-2 overflow-hidden flex-shrink-0 transition-all ${active === i ? 'border-blue-500 opacity-100 shadow-md' : 'border-slate-100 opacity-60 hover:opacity-100'}`}
               >
                 <img src={d.src} alt="thumbnail" className="w-full h-full object-cover" />
               </button>
            ))}
          </div>

        </motion.div>

      </motion.div>
    </SlideLayout>
  )
}
