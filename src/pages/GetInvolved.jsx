import { Link } from 'react-router-dom'
import { HandHeart, Heart, Handshake, Megaphone } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SmartImg from '../components/SmartImg.jsx'
import { Stagger, StaggerItem, ImageReveal } from '../components/Reveal.jsx'
import { IMG } from '../data/images.js'

const ways = [
  { icon: HandHeart, t: 'Volunteer', d: 'Give your time and skills to field activities, events and awareness drives.', to: '/volunteer', cta: 'Register as volunteer' },
  { icon: Heart, t: 'Donate', d: 'Support programmes with a one-time or regular contribution.', to: '/donate', cta: 'Donate now' },
  { icon: Handshake, t: 'Partner (CSR)', d: 'Collaborate as a company or institution on accountable CSR projects.', to: '/csr', cta: 'Become a partner' },
  { icon: Megaphone, t: 'Spread the word', d: 'Follow, share and talk about our work to bring more people on board.', to: '/contact', cta: 'Contact us' },
]

export default function GetInvolved() {
  return (
    <>
      <PageHeader title="Get Involved" subtitle="Change needs many hands. Find the way that suits you." img={IMG.volunteer} />
      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionTitle eyebrow="Join Us" title="Four ways to make a difference" />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {ways.map(({ icon: Icon, t, d, to, cta }, i) => (
              <StaggerItem key={t}>
                <div className={`flex h-full flex-col rounded-[2rem] p-8 ${i % 2 ? 'bg-brand text-white' : 'bg-mist'}`}>
                  <Icon size={34} className={i % 2 ? 'text-gold' : 'text-leaf'} />
                  <h3 className="mt-4 text-2xl font-bold">{t}</h3>
                  <p className="mt-2 flex-1 text-sm opacity-80">{d}</p>
                  <Link to={to} className={`btn mt-6 self-start ${i % 2 ? 'btn-primary' : 'btn-blue'}`}>{cta}</Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="bg-mist pb-20">
        <div className="container-x">
          <ImageReveal><SmartImg src={IMG.volunteer} alt="Volunteers in action" className="h-72 w-full rounded-[2.5rem] object-cover sm:h-96" /></ImageReveal>
        </div>
      </section>
    </>
  )
}
