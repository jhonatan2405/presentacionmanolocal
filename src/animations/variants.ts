import { Variants } from 'framer-motion'

// ── Base variants ──────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24, filter: 'blur(3px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82, filter: 'blur(6px)' },
  visible: {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 280, damping: 18 },
  },
}

// ── Stagger containers ──────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.065, delayChildren: 0.04 },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
}

// ── Slide page transitions ────────────────────────────────
// Clean PowerPoint-style transition: simple slide + fade
export const slidePageVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '20%' : '-20%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x:       { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.4, ease: 'easeOut' },
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? '15%' : '-15%',
    opacity: 0,
    transition: {
      x:       { duration: 0.3, ease: 'easeIn' },
      opacity: { duration: 0.3, ease: 'easeIn' },
    },
  }),
}

// ── Special: reveal from clip ──────────────────────────────
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Float animation for decorative elements ────────────────
export const floatVariant: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
  },
}

// ── Float slow ─────────────────────────────────────────────
export const floatSlow: Variants = {
  animate: {
    y: [0, -8, 0],
    x: [0, 4, 0],
    transition: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
  },
}

// ── Glow pulse ─────────────────────────────────────────────
export const glowPulse: Variants = {
  animate: {
    opacity: [0.4, 0.9, 0.4],
    scale: [1, 1.06, 1],
    transition: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' },
  },
}

// ── Shimmer (for highlighted cards/rows) ──────────────────
export const shimmer: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 },
  },
}

// ── Bounce in ─────────────────────────────────────────────
export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 360, damping: 18 },
  },
}
