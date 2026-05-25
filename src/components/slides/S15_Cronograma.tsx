import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { CheckCircle2 } from 'lucide-react'

// TABLA 2 — Cronograma ManoLocal — Exactamente del documento Word
// Fecha de inicio: 03 feb 2026 | Fecha de finalización: 26 may 2026
const rows = [
  { n: 1,  fase: 'Levantamiento de requisitos',    responsable: 'Equipo',                         semana: 1,  fechas: '03 feb – 07 feb', horas: 8,  done: true  },
  { n: null, fase: '(Semana no incluida)',          responsable: '—',                              semana: null, fechas: '09 feb – 13 feb', horas: null, done: false },
  { n: 2,  fase: 'Diseño de interfaces (UI/UX)',   responsable: 'Juan de la Espriella (Diseñador)', semana: 2,  fechas: '16 feb – 20 feb', horas: 10, done: true  },
  { n: 3,  fase: 'Diseño de base de datos',        responsable: 'Jhonatan Barrera (Líder)',        semana: 3,  fechas: '23 feb – 27 feb', horas: 8,  done: true  },
  { n: 4,  fase: 'Programación Backend',           responsable: 'Juan de la Espriella (Dev)',      semana: 4,  fechas: '02 mar – 06 mar', horas: 15, done: true  },
  { n: 5,  fase: 'Programación Backend',           responsable: 'Juan de la Espriella (Dev)',      semana: 5,  fechas: '09 mar – 13 mar', horas: 15, done: true  },
  { n: 6,  fase: 'Programación Frontend',          responsable: 'Juan de la Espriella (Dev)',      semana: 6,  fechas: '16 mar – 20 mar', horas: 15, done: true  },
  { n: 7,  fase: 'Programación Frontend',          responsable: 'Juan de la Espriella (Dev)',      semana: 7,  fechas: '23 mar – 27 mar', horas: 15, done: true  },
  { n: 8,  fase: 'Integración del sistema',        responsable: 'Equipo',                         semana: 8,  fechas: '30 mar – 03 abr', horas: 10, done: true  },
  { n: 9,  fase: 'Pruebas funcionales',            responsable: 'Juan Arguelles (Tester)',         semana: 9,  fechas: '06 abr – 10 abr', horas: 8,  done: true  },
  { n: 10, fase: 'Pruebas funcionales',            responsable: 'Juan Arguelles (Tester)',         semana: 10, fechas: '13 abr – 17 abr', horas: 8,  done: true  },
  { n: 11, fase: 'Correcciones finales',           responsable: 'Equipo',                         semana: 11, fechas: '20 abr – 24 abr', horas: 8,  done: true  },
  { n: 12, fase: 'Correcciones finales',           responsable: 'Equipo',                         semana: 12, fechas: '27 abr – 01 may', horas: 8,  done: true  },
  { n: 13, fase: 'Implementación / Entrega',       responsable: 'Jhonatan Barrera (Líder)',        semana: 13, fechas: '04 may – 08 may', horas: 5,  done: true  },
  { n: 14, fase: 'Ajustes finales y entrega',      responsable: 'Equipo',                         semana: 14, fechas: '11 may – 15 may', horas: 5,  done: true  },
  { n: 15, fase: 'Cierre del proyecto',            responsable: 'Equipo',                         semana: 15, fechas: '18 may – 22 may', horas: 4,  done: true  },
  { n: 16, fase: 'Entrega final',                  responsable: 'Jhonatan Barrera (Líder)',        semana: 16, fechas: '25 may – 26 may', horas: 3,  done: true  },
]

const totalHoras = rows.reduce((a, r) => a + (r.horas ?? 0), 0) // 145h sumatoria visibles

export default function S15_Cronograma() {
  return (
    <SlideLayout section="08" label="Cronograma de Actividades" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-3">
        
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Plan de producción</p>
            <h2 className="text-2xl font-black text-slate-900">
              Cronograma <span className="gradient-text-green">ManoLocal</span>
            </h2>
            <p className="text-[10px] text-slate-400 mt-0.5">Inicio: 03 feb 2026 · Finalización: 26 may 2026</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black gradient-text-green">230h</div>
            <div className="text-[11px] text-slate-400">horas totales del proyecto</div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div variants={fadeUp} className="flex-1 min-h-0 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-card">
          <table className="w-full text-[10px] border-collapse">
            <thead>
              <tr className="bg-green-50 border-b border-green-100 sticky top-0 z-10">
                {['N°', 'Actividad / Fase', 'Responsable', 'Semana', 'Rango de fechas', 'Horas', 'Estado'].map((h) => (
                  <th key={h} className="px-2 py-2 text-left font-black text-slate-700 whitespace-nowrap text-[10px] tracking-wide uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isSpecial = r.n === null
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.025 }}
                    className={`border-b border-slate-100 transition-colors ${isSpecial ? 'bg-amber-50/60 italic' : r.done ? 'hover:bg-green-50/50' : 'hover:bg-slate-50'}`}
                  >
                    <td className={`px-2 py-1.5 font-black ${isSpecial ? 'text-amber-600' : 'text-slate-500'}`}>
                      {isSpecial ? '—' : r.n}
                    </td>
                    <td className={`px-2 py-1.5 font-semibold max-w-[160px] ${isSpecial ? 'text-amber-700' : 'text-slate-800'}`}>
                      {r.fase}
                    </td>
                    <td className="px-2 py-1.5 text-slate-500 max-w-[140px] leading-tight">
                      {isSpecial ? '—' : r.responsable}
                    </td>
                    <td className="px-2 py-1.5 text-slate-500 text-center">
                      {r.semana ?? '—'}
                    </td>
                    <td className="px-2 py-1.5 text-slate-500 whitespace-nowrap">
                      {r.fechas}
                    </td>
                    <td className={`px-2 py-1.5 font-bold text-center whitespace-nowrap ${isSpecial ? 'text-slate-300' : r.done ? 'text-green-600' : 'text-slate-400'}`}>
                      {r.horas != null ? `${r.horas} h` : '—'}
                    </td>
                    <td className="px-2 py-1.5 text-center">
                      {!isSpecial && r.done && (
                        <CheckCircle2 size={13} className="text-green-500 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Footer note */}
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0 px-1">
          <p className="text-[9px] text-slate-400 italic">Fuente: Elaboración propia de los autores</p>
          <p className="text-[9px] text-slate-400">
            Este cronograma muestra la distribución del tiempo del proyecto ManoLocal, organizando cada actividad por semanas con fechas específicas. Se incluye un espacio de estado para llevar control del avance de cada actividad.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
