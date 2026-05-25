import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import AnimatedCounter from '../AnimatedCounter'
import { Users, Wrench, UserCheck, Scissors, Zap, Hammer, Paintbrush, Leaf } from 'lucide-react'

const stats = [
  { value: 574, suffix: 'K', label: 'Habitantes en Montería', sub: 'Fuente: DANE', color: 'blue' as const },
  { value: 180, prefix: '~', suffix: 'K', label: 'Trabajadores informales estimados', sub: '≈31% de la población', color: 'green' as const },
  { value: 18, prefix: '', suffix: 'K–36K', label: 'Usuarios objetivo (Fase 1)', sub: '10–20% del mercado', color: 'blue' as const },
]

const trades = [
  { icon: Scissors, name: 'Peluquería' },
  { icon: Zap,      name: 'Electricidad' },
  { icon: Wrench,   name: 'Plomería' },
  { icon: Hammer,   name: 'Albañilería' },
  { icon: Paintbrush, name: 'Manicure' },
  { icon: Leaf,     name: 'Jardinería' },
]

export default function S06_Alcance1() {
  return (
    <SlideLayout section="05–A" label="Alcance — Población Objetivo" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-5">
        <motion.div variants={fadeUp}>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Quiénes se benefician</p>
          <h2 className="text-3xl font-black text-slate-900">¿A quién <span className="gradient-text-blue">impacta</span> ManoLocal?</h2>
        </motion.div>

        {/* Stats */}
        <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ scale: 1.04, y: -3 }}
              className={`p-5 rounded-2xl bg-white shadow-card border text-center card-3d ${s.color === 'blue' ? 'border-blue-100' : 'border-green-100'}`}
            >
              <div className={`text-3xl font-black mb-1 leading-none ${s.color === 'blue' ? 'gradient-text-blue' : 'gradient-text-green'}`}>
                {s.prefix}
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs font-semibold text-slate-700 mb-1">{s.label}</div>
              <div className="text-[10px] text-slate-400">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* User type cards */}
        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 flex-1">
          {/* Workers */}
          <motion.div variants={fadeUp}
            className="p-5 rounded-2xl bg-white shadow-card border border-blue-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Wrench size={18} />
              </div>
              <div>
                <span className="text-[9px] text-blue-500/70 uppercase tracking-widest font-bold">Beneficiario 1</span>
                <h3 className="font-black text-slate-800 text-sm">Trabajadores Independientes</h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Obtienen mayor visibilidad de sus servicios y una forma más sencilla de conectar con nuevos clientes en su entorno local.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {trades.map((t, j) => {
                const Icon = t.icon
                return (
                  <motion.div key={j} whileHover={{ scale: 1.06 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-700">
                    <Icon size={10} />{t.name}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div variants={fadeUp}
            className="p-5 rounded-2xl bg-white shadow-card border border-green-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <UserCheck size={18} />
              </div>
              <div>
                <span className="text-[9px] text-green-500/70 uppercase tracking-widest font-bold">Beneficiario 2</span>
                <h3 className="font-black text-slate-800 text-sm">Clientes / Usuarios</h3>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Encuentran trabajadores de oficios varios de manera más rápida, organizada y confiable para solucionar necesidades del hogar.
            </p>
            <div className="p-3 rounded-xl bg-green-50 border border-green-100">
              <p className="text-xs text-slate-700">
                Permite acceder a perfiles detallados de prestadores de servicio y sus datos de contacto directo.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <Users size={13} className="text-green-500" />
              <span>Población y hogares de la ciudad de Montería</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Transition to Estudio de Mercado */}
        <motion.div variants={fadeUp}
          className="flex items-start gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="w-1.5 h-full min-h-[2rem] rounded-full bg-gradient-to-b from-blue-500 to-green-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            Con el fin de validar la necesidad y aceptación de la propuesta, posteriormente se realizó un{' '}
            <strong className="text-slate-800">estudio de mercado</strong> mediante encuestas aplicadas a trabajadores y clientes en Montería.
          </p>
        </motion.div>
      </motion.div>
    </SlideLayout>
  )
}
