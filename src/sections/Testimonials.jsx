import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { TESTIMONIALS } from '../data/site.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const t = TESTIMONIALS[i]
  return (
    <section className="section-pad bg-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="container-x">
        <SectionTitle align="center" eyebrow="Testimonials" title="Voices from our community" text="Clearly marked placeholders - to be replaced with real, permitted testimonials." />
        <div className="relative mx-auto max-w-3xl rounded-[2.5rem] bg-mist p-8 text-center sm:p-14">
          <Quote className="absolute -top-6 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-gold p-3 text-ink" aria-hidden="true" />
          <div className="min-h-[150px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }}>
                <p className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">“{t.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-brand">{t.who}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((x, idx) => (
              <button key={x.id} onClick={() => setI(idx)} aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${idx === i ? 'w-8 bg-brand' : 'w-2.5 bg-brand/25'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
