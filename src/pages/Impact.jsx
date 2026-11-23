import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, LineChart } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
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
              { i: Target, n: '01', t: 'Set clear goals', d: 'Every project begins with a defined need, target group and measurable outcome.' },
              { i: LineChart, n: '02', t: 'Measure honestly', d: 'We track progress and share verified figures only once they are confirmed.' },
              { i: Eye, n: '03', t: 'Report openly', d: 'Audited financial statements, annual report and registrations are published in the Resources section.' },
            ].map(({ i: Icon, n, t, d }) => (
              <StaggerItem key={t} className="card-motion relative min-h-64 overflow-hidden rounded-3xl bg-mist p-8">
                <span className="absolute right-6 top-5 font-display text-6xl font-bold text-brand/7">{n}</span>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20"><Icon size={28} /></div>
                <h3 className="mt-8 text-2xl font-bold">{t}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">{d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="By Focus Area" title="Impact across our programmes" text="Explore the areas where our work is creating practical, community-led change." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f, i) => (
              <Reveal key={f.slug} delay={i * 0.06}>
                <Link to={`/our-work/${f.slug}`} className="card-motion group relative block h-72 overflow-hidden rounded-2xl shadow-lg shadow-brand/10">
                  <SmartImg src={f.img} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-brand-dark/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-gold text-ink"><f.icon size={21} /></div>
                    <div className="flex items-end gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold">{f.title}</h3>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/75">{f.short}</p>
                      </div>
                      <ArrowRight size={19} className="mb-1 shrink-0 transition group-hover:translate-x-1" />
                    </div>
                  </div>
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
