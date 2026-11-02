import PageHeader from '../components/PageHeader.jsx'
import FormShell from '../components/FormShell.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { CheckCircle2 } from 'lucide-react'
import { IMG } from '../data/images.js'

const fields = [
  { name: 'name', label: 'Full Name', required: true, min: 2 },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true },
  { name: 'city', label: 'City / Village', required: true },
  { name: 'age', label: 'Age Group', type: 'select', options: ['18-25', '26-35', '36-50', '50+'], required: true },
  { name: 'interest', label: 'Area of Interest', type: 'select', options: ['Education', 'Healthcare', 'Women & Child Development', 'Environment', 'Rural Development', 'Social Welfare', 'Events / Media'], required: true },
  { name: 'availability', label: 'Availability', type: 'select', options: ['Weekends', 'Weekdays', 'Flexible', 'Remote only'] },
  { name: 'skills', label: 'Skills / Experience', type: 'textarea' },
  { name: 'why', label: 'Why do you want to volunteer?', type: 'textarea', required: true, min: 10 },
]

export default function Volunteer() {
  return (
    <>
      <PageHeader title="Volunteer Registration" subtitle="Share your time and talent with the community." img={IMG.volunteer} crumbs={[{ label: 'Get Involved', to: '/get-involved' }]} />
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="sticky top-28">
              <SmartImg src={IMG.volunteer} alt="Volunteers" className="blob-a mb-8 aspect-square w-full object-cover shadow-xl" />
              <ul className="space-y-3 text-sm">
                {['Be part of field activities and events', 'Learn, grow and meet like-minded people', 'Contribute your skills for social good'].map((t) => (
                  <li key={t} className="flex gap-3"><CheckCircle2 className="text-leaf" size={20} />{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="rounded-[2rem] p-1 shadow-xl shadow-brand/10 ring-1 ring-black/5 sm:p-8 lg:col-span-3">
            <FormShell fields={fields} subject="Volunteer registration" submitLabel="Register as Volunteer" note="We will contact you for next steps." />
          </div>
        </div>
      </section>
    </>
  )
}
