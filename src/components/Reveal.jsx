import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/** Scroll-reveal wrapper. direction: up | left | right | none */
export function Reveal({ children, delay = 0, direction = 'up', className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const offsets = { up: { y: 36 }, left: { x: -48 }, right: { x: 48 }, none: {} }
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={false}
      animate={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </Tag>
  )
}

/** Clip-path image reveal */
export function ImageReveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduce ? 0 : 1.1, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  )
}

/** Stagger container + item */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
export const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function Stagger({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial={false}
      animate="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
export const StaggerItem = ({ children, className = '' }) => {
  const reduce = useReducedMotion()
  return (
    <motion.div
      variants={{ hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
