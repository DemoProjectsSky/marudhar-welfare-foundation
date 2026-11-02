import PageHeader from '../components/PageHeader.jsx'
import DocCard from '../components/DocCard.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ANNUAL_REPORTS, FINANCIAL_REPORTS, CERTIFICATES, POLICIES, ORG } from '../data/site.js'
import { IMG } from '../data/images.js'

const MAP = {
  annual: { title: 'Annual Reports', sub: 'Yearly overview of our work.', docs: ANNUAL_REPORTS },
  financial: { title: 'Financial Reports', sub: 'Audited statements and fund utilisation.', docs: FINANCIAL_REPORTS },
  certificates: { title: 'Certificates', sub: 'Official registrations and certifications.', docs: CERTIFICATES },
  policies: { title: 'Policies', sub: 'Our governance and legal policies.', docs: POLICIES },
}

export default function Documents({ kind }) {
  const cfg = MAP[kind]
  return (
    <>
      <PageHeader title={cfg.title} subtitle={cfg.sub} img={IMG.contact} crumbs={[{ label: 'Resources', to: '/resources' }]} />
      <section className="section-pad bg-mist">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cfg.docs.map((d, i) => <Reveal key={d.id} delay={i * 0.07}><DocCard doc={d} /></Reveal>)}
          </div>
          {kind === 'certificates' && (
            <Reveal className="mt-10 rounded-3xl bg-white p-7 ring-1 ring-black/5">
              <h3 className="text-lg font-bold">Registration summary</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                CIN {ORG.cin} · Section 8 Licence {ORG.section8} · CSR Registration {ORG.csr} · Tax {ORG.tax} · {ORG.iso}
              </p>
            </Reveal>
          )}
          <p className="mt-8 text-sm text-ink/60">
            To make a document downloadable, copy the PDF into <code className="rounded bg-white px-1.5 py-0.5">public/documents/</code> and set its
            <code className="mx-1 rounded bg-white px-1.5 py-0.5">file</code> path in <code className="rounded bg-white px-1.5 py-0.5">src/data/site.js</code>.
          </p>
        </div>
      </section>
    </>
  )
}
