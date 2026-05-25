/**
 * UCCLogo — Usa el PNG oficial de la Universidad Cooperativa de Colombia.
 * Se usa la versión con fondo claro (logo_ucc_2018).
 */
interface Props {
  height?: number
  variant?: 'full' | 'clear'
}

export default function UCCLogo({ height = 44, variant = 'full' }: Props) {
  // ucc-logo.png = logo oficial con fondo blanco
  // ucc-logo-clear.png = sin fondo (removebg)
  const src = variant === 'clear' ? '/ucc-logo-clear.png' : '/ucc-logo.png'

  return (
    <img
      src={src}
      alt="Universidad Cooperativa de Colombia"
      style={{ height, width: 'auto', objectFit: 'contain' }}
      draggable={false}
    />
  )
}
