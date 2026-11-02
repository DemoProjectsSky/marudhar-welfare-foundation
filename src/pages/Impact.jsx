import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, LineChart } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import StatsBand from '../sections/StatsBand.jsx'
import ImpactStories from '../sections/ImpactStories.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { FOCUS } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function Impact() {
  return (
    <>
      <PageHeader title="Our Impact" subtitle="How we measure change, and the difference it makes." img={IMG.rural} />
      <div className="pt-10"><StatsBand /></div>

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Our Approach" title="Impact is more than numbers" text="We aim to track outcomes that matter to people - not just activities completed." />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              { i: Target, t: 'Set clear goals', d: 'Every project begins with a defined need, target group and measurable outcome.' },
              { i: LineChart, t: 'Measure honestly', d: 'We track progress and share verified figures only once they are confirmed.' },
              { i: Eye, t: 'Report openly', d: 'Annual and financial reports will be published in the Resources section.' },
            ].map(({ i: Icon, t, d }) => (
              <StaggerItem key={t} className="rounded-3xl bg-mist p-8">
                <Icon className="mb-4 text-brand" size={30} />
                <h3 className="text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="By Focus Area" title="Impact across our programmes" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.06}>
                <Link to={`/our-work/${f.slug}`} className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow ring-1 ring-black/5 transition hover:ring-gold">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf/10 text-leaf"><f.icon /></span>
                  <span className="flex-1"><b className="block">{f.title}</b><span className="text-xs text-ink/55">Verified figures to be added</span></span>
                  <ArrowRight size={16} className="text-brand transition group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ImpactStories />
      <DonateBand />
    </>
  )
}
