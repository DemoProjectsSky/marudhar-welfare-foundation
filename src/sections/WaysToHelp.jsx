import { Link } from 'react-router-dom'
import { HandHeart, Heart, Handshake, Megaphone, ArrowUpRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import { Stagger, StaggerItem } from '../components/Reveal.jsx'

const WAYS = [
  { icon: Heart, t: 'Donate', d: 'Back health camps and tree plantation with a gift of any size.', to: '/donate' },
  { icon: HandHeart, t: 'Volunteer', d: 'Give your time to field activities, events and awareness drives.', to: '/volunteer' },
  { icon: Handshake, t: 'Partner (CSR)', d: 'Collaborate on accountable, well-documented CSR projects.', to: '/csr' },
  { icon: Megaphone, t: 'Spread the word', d: 'Follow, share and tell others about the work in Bap.', to: '/contact' },
]

export default function WaysToHelp() {
  return (
    <section className="section-pad snap-screen bg-mist" aria-labelledby="ways-h">
      <div className="container-x">
        <SectionTitle eyebrow="Get Involved" title="Four ways to make a difference" text="Change needs many hands. Find the way that suits you." />
        <Stagger className="rail rail-4">
          {WAYS.map(({ icon: Icon, t, d, to }, n) => (
            <StaggerItem key={t}>
              <Link to={to} className={`group flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl ${n === 0 ? 'bg-brand text-white' : 'bg-white'}`}>
                <div className="flex items-start justify-between">
                  <Icon size={30} className={n === 0 ? 'text-gold' : 'text-leaf'} />
                  <ArrowUpRight size={20} className="opacity-50 transition group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm opacity-80">{d}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
