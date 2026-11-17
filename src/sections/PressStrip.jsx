import { ExternalLink } from 'lucide-react'
import SmartImg from '../components/SmartImg.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { PRESS } from '../data/images.js'

/** Newspaper clippings that feature the foundation. Scrolls sideways on phones. */
export default function PressStrip() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionTitle eyebrow="In the News" title="Our work, in the local press" text="Newspaper coverage of the foundation's campaigns, events and recognition. Tap a clipping to read it in full." />
        <Reveal>
          <ul className="rail rail-5">
            {PRESS.map((p) => (
              <li key={p.name}>
                <a href={p.src} target="_blank" rel="noopener noreferrer" className="card-motion group flex h-full flex-col overflow-hidden rounded-2xl bg-mist ring-1 ring-black/5">
                  <SmartImg src={p.thumb} alt={p.title} pos="top" className="h-[clamp(190px,36svh,320px)] w-full object-cover" />
                  <span className="flex flex-1 items-start justify-between gap-2 p-3 text-xs font-medium leading-snug text-ink/80">
                    {p.title}
                    <ExternalLink size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
