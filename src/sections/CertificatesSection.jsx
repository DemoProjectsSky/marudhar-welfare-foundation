import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import DocCard from '../components/DocCard.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { CERTIFICATES } from '../data/site.js'

export default function CertificatesSection() {
  const ready = CERTIFICATES.filter((c) => c.file)
  const shown = (ready.length ? ready : CERTIFICATES).slice(0, 2)
  return (
    <section className="section-pad bg-mist">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Certificates & Recognition" title="Registered. Accountable. Transparent." text="Official registration documents of the foundation - view or download them." />
          <Reveal><Link to="/resources/certificates" className="btn btn-outline mb-4 !py-2.5 sm:mb-8 sm:!py-3.5">All Certificates <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="rail">
          {shown.map((c, i) => <Reveal key={c.id} delay={i * 0.08} className="h-full"><DocCard doc={c} /></Reveal>)}
          <Reveal delay={0.16} className="h-full">
            <Link to="/resources/certificates" className="card-motion group flex h-full min-h-[240px] flex-col items-center justify-center rounded-2xl bg-brand p-7 text-center text-white">
              <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold"><FileCheck2 size={28} /></span>
              <p className="font-display text-xl font-semibold">Reports, policies &amp; certificates</p>
              <p className="mt-2 text-sm text-white/70">{CERTIFICATES.length} registrations and documents in one place.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">Open document centre <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
