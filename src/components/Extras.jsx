import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { ENV } from '../data/site.js'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-leaf via-gold to-brand"
      aria-hidden="true"
    />
  )
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' }) }, [pathname])
  return null
}

export function WhatsAppFloat() {
  const msg = encodeURIComponent('Hello, I would like to know more about Shree Marudhar Welfare Foundation.')
  return (
    <a
      href={`https://wa.me/${ENV.whatsapp}?text=${msg}`}
      target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/30 transition hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <span className="relative grid h-8 w-8 place-items-center" aria-hidden="true">
        <MessageCircle size={30} strokeWidth={2.2} className="absolute" />
        <Phone size={13} strokeWidth={2.6} className="absolute" />
      </span>
    </a>
  )
}
