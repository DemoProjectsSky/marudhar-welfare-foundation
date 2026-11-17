import { Target, Eye } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'

export default function MissionVision() {
  return (
    <section className="section-pad overflow-hidden bg-brand-dark text-white">
      <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-leaf/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ImageReveal>
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <SmartImg src={IMG.mission} alt="Girls pledging to conserve water on World Water Day" className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[58svh]" />
            </div>
          </ImageReveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal><span className="eyebrow !text-gold">Mission &amp; Vision</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.6rem]">
              A future built <span className="italic text-gold">with</span> people, not just for them.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
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
            <blockquote className="mt-8 rounded-2xl bg-white/5 p-5 font-display text-xl italic leading-relaxed text-white/90 ring-1 ring-white/10">
              “Together, we can create a better tomorrow.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
