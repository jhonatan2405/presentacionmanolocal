import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import ImageLightbox from '../ImageLightbox'
import { Users, UserCheck } from 'lucide-react'

export default function S12_Tecnico3() {
  const [activeTab, setActiveTab] = useState<'cliente' | 'trabajador'>('cliente')

  return (
    <SlideLayout section="07-C" label="Estudio Técnico — Casos de Uso" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">

        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60">Estudio Técnico · 3 de 5</p>
              <h2 className="text-2xl font-black text-slate-900">Diagramas de <span className="gradient-text-blue">Casos de Uso</span></h2>
            </div>
          </div>

          {/* Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('cliente')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${activeTab === 'cliente' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <Users size={13} /> Enfoque Cliente
            </button>
            <button
              onClick={() => setActiveTab('trabajador')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${activeTab === 'trabajador' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              <UserCheck size={13} /> Enfoque Trabajador
            </button>
          </div>
        </motion.div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* Key points */}
          <motion.div variants={fadeLeft} className="w-[260px] flex flex-col justify-center gap-3 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-100">
              {activeTab === 'cliente' ? 'Rol Cliente' : 'Rol Trabajador'}
            </h3>
            <AnimatePresence mode="wait">
              {activeTab === 'cliente' ? (
                <motion.ul key="c" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} transition={{ duration: 0.18 }} className="flex flex-col gap-2.5 text-[11px] text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Búsqueda de Oficios</strong>Filtros interactivos por tipo de trabajo y reputación.</div></li>
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Solicitud de Servicio</strong>Contacto directo sin intermediarios burocráticos.</div></li>
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Evaluación y Calificación</strong>Fomenta la confianza a través de reseñas reales.</div></li>
                </motion.ul>
              ) : (
                <motion.ul key="t" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 8 }} transition={{ duration: 0.18 }} className="flex flex-col gap-2.5 text-[11px] text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Gestión de Perfil</strong>Exposición de habilidades, tarifas y disponibilidad.</div></li>
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Recepción de Solicitudes</strong>Notificaciones para coordinar detalles del servicio.</div></li>
                  <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Historial y Reputación</strong>Historial transparente para sustentar credibilidad.</div></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Image with lightbox */}
          <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-3 overflow-hidden shadow-inner min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === 'cliente' ? (
                <motion.div key="img-c" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.22 }} className="w-full h-full">
                  <ImageLightbox src="/doc_images/casodeusocliente.png" alt="Caso de Uso - Cliente" title="Diagrama de Casos de Uso — Cliente" source="Fuente: Google Gemini" />
                </motion.div>
              ) : (
                <motion.div key="img-t" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.22 }} className="w-full h-full">
                  <ImageLightbox src="/doc_images/casodeusotranbajador.png" alt="Caso de Uso - Trabajador" title="Diagrama de Casos de Uso — Trabajador" source="Fuente: Google Gemini" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
