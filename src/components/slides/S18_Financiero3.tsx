import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { CheckCircle2, TrendingUp } from 'lucide-react'

// ── 8.5 Proyección de Ingresos (Tabla 7) — EXACTO del Word ──
const ingresos = [
  { concepto: 'Suscripciones premium (100 trabajadores × $15.000)', mensual: '$1.500.000', anual: '$18.000.000' },
  { concepto: 'Comisiones por servicios realizados',                 mensual: '$800.000',   anual: '$9.600.000'  },
  { concepto: 'Publicidad de negocios locales',                      mensual: '$700.000',   anual: '$8.400.000'  },
]

// ── 8.5 Proyección de Egresos (Tabla 8) — EXACTO del Word ──
const egresosFijos = [
  { concepto: 'Hosting / nube',                   mensual: '$200.000', anual: '$2.400.000' },
  { concepto: 'Base de datos',                     mensual: '$150.000', anual: '$1.800.000' },
  { concepto: 'Internet y comunicaciones',          mensual: '$90.000',  anual: '$1.080.000' },
  { concepto: 'Mantenimiento y soporte técnico',    mensual: '$300.000', anual: '$3.600.000' },
  { concepto: 'Dominio web',                        mensual: '$7.000',   anual: '$84.000'   },
]

const egresosVariables = [
  { concepto: 'Consumo adicional de servidor',     mensual: '$150.000', anual: '$1.800.000' },
  { concepto: 'Correos y notificaciones',           mensual: '$50.000',  anual: '$600.000'  },
  { concepto: 'Publicidad digital',                 mensual: '$200.000', anual: '$2.400.000' },
  { concepto: 'Almacenamiento multimedia',          mensual: '$53.000',  anual: '$636.000'  },
]

// ── 8.6 Punto de equilibrio (Tabla 9) — EXACTO del Word ──
const puntoEquilibrio = [
  { concepto: 'Total costos fijos mensuales',     valor: '$747.000 COP'  },
  { concepto: 'Total costos variables mensuales', valor: '$453.000 COP'  },
  { concepto: 'Total costos mensuales',            valor: '$1.200.000 COP' },
  { concepto: 'Precio suscripción premium',        valor: '$15.000 COP'  },
  { concepto: 'Usuarios premium necesarios',       valor: '80 usuarios'  },
  { concepto: 'Punto de equilibrio estimado',      valor: '80 suscriptores activos' },
]

// ── 8.7 Viabilidad — puntos clave del Word ──
const viabilidad = [
  'Los costos de desarrollo son relativamente accesibles para un proyecto de software local.',
  'Funciona completamente en la nube, sin infraestructura física compleja.',
  'El estudio de mercado mostró alta aceptación por parte de los encuestados.',
  'El modelo de monetización combina suscripciones, comisiones y publicidad local.',
  'Las proyecciones muestran una utilidad positiva mensual de $1.800.000 COP.',
]

export default function S18_Financiero3() {
  return (
    <SlideLayout section="09–C" label="Estudio Financiero — 8.5, 8.6 y 8.7" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-2.5">
        
        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Proyecciones y factibilidad</p>
            <h2 className="text-2xl font-black text-slate-900">Ingresos, Egresos y <span className="gradient-text-green">Viabilidad</span></h2>
          </div>
          <div className="flex gap-2">
            <div className="text-center px-3 py-1.5 rounded-xl bg-green-50 border border-green-100">
              <div className="text-base font-black text-green-700">$1.800.000</div>
              <div className="text-[9px] text-slate-400">utilidad mensual estimada</div>
            </div>
            <div className="text-center px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-base font-black text-blue-700">80 usuarios</div>
              <div className="text-[9px] text-slate-400">punto de equilibrio</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">

          {/* Col 1: 8.5 Ingresos + Egresos */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-2 overflow-auto">
            {/* Tabla 7 — Ingresos */}
            <div className="bg-white rounded-xl shadow-card border border-slate-100 p-3 flex-shrink-0">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Ingresos Proyectados</p>
              <table className="w-full text-[9px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">Concepto</th>
                    <th className="text-right py-1 font-black text-slate-600 text-[8px] uppercase">Mensual</th>
                    <th className="text-right py-1 font-black text-slate-600 text-[8px] uppercase">Anual</th>
                  </tr>
                </thead>
                <tbody>
                  {ingresos.map((r, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-green-50/30 transition-colors">
                      <td className="py-1 text-slate-600 pr-1 leading-tight">{r.concepto}</td>
                      <td className="py-1 text-right font-semibold text-green-700 whitespace-nowrap">{r.mensual}</td>
                      <td className="py-1 text-right font-semibold text-green-700 whitespace-nowrap">{r.anual}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-green-200 bg-green-50/50">
                    <td className="py-1 font-black text-slate-800 text-[9px]">TOTAL INGRESOS</td>
                    <td className="py-1 text-right font-black text-green-700 whitespace-nowrap">$3.000.000</td>
                    <td className="py-1 text-right font-black text-green-700 whitespace-nowrap">$36.000.000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[7px] text-slate-400 italic mt-1">Fuente: Elaboración propia de los autores.</p>
            </div>

            {/* Tabla 8 — Egresos */}
            <div className="bg-white rounded-xl shadow-card border border-slate-100 p-3 flex-1">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Egresos Proyectados</p>
              <table className="w-full text-[9px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">Concepto</th>
                    <th className="text-right py-1 font-black text-slate-600 text-[8px] uppercase">Mensual</th>
                    <th className="text-right py-1 font-black text-slate-600 text-[8px] uppercase">Anual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50">
                    <td colSpan={3} className="py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">EGRESOS FIJOS</td>
                  </tr>
                  {egresosFijos.map((r, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-red-50/20 transition-colors">
                      <td className="py-0.5 text-slate-600 pr-1 leading-tight">{r.concepto}</td>
                      <td className="py-0.5 text-right text-slate-600 whitespace-nowrap">{r.mensual}</td>
                      <td className="py-0.5 text-right text-slate-600 whitespace-nowrap">{r.anual}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-200">
                    <td className="py-0.5 font-black text-slate-700 text-[8px]">Subtotal Fijos</td>
                    <td className="py-0.5 text-right font-bold text-slate-700 whitespace-nowrap">$747.000</td>
                    <td className="py-0.5 text-right font-bold text-slate-700 whitespace-nowrap">$8.964.000</td>
                  </tr>
                  <tr className="bg-slate-50 mt-1">
                    <td colSpan={3} className="py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">EGRESOS VARIABLES</td>
                  </tr>
                  {egresosVariables.map((r, i) => (
                    <tr key={i} className="border-b border-slate-50 hover:bg-red-50/20 transition-colors">
                      <td className="py-0.5 text-slate-600 pr-1 leading-tight">{r.concepto}</td>
                      <td className="py-0.5 text-right text-slate-600 whitespace-nowrap">{r.mensual}</td>
                      <td className="py-0.5 text-right text-slate-600 whitespace-nowrap">{r.anual}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-200">
                    <td className="py-0.5 font-black text-slate-700 text-[8px]">Subtotal Variables</td>
                    <td className="py-0.5 text-right font-bold text-slate-700 whitespace-nowrap">$453.000</td>
                    <td className="py-0.5 text-right font-bold text-slate-700 whitespace-nowrap">$5.436.000</td>
                  </tr>
                  <tr className="border-t-2 border-red-200 bg-red-50/40">
                    <td className="py-1 font-black text-slate-800 text-[9px]">TOTAL EGRESOS</td>
                    <td className="py-1 text-right font-black text-red-600 whitespace-nowrap">$1.200.000</td>
                    <td className="py-1 text-right font-black text-red-600 whitespace-nowrap">$14.400.000</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[7px] text-slate-400 italic mt-1">Fuente: Elaboración propia de los autores.</p>
            </div>
          </motion.div>

          {/* Col 2: 8.6 Punto de Equilibrio */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <div className="bg-white rounded-xl shadow-card border border-slate-100 p-3 flex-shrink-0">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Punto de Equilibrio</p>
              <table className="w-full text-[9px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">Concepto</th>
                    <th className="text-right py-1 font-black text-slate-600 text-[8px] uppercase tracking-wide">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {puntoEquilibrio.map((r, i) => (
                    <tr key={i} className={`border-b transition-colors ${
                      i === puntoEquilibrio.length - 1
                        ? 'border-t-2 border-green-200 bg-green-50/60'
                        : 'border-slate-50 hover:bg-green-50/30'
                    }`}>
                      <td className={`py-1 pr-2 leading-tight ${i === puntoEquilibrio.length - 1 ? 'font-black text-slate-800' : 'text-slate-600'}`}>
                        {r.concepto}
                      </td>
                      <td className={`py-1 text-right whitespace-nowrap font-bold ${i === puntoEquilibrio.length - 1 ? 'text-green-700 text-[10px]' : 'text-slate-700'}`}>
                        {r.valor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[7px] text-slate-400 italic mt-1">Fuente: Elaboración propia de los autores.</p>
            </div>

            {/* Punto de equilibrio visual highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex-1 bg-green-600 rounded-xl p-4 text-center flex flex-col items-center justify-center shadow-lg"
            >
              <p className="text-[9px] tracking-widest uppercase text-green-200 font-bold mb-1">PUNTO DE EQUILIBRIO</p>
              <div className="text-5xl font-black text-white leading-none">80</div>
              <p className="text-xs font-semibold text-green-100 mt-1">usuarios premium activos</p>
              <p className="text-[9px] text-green-200 mt-1 leading-tight">
                para cubrir los $1.200.000<br />de costos mensuales
              </p>
            </motion.div>

            <div className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-[9px] text-slate-600 leading-relaxed">
                Con ingresos adicionales por publicidad y comisiones, el equilibrio puede alcanzarse con <strong>menos de 80 suscriptores</strong>.
              </p>
            </div>
          </motion.div>

          {/* Col 3: 8.7 Viabilidad */}
          <motion.div variants={fadeRight} className="flex flex-col gap-2">
            <div className="bg-white rounded-xl shadow-card border border-slate-100 p-3 flex-shrink-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={14} />
                </div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Viabilidad Económica</p>
              </div>
              <ul className="flex flex-col gap-2">
                {viabilidad.map((v, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] text-slate-600 leading-relaxed">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Conclusion box */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex-1 px-4 py-4 rounded-xl bg-blue-50 border border-blue-100 flex flex-col justify-between"
            >
              <p className="text-[10px] font-black text-slate-700 leading-relaxed">
                En términos generales,{' '}
                <span className="gradient-text-blue">ManoLocal puede considerarse un proyecto viable económicamente</span>,
                especialmente en una primera etapa enfocada en la ciudad de Montería, donde actualmente no existe una
                plataforma organizada enfocada específicamente en este tipo de servicios.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="text-center p-2 rounded-lg bg-white border border-green-100 shadow-sm">
                  <div className="text-sm font-black text-green-700">$1.800.000</div>
                  <div className="text-[8px] text-slate-400 leading-tight">utilidad mensual<br />estimada</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-white border border-green-100 shadow-sm">
                  <div className="text-sm font-black text-green-700">$21.600.000</div>
                  <div className="text-[8px] text-slate-400 leading-tight">proyección<br />año 1</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
