import SectionTitle from '../components/SectionTitle.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'
import { PARTNERS } from '../data/site.js'

const initials = (n) => n.replace(/[^A-Za-z& ]/g, '').split(/\s+/).filter((w) => w && w !== '&').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function PartnersSection({ bg = 'bg-white' }) {
  if (!PARTNERS.length) return null
  return (
    <section className={`section-pad ${bg}`}>
      <div className="container-x">
        <SectionTitle eyebrow="Partners & Associates" title="Working together for the community" text="Organisations and institutions we work alongside." />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p) => (
            <StaggerItem key={p.name} className="card-motion flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand/10 ring-1 ring-black/5">
              {p.photo && <SmartImg src={p.photo} alt={`${p.name} - partnership photo`} pos="top" className="aspect-[16/10] w-full object-cover" />}
              <div className="flex flex-1 flex-col p-5">
                <div className="-mt-12 mb-3 grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
                  {p.logo
                    ? <SmartImg src={p.logo} alt={`${p.name} logo`} className="h-full w-full object-contain p-1.5" />
                    : <span className="font-display text-xl font-bold text-brand" aria-hidden="true">{initials(p.name)}</span>}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-leaf">{p.kind}</span>
                <h3 className="mt-1 text-base font-bold leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
