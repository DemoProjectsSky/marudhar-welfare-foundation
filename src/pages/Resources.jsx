import { Link } from 'react-router-dom'
import { BookOpen, Wallet, Award, Scale, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'

const cards = [
  { icon: BookOpen, t: 'Annual Reports', d: 'Yearly overview of activities and outcomes.', to: '/resources/annual-reports' },
  { icon: Wallet, t: 'Financial Reports', d: 'Audited statements and utilisation details.', to: '/resources/financial-reports' },
  { icon: Award, t: 'Certificates', d: 'Registrations, licences and certifications.', to: '/resources/certificates' },
  { icon: Scale, t: 'Policies', d: 'Privacy, terms and governance policies.', to: '/resources/policies' },
]

export default function Resources() {
  return (
    <>
      <PageHeader title="Resources" subtitle="Transparency matters. Find our official documents here." img={IMG.contact} />
      <section className="section-pad bg-white">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ icon: Icon, t, d, to }) => (
              <StaggerItem key={t}>
                <Link to={to} className="group flex h-full flex-col rounded-[2rem] bg-mist p-8 transition hover:-translate-y-2 hover:bg-brand hover:text-white">
                  <Icon size={34} className="mb-5 text-leaf group-hover:text-gold" />
                  <h3 className="text-xl font-bold">{t}</h3>
                  <p className="mt-2 flex-1 text-sm opacity-75">{d}</p>
                  <ArrowRight className="mt-5 transition group-hover:translate-x-2" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
