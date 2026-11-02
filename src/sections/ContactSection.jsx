import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import FormShell from '../components/FormShell.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ORG, ENV } from '../data/site.js'

export const contactFields = [
  { name: 'name', label: 'Full Name', required: true, min: 2 },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel' },
  { name: 'subject', label: 'Subject', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true, min: 10 },
]

export function MapEmbed({ className = 'h-72' }) {
  const q = encodeURIComponent('Kanasar Chouraha, Bap, Rajasthan 342307')
  return (
    <iframe
      title="Foundation location on Google Maps"
      src={`https://www.google.com/maps?q=${q}&output=embed`}
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-3xl border-0 ${className}`}
      allowFullScreen
    />
  )
}

export function ContactInfo() {
  const wa = `https://wa.me/${ENV.whatsapp}?text=${encodeURIComponent('Hello, I would like to know more about Shree Marudhar Welfare Foundation.')}`
  const items = [
    { icon: MapPin, t: 'Address', v: ORG.address },
    { icon: Phone, t: 'Phone', v: ORG.phone, href: `tel:${ORG.phone.replace(/\s/g, '')}` },
    { icon: Mail, t: 'Email', v: ORG.email, href: `mailto:${ORG.email}` },
  ]
  return (
    <div className="space-y-5">
      {items.map(({ icon: Icon, t, v, href }) => (
        <div key={t} className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-white"><Icon size={20} /></span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-leaf">{t}</p>
            {href ? <a href={href} className="break-all font-medium hover:text-brand">{v}</a> : <p className="font-medium">{v}</p>}
          </div>
        </div>
      ))}
      <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-green w-full"><MessageCircle size={18} /> Chat on WhatsApp</a>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionTitle eyebrow="Contact" title="Let's talk. We'd love to hear from you." text="Reach out to volunteer, partner, donate or simply ask a question." />
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="rounded-[2rem] bg-mist p-7 sm:p-9"><ContactInfo /></div>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-3">
            <div className="rounded-[2rem] bg-white p-1 shadow-xl shadow-brand/10 ring-1 ring-black/5 sm:p-8">
              <FormShell fields={contactFields} subject="Website enquiry" submitLabel="Send Message" note="No data is stored on this website." />
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-10"><MapEmbed className="h-80" /></Reveal>
      </div>
    </section>
  )
}
