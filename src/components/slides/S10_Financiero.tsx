import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import AnimatedCounter from '../AnimatedCounter'
import { TrendingUp, DollarSign } from 'lucide-react'

// Resumen del estudio financiero
const costs = [
  { concept: 'Desarrollo del Sistema (Mano de obra 212h)', value: 3975000 },
  { concept: 'Infraestructura Tecnológica (Hosting, Dominio)', value: 280000 },
  { concept: 'Herramientas y Licencias', value: 150000 },
  { concept: 'Imprevistos', value: 198750 },
]

const totalInvestment = costs.reduce((a,c) => a+c.value, 0)

const operationalCosts = 657000 // Fijos + Variables mes

export default function S10_Financiero() {
  return (
    <SlideLayout section="09" label="Estudio Financiero" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Análisis de Costos</p>
            <h2 className="text-2xl font-black text-slate-900">Estudio <span className="gradient-text-green">Financiero</span></h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          {/* Costs breakdown */}
          <motion.div variants={fadeLeft} className="bg-white rounded-2xl shadow-card border border-slate-200 p-5 flex flex-col justify-center">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Inversión Inicial del Proyecto</h3>
            <div className="flex flex-col gap-3">
              {costs.map((c, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-xs text-slate-600">{c.concept}</span>
                  <span className="text-xs font-bold text-slate-800">${c.value.toLocaleString('es-CO')}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3 mt-1 border-t-2 border-slate-200">
                <span className="text-sm font-bold text-slate-800">Total Inversión</span>
                <span className="text-xl font-black text-green-700">${totalInvestment.toLocaleString('es-CO')} COP</span>
              </div>
            </div>
          </motion.div>

          {/* Viability & Break-even */}
          <motion.div variants={fadeRight} className="flex flex-col gap-4 justify-center">
            
            <div className="bg-green-600 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
               <h3 className="text-[10px] uppercase tracking-widest font-bold text-green-200 mb-2 relative z-10">Punto de Equilibrio</h3>
               <div className="text-5xl font-black text-white relative z-10">
                 <AnimatedCounter value={44} />
               </div>
               <p className="text-sm font-medium text-green-100 mt-2 relative z-10">usuarios activos / mes</p>
               <p className="text-[10px] text-green-200 mt-1 relative z-10">cubren los costos operativos mensuales (${operationalCosts.toLocaleString('es-CO')})</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                 <DollarSign size={16} />
               </div>
               <div>
                 <h4 className="font-bold text-sm text-slate-800">Conclusión Financiera</h4>
                 <p className="text-xs text-slate-600 leading-relaxed mt-1">
                   El proyecto presenta una alta viabilidad económica debido a sus <strong className="text-blue-700">bajos costos operativos de infraestructura en la nube</strong> y un modelo escalable. El punto de equilibrio se alcanza capturando apenas el <strong className="text-green-700">0.24%</strong> del mercado objetivo estimado inicial.
                 </p>
               </div>
            </div>

          </motion.div>
        </div>

      </motion.div>
    </SlideLayout>
  )
}
