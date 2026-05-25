import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { PlayCircle, Search, UserCheck, Shield, Star, Briefcase, Bell, Users, QrCode, X, ExternalLink } from 'lucide-react'
import ManoLocalLogo from '../ManoLocalLogo'

const featuresCliente = [
  { id: 'crear-cuenta', title: 'Crear Cuenta',    icon: Shield,    desc: 'Registro e inicio de sesión como cliente', videoSrc: '' },
  { id: 'busqueda',     title: 'Búsqueda',         icon: Search,    desc: 'Filtra servicios por categoría o palabra clave', videoSrc: '' },
  { id: 'solicitudes',  title: 'Ver Perfil',        icon: Users,     desc: 'Revisa perfil del trabajador antes de contratar', videoSrc: '' },
  { id: 'calificacion', title: 'Calificaciones',   icon: Star,      desc: 'Califica el servicio recibido', videoSrc: '' },
]

const featuresTrabajador = [
  { id: 'crear-cuenta', title: 'Crear Cuenta',    icon: UserCheck, desc: 'Registro e inicio de sesión como trabajador', videoSrc: '' },
  { id: 'perfil',       title: 'Gestión de Perfil', icon: Briefcase, desc: 'Completa tu perfil con servicios y experiencia', videoSrc: '' },
  { id: 'publicacion',  title: 'Publicar Servicio', icon: Bell,      desc: 'Publica tus oficios con descripción y categoría', videoSrc: '' },
  { id: 'reputacion',   title: 'Calificaciones',   icon: Star,      desc: 'Acumula calificaciones de tus clientes', videoSrc: '' },
]

export default function S19_Prototipo() {
  const [enfoque, setEnfoque] = useState<'cliente' | 'trabajador'>('cliente')
  const [showQR, setShowQR] = useState(false)
  const features = enfoque === 'cliente' ? featuresCliente : featuresTrabajador
  const [activeId, setActiveId] = useState(features[0].id)

  const handleEnfoque = (e: 'cliente' | 'trabajador') => {
    setEnfoque(e)
    setActiveId(e === 'cliente' ? featuresCliente[0].id : featuresTrabajador[0].id)
  }

  const activeFeature = features.find(f => f.id === activeId) ?? features[0]

  // ESC key listener for QR Modal
  useEffect(() => {
    if (!showQR) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowQR(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showQR])

  return (
    <SlideLayout section="10" label="Presentación del Prototipo" accent="blue">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col h-full gap-4">

        {/* Header */}
        <motion.div variants={fadeUp} className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-blue-600/60 mb-1">Demostración Funcional</p>
            <h2 className="text-2xl font-black text-slate-900">Presentación del <span className="gradient-text-blue">Prototipo</span></h2>
          </div>

          {/* Controls right */}
          <div className="flex items-center gap-3">
            {/* QR Code button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF', borderColor: '#3B82F6' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQR(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-blue-200 text-xs font-black text-blue-700 shadow-sm transition-all cursor-pointer"
            >
              <QrCode size={14} className="text-blue-600" />
              QR de Acceso
            </motion.button>

            {/* Enfoque toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => handleEnfoque('cliente')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${enfoque === 'cliente' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Users size={13} /> Enfoque Cliente
              </button>
              <button
                onClick={() => handleEnfoque('trabajador')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${enfoque === 'trabajador' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <UserCheck size={13} /> Enfoque Trabajador
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-4 flex-1 min-h-0">
          {/* Feature Menu */}
          <motion.div variants={fadeUp} className="w-52 flex flex-col gap-2 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={enfoque}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2"
              >
                {features.map((f) => {
                  const Icon = f.icon
                  const isActive = activeId === f.id
                  return (
                    <button
                      key={f.id}
                      onClick={() => setActiveId(f.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${isActive ? 'bg-blue-50 border-blue-200 shadow-sm' : 'bg-white border-slate-100 hover:bg-slate-50'}`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon size={14} />
                      </div>
                      <div>
                        <h4 className={`text-xs font-bold ${isActive ? 'text-blue-900' : 'text-slate-700'}`}>{f.title}</h4>
                        <p className={`text-[9px] ${isActive ? 'text-blue-600/80' : 'text-slate-400'}`}>{f.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Video Area */}
          <motion.div variants={fadeUp} className="flex-1 bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden relative flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${enfoque}-${activeFeature.id}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-4 w-full h-full items-center justify-center flex flex-col"
              >
                {activeFeature.videoSrc ? (
                  <video src={activeFeature.videoSrc} controls autoPlay loop className="w-full h-full object-contain rounded-xl" />
                ) : (
                  <div className="flex flex-col items-center gap-4 p-6 text-center">
                    <PlayCircle size={56} className="text-blue-200" />
                    <div>
                      <p className="text-sm font-bold text-slate-600 mb-1">{activeFeature.title}</p>
                      <p className="text-[10px] text-slate-400 max-w-xs leading-relaxed">
                        Módulo de demostración del{' '}
                        <strong className="text-blue-500">enfoque {enfoque}</strong>
                        {' '}— Video disponible durante la sustentación presencial.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

      </motion.div>

      {/* QR MODAL (Rendered using React Portal directly into body) */}
      {showQR && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100vw', height: '100vh',
              zIndex: 999999,
              background: 'rgba(2, 6, 23, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.28, ease: [0.34, 1.3, 0.64, 1] }}
              style={{
                background: '#FFFFFF',
                borderRadius: 24,
                padding: '30px 40px',
                maxWidth: 420,
                width: '90%',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 20,
                textAlign: 'center',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowQR(false)}
                style={{
                  position: 'absolute', top: 18, right: 18,
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#F1F5F9', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#64748B',
                }}
              >
                <X size={16} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <QrCode size={20} className="text-blue-600" />
                  <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0F172A' }}>QR de Acceso</h3>
                </div>
                <p style={{ fontSize: 11, color: '#64748B', fontWeight: 500, maxWidth: 300 }}>
                  Escanea el código QR oficial con tu celular para navegar en el prototipo interactivo
                </p>
              </div>

              {/* QR Image with custom embedded Logo */}
              <div
                style={{
                  position: 'relative',
                  background: '#FFFFFF',
                  padding: 12,
                  borderRadius: 24,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  width: 224, height: 224,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fmanolocal.vercel.app&ecc=H"
                  alt="QR Code de Acceso a ManoLocal"
                  style={{ width: 200, height: 200 }}
                />
                {/* Embedded Colored Brand Logo Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#FFFFFF',
                    width: 48, height: 48,
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  <ManoLocalLogo size={28} showText={false} />
                </div>
              </div>

              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {/* Direct link access */}
                <a
                  href="https://manolocal.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    width: '100%',
                    background: 'linear-gradient(135deg, #1B4FA8, #2A8A4A)',
                    color: '#FFFFFF',
                    fontWeight: 800, fontSize: 13,
                    padding: '12px 20px',
                    borderRadius: 16,
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(27,79,168,0.25)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 22px rgba(27,79,168,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0px)'
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(27,79,168,0.25)'
                  }}
                >
                  <span>Acceder con el Link</span>
                  <ExternalLink size={14} />
                </a>
                <p style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>
                  URL: <span style={{ textDecoration: 'underline' }}>https://manolocal.vercel.app</span>
                </p>
              </div>

              {/* Footer ESC close hint */}
              <div style={{ fontSize: 9, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Presiona ESC o haz clic fuera para cerrar
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )}
    </SlideLayout>
  )
}
