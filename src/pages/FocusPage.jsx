import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal, Stagger, StaggerItem } from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { ProjectCard } from '../sections/FeaturedProjects.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { FOCUS, PROJECTS } from '../data/site.js'

export default function FocusPage() {
  const { slug } = useParams()
  const f = FOCUS.find((x) => x.slug === slug)
  if (!f) return <Navigate to="/our-work" replace />
  const Icon = f.icon
  const related = PROJECTS.filter((p) => f.title.toLowerCase().includes(p.cat.split(' ')[0].toLowerCase())).slice(0, 3)
  const others = FOCUS.filter((x) => x.slug !== slug)

  return (
    <>
      <PageHeader title={f.title} subtitle={f.short} img={f.img} crumbs={[{ label: 'Our Work', to: '/our-work' }]} />

      <section className="section-pad bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ImageReveal>
            <div className="relative">
              <div className="leaf-mask overflow-hidden shadow-2xl">
                <SmartImg src={f.img} alt={f.title} stable className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-[min(68svh,32rem)]" />
              </div>
              <span className="absolute -bottom-5 -right-3 grid h-20 w-20 place-items-center rounded-full bg-gold text-ink shadow-xl"><Icon size={34} /></span>
            </div>
          </ImageReveal>
          <div>
            <Reveal><span className="eyebrow">Focus Area</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-3xl font-bold sm:text-4xl">{f.title}</h2></Reveal>
            <Reveal delay={0.15}><p className="mt-5 leading-relaxed text-ink/75">{f.intro}</p></Reveal>
            <Reveal delay={0.2}><h3 className="mt-8 text-xl font-bold">How we work</h3></Reveal>
            <Stagger className="mt-4 space-y-3">
              {f.points.map((p) => (
                <StaggerItem key={p}>
                  <p className="flex gap-3 rounded-2xl bg-mist p-4 text-sm"><CheckCircle2 className="shrink-0 text-leaf" size={20} />{p}</p>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="btn btn-blue">Volunteer With Us</Link>
              <Link to="/donate" className="btn btn-outline">Support This Cause</Link>
            </Reveal>
            <p className="mt-6 text-xs text-ink/50">Programme details and results will be added here as the foundation shares verified information.</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-mist">
          <div className="container-x">
            <SectionTitle eyebrow="Related Projects" title={`${f.title} projects`} />
            <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => <ProjectCard key={p.slug} p={p} delay={i * 0.1} />)}
              {related.length < 3 && (
                <Reveal delay={0.2} className="h-full">
                  <article className="card-motion h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-brand/10">
                    <SmartImg src={f.img} alt={`${f.title} programme`} stable className="aspect-[16/10] w-full object-cover" />
                    <div className="p-6">
                      <span className="eyebrow">Our approach</span>
                      <h3 className="mt-3 text-xl font-bold">Community-led {f.title.toLowerCase()}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.short}</p>
                    </div>
                  </article>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Explore More" title="Other focus areas" text="Discover the causes we support and the work happening across Rajasthan." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => {
              const OtherIcon = o.icon
              return (
                <Reveal key={o.slug} delay={(i % 3) * 0.08}>
                  <Link to={`/our-work/${o.slug}`} className="card-motion group relative block h-56 overflow-hidden rounded-2xl shadow-lg shadow-brand/10">
                    <SmartImg src={o.img} alt={o.title} stable className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <div className="flex items-center gap-2">
                        <OtherIcon size={18} className="shrink-0 text-gold" />
                        <h3 className="text-base font-bold">{o.title}</h3>
                        <ArrowRight size={16} className="ml-auto transition group-hover:translate-x-1" />
                      </div>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/80">{o.short}</p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
      <DonateBand />
    </>
  )
}
