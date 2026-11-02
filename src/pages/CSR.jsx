import { Download, Handshake, Users, Leaf, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import FormShell from '../components/FormShell.jsx'
import CSRSection from '../sections/CSRSection.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import { ORG } from '../data/site.js'
import { IMG } from '../data/images.js'

const fields = [
  { name: 'company', label: 'Company / Organisation', required: true },
  { name: 'person', label: 'Contact Person', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'area', label: 'Area of Interest', type: 'select', options: ['Education', 'Healthcare', 'Women & Child Development', 'Environment', 'Rural Development', 'Social Welfare', 'Other'], required: true },
  { name: 'budget', label: 'Approx. CSR Budget (optional)' },
  { name: 'message', label: 'Tell us about your CSR goals', type: 'textarea', required: true, min: 10 },
]

export default function CSR() {
  return (
    <>
      <PageHeader title="CSR & Partnerships" subtitle="Co-create accountable, community-led impact with us." img={IMG.csr} />
      <CSRSection />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="Ways to Partner" title="How companies can work with us" />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              { i: Handshake, t: 'Project partnership', d: 'Fund and co-design a programme in a focus area aligned with your CSR policy.' },
              { i: Users, t: 'Employee engagement', d: 'Volunteering days, awareness drives and skill-sharing sessions with your teams.' },
              { i: Leaf, t: 'In-kind support', d: 'Books, medical supplies, equipment or infrastructure support.' },
            ].map(({ i: Icon, t, d }) => (
              <StaggerItem key={t} className="rounded-3xl bg-white p-8 shadow-lg shadow-brand/10">
                <Icon className="mb-4 text-leaf" size={30} /><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 rounded-3xl bg-white p-7 ring-1 ring-black/5">
            <h3 className="flex items-center gap-2 text-lg font-bold"><FileText className="text-brand" /> Eligibility details</h3>
            <p className="mt-2 text-sm text-ink/75">CSR Registration No. <b>{ORG.csr}</b> · Section 8 Licence <b>{ORG.section8}</b> · Tax: <b>{ORG.tax}</b> · <b>{ORG.iso}</b></p>
            <button disabled className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-ink/50">
              <Download size={16} /> CSR proposal PDF - upload pending
            </button>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white" id="enquiry">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="CSR Enquiry" title="Start the conversation" text="Share a few details and our team will get back to you." />
          </div>
          <div className="rounded-[2rem] p-1 shadow-xl shadow-brand/10 ring-1 ring-black/5 sm:p-8 lg:col-span-3">
            <FormShell fields={fields} subject="CSR partnership enquiry" submitLabel="Submit Enquiry" />
          </div>
        </div>
      </section>
    </>
  )
}
