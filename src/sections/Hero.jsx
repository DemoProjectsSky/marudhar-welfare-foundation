import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Counter from '../components/Counter.jsx'
import { STATS } from '../data/site.js'
import SmartImg from '../components/SmartImg.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { IMG } from '../data/images.js'

const ease = [0.22, 1, 0.36, 1]
const words = ['Together,', 'We', 'Can', 'Create', 'a', 'Better', 'Tomorrow.']

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 160])

  return (
    <section className="snap-screen relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-dark text-white" aria-label="Introduction">
      {/* Full-bleed photograph */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.04 }}
          animate={reduce ? { scale: 1 } : { scale: [1.04, 1.12] }}
          transition={{ duration: 24, repeat: reduce ? 0 : Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="h-[115%] w-full"
        >
          <SmartImg src={IMG.hero} alt="Foundation volunteers serving villagers at a community health camp" eager className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-brand-dark/55" />

      <div className="container-x flex flex-1 items-center justify-center pb-6 pt-28 sm:pt-32">
        {/* Copy */}
        <div className="w-full max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
            className="eyebrow justify-center !text-gold"
          >
            Shree Marudhar Welfare Foundation
          </motion.span>

          <h1 className="mt-6 font-display text-[2.75rem] font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]" aria-label="Together, We Can Create a Better Tomorrow.">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom" aria-hidden="true">
                <motion.span
                  className={`inline-block ${w === 'Better' || w === 'Tomorrow.' ? 'italic text-gold' : ''}`}
                  initial={{ y: '110%' }} animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.09, ease }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.2, ease }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Empowering communities, transforming lives, and building a future where everyone has the opportunity to thrive.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4, ease }}>
              <Magnetic>
                <Link to="/donate" className="btn btn-primary group">
                  <Heart size={16} className="transition group-hover:fill-red-500 group-hover:text-red-500" /> Donate Now
                </Link>
              </Magnetic>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.56, ease }}>
              <Magnetic>
                <Link to="/our-work" className="btn btn-ghost group">
                  Explore Our Work <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </motion.div>
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
