import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, fadeLeft } from '../../animations/variants'
import SlideLayout from '../SlideLayout'
import { Target, Check } from 'lucide-react'

const specific = [
  { color: 'blue',  verb: 'Identificar',   rest: 'las principales necesidades de los trabajadores independientes respecto a la promoción digital de sus servicios en Montería.' },
  { color: 'green', verb: 'Diseñar',        rest: 'una plataforma accesible donde los trabajadores registren servicios, experiencia y datos de contacto verificables.' },
  { color: 'blue',  verb: 'Implementar',    rest: 'funcionalidades que permitan a los clientes buscar, comparar y seleccionar servicios según calificaciones y categorías.' },
  { color: 'green', verb: 'Evaluar',        rest: 'el funcionamiento de la plataforma mediante métricas de usabilidad y cumplimiento de los objetivos propuestos.' },
]

export default function S05_Objetivos() {
  return (
    <SlideLayout section="04" label="Objetivos" accent="green">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          height: '100%', gap: 24,
        }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12, alignSelf: 'flex-start' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(42,138,74,0.08)', color: '#2A8A4A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Target size={20} />
          </div>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(42,138,74,0.6)' }}>
              Dirección del proyecto
            </p>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#0f172a' }}>Objetivos</h2>
          </div>
        </motion.div>

        {/* Objetivo General */}
        <motion.div
          variants={fadeUp}
          style={{
            padding: '18px 22px',
            borderRadius: 18,
            border: '1px solid rgba(42,138,74,0.15)',
            background: 'linear-gradient(135deg, rgba(240,253,244,0.95) 0%, rgba(239,246,255,0.7) 100%)',
            width: '100%',
          }}
        >
          <span style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(42,138,74,0.7)', display: 'block', marginBottom: 8 }}>
            Objetivo General
          </span>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', lineHeight: 1.65 }}>
            Desarrollar una{' '}
            <strong style={{ color: '#2A8A4A' }}>plataforma digital</strong>
            {' '}que conecte a trabajadores independientes de oficios varios en Montería con potenciales clientes, mejorando la{' '}
            <strong style={{ color: '#1B4FA8' }}>visibilidad, acceso y confianza</strong>
            {' '}en la contratación de servicios informales.
          </p>
        </motion.div>

        {/* Objetivos Específicos */}
        <div style={{ width: '100%' }}>
          <motion.p
            variants={fadeUp}
            style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, color: '#94a3b8', marginBottom: 12 }}
          >
            Objetivos Específicos
          </motion.p>
          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {specific.map((obj, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '12px 16px',
                  borderRadius: 14,
                  background: 'white',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  border: `1px solid ${obj.color === 'blue' ? 'rgba(27,79,168,0.07)' : 'rgba(42,138,74,0.07)'}`,
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 1,
                  background: obj.color === 'blue' ? 'rgba(27,79,168,0.08)' : 'rgba(42,138,74,0.08)',
                  color: obj.color === 'blue' ? '#1B4FA8' : '#2A8A4A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Check size={13} />
                </div>
                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
                  <strong style={{ color: obj.color === 'blue' ? '#1B4FA8' : '#2A8A4A' }}>{obj.verb} </strong>
                  {obj.rest}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SlideLayout>
  )
}
