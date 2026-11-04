import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Heart } from 'lucide-react'
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
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-dark text-white" aria-label="Introduction">
      {/* Full-bleed photograph */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.04 }}
          animate={reduce ? { scale: 1 } : { scale: [1.04, 1.12] }}
          transition={{ duration: 24, repeat: reduce ? 0 : Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="h-[115%] w-full"
        >
          <SmartImg src={IMG.hero} alt="Children smiling together" eager className="h-full w-full object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/75 to-brand-dark/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-brand-dark/55" />

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute left-[6%] top-[22%] -z-10 h-5 w-5 animate-float rounded-full bg-gold" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[26%] left-[44%] -z-10 hidden h-10 w-10 animate-float-slow rounded-full border-2 border-leaf lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-[16%] -z-10 hidden h-24 w-24 animate-float-slow blob-b bg-leaf/70 lg:block" aria-hidden="true" />

      <div className="container-x flex justify-center py-36">
        {/* Copy */}
        <div className="w-full max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
            className="eyebrow justify-center !text-gold"
          >
            Shree Marudhar Welfare Foundation
          </motion.span>

          <h1 className="mt-6 font-display text-[2.75rem] font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]" aria-label="Together, We Can Create a Better Tomorrow.">
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
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Empowering communities, transforming lives, and building a future where everyone has the opportunity to thrive.
          </motion.p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
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

      {/* Scroll indicator */}
      <a
        href="#after-hero"
        aria-label="Scroll to explore"
        className="absolute bottom-5 left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-brand/15 bg-white/80 text-brand shadow-sm backdrop-blur"
      >
        <motion.span
          animate={reduce ? { y: 0 } : { y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </a>

      {/* Wave transition */}
      <svg className="absolute bottom-[-1px] left-0 w-full text-white" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,120 L0,70 C180,20 360,110 600,70 C840,30 1080,0 1440,60 L1440,120 Z" />
        <path fill="#E9B949" fillOpacity="0.55" d="M0,84 C220,40 420,112 660,82 C900,52 1140,22 1440,76 L1440,90 C1140,40 900,70 660,98 C420,126 220,56 0,98 Z" />
      </svg>
    </section>
  )
}
