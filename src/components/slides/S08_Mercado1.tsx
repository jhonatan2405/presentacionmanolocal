import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { BarChart3, ExternalLink } from 'lucide-react'

export default function S08_Mercado1() {
  return (
    <SlideLayout section="06" label="Estudio de Mercado — Dashboard" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">
        
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60">Encuesta a 33 personas · Clientes y Trabajadores · Montería 2026</p>
              <h2 className="text-2xl font-black text-slate-900">Estudio de <span className="gradient-text-green">Mercado</span></h2>
            </div>
          </div>

          <a 
            href="https://bucket-laboratorio-ucc-jjj-2026-publico.s3.us-east-1.amazonaws.com/dashboard-encuesta.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Pantalla completa
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Iframe dashboard */}
        <motion.div variants={fadeUp} className="flex-1 rounded-2xl bg-white shadow-card border border-slate-200 overflow-hidden">
          <iframe 
            src="https://bucket-laboratorio-ucc-jjj-2026-publico.s3.us-east-1.amazonaws.com/dashboard-encuesta.html"
            className="w-full h-full border-0"
            title="Dashboard Resultados Encuesta ManoLocal"
            scrolling="no"
            style={{ overflow: 'hidden' }}
          />
        </motion.div>

      </motion.div>
    </SlideLayout>
  )
}
