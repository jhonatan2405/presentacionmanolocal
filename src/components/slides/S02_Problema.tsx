import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import { EyeOff, MessageCircleOff, ShieldOff, Users } from 'lucide-react'
import SlideLayout from '../SlideLayout'

const problems = [
  {
    icon: MessageCircleOff,
    title: 'Dependencia del Voz a Voz',
    desc: 'La mayoría de trabajadores informales depende exclusivamente de recomendaciones personales, limitando su alcance y crecimiento.',
    stat: 'Voz a Voz',
    statLabel: 'Método principal',
    color: 'blue',
  },
  {
    icon: EyeOff,
    title: 'Poca Visibilidad',
    desc: 'Los trabajadores no cuentan con un espacio donde puedan mostrar sus servicios, precios o experiencia.',
    stat: 'Baja',
    statLabel: 'Visibilidad de la oferta',
    color: 'green',
  },
  {
    icon: ShieldOff,
    title: 'Desconfianza del Cliente',
    desc: 'El cliente no tiene cómo comparar opciones fácilmente ni cómo verificar referencias antes de contratar.',
    stat: 'Riesgo',
    statLabel: 'Al contratar sin referencias',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Alta Informalidad',
    desc: 'Las ciudades colombianas presentan niveles de informalidad superiores al 50% según el DANE (2025).',
    stat: '>50%',
    statLabel: 'Informalidad (DANE, 2025)',
    color: 'green',
  },
]

export default function S02_Problema() {
  return (
    <SlideLayout section="01" label="Planteamiento del Problema" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        {/* Header */}
        <motion.div variants={fadeUp}>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Contexto Local</p>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">
            Falta de un sistema organizado que<br />
            <span className="gradient-text-blue">conecte trabajadores y clientes</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 flex-1">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative p-5 rounded-2xl bg-white border border-black/5 shadow-card card-3d cursor-default overflow-hidden"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${p.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-transparent' : 'bg-gradient-to-r from-green-500 to-transparent'}`} />

                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                    <Icon size={18} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-black ${p.color === 'blue' ? 'gradient-text-blue' : 'gradient-text-green'}`}>{p.stat}</div>
                    <div className="text-[9px] text-slate-400 leading-tight max-w-[100px] text-right">{p.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Conclusion */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100">
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-blue-500 to-green-500 flex-shrink-0" />
          <p className="text-sm text-slate-700 font-medium">
            Existen trabajadores y clientes, pero <strong className="text-blue-700">no hay una herramienta pensada para esa realidad local</strong> que centralice la información de manera confiable.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
