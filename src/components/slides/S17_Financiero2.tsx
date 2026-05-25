import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import SlideLayout from '../SlideLayout'

// ── 8.3 Costo Total del Desarrollo (Tabla 5) — EXACTO del Word ──
const costoTotal = [
  { concepto: 'Total de horas del proyecto', valor: '230 horas',       isHeader: false, isBold: false },
  { concepto: 'Valor promedio por hora',      valor: '$18.750 COP',     isHeader: false, isBold: false },
  { concepto: 'Costo mano de obra',           valor: '$4.312.500 COP',  isHeader: false, isBold: true  },
  { concepto: 'Hosting inicial (Vercel)',      valor: '$200.000 COP',    isHeader: false, isBold: false },
  { concepto: 'Dominio web',                  valor: '$80.000 COP',     isHeader: false, isBold: false },
  { concepto: 'Herramientas y licencias',      valor: '$300.000 COP',    isHeader: false, isBold: false },
  { concepto: 'COSTO TOTAL DEL PROYECTO',     valor: '$4.892.500 COP',  isHeader: true,  isBold: true  },
]

// ── 8.4 Precio Final del Proyecto (Tabla 6) — EXACTO del Word ──
const precioFinal = [
  { concepto: 'Costo total del proyecto',   valor: '$4.892.500 COP', isHeader: false },
  { concepto: 'Margen de ganancia aplicado', valor: '40%',            isHeader: false },
  { concepto: 'PRECIO FINAL DEL PROYECTO',  valor: '$6.849.500 COP', isHeader: true  },
]

export default function S17_Financiero2() {
  return (
    <SlideLayout section="09–B" label="Estudio Financiero — 8.3 y 8.4" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-3">
        
        {/* Header */}
        <motion.div variants={fadeUp} className="flex-shrink-0">
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Costo y precio del proyecto</p>
          <h2 className="text-2xl font-black text-slate-900">Costo Total y <span className="gradient-text-blue">Precio Final</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          {/* 8.3 Tabla 5 — Costo Total del Desarrollo */}
          <motion.div variants={fadeLeft} className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col gap-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex-shrink-0">
              Costo Total del Desarrollo
            </p>
            <table className="w-full text-[10px] border-collapse flex-1">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Concepto</th>
                  <th className="text-right py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Valor</th>
                </tr>
              </thead>
              <tbody>
                {costoTotal.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    className={`border-b transition-colors ${
                      row.isHeader
                        ? 'border-t-2 border-blue-200 bg-blue-50'
                        : 'border-slate-50 hover:bg-slate-50/70'
                    }`}
                  >
                    <td className={`py-1.5 pr-2 ${row.isHeader ? 'font-black text-slate-900' : row.isBold ? 'font-bold text-slate-700' : 'text-slate-600'}`}>
                      {row.concepto}
                    </td>
                    <td className={`py-1.5 text-right whitespace-nowrap ${row.isHeader ? 'font-black text-blue-700 text-[11px]' : row.isBold ? 'font-bold text-blue-600' : 'text-slate-600'}`}>
                      {row.valor}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            <p className="text-[8px] text-slate-400 italic flex-shrink-0">Fuente: Elaboración propia de los autores.</p>
            <div className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-[10px] text-slate-600 leading-relaxed">
                El costo más significativo corresponde a la <strong className="text-blue-700">mano de obra</strong>, ya que el desarrollo de software depende principalmente del tiempo y conocimiento técnico del equipo.
              </p>
            </div>
          </motion.div>

          {/* 8.4 Tabla 6 — Precio Final */}
          <motion.div variants={fadeRight} className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-4 flex flex-col gap-2">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Precio Final del Proyecto
              </p>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                El precio final se calcula aplicando un <strong>margen de ganancia del 40%</strong> sobre el costo total del desarrollo. Esto permite estimar cuánto podría costar comercialmente una plataforma como ManoLocal si fuera desarrollada para un cliente o empresa externa.
              </p>
              <table className="w-full text-[10px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Concepto</th>
                    <th className="text-right py-1.5 font-black text-slate-600 text-[9px] uppercase tracking-wide">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {precioFinal.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: 6 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className={`border-b transition-colors ${
                        row.isHeader
                          ? 'border-t-2 border-blue-200 bg-blue-50'
                          : 'border-slate-50 hover:bg-slate-50/70'
                      }`}
                    >
                      <td className={`py-1.5 pr-2 ${row.isHeader ? 'font-black text-slate-900' : 'text-slate-600'}`}>
                        {row.concepto}
                      </td>
                      <td className={`py-1.5 text-right whitespace-nowrap ${row.isHeader ? 'font-black text-blue-700 text-[11px]' : 'text-slate-600'}`}>
                        {row.valor}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[8px] text-slate-400 italic">Fuente: Elaboración propia de los autores.</p>
            </div>

            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex-1 p-5 rounded-2xl bg-blue-600 text-center flex flex-col items-center justify-center shadow-lg"
            >
              <p className="text-[10px] tracking-widest uppercase text-blue-200 font-bold mb-2">PRECIO FINAL DEL PROYECTO</p>
              <div className="text-4xl font-black text-white">$6.849.500</div>
              <p className="text-xs text-blue-200 mt-1">COP — Margen de ganancia 40%</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
