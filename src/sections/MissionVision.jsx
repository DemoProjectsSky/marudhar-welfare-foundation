import { Target, Eye } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-white sm:py-32">
      <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-leaf/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ImageReveal>
            <div className="relative">
              <div className="leaf-mask overflow-hidden shadow-2xl">
                <SmartImg src={IMG.mission} alt="Community members working together" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 h-28 w-28 animate-float rounded-full border-4 border-gold" aria-hidden="true" />
            </div>
          </ImageReveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal><span className="eyebrow !text-gold">Mission &amp; Vision</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              A future built <span className="italic text-gold">with</span> people, not just for them.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.2} className="border-l-2 border-gold pl-6">
              <Target className="mb-3 text-gold" />
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">To empower communities through sustainable, transparent programmes in education, health, livelihoods, environment and welfare - creating opportunity, dignity and self-reliance.</p>
            </Reveal>
            <Reveal delay={0.3} className="border-l-2 border-leaf pl-6">
              <Eye className="mb-3 text-leaf" />
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">A just and compassionate society where every individual - regardless of where they were born - has the chance to learn, be healthy and thrive.</p>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <blockquote className="mt-10 rounded-3xl bg-white/5 p-6 font-display text-xl italic leading-relaxed text-white/90 ring-1 ring-white/10">
              “Together, we can create a better tomorrow.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
