import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { FOCUS } from '../data/site.js'

function Card({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group relative block h-[260px] overflow-hidden rounded-2xl shadow-lg shadow-brand/10 lg:h-[clamp(160px,27svh,260px)]">
      <SmartImg src={f.img} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-brand-dark/5" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-center gap-2.5">
          <Icon size={20} className="shrink-0 text-gold" />
          <h3 className="text-lg font-semibold leading-tight">{f.title}</h3>
          <ArrowUpRight size={18} className="ml-auto shrink-0 text-white/60 transition group-hover:text-gold" />
        </div>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-white/80">{f.short}</p>
      </div>
    </Link>
  )
}

export default function FocusAreas() {
  return (
    <section className="section-pad bg-mist grain">
      <div className="container-x">
        <SectionTitle eyebrow="Our Focus Areas" title="Six ways we work for a stronger society" text="Every programme begins with listening to the community. Explore the areas where the foundation focuses its efforts." />
        <div className="rail lg:gap-5">
          {FOCUS.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 0.08}><Card f={f} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
