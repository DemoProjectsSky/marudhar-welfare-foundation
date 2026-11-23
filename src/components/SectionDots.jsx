import { useEffect, useState } from 'react'

/** Right-edge section navigator for long one-screen-per-section pages (desktop only). */
export default function SectionDots() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      const secs = [...document.querySelectorAll('main section')]
      setItems(secs.map((el) => ({ el, label: (el.querySelector('.eyebrow')?.textContent || el.querySelector('h1,h2')?.textContent || 'Section').trim().replace(/\s+/g, ' ').slice(0, 40) })))
    }, 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!items.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(items.findIndex((i) => i.el === e.target)) })
    }, { rootMargin: '-45% 0px -45% 0px' })
    items.forEach((i) => io.observe(i.el))
    return () => io.disconnect()
  }, [items])

  if (items.length < 2) return null
  return (
    <nav aria-label="Page sections" className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 2xl:flex xl:flex">
      {items.map((it, i) => (
        <button
          key={i} type="button" aria-label={`Go to ${it.label}`} aria-current={active === i}
          onClick={() => it.el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="group relative grid h-4 w-4 place-items-center"
        >
          <span className={`block rounded-full transition-all duration-300 ${active === i ? 'h-3 w-3 bg-gold shadow-[0_0_0_4px_rgba(233,185,73,0.25)]' : 'h-2 w-2 bg-brand/30 group-hover:bg-brand'}`} />
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">{it.label}</span>
        </button>
      ))}
    </nav>
  )
}
