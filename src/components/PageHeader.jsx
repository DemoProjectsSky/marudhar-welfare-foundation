import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SmartImg from './SmartImg.jsx'

export default function PageHeader({ title, subtitle, img, crumbs = [] }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 90])

  return (
    <header className="relative isolate overflow-hidden bg-brand-dark pb-24 pt-40 text-white sm:pt-48">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <SmartImg src={img} alt="" eager className="h-[120%] w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />
      </motion.div>
      <div className="absolute -right-24 top-24 -z-10 h-72 w-72 animate-float-slow rounded-full border border-gold/30" />
      <div className="absolute -left-10 bottom-0 -z-10 h-40 w-40 animate-float rounded-full bg-leaf/20 blur-2xl" />

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/70">
          <Link to="/" className="hover:text-gold">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight size={14} aria-hidden="true" />
              {c.to ? <Link to={c.to} className="hover:text-gold">{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-gold" aria-current="page">{title}</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <svg className="absolute bottom-[-1px] left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,80 L0,40 C240,0 480,70 720,40 C960,10 1200,70 1440,30 L1440,80 Z" />
      </svg>
    </header>
  )
}
