import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { Users, Wrench, UserCheck, LogIn, User, Briefcase, Search, Eye, Star } from 'lucide-react'

const modules = [
  { id: 'M01', icon: LogIn,     title: 'Autenticación', desc: 'Registro y Login JWT', color: 'green' },
  { id: 'M02', icon: User,      title: 'Perfiles', desc: 'Perfil profesional', color: 'blue' },
  { id: 'M03', icon: Briefcase, title: 'Servicios', desc: 'Publicación (CRUD)', color: 'green' },
  { id: 'M04', icon: Search,    title: 'Búsqueda', desc: 'Filtros y categorías', color: 'blue' },
  { id: 'M05', icon: Eye,       title: 'Visualización', desc: 'Detalle de servicios', color: 'green' },
  { id: 'M06', icon: Star,      title: 'Reseñas', desc: 'Sistema de calificación', color: 'blue' },
]

export default function S06_Alcance() {
  return (
    <SlideLayout section="05" label="Alcance del Proyecto" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        
        <motion.div variants={fadeUp}>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Población y Sistema</p>
          <h2 className="text-3xl font-black text-slate-900">Alcance del <span className="gradient-text-blue">Proyecto</span></h2>
        </motion.div>

        <div className="flex gap-6 h-full">
          {/* Left Column - Target Population */}
          <motion.div variants={fadeRight} className="flex-1 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Población Objetivo (Montería)</h3>
            
            <div className="p-4 rounded-xl bg-white shadow-card border border-blue-100 flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Wrench size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800">Trabajadores Independientes</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Personas con oficios varios (plomería, electricidad, peluquería, etc.) que buscan visibilidad digital.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white shadow-card border border-green-100 flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <UserCheck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-800">Clientes</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">Personas u hogares que requieren servicios informales y buscan opciones verificables y seguras.</p>
              </div>
            </div>

            <div className="mt-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
               <p className="text-xs font-semibold text-slate-600">
                 <strong className="text-slate-800">Delimitaciones (Fase 1):</strong> Solo ciudad de Montería, sin pasarela de pagos, sin agenda integrada.
               </p>
            </div>
          </motion.div>

          {/* Right Column - Modules */}
          <motion.div variants={fadeLeft} className="flex-[1.2] flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Módulos del Sistema</h3>
            <div className="grid grid-cols-2 gap-3">
              {modules.map((mod, i) => {
                const Icon = mod.icon
                return (
                  <motion.div key={i} whileHover={{ y: -2 }} className={`p-3 rounded-xl bg-white shadow-sm border flex items-center gap-3 ${mod.color === 'blue' ? 'border-blue-100' : 'border-green-100'}`}>
                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${mod.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-800">{mod.title}</h5>
                      <p className="text-[10px] text-slate-500">{mod.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
