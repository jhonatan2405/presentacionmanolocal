import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { CheckCircle2 } from 'lucide-react'

// 14 weeks total, all marked as done to reflect 100% completion
const weeks = [
  { week: 'S1',   date: '03 Feb', task: 'Levantamiento de requisitos',  hours: 16, done: true },
  { week: 'S2',   date: '10 Feb', task: 'Diseño UI/UX en Figma',         hours: 20, done: true },
  { week: 'S3',   date: '17 Feb', task: 'Modelado de base de datos',     hours: 16, done: true },
  { week: 'S4',   date: '24 Feb', task: 'Backend — Autenticación',        hours: 20, done: true },
  { week: 'S5',   date: '03 Mar', task: 'Backend — API de servicios',     hours: 20, done: true },
  { week: 'S6',   date: '10 Mar', task: 'Frontend — Vistas principales',  hours: 24, done: true },
  { week: 'S7',   date: '17 Mar', task: 'Frontend — Búsqueda y perfiles', hours: 20, done: true },
  { week: 'S8',   date: '24 Mar', task: 'Integración frontend–backend',   hours: 16, done: true },
  { week: 'S9',   date: '31 Mar', task: 'Pruebas funcionales — fase 1',   hours: 12, done: true },
  { week: 'S10',  date: '07 Abr', task: 'Pruebas funcionales — fase 2',   hours: 12, done: true },
  { week: 'S11',  date: '14 Abr', task: 'Correcciones y mejoras',         hours: 12, done: true },
  { week: 'S12',  date: '21 Abr', task: 'Despliegue en producción',       hours: 8,  done: true },
  { week: 'S13',  date: '05 May', task: 'Documentación del proyecto',     hours: 8,  done: true },
  { week: 'S14',  date: '19 May', task: 'Preparación de sustentación',    hours: 8,  done: true },
]

const totalHours = weeks.reduce((a, w) => a + w.hours, 0)
const doneHours  = weeks.filter(w => w.done).reduce((a, w) => a + w.hours, 0)
const pct = Math.round((doneHours / totalHours) * 100)

export default function S09_Cronograma() {
  return (
    <SlideLayout section="08" label="Cronograma" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Plan de producción Finalizado</p>
            <h2 className="text-3xl font-black text-slate-900">03 Feb – 26 May <span className="gradient-text-green">2026</span></h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black gradient-text-green">{totalHours}h</div>
            <div className="text-[11px] text-slate-400">horas ejecutadas totales</div>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div variants={fadeUp} className="p-3 rounded-xl bg-white shadow-card border border-slate-100">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Proyecto completado satisfactoriamente</span>
            <span className="font-bold text-green-600">{pct}% completado · {doneHours}h / {totalHours}h</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
            <motion.div className="h-full rounded-full"
              style={{ background: 'linear-gradient(to right, #2A8A4A, #22C55E)' }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        {/* Week grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-7 gap-1.5 flex-1">
          {weeks.map((w, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + i * 0.04 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-xl border flex flex-col gap-1 cursor-default bg-green-50 border-green-100"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black text-slate-400">{w.week}</span>
                <CheckCircle2 size={10} className="text-green-500" />
              </div>
              <p className="text-[9px] text-slate-500 leading-tight font-medium">{w.date}</p>
              <p className="text-[10px] font-bold text-slate-700 leading-tight">{w.task}</p>
              <p className="text-[9px] font-bold text-green-600">
                {w.hours}h
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
