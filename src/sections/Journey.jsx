import { Sprout, Stethoscope, Award, TreePine } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'

const STEPS = [
  { icon: Sprout, y: '2022', t: 'Foundation begins', d: 'Shree Marudhar Welfare Foundation starts work in Bap, Rajasthan, led by founder Suresh Paliwal.' },
  { icon: Stethoscope, y: 'Ongoing', t: 'Health & awareness', d: 'Free health camps, PMSMA sonography camps, Doctors’ Day and Labour Day awareness drives.' },
  { icon: Award, y: 'Recognition', t: 'Honoured locally', d: 'Honoured by the sub-division administration on Republic Day and covered in local press.' },
  { icon: TreePine, y: 'Today', t: 'Vriksh Daan Pahal', d: 'After three years of service, the tree-donation campaign brings saplings to families and institutions.' },
]

export default function Journey() {
  return (
    <section className="section-pad snap-screen bg-white" aria-label="Our journey">
      <div className="container-x">
        <SectionTitle eyebrow="Our Journey" title="From a small start to steady impact" text="A few milestones from the foundation’s work so far." />
        <Stagger className="rail rail-4">
          {STEPS.map(({ icon: Icon, y, t, d }) => (
            <StaggerItem key={t}>
              <div className="relative h-full rounded-3xl border border-brand/10 bg-mist p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-leaf">{y}</span>
                <Icon size={28} className="mt-3 text-gold" />
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
