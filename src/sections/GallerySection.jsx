import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { GALLERY, GALLERY_CATS } from '../data/images.js'

function Lightbox({ items, index, onClose, onNav }) {
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose, onNav])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4"
      role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
      <button onClick={(e) => { e.stopPropagation(); onNav(-1) }} aria-label="Previous" className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft /></button>
      <button onClick={(e) => { e.stopPropagation(); onNav(1) }} aria-label="Next" className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight /></button>
      <AnimatePresence mode="wait">
        <motion.figure
          key={item.id}
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="max-h-[88vh] max-w-4xl" onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'video' && item.url ? (
            <iframe src={item.url} title={item.title} className="aspect-video w-[min(90vw,56rem)] rounded-2xl" allowFullScreen />
          ) : (
            <div className="relative">
              <SmartImg src={item.src} alt={item.title} className="max-h-[78vh] w-auto rounded-2xl object-contain" />
              {item.type === 'video' && (
                <p className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-ink/80 p-3 text-center text-xs text-white">
                  Video placeholder - add an embed URL in src/data/images.js (GALLERY → url)
                </p>
              )}
            </div>
          )}
          <figcaption className="mt-3 text-center text-sm text-white/80">{item.title} · {item.cat}</figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  )
}

export function GalleryGrid({ limit }) {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const reduce = useReducedMotion()
  let items = cat === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === cat)
  if (limit) items = items.slice(0, limit)

  const nav = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length])
  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
        {GALLERY_CATS.map((c) => (
          <button
            key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'bg-white text-ink/70 ring-1 ring-black/10 hover:text-brand'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((g, idx) => (
            <motion.button
              layout key={g.id} type="button" onClick={() => setOpen(idx)}
              initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, clipPath: 'inset(0 0 14% 0)' }}
              animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : (idx % 6) * 0.045, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`Open ${g.title}`}
              className="card-motion group relative mb-4 block w-full overflow-hidden rounded-3xl text-left"
            >
              <SmartImg src={g.src} alt={g.title} className={`w-full object-cover transition duration-700 group-hover:scale-110 ${g.h === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} />
              <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{g.cat}</span>
                <span className="font-display text-lg font-semibold text-white">{g.title}</span>
              </div>
              <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand opacity-0 transition group-hover:opacity-100">
                <ZoomIn size={18} />
              </span>
              {g.type === 'video' && (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-brand shadow-xl transition group-hover:scale-110"><Play size={26} className="ml-1 fill-brand" /></span>
                </span>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      {items.length === 0 && <p className="py-10 text-center text-ink/60">No items in this category yet.</p>}

      <AnimatePresence>
        {open !== null && items[open] && <Lightbox items={items} index={open} onClose={close} onNav={nav} />}
      </AnimatePresence>
    </>
  )
}

export default function GallerySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Photo & Video Gallery" title="Moments from the field" text="Sample imagery shown - replace with the foundation's own photographs and videos." />
          <Reveal><Link to="/gallery" className="btn btn-outline mb-12">Full Gallery <ArrowRight size={16} /></Link></Reveal>
        </div>
        <GalleryGrid limit={6} />
      </div>
    </section>
  )
}
