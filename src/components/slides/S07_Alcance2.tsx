import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { LogIn, User, Briefcase, Search, Eye, Star } from 'lucide-react'

const modules = [
  { id: 'M01', icon: LogIn,     title: 'Registro e Inicio de Sesión', desc: 'Autenticación segura para clientes y trabajadores con JWT y manejo de roles.', color: 'green' },
  { id: 'M02', icon: User,      title: 'Gestión de Perfiles', desc: 'Perfil profesional con nombre, contacto, ubicación, experiencia y servicios.', color: 'blue' },
  { id: 'M03', icon: Briefcase, title: 'Publicación de Servicios', desc: 'CRUD completo de servicios con categoría, descripción y precio referencial.', color: 'green' },
  { id: 'M04', icon: Search,    title: 'Búsqueda y Filtrado', desc: 'Por palabra clave o categoría con resultados en tiempo real.', color: 'blue' },
  { id: 'M05', icon: Eye,       title: 'Visualización de Perfiles', desc: 'Vista completa del trabajador: servicios, experiencia, calificaciones y contacto.', color: 'green' },
  { id: 'M06', icon: Star,      title: 'Calificaciones y Reseñas', desc: 'Sistema de valoraciones verificadas que construye confianza y reputación.', color: 'blue' },
]

const limitations = ['Solo Montería (v1)', 'Sin pagos en línea', 'Sin agenda integrada', 'Sin verificación documental (v1)']

export default function S07_Alcance2() {
  return (
    <SlideLayout section="05–B" label="Alcance — Módulos del Sistema" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">
        <motion.div variants={fadeUp}>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Funcionalidades implementadas</p>
          <h2 className="text-3xl font-black text-slate-900">6 Módulos del <span className="gradient-text-green">Sistema</span></h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-3 flex-1">
          {modules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-4 rounded-2xl bg-white shadow-card border flex flex-col gap-2.5 cursor-default card-3d relative overflow-hidden ${mod.color === 'green' ? 'border-green-100' : 'border-blue-100'}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${mod.color === 'green' ? 'bg-gradient-to-r from-green-400 to-transparent' : 'bg-gradient-to-r from-blue-400 to-transparent'}`} />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest text-slate-300">{mod.id}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${mod.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                    <Icon size={14} />
                  </div>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug">{mod.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{mod.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Delimitaciones:</span>
          {limitations.map((l, i) => (
            <span key={i} className="pill-gray px-2.5 py-1 rounded-full text-[10px] font-semibold">{l}</span>
          ))}
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
