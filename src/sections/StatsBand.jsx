import { Users, Briefcase, MapPinned, CalendarHeart } from 'lucide-react'
import Counter from '../components/Counter.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'
import { STATS, STATS_ARE_VERIFIED } from '../data/site.js'

const icons = [Users, Briefcase, MapPinned, CalendarHeart]

export default function StatsBand() {
  return (
    <section id="after-hero" className="relative -mt-px bg-white pb-8 pt-6 sm:pb-16">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-brand/10 shadow-xl shadow-brand/10 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = icons[i]
            return (
              <StaggerItem key={s.label} className="card-motion group relative bg-white p-6 text-center sm:p-9">
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-leaf to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <Icon className="mx-auto mb-4 text-leaf transition group-hover:-translate-y-1 group-hover:text-brand" size={30} strokeWidth={1.5} />
                <div className="font-display text-4xl font-bold text-brand sm:text-5xl">
                  {STATS_ARE_VERIFIED
                    ? <Counter to={s.value} suffix={s.suffix || (s.value > 0 ? '+' : '')} />
                    : <span aria-label="Verified data coming soon">—</span>}
                </div>
                <p className="mt-2 text-sm font-medium text-ink/70">{s.label}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
        {!STATS_ARE_VERIFIED && (
          <p className="mt-3 text-center text-xs text-ink/50">
            Verified impact figures will be shared here as they become available.
          </p>
        )}
      </div>
    </section>
  )
}
