import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** Floating back-to-top button with a circular scroll-progress ring. */
export default function BackToTop() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const on = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  const visible = p > 0.04
  const C = 2 * Math.PI * 21
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-white text-brand shadow-xl shadow-brand/20 ring-1 ring-black/5 transition duration-300 hover:bg-brand hover:text-white sm:right-8 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="21" fill="none" stroke="#E9B949" strokeWidth="2.5" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
      </svg>
      <ArrowUp size={18} className="relative" />
    </button>
  )
}
