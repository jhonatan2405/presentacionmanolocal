import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants'
import AnimatedCounter from '../AnimatedCounter'
import SlideLayout from '../SlideLayout'
import { HelpCircle } from 'lucide-react'



export default function S03_Pregunta() {
  return (
    <SlideLayout section="02" label="Pregunta Problemática" accent="green">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible"
        className="flex flex-col h-full justify-center items-center text-center gap-7">

        <motion.div variants={scaleIn}
          className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center">
          <HelpCircle size={26} className="text-green-600" />
        </motion.div>

        {/* Question */}
        <motion.div variants={fadeUp} className="max-w-3xl w-full">
          <p className="text-[10px] tracking-[0.2em] uppercase text-green-600/60 font-bold mb-3">Pregunta de investigación</p>
          <div className="px-8 py-6 rounded-2xl bg-white shadow-card border border-black/5 relative">
            <div className="absolute inset-0 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(27,79,168,0.025) 0%, rgba(42,138,74,0.025) 100%)' }} />
            <blockquote className="relative text-xl lg:text-2xl font-bold text-slate-800 leading-relaxed">
              "¿Cómo puede una{' '}
              <span className="gradient-text-blue">plataforma digital</span>{' '}
              mejorar la conexión entre{' '}
              <span className="gradient-text-green">trabajadores informales</span>{' '}
              y clientes en Montería?"
            </blockquote>
          </div>
        </motion.div>


      </motion.div>
    </SlideLayout>
  )
}
