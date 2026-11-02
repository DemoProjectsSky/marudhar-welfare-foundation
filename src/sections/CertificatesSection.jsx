import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import DocCard from '../components/DocCard.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { CERTIFICATES } from '../data/site.js'

export default function CertificatesSection() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Certificates & Recognition" title="Registered. Accountable. Transparent." text="Official registration details supplied by the foundation. Document files can be attached once uploaded." />
          <Reveal><Link to="/resources/certificates" className="btn btn-outline mb-12">All Certificates <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => <Reveal key={c.id} delay={i * 0.07}><DocCard doc={c} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
