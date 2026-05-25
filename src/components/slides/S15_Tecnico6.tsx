import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { ArrowRightCircle } from 'lucide-react'

export default function S15_Tecnico6() {
  return (
    <SlideLayout section="07-F" label="Estudio Técnico — Flujo del Sistema: Trabajador" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">
        
        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ArrowRightCircle size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60">Estudio Técnico · 6 de 6</p>
            <h2 className="text-2xl font-black text-slate-900">Flujo del Sistema: <span className="gradient-text-blue">Trabajador</span></h2>
          </div>
        </motion.div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* Key points */}
          <motion.div variants={fadeLeft} className="w-[260px] flex flex-col justify-center gap-3 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-100">Puntos Clave</h3>
            <ul className="flex flex-col gap-2.5 text-[11px] text-slate-600">
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Registro</strong>El trabajador se registra y configura su perfil profesional completo.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Publicación</strong>Crea y gestiona sus servicios con categoría, descripción y fotos.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Gestión</strong>Atiende solicitudes, confirma acuerdos y completa el servicio.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Reputación</strong>Recibe calificaciones que aumentan su posicionamiento en la plataforma.</div></li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div variants={scaleIn} className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-3 overflow-hidden shadow-inner min-h-0">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Flujo del Sistema — Trabajador</p>
            <img 
              src="/doc_images/flujotrabajador.png" 
              alt="Flujo del Sistema - Trabajador"
              className="max-w-full max-h-full object-contain flex-1 min-h-0"
            />
            <p className="text-[8px] text-slate-300 mt-1">Fuente: Google Gemini</p>
          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
