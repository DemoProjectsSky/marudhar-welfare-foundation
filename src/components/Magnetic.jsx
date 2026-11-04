import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function Magnetic({ children, strength = 0.16 }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.35 })

  const move = (event) => {
    if (reduce || event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength)
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x: springX, y: springY }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}