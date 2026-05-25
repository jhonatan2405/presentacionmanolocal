import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import SlideLayout from '../SlideLayout'

// ── 8.1 Estimación del proyecto (Tabla 3) — EXACTO del Word ──
const estimacion = [
  { fase: 'Análisis y requisitos',    horas: 25, responsable: 'Equipo completo',  desc: 'Recolección de información, definición de funcionalidades y análisis del problema' },
  { fase: 'Diseño UI/UX',             horas: 35, responsable: 'Diseñador',         desc: 'Diseño de interfaces, prototipos y experiencia de usuario' },
  { fase: 'Desarrollo frontend',      horas: 60, responsable: 'Desarrollador',     desc: 'Construcción de interfaces y conexión con el backend' },
  { fase: 'Desarrollo backend',       horas: 55, responsable: 'Desarrollador',     desc: 'Lógica del sistema, autenticación y conexión con base de datos' },
  { fase: 'Pruebas funcionales',      horas: 35, responsable: 'Tester',            desc: 'Validación de funcionalidades y corrección de errores' },
  { fase: 'Implementación y despliegue', horas: 20, responsable: 'Equipo',         desc: 'Configuración y publicación del sistema' },
]
const totalHoras = estimacion.reduce((a, e) => a + e.horas, 0)  // 230h
const maxH = Math.max(...estimacion.map(e => e.horas))

// ── 8.2 Costo por hora (Tabla 4) — EXACTO del Word ──
const costoPorHora = [
  { rol: 'Desarrollador Full Stack', pagoMensual: '$4.000.000 COP', horasMes: 160, valorHora: 25000 },
  { rol: 'Diseñador UI/UX',          pagoMensual: '$3.000.000 COP', horasMes: 160, valorHora: 18750 },
  { rol: 'Tester / QA',              pagoMensual: '$2.000.000 COP', horasMes: 160, valorHora: 12500 },
]

export default function S16_Financiero1() {
  return (
    <SlideLayout section="09–A" label="Estudio Financiero — 8.1 y 8.2" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-3">
        
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Inversión total del proyecto</p>
            <h2 className="text-2xl font-black text-slate-900">Estudio <span className="gradient-text-blue">Financiero</span></h2>
          </div>
          <div className="flex gap-3">
            <div className="text-center px-4 py-2 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-2xl font-black gradient-text-blue">{totalHoras}h</div>
              <div className="text-[10px] text-slate-400">horas totales</div>
            </div>
            <div className="text-center px-4 py-2 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-sm font-black text-slate-700">$18.750</div>
              <div className="text-[10px] text-slate-400">valor promedio/h</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {/* 8.1 Tabla 3 — Estimación */}
          <motion.div variants={fadeLeft} className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col gap-2 overflow-auto">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex-shrink-0">
              Estimación del Proyecto
            </p>
            <table className="w-full text-[10px] border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Fase del Proyecto</th>
                  <th className="text-center py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Horas</th>
                  <th className="text-left py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Responsable</th>
                </tr>
              </thead>
              <tbody>
                {estimacion.map((e, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    className="border-b border-slate-50 hover:bg-blue-50/40 transition-colors"
                  >
                    <td className="py-1.5 text-slate-700 font-semibold pr-2">{e.fase}</td>
                    <td className="py-1.5 text-center font-black text-blue-700">{e.horas} h</td>
                    <td className="py-1.5 text-slate-500 text-[9px]">{e.responsable}</td>
                  </motion.tr>
                ))}
                <tr className="border-t-2 border-blue-200">
                  <td className="py-1.5 font-black text-slate-800 text-[11px]">TOTAL</td>
                  <td className="py-1.5 text-center font-black text-blue-700 text-[11px]">{totalHoras} h</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <p className="text-[8px] text-slate-400 italic flex-shrink-0">Fuente: Elaboración propia de los autores.</p>
          </motion.div>

          {/* 8.2 Tabla 4 — Costo por hora */}
          <motion.div variants={fadeRight} className="flex flex-col gap-3">
            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col gap-2">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Costo por Hora por Rol
              </p>
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Rol</th>
                    <th className="text-right py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Pago Mensual</th>
                    <th className="text-center py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">h/mes</th>
                    <th className="text-right py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Valor/h</th>
                  </tr>
                </thead>
                <tbody>
                  {costoPorHora.map((c, i) => (
                    <motion.tr key={i}
                      initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.06 }}
                      className="border-b border-slate-50 hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="py-1.5 text-slate-700 font-semibold">{c.rol}</td>
                      <td className="py-1.5 text-right text-slate-500">{c.pagoMensual}</td>
                      <td className="py-1.5 text-center text-slate-500">{c.horasMes}</td>
                      <td className="py-1.5 text-right font-black text-blue-700">${c.valorHora.toLocaleString('es-CO')}</td>
                    </motion.tr>
                  ))}
                  <tr className="border-t-2 border-blue-200">
                    <td colSpan={3} className="py-1.5 font-black text-slate-800 text-[11px]">Valor promedio</td>
                    <td className="py-1.5 text-right font-black text-blue-700 text-[11px]">$18.750 COP</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[8px] text-slate-400 italic">Fuente: Elaboración propia de los autores.</p>
            </div>

            {/* Context note */}
            <div className="px-4 py-3 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-[11px] text-slate-700 leading-relaxed">
                El valor promedio por hora del equipo corresponde a{' '}
                <strong className="text-blue-700">$18.750 COP</strong>, cifra tomada como referencia de{' '}
                <em>co.talent.com</em> para perfiles de tecnología en Colombia. Esta cifra se usará como base para calcular el costo total del proyecto.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
