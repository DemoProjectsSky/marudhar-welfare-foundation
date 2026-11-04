import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { FOCUS } from '../data/site.js'

// Six intentionally different card treatments
function Overlay({ f, i }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group relative block h-full min-h-[360px] overflow-hidden rounded-[2rem]">
      <SmartImg src={f.img} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <Icon className="mb-3 text-gold" size={28} />
        <h3 className="text-2xl font-bold">{f.title}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/80">{f.short}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">Learn more <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
      </div>
    </Link>
  )
}

function Split({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group flex h-full min-h-[360px] flex-col overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-brand/10 ring-1 ring-black/5">
      <div className="relative h-1/2 min-h-[170px] overflow-hidden">
        <SmartImg src={f.img} alt={f.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute bottom-3 right-3 grid h-12 w-12 place-items-center rounded-full bg-leaf text-white"><Icon size={22} /></span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand">{f.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink/70">{f.short}</p>
        <span className="mt-4 text-sm font-semibold text-leaf">Explore →</span>
      </div>
    </Link>
  )
}

function Circle({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group flex h-full min-h-[360px] flex-col items-center justify-center rounded-[2rem] bg-brand p-7 text-center text-white">
      <div className="blob-a relative mb-5 h-36 w-36 overflow-hidden border-4 border-gold transition duration-500 group-hover:rotate-6 group-hover:scale-105">
        <SmartImg src={f.img} alt={f.title} className="h-full w-full object-cover" />
      </div>
      <Icon className="mb-2 text-gold" size={24} />
      <h3 className="text-xl font-bold">{f.title}</h3>
      <p className="mt-2 text-sm text-white/75">{f.short}</p>
    </Link>
  )
}

function Tall({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-t-[200px] rounded-b-[2rem] bg-leaf p-7 text-white">
      <SmartImg src={f.img} alt={f.title} className="absolute inset-x-0 top-0 h-3/5 w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-x-0 top-[42%] h-1/4 bg-gradient-to-t from-leaf to-transparent" />
      <div className="relative">
        <Icon className="mb-2" size={26} />
        <h3 className="text-xl font-bold">{f.title}</h3>
        <p className="mt-1 text-sm text-white/85">{f.short}</p>
      </div>
    </Link>
  )
}

function Outline({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[2rem] border-2 border-dashed border-brand/25 bg-mist p-7 transition hover:border-solid hover:border-gold">
      <div className="flex items-start justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white transition group-hover:rotate-12"><Icon size={26} /></span>
        <ArrowUpRight className="text-brand/40 transition group-hover:text-gold" />
      </div>
      <div>
        <SmartImg src={f.img} alt={f.title} className="mb-5 h-32 w-full rounded-2xl object-cover" />
        <h3 className="text-xl font-bold text-ink">{f.title}</h3>
        <p className="mt-2 text-sm text-ink/70">{f.short}</p>
      </div>
    </Link>
  )
}

function Gold({ f }) {
  const Icon = f.icon
  return (
    <Link to={`/our-work/${f.slug}`} className="card-motion group relative block h-full min-h-[360px] overflow-hidden rounded-[2rem] bg-gold">
      <SmartImg src={f.img} alt={f.title} className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-50 transition duration-700 group-hover:scale-110" />
      <div className="relative flex h-full flex-col justify-between p-7 text-ink">
        <Icon size={34} />
        <div>
          <h3 className="text-2xl font-bold">{f.title}</h3>
          <p className="mt-2 text-sm font-medium">{f.short}</p>
          <span className="mt-3 inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">Discover</span>
        </div>
      </div>
    </Link>
  )
}

export default function FocusAreas() {
  const [edu, health, women, env, rural, welfare] = FOCUS
  return (
    <section className="section-pad bg-mist grain">
      <div className="container-x">
        <SectionTitle eyebrow="Our Focus Areas" title="Six ways we work for a stronger society" text="Every programme begins with listening to the community. Explore the areas where the foundation focuses its efforts." />
        <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12">
          <Reveal className="md:col-span-6 lg:col-span-5"><Overlay f={edu} /></Reveal>
          <Reveal delay={0.1} className="md:col-span-3 lg:col-span-4"><Split f={health} /></Reveal>
          <Reveal delay={0.2} className="md:col-span-3 lg:col-span-3"><Circle f={women} /></Reveal>
          <Reveal className="md:col-span-3 lg:col-span-3"><Tall f={env} /></Reveal>
          <Reveal delay={0.1} className="md:col-span-3 lg:col-span-4"><Outline f={rural} /></Reveal>
          <Reveal delay={0.2} className="md:col-span-6 lg:col-span-5"><Gold f={welfare} /></Reveal>
        </div>
      </div>
    </section>
  )
}
