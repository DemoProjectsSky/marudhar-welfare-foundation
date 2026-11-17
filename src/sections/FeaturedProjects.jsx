import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { PROJECTS } from '../data/site.js'

export function ProjectCard({ p, delay = 0, wide = false }) {
  return (
    <Reveal delay={delay}>
      <article className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-brand/10 ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${wide ? 'lg:min-h-[280px] lg:flex-row' : ''}`}>
        <div className={`media-h relative overflow-hidden ${wide ? 'lg:h-auto lg:w-2/5 lg:shrink-0' : ''}`}>
          <SmartImg src={p.cardImg || p.img} pos={p.pos} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand">{p.cat}</span>
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">{p.status}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="flex items-center gap-1 text-xs font-medium text-leaf"><MapPin size={13} />{p.location}</p>
          <h3 className="mt-1.5 text-lg font-semibold text-ink">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{p.short}</p>
          <Link to={`/projects/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:text-leaf">
            View Details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Featured Projects" title="Work that moves communities forward" text="Campaigns and programmes the foundation runs for the people of Bap and nearby villages." />
          <Reveal><Link to="/projects" className="btn btn-outline mb-4 !py-2.5 sm:mb-8 sm:!py-3.5">All Projects <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="rail">
          {PROJECTS.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} p={p} delay={i * 0.12} />)}
        </div>
      </div>
    </section>
  )
}
