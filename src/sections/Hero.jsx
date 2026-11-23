import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Counter from '../components/Counter.jsx'
import { STATS } from '../data/site.js'
import SmartImg from '../components/SmartImg.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { IMG } from '../data/images.js'

const ease = [0.22, 1, 0.36, 1]
const SLIDES = [
  { img: IMG.hero, eyebrow: 'Shree Marudhar Welfare Foundation', title: ['Together, We Can Create', 'a Better Tomorrow.'], text: 'Empowering communities, transforming lives, and building a future where everyone has the opportunity to thrive.', cta: ['Explore Our Work', '/our-work'], alt: 'Volunteers serving villagers at a community health camp' },
  { img: IMG.mission, eyebrow: 'Vriksh Daan Pahal', title: ['Donate a Tree,', 'Grow a Greener Bap.'], text: 'Saplings gifted to families, schools and hospitals across Bap - one tree at a time for a greener desert.', cta: ['See the Campaign', '/our-work'], alt: 'Girls taking a pledge to conserve water' },
  { img: IMG.education, eyebrow: 'Health & Education', title: ['Free Health Camps &', 'Youth Guidance.'], text: 'Community health camps, awareness drives and career seminars that reach people where they live.', cta: ['Our Programmes', '/our-work'], alt: 'Seminar with students and guests' },
]
const CHIPS = [500, 1000, 2500]

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 160])
  const [i, setI] = useState(0)
  const [pause, setPause] = useState(false)
  useEffect(() => {
    if (pause || reduce) return
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 7000)
    return () => clearInterval(t)
  }, [pause, reduce])
  const sl = SLIDES[i]

  return (
    <section
      className="snap-screen relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-dark text-white" aria-label="Introduction"
      onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} className="absolute inset-0 h-[115%] w-full">
            <motion.div
              initial={{ scale: 1.04 }} animate={reduce ? { scale: 1 } : { scale: 1.12 }} transition={{ duration: 9, ease: 'linear' }}
              className="h-full w-full"
            >
              <SmartImg src={sl.img} alt={sl.alt} eager className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-brand-dark/55" />

      <div className="container-x flex flex-1 items-center justify-center pb-4 pt-28 sm:pt-32">
        <div className="w-full max-w-5xl text-center" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease }}>
              <span className="eyebrow justify-center !text-gold">{sl.eyebrow}</span>
              <h1 className="mt-5 font-display text-[2.5rem] font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
                {sl.title[0]} <span className="block italic text-gold sm:inline">{sl.title[1]}</span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{sl.text}</p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Magnetic>
                  <Link to="/donate" className="btn btn-primary group">
                    <Heart size={16} className="transition group-hover:fill-red-500 group-hover:text-red-500" /> Donate Now
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to={sl.cta[1]} className="btn btn-ghost group">
                    {sl.cta[0]} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick donate */}
          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
            <span className="px-2 text-xs font-medium uppercase tracking-wider text-white/70">Quick give</span>
            {CHIPS.map((a) => (
              <Link key={a} to={`/donate?amt=${a}`} className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold transition hover:bg-gold hover:text-brand-dark">
                ₹{a.toLocaleString('en-IN')}
              </Link>
            ))}
          </div>

          {/* Slide dots */}
          <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Campaign slides">
            {SLIDES.map((_, n) => (
              <button key={n} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} onClick={() => setI(n)}
                className={`h-1.5 rounded-full transition-all ${n === i ? 'w-8 bg-gold' : 'w-3 bg-white/40 hover:bg-white/70'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Impact figures - part of the first screen */}
      <div className="container-x relative pb-6 sm:pb-8" id="after-hero">
        <motion.dl
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.7, ease }}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4"
        >
          {STATS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.label} className={`flex items-center gap-3 px-4 py-4 sm:gap-4 sm:px-7 sm:py-5 ${i % 2 === 1 ? 'border-l border-white/15' : ''} ${i > 1 ? 'border-t border-white/15 lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l lg:border-white/15' : ''}`}>
                <Icon className="hidden shrink-0 text-gold sm:block" size={26} strokeWidth={1.5} />
                <div className="min-w-0">
                  <dt className="order-2 text-[11px] font-medium uppercase leading-snug tracking-wider text-white/70 sm:text-xs">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              </div>
            )
          })}
        </motion.dl>
      </div>
    </section>
  )
}
