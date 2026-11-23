import { Link } from 'react-router-dom'
import { Handshake, BarChart3, ShieldCheck, FileText, ArrowRight } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, Stagger, StaggerItem, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'
import { ORG } from '../data/site.js'

const perks = [
  { icon: ShieldCheck, t: 'Registered for CSR', d: `CSR Registration No. ${ORG.csr}` },
  { icon: FileText, t: 'Tax benefits', d: `${ORG.tax} registered` },
  { icon: BarChart3, t: 'Transparent reporting', d: 'Clear project and utilisation updates' },
  { icon: Handshake, t: 'Long-term partnership', d: 'Co-designed programmes with measurable goals' },
]

export default function CSRSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand p-6 text-white sm:p-10 lg:px-12 lg:py-9">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/5" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal><span className="eyebrow !text-gold">CSR &amp; Partnerships</span></Reveal>
              <Reveal delay={0.1}><h2 className="mt-4 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.6rem]">Partner with purpose. Create impact at scale.</h2></Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  We work with companies and institutions to design CSR programmes that are practical, accountable and rooted in community needs.
                </p>
              </Reveal>
              <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
                {perks.map(({ icon: Icon, t, d }) => (
                  <StaggerItem key={t} className="card-motion rounded-xl bg-white/10 p-3.5 ring-1 ring-white/10 backdrop-blur">
                    <Icon size={20} className="mb-1.5 text-gold" />
                    <p className="font-semibold">{t}</p>
                    <p className="line-clamp-1 text-xs text-white/70">{d}</p>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.3} className="mt-7">
                <Link to="/csr" className="btn btn-primary group">Become a Partner <ArrowRight size={16} className="transition group-hover:translate-x-1" /></Link>
              </Reveal>
            </div>
            <ImageReveal>
              <div className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl">
                <SmartImg src={IMG.csr} alt="Marudhar Hospital staff and foundation volunteers" className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[46svh]" />
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
