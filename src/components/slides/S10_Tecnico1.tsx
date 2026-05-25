import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import ImageLightbox from '../ImageLightbox'
import { Server } from 'lucide-react'

export default function S10_Tecnico1() {
  return (
    <SlideLayout section="07-A" label="Estudio Técnico — Arquitectura General" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">
        
        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Server size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60">Estudio Técnico · 1 de 5</p>
            <h2 className="text-2xl font-black text-slate-900">Arquitectura <span className="gradient-text-blue">General</span></h2>
          </div>
        </motion.div>

        <div className="flex gap-5 flex-1 min-h-0">
          {/* Key points */}
          <motion.div variants={fadeLeft} className="w-[260px] flex flex-col justify-center gap-3 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-100">Puntos Clave</h3>
            <ul className="flex flex-col gap-2.5 text-[11px] text-slate-600">
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Capa Cliente</strong>Interfaz web para trabajadores y clientes (Next.js).</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Backend (Node.js)</strong>API REST con autenticación JWT y lógica de negocio.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Base de Datos</strong>Supabase/PostgreSQL — perfiles, servicios, solicitudes.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Despliegue</strong>Vercel (frontend) + Railway (backend).</div></li>
            </ul>
          </motion.div>

          {/* Image with lightbox */}
          <motion.div variants={scaleIn} className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-3 overflow-hidden shadow-inner min-h-0">
            <ImageLightbox
              src="/doc_images/arquitecturageneral.png"
              alt="Arquitectura General del Sistema"
              title="Arquitectura General del Sistema"
              source="Fuente: Google Gemini"
            />
          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
