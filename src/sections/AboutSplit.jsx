import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Target, Eye, Sparkles } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'
import { VALUES } from '../data/site.js'

export default function AboutSplit() {
  const { scrollYProgress } = useScroll()
  const rot = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <motion.div style={{ rotate: rot }} className="absolute -left-24 top-10 h-72 w-72 rounded-full border-[28px] border-mist" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        {/* Image composition */}
        <div className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[560px]">
          <ImageReveal className="absolute left-0 top-0 h-[78%] w-[72%]">
            <div className="blob-a h-full w-full overflow-hidden shadow-2xl">
              <SmartImg src={IMG.about1} alt="Volunteers helping people in the community" className="h-full w-full object-cover" />
            </div>
          </ImageReveal>
          <ImageReveal delay={0.25} className="absolute bottom-0 right-0 h-[50%] w-[52%]">
            <div className="arch h-full w-full overflow-hidden border-8 border-white shadow-2xl">
              <SmartImg src={IMG.about2} alt="Children from a rural community" className="h-full w-full object-cover" />
            </div>
          </ImageReveal>
          <div className="absolute bottom-[12%] left-[4%] animate-float rounded-2xl bg-brand p-5 text-white shadow-xl">
            <p className="font-display text-lg font-bold leading-tight">Section 8<br />Non-Profit</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-gold">Bap, Rajasthan</p>
          </div>
          <div className="absolute right-2 top-2 h-16 w-16 animate-float-slow rounded-full bg-gold/90" aria-hidden="true" />
        </div>

        {/* Copy */}
        <div>
          <Reveal><span className="eyebrow">About Our Foundation</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Rooted in the desert, <span className="italic text-brand">growing with community.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-ink/75">
              Shree Marudhar Welfare Foundation is a registered Section 8 non-profit company based in Bap, Rajasthan.
              We work with communities to improve access to education, healthcare, livelihoods, a cleaner environment
              and social support - guided by compassion, transparency and long-term thinking.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.25} className="card-motion rounded-3xl bg-mist p-6">
              <Target className="mb-3 text-brand" />
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">To empower communities through sustainable programmes that create opportunity, dignity and self-reliance.</p>
            </Reveal>
            <Reveal delay={0.35} className="card-motion rounded-3xl bg-mist p-6">
              <Eye className="mb-3 text-leaf" />
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">A society where every person has the opportunity to learn, stay healthy and thrive.</p>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="mt-8">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Sparkles size={16} className="text-gold" /> Core Values</p>
            <ul className="flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <li key={v} className="rounded-full border border-brand/20 px-4 py-1.5 text-sm text-brand transition hover:bg-brand hover:text-white">{v}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.5} className="mt-10">
            <Link to="/about" className="btn btn-blue group">Read More <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
