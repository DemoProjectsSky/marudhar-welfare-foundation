import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal, ImageReveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import MissionVision from '../sections/MissionVision.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import TeamSection from '../sections/TeamSection.jsx'
import { IMG } from '../data/images.js'
import { ORG, VALUES, FOCUS } from '../data/site.js'

const facts = [
  ['Organisation', ORG.name],
  ['Type', 'Section 8 Non-Profit Company'],
  ['CIN NO.', ORG.cin],
  ['Section 8 Licence NO.', ORG.section8],
  ['CSR Registration NO. ', ORG.csr],
  ['PAN', ORG.pan],
  ['Tax Registrations', ORG.tax + ' (provisional, AY 2024-25 to 2026-27)'],
  ['NGO Darpan ID', ORG.darpan],
  ['Certification', ORG.iso],
  ['Registered Office', ORG.address],
]

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="A community-first foundation working from Bap, Rajasthan." img={IMG.hero} />

      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ImageReveal>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <SmartImg src={IMG.about1} alt="Foundation volunteers at a community health camp" stable className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-[62svh]" />
            </div>
          </ImageReveal>
          <div>
            <SectionTitle eyebrow="Who We Are" title="Compassion, organised into action." />
            <Reveal delay={0.1}>
              <p className="-mt-6 leading-relaxed text-ink/75">
                Shree Marudhar Welfare Foundation is a registered Section 8 non-profit company based in Bap, Rajasthan.
                Its programme priorities span education, healthcare, women and child development, environmental
                protection, rural development and social welfare, with a focus on the needs of rural communities.
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                The foundation aims to bring communities, volunteers, donors and institutions together to support
                opportunity and dignity, working with transparency and respect.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-3">
              {VALUES.map((v) => (
                <StaggerItem key={v} className="shrink-0">
                  <span className="whitespace-nowrap rounded-full bg-brand px-5 py-2 text-sm font-medium text-white">{v}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <MissionVision />

      <TeamSection />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="Official Information" title="Registration & legal details" text="Registration details of the foundation." />
          <Reveal>
            <dl className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-brand/10 ring-1 ring-black/5">
              {facts.map(([k, v], i) => (
                <div key={k} className={`grid gap-1 px-6 py-4 sm:grid-cols-3 sm:px-8 ${i % 2 ? 'bg-mist/60' : ''}`}>
                  <dt className="text-sm font-semibold text-brand">{k}</dt>
                  <dd className="text-sm text-ink/80 sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="What We Do" title="Our programme areas" />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f) => (
              <StaggerItem key={f.slug}>
                <Link to={`/our-work/${f.slug}`} className="group relative block min-h-56 overflow-hidden rounded-3xl bg-mist shadow-lg shadow-brand/10 transition hover:-translate-y-1">
                  <SmartImg src={f.img} alt={f.title} stable className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-brand-dark/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <f.icon className="mb-3 text-gold" />
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/75">{f.short}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <DonateBand />
    </>
  )
}
