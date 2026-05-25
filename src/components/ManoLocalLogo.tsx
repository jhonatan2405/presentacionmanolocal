/**
 * ManoLocalLogo — Usa el logo PNG oficial del proyecto.
 * Versión "clear" = fondo transparente (Photoroom), ideal para todos los fondos.
 */
interface Props {
  /** Altura en px del logo (ancho se escala automáticamente) */
  size?: number
  /** Si true muestra el logo completo (icono + texto). Si false solo el icono. */
  showText?: boolean
  /** No se usa — mantenido por compatibilidad hacia atrás */
  dark?: boolean
}

export default function ManoLocalLogo({ size = 80, showText = true }: Props) {
  // Logo con fondo transparente (Photoroom) — funciona en fondos claros y oscuros
  const src = '/manolocal-logo-clear.png'

  if (!showText) {
    // Solo el ícono: recortamos la parte superior del logo (aprox. 55% de la imagen)
    return (
      <div style={{ width: size, height: size, overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <img
          src={src}
          alt="ManoLocal"
          style={{
            width: size * 1.6,
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'top center',
            marginTop: 0,
          }}
        />
      </div>
    )
  }

  // Logo completo (icono + texto + tagline)
  return (
    <img
      src={src}
      alt="ManoLocal — Conectando Oficios de Confianza"
      style={{ height: size, width: 'auto', objectFit: 'contain' }}
    />
  )
}
