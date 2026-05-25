import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '../../animations/variants'
import { ExternalLink, Globe, Smartphone, Monitor, Search, Star, Shield, Users } from 'lucide-react'
import ManoLocalLogo from '../ManoLocalLogo'

const features = [
  { icon: Search,   text: 'Búsqueda y filtro por categorías' },
  { icon: Users,    text: 'Perfiles profesionales completos' },
  { icon: Star,     text: 'Sistema de calificaciones verificadas' },
  { icon: Shield,   text: 'Autenticación segura con JWT' },
]

export default function S18_Prototipo() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-base" style={{ paddingTop: 44 }}>
      {/* Mesh background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Prominent orbs */}
      <motion.div className="absolute top-[-15%] right-[10%] w-[550px] h-[550px] rounded-full blur-[140px] orb-float pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(27,79,168,0.1) 0%, transparent 70%)' }} />
      <motion.div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[450px] rounded-full blur-[120px] orb-float-delay pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(42,138,74,0.08) 0%, transparent 70%)' }} />



      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-1 gap-10 items-center px-12 py-4 pb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text + CTA */}
        <div className="flex-1 flex flex-col gap-5">
          <motion.div variants={fadeUp}>
            <ManoLocalLogo size={120} showText />
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-blue-600/60 font-bold mb-2">Prototipo funcional en producción</p>
            <h1 className="text-5xl font-black text-slate-900 leading-none">
              Conoce el<br />
              <span className="gradient-text-blue">Prototipo</span>{' '}
              <span className="gradient-text-green">en Vivo</span>
            </h1>
            <p className="text-base text-slate-500 mt-3 max-w-sm leading-relaxed">
              El sistema está completamente desplegado y funcional. Accede ahora mismo desde cualquier dispositivo.
            </p>
          </motion.div>

          {/* Feature grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-2">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white shadow-card border border-slate-100"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-blue-600" />
                  </div>
                  <span className="text-xs text-slate-700">{f.text}</span>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={scaleIn} className="flex flex-col gap-3">
            <motion.a
              href="https://manolocal.vercel.app"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(27,79,168,0.3), 0 4px 16px rgba(42,138,74,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-black text-base cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #1B4FA8, #2A8A4A)' }}
            >
              <Globe size={19} />
              <span>manolocal.vercel.app</span>
              <ExternalLink size={15} className="ml-auto opacity-70" />
            </motion.a>

            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <Monitor size={11} /><span>Web app</span>
              <span>·</span>
              <Smartphone size={11} /><span>Responsive mobile</span>
              <span>·</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-600 font-semibold">Live · Producción</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Browser + mobile mockup */}
        <motion.div variants={scaleIn} className="flex-shrink-0 flex flex-col items-center gap-4">
          {/* Laptop frame */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {/* Shadow glow */}
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-30"
              style={{ background: 'linear-gradient(135deg, rgba(27,79,168,0.4), rgba(42,138,74,0.3))' }} />

            {/* Browser chrome */}
            <div className="relative rounded-2xl overflow-hidden border border-black/8 shadow-hover"
              style={{ width: 380, boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)' }}>
              {/* Top bar */}
              <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-3 border-b border-black/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 flex items-center gap-2 border border-black/6">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-slate-500 font-mono">manolocal.vercel.app</span>
                </div>
              </div>

              {/* Screen content */}
              <div className="bg-white p-4" style={{ height: 220 }}>
                {/* Navbar mock */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-100" />
                    <div className="w-20 h-3 rounded bg-slate-200" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-4 rounded bg-slate-100" />
                    <div className="w-10 h-4 rounded bg-slate-100" />
                    <div className="w-14 h-4 rounded bg-blue-500" />
                  </div>
                </div>
                {/* Hero */}
                <div className="mb-4">
                  <div className="h-4 bg-slate-900 rounded w-52 mb-1.5" />
                  <div className="h-2.5 bg-slate-200 rounded w-36" />
                </div>
                {/* Search */}
                <div className="flex gap-2 mb-3">
                  <div className="flex-1 h-8 rounded-xl bg-slate-100 border border-slate-200" />
                  <div className="w-16 h-8 rounded-xl bg-blue-500" />
                </div>
                {/* Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[0,1,2].map(i => (
                    <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 mb-1.5" />
                      <div className="h-2 bg-slate-200 rounded mb-1" />
                      <div className="h-1.5 bg-slate-100 rounded w-3/4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live badge */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-card border border-green-100 text-xs font-bold text-green-700"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Sistema en producción · Live
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between px-10 py-3 border-t border-black/5 bg-white/60 backdrop-blur-sm">
        <p className="text-[10px] text-slate-400">Formulación, Evaluación y Análisis de Factibilidad · Mayo 2026</p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-400">Docente:</span>
          <span className="text-[10px] text-slate-600 font-semibold">Ing. Erika Patricia Causil Luna</span>
          <span className="text-[10px] text-slate-400 mx-1">·</span>
          <span className="text-[10px] text-slate-600 font-semibold">Universidad Cooperativa de Colombia</span>
        </div>
      </div>
    </div>
  )
}
