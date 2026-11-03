import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, Heart } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV } from '../data/site.js'

function isActive(item, pathname) {
  if (item.to === '/') return pathname === '/'
  return pathname === item.to || pathname.startsWith(item.to + '/')
}

function DesktopItem({ item, solid }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const active = isActive(item, pathname)
  const color = solid ? 'text-ink hover:text-brand' : 'text-white/90 hover:text-white'

  return (
    <li
      className="relative"
      onMouseEnter={() => item.children && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => item.children && setOpen(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}
    >
      <NavLink
        to={item.to}
        end={item.to === '/'}
        className={`relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[13px] font-medium transition-colors ${color} ${active ? (solid ? '!text-brand' : '!text-white') : ''}`}
      >
        {item.label}
        {item.children && <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />}
        {active && (
          <motion.span
            layoutId="nav-indicator"
            className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gold"
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          />
        )}
      </NavLink>
      <AnimatePresence>
        {item.children && open && (
          <motion.ul
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5"
          >
            {item.children.map((c) => (
              <li key={c.to}>
                <Link
                  to={c.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-ink transition hover:bg-mist hover:text-brand"
                >
                  {c.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-gold opacity-0 transition group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

function MobileMenu({ onClose }) {
  const [expanded, setExpanded] = useState(null)
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-brand-dark text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex shrink-0 items-center justify-between px-5 py-4">
        <Logo />
        <button onClick={onClose} aria-label="Close menu" className="rounded-full bg-white/10 p-2.5"><X size={22} /></button>
      </div>
      <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto px-5 pb-4 pt-3">
        {NAV.map((item) => (
          <li key={item.to} className="border-b border-white/10">
            {item.children ? (
              <>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between py-4 text-lg font-medium"
                  aria-expanded={expanded === item.label}
                >
                  {item.label}
                  <ChevronDown size={18} className={`transition ${expanded === item.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {expanded === item.label && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3"
                    >
                      <li><Link onClick={onClose} to={item.to} className="block py-2.5 text-white/70">All {item.label}</Link></li>
                      {item.children.map((c) => (
                        <li key={c.to}><Link onClick={onClose} to={c.to} className="block py-2.5 text-white/80">{c.label}</Link></li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link onClick={onClose} to={item.to} className="block py-4 text-lg font-medium">{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="shrink-0 border-t border-white/10 bg-brand-dark px-5 py-3">
        <Link onClick={onClose} to="/donate" className="btn btn-primary w-full"><Heart size={16} /> DONATE NOW</Link>
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { setMobile(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobile])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-500 ${
          scrolled ? 'py-2 shadow-lg shadow-brand/5' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 lg:px-8">
          <Logo />
          <nav aria-label="Main navigation" className="hidden xl:block">
            <ul className="flex items-center">
              {NAV.map((item) => <DesktopItem key={item.to} item={item} solid />)}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/donate" className="btn btn-primary group hidden !px-6 !py-3 sm:inline-flex">
              <Heart size={15} className="transition group-hover:scale-125 group-hover:fill-red-500 group-hover:text-red-500" />
              DONATE NOW
            </Link>
            <button
              onClick={() => setMobile(true)}
              aria-label="Open menu"
              className="rounded-full bg-brand p-2.5 text-white xl:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{mobile && <MobileMenu onClose={() => setMobile(false)} />}</AnimatePresence>
    </>
  )
}
