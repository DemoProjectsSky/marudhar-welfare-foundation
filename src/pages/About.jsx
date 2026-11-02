import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal, ImageReveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import MissionVision from '../sections/MissionVision.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { IMG } from '../data/images.js'
import { ORG, VALUES, FOCUS } from '../data/site.js'

const facts = [
  ['Organisation', ORG.name],
  ['Type', 'Section 8 Non-Profit Company'],
  ['CIN', ORG.cin],
  ['Section 8 Licence', ORG.section8],
  ['CSR Registration', ORG.csr],
  ['Tax Registrations', ORG.tax],
  ['Certification', ORG.iso],
  ['Registered Office', ORG.address],
]

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="A community-first foundation working from Bap, Rajasthan." img={IMG.about1} />

      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ImageReveal>
            <div className="blob-a overflow-hidden shadow-2xl">
              <SmartImg src={IMG.about1} alt="Foundation volunteers at work" className="aspect-[4/5] w-full object-cover" />
            </div>
          </ImageReveal>
          <div>
            <SectionTitle eyebrow="Who We Are" title="Compassion, organised into action." />
            <Reveal delay={0.1}>
              <p className="-mt-6 leading-relaxed text-ink/75">
                Shree Marudhar Welfare Foundation is a registered Section 8 non-profit company based in Bap, Rajasthan.
                The foundation works to support communities across education, healthcare, women and child development,
                environmental protection, rural development and social welfare.
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                We believe sustainable change happens when communities, volunteers, donors and institutions work together
                with transparency and respect.
              </p>
            </Reveal>
            <Stagger className="mt-8 flex flex-wrap gap-2">
              {VALUES.map((v) => (
                <StaggerItem key={v}><span className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white">{v}</span></StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <MissionVision />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="Official Information" title="Registration & legal details" text="As supplied by the foundation." />
          <Reveal>
            <dl className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-brand/10 ring-1 ring-black/5">
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
                <Link to={`/our-work/${f.slug}`} className="group block rounded-3xl bg-mist p-6 transition hover:-translate-y-1 hover:bg-brand hover:text-white">
                  <f.icon className="mb-3 text-leaf group-hover:text-gold" />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm opacity-75">{f.short}</p>
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
