import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { STORIES } from '../data/site.js'

export function StoryCard({ s, i = 0, big = false }) {
  const masks = ['blob-a', 'arch', 'blob-b']
  return (
    <Reveal delay={i * 0.12} className="h-full">
      <article className={`group flex h-full flex-col gap-5 rounded-[2rem] bg-white p-5 shadow-lg shadow-brand/10 ring-1 ring-black/5 ${big ? 'sm:flex-row sm:items-center' : ''}`}>
        <div className={`${masks[i % 3]} shrink-0 overflow-hidden ${big ? 'h-64 sm:h-56 sm:w-56' : 'h-60'}`}>
          <SmartImg src={s.img} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        </div>
        <div className="px-1 pb-2">
          <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold text-leaf">{s.tag}</span>
          <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
          <p className="mt-3 text-xs font-medium text-gold-dark">Placeholder story - editable</p>
        </div>
      </article>
    </Reveal>
  )
}

export default function ImpactStories() {
  return (
    <section className="section-pad bg-mist">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Our Impact & Success Stories" title="Real people. Real change." text="These are editable placeholders. Replace them with real, consented beneficiary stories." />
          <Reveal><Link to="/success-stories" className="btn btn-outline mb-12">More Stories <ArrowRight size={16} /></Link></Reveal>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {STORIES.map((s, i) => <StoryCard key={s.id} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
