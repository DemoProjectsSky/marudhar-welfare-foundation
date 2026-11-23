import { Link, Navigate, useParams } from 'react-router-dom'
import { MapPin, Tag, Activity, ArrowLeft } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Reveal, ImageReveal } from '../components/Reveal.jsx'
import { ProjectCard } from '../sections/FeaturedProjects.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { PROJECTS } from '../data/site.js'
import { full, thumb } from '../data/images.js'

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = PROJECTS.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/projects" replace />
  const more = PROJECTS.filter((x) => x.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHeader title={p.title} subtitle={p.short} img={p.pos ? thumb(p.gallery[0]) : p.img} crumbs={[{ label: 'Projects', to: '/projects' }]} />
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ImageReveal>
              <SmartImg src={p.gallery?.length ? full(p.gallery[0]) : p.img} pos={p.pos} alt={p.title} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl sm:aspect-[16/10] sm:rounded-3xl" />
            </ImageReveal>
            <Reveal className="mt-10 space-y-5 text-ink/75">
              <h2 className="text-3xl font-bold text-ink">About this project</h2>
              {p.body.map((t, i) => <p key={i} className="leading-relaxed">{t}</p>)}
            </Reveal>
            {p.gallery?.length > 1 && (
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-bold">Photos &amp; press</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {p.gallery.slice(1).map((n) => (
                    <a key={n} href={full(n)} target="_blank" rel="noopener noreferrer" className="card-motion block overflow-hidden rounded-2xl bg-mist">
                      <SmartImg src={thumb(n)} alt={`${p.title} photo`} className="aspect-square w-full object-cover" pos="top" />
                    </a>
                  ))}
                </div>
              </div>
            )}
            <Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft size={16} /> Back to projects</Link>
          </div>
          <Reveal direction="right">
            <aside className="space-y-5 rounded-3xl bg-mist p-7 lg:sticky lg:top-28">
              <h3 className="text-xl font-bold">Project snapshot</h3>
              <p className="flex items-center gap-3 text-sm"><Tag size={18} className="text-leaf" /> {p.cat}</p>
              <p className="flex items-center gap-3 text-sm"><MapPin size={18} className="text-leaf" /> {p.location}</p>
              <p className="flex items-center gap-3 text-sm"><Activity size={18} className="text-leaf" /> {p.status}</p>
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
