import { Link } from 'react-router-dom'
import { Heart, HandHeart } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'

export default function DonateBand() {
  return (
    <section className="section-pad isolate overflow-hidden bg-leaf-dark text-white">
      <SmartImg src={IMG.donate} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-leaf-dark/95 via-brand-dark/85 to-brand-dark/70" />
      <div className="container-x text-center">
        <Reveal><Heart className="mx-auto mb-5 text-gold" size={40} /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-[1.12] sm:text-5xl lg:text-6xl">
            Your Small Contribution Can Make a <span className="italic text-gold">Big Difference.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-white/85">Every contribution helps us reach one more child, one more family, one more village.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="btn btn-primary"><Heart size={16} /> Donate Now</Link>
          <Link to="/get-involved" className="btn btn-ghost"><HandHeart size={16} /> Support Our Mission</Link>
        </Reveal>
      </div>
    </section>
  )
}
