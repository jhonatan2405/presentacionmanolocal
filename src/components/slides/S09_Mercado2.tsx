import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { BarChart3, ExternalLink } from 'lucide-react'

export default function S09_Mercado2() {
  return (
    <SlideLayout section="06–B" label="Estudio de Mercado — Dashboard" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        
        <motion.div variants={fadeUp} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-green-600/60 mb-1">Resultados Interactivos</p>
              <h2 className="text-2xl font-black text-slate-900">Dashboard de <span className="gradient-text-green">Encuesta</span></h2>
            </div>
          </div>

          <a 
            href="https://bucket-laboratorio-ucc-jjj-2026-publico.s3.us-east-1.amazonaws.com/dashboard-encuesta.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Abrir en nueva pestaña
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Iframe container */}
        <motion.div variants={fadeUp} className="flex-1 rounded-2xl bg-white shadow-card border border-slate-200 overflow-hidden relative">
          <iframe 
            src="https://bucket-laboratorio-ucc-jjj-2026-publico.s3.us-east-1.amazonaws.com/dashboard-encuesta.html"
            className="w-full h-full border-0"
            title="Dashboard Resultados Encuesta"
          />
        </motion.div>

      </motion.div>
    </SlideLayout>
  )
}
