import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import Logo from './Logo.jsx'
import { ORG, FOCUS, mapLink } from '../data/site.js'

const quick = [
  ['Home', '/'], ['About Us', '/about'], ['Projects', '/projects'], ['Our Impact', '/impact'],
  ['Gallery', '/gallery'], ['CSR & Partnerships', '/csr'], ['News & Updates', '/news'], ['Contact Us', '/contact'],
]

export default function Footer() {
  return (
    <footer className="snap-screen relative overflow-hidden border-t-2 border-gold/70 bg-ink text-white/75">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Shree Marudhar Welfare Foundation is a Section 8 non-profit company based in Bap, Rajasthan,
              working for communities through education, healthcare, women and child development,
              environment, rural development and social welfare.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Quick Links</h3>
              <ul className="space-y-2.5 text-sm">
                {quick.map(([l, to]) => (
                  <li key={to}><Link to={to} className="transition hover:text-gold hover:pl-1">{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Our Initiatives</h3>
              <ul className="space-y-2.5 text-sm">
                {FOCUS.map((f) => (
                  <li key={f.slug}><Link to={`/our-work/${f.slug}`} className="transition hover:text-gold hover:pl-1">{f.title}</Link></li>
                ))}
                <li><Link to="/volunteer" className="text-gold hover:underline">Become a Volunteer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" /><a href={mapLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{ORG.address}</a></li>
                <li className="flex gap-3"><Phone size={18} className="shrink-0 text-gold" /><a href={`tel:${ORG.phone.replace(/\s/g, '')}`} className="hover:text-gold">{ORG.phone}</a></li>
                <li className="flex gap-3"><Mail size={18} className="shrink-0 text-gold" /><a href={`mailto:${ORG.email}`} className="break-all hover:text-gold">{ORG.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
          <p className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
