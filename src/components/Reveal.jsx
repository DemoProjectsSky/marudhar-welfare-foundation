import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/** Scroll-reveal wrapper. direction: up | left | right | none */
export function Reveal({ children, delay = 0, direction = 'up', className = '', as = 'div' }) {
  const offsets = { up: { y: 36 }, left: { x: -48 }, right: { x: 48 }, none: {} }
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  )
}

/** Clip-path image reveal */
export function ImageReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(0 0 100% 0)', scale: 1.08 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay, ease }}
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
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
export const StaggerItem = ({ children, className = '' }) => (
  <motion.div variants={item} className={className}>{children}</motion.div>
)
