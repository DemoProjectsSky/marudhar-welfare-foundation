import SectionTitle from '../components/SectionTitle.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'
import { TEAM } from '../data/site.js'

const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function TeamSection() {
  if (!TEAM.length) return null
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionTitle eyebrow="Our Team" title="The people behind the foundation" text="Volunteers and leaders who give their time to the community." />
        <Stagger className="grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <StaggerItem key={m.name} className="card-motion rounded-2xl bg-mist p-4 text-center sm:p-6">
              {m.photo ? (
                <SmartImg src={m.photo} alt={m.name} className="mx-auto aspect-square w-full max-w-[220px] rounded-full object-cover shadow-lg" />
              ) : (
                <div aria-hidden="true" className="mx-auto grid aspect-square w-full max-w-[220px] place-items-center rounded-full bg-gradient-to-br from-brand to-leaf font-display text-4xl font-bold text-white shadow-lg sm:text-5xl">
                  {initials(m.name)}
                </div>
              )}
              <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
              <p className="text-sm font-medium text-leaf">{m.role}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
