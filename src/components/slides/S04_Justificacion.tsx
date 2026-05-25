import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { Briefcase, User, Building2, TrendingUp } from 'lucide-react'

const impacts = [
  {
    icon: Briefcase, title: 'Trabajadores', subtitle: 'Impacto directo', color: 'blue',
    points: ['Mayor visibilidad de sus servicios', 'Acceso a nuevos clientes', 'Mayor organización de su trabajo'],
  },
  {
    icon: User, title: 'Clientes', subtitle: 'Impacto directo', color: 'green',
    points: ['Mayor facilidad para encontrar servicios confiables', 'Información organizada antes de contratar', 'Acceso rápido a trabajadores locales'],
  },
  {
    icon: Building2, title: 'Montería', subtitle: 'Impacto comunidad', color: 'blue',
    points: ['Organización del mercado informal', 'Base para formalización gradual', 'Dinamización de la economía local'],
  },
]

export default function S04_Justificacion() {
  return (
    <SlideLayout section="03" label="Justificación" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        <motion.div variants={fadeUp}>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Por qué es necesario</p>
          <h2 className="text-3xl font-black text-slate-900">
            Un vacío real en el <span className="gradient-text-blue">mercado local</span>
          </h2>
        </motion.div>

        {/* Context banner */}
        <motion.div variants={fadeUp}
          className="px-5 py-3.5 rounded-xl bg-blue-50 border border-blue-100 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-l-xl" />
          <p className="text-sm text-slate-700 leading-relaxed pl-4">
            La <strong className="text-blue-700">informalidad laboral en Montería supera el 50%</strong> según el DANE (oct–dic 2025).
            Estas personas generan ingresos pero carecen de visibilidad. Las plataformas formales (Computrabajo, Magneto)
            no atienden este segmento. <strong className="text-green-700">ManoLocal busca brindar una solución digital que permita mejorar la conexión entre trabajadores independientes y clientes en Montería, ofreciendo un espacio organizado para la visualización de servicios.</strong>
          </p>
        </motion.div>

        {/* Impact cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-4 flex-1">
          {impacts.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-5 rounded-2xl bg-white shadow-card border flex flex-col gap-3 cursor-default card-3d ${item.color === 'blue' ? 'border-blue-100' : 'border-green-100'}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-[9px] tracking-widest uppercase font-bold text-slate-400">{item.subtitle}</span>
                  <h3 className="text-base font-black text-slate-800">{item.title}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${item.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div variants={fadeUp}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
          <TrendingUp size={18} className="text-blue-600 flex-shrink-0" />
          <p className="text-xs text-slate-600">
            <strong className="text-slate-800">ManoLocal no compite con Computrabajo ni Magneto.</strong>{' '}
            Atiende un segmento completamente diferente: el trabajo independiente por encargo en ciudades intermedias.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
