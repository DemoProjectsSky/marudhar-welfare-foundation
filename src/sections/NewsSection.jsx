import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { NEWS } from '../data/site.js'

export function NewsCard({ n, i = 0 }) {
  return (
    <Reveal delay={i * 0.1} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand/10 ring-1 ring-black/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <SmartImg src={n.img} alt={n.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">{n.cat}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-1.5 text-xs text-ink/55"><CalendarDays size={13} />{n.date}</p>
          <h3 className="mt-2 text-lg font-bold transition group-hover:text-brand">{n.title}</h3>
          <p className="mt-2 flex-1 text-sm text-ink/70">{n.text}</p>
        </div>
      </article>
    </Reveal>
  )
}

export default function NewsSection() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Latest News & Updates" title="What's happening at the foundation" text="Placeholder updates - add real announcements, events and activities." />
          <Reveal><Link to="/news" className="btn btn-outline mb-12">All Updates <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {NEWS.map((n, i) => <NewsCard key={n.id} n={n} i={i} />)}
        </div>
      </div>
    </section>
  )
}
