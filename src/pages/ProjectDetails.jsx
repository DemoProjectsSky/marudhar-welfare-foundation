import { Link, Navigate, useParams } from 'react-router-dom'
import { MapPin, Tag, Activity, ArrowLeft } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { ProjectCard } from '../sections/FeaturedProjects.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { PROJECTS } from '../data/site.js'

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = PROJECTS.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/projects" replace />
  const more = PROJECTS.filter((x) => x.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHeader title={p.title} subtitle={p.short} img={p.img} crumbs={[{ label: 'Projects', to: '/projects' }]} />
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ImageReveal>
              <SmartImg src={p.img} alt={p.title} className="aspect-[16/10] w-full rounded-[2rem] object-cover shadow-2xl" />
            </ImageReveal>
            <Reveal className="mt-10 space-y-5 text-ink/75">
              <h2 className="text-3xl font-bold text-ink">About this project</h2>
              {p.body.map((t, i) => <p key={i} className="leading-relaxed">{t}</p>)}
            </Reveal>
            <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft size={16} /> Back to projects</Link>
          </div>
          <Reveal direction="right">
            <aside className="sticky top-28 space-y-5 rounded-[2rem] bg-mist p-7">
              <h3 className="text-xl font-bold">Project snapshot</h3>
              <p className="flex items-center gap-3 text-sm"><Tag size={18} className="text-leaf" /> {p.cat}</p>
              <p className="flex items-center gap-3 text-sm"><MapPin size={18} className="text-leaf" /> {p.location}</p>
              <p className="flex items-center gap-3 text-sm"><Activity size={18} className="text-leaf" /> {p.status}</p>
              <p className="rounded-xl bg-gold/20 p-3 text-xs text-gold-dark">Sample project content - to be replaced with verified details.</p>
              <Link to="/donate" className="btn btn-primary w-full">Support this project</Link>
              <Link to="/volunteer" className="btn btn-outline w-full">Volunteer</Link>
            </aside>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-x">
          <SectionTitle eyebrow="More Projects" title="You may also like" />
          <div className="grid gap-7 md:grid-cols-3">{more.map((x, i) => <ProjectCard key={x.slug} p={x} delay={i * 0.1} />)}</div>
        </div>
      </section>
    </>
  )
}
