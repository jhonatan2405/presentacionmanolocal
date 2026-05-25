import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { PlayCircle, Search, UserCheck, Shield, Star, Briefcase, Bell } from 'lucide-react'

const features = [
  { id: 'registro',     title: 'Registro e Inicio', icon: Shield,    desc: 'Creación de cuenta y JWT' },
  { id: 'perfil',       title: 'Gestión de Perfil', icon: UserCheck, desc: 'Datos y experiencia' },
  { id: 'publicacion',  title: 'Publicación',       icon: Briefcase, desc: 'Oferta de servicios' },
  { id: 'busqueda',     title: 'Búsqueda',          icon: Search,    desc: 'Filtros y categorías' },
  { id: 'solicitudes',  title: 'Solicitudes',       icon: Bell,      desc: 'Contacto cliente-trabajador' },
  { id: 'calificacion', title: 'Calificaciones',    icon: Star,      desc: 'Reseñas verificadas' },
]

export default function S11_Prototipo() {
  const [activeVideo, setActiveVideo] = useState('registro')

  return (
    <SlideLayout section="10" label="Presentación del Prototipo" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Demostración en vivo</p>
            <h2 className="text-2xl font-black text-slate-900">Prototipo <span className="gradient-text-blue">Funcional</span></h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-bold text-green-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Sistema Desplegado
          </div>
        </motion.div>

        <div className="flex gap-4 flex-1">
          {/* Menu */}
          <motion.div variants={fadeUp} className="w-56 flex flex-col gap-2">
            {features.map((f) => {
              const Icon = f.icon
              const isActive = activeVideo === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveVideo(f.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    isActive ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon size={14} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${isActive ? 'text-blue-900' : 'text-slate-700'}`}>{f.title}</h4>
                    <p className={`text-[9px] ${isActive ? 'text-blue-600/80' : 'text-slate-400'}`}>{f.desc}</p>
                  </div>
                </button>
              )
            })}
          </motion.div>

          {/* Video Placeholder */}
          <motion.div variants={fadeUp} className="flex-1 bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden relative flex flex-col items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeVideo}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 className="flex flex-col items-center gap-4 text-slate-400"
               >
                 <PlayCircle size={64} className="text-blue-200" />
                 <div className="text-center">
                   <p className="text-sm font-bold text-slate-500 mb-1">
                     Video: {features.find(f => f.id === activeVideo)?.title}
                   </p>
                   <p className="text-xs">
                     (Reemplazar este contenedor con la etiqueta &lt;video src="..." /&gt; correspondiente)
                   </p>
                 </div>
               </motion.div>
             </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
