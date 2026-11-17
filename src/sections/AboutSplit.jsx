import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'
import { VALUES } from '../data/site.js'

export default function AboutSplit() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image pair - no overlaps */}
        <div className="mx-auto w-full max-w-[520px]">
          <div className="grid grid-cols-5 gap-3 sm:gap-4">
            <ImageReveal className="col-span-3">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <SmartImg src={IMG.about1} alt="Volunteers helping people at a community health camp" className="aspect-[3/4] w-full object-cover lg:max-h-[56svh]" />
              </div>
            </ImageReveal>
            <ImageReveal delay={0.2} className="col-span-2 pt-10 sm:pt-16">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <SmartImg src={IMG.about2} alt="Seminar with students and guests" className="aspect-[3/4] w-full object-cover" />
              </div>
            </ImageReveal>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-brand p-5 text-white sm:mt-5">
            <p className="font-display text-lg font-bold leading-tight">Section 8 Non-Profit</p>
            <p className="text-[11px] uppercase tracking-widest text-gold">Bap, Rajasthan</p>
          </div>
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
            <p className="mt-4 leading-relaxed text-ink/75">
              Shree Marudhar Welfare Foundation is a registered Section 8 non-profit company based in Bap, Rajasthan.
              We work with communities to improve access to education, healthcare, livelihoods, a cleaner environment
              and social support - guided by compassion, transparency and long-term thinking.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Sparkles size={16} className="text-gold" /> Core Values</p>
            <ul className="flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <li key={v} className="rounded-full border border-brand/20 px-4 py-1.5 text-sm text-brand transition hover:bg-brand hover:text-white">{v}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.5} className="mt-7">
            <Link to="/about" className="btn btn-blue group">Read More <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
