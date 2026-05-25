import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import ImageLightbox from '../ImageLightbox'
import { Database } from 'lucide-react'

export default function S13_Tecnico4() {
  return (
    <SlideLayout section="07-D" label="Estudio Técnico — Modelo Entidad-Relación" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">

        <motion.div variants={fadeUp} className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Database size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60">Estudio Técnico · 4 de 5</p>
            <h2 className="text-2xl font-black text-slate-900">Modelo <span className="gradient-text-blue">Entidad-Relación</span></h2>
          </div>
        </motion.div>

        <div className="flex gap-5 flex-1 min-h-0">
          <motion.div variants={fadeLeft} className="w-[260px] flex flex-col justify-center gap-3 flex-shrink-0">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-100">Puntos Clave</h3>
            <ul className="flex flex-col gap-2.5 text-[11px] text-slate-600">
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Estructura Relacional</strong>Diseño de base de datos para almacenamiento persistente y seguro.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Tablas Principales</strong>Usuarios (Clientes y Trabajadores), Servicios, Solicitudes, Mensajes y Calificaciones.</div></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold mt-0.5">→</span><div><strong className="text-slate-800 block">Integridad Referencial</strong>Llaves primarias y foráneas que garantizan la consistencia y evitan redundancia de datos.</div></li>
            </ul>
          </motion.div>

          <motion.div variants={scaleIn} className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-3 overflow-hidden shadow-inner min-h-0">
            <ImageLightbox
              src="/doc_images/image9.png"
              alt="Modelo Entidad-Relación"
              title="Diagrama de Modelo Entidad-Relación"
              source="Fuente: Google Gemini"
            />
          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
