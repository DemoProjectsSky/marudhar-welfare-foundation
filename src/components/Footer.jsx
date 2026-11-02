import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import Logo from './Logo.jsx'
import Newsletter from './Newsletter.jsx'
import { ORG, FOCUS } from '../data/site.js'

const quick = [
  ['Home', '/'], ['About Us', '/about'], ['Projects', '/projects'], ['Our Impact', '/impact'],
  ['Gallery', '/gallery'], ['CSR & Partnerships', '/csr'], ['News & Updates', '/news'], ['Contact Us', '/contact'],
]

const socials = [
  { key: 'facebook', Icon: Facebook, label: 'Facebook' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'twitter', Icon: Twitter, label: 'X / Twitter' },
  { key: 'youtube', Icon: Youtube, label: 'YouTube' },
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/75">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Shree Marudhar Welfare Foundation is a Section 8 non-profit company based in Bap, Rajasthan,
              working for communities through education, healthcare, women and child development,
              environment, rural development and social welfare.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ key, Icon, label }) => {
                const href = ORG.social[key]
                return (
                  <a
                    key={key} href={href || undefined} aria-label={label} aria-disabled={!href}
                    target="_blank" rel="noopener noreferrer"
                    onClick={(e) => { if (!href) e.preventDefault() }}
                    title={href ? label : `${label} (link to be added)`}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-white/10 transition ${href ? 'hover:bg-gold hover:text-ink' : 'cursor-default opacity-50'}`}
                  >
                    <Icon size={17} />
                  </a>
                )
              })}
            </div>
            <div className="mt-8">
              <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-white">Newsletter</h3>
              <Newsletter />
            </div>
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
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" /><span>{ORG.address}</span></li>
                <li className="flex gap-3"><Phone size={18} className="shrink-0 text-gold" /><a href={`tel:${ORG.phone.replace(/\s/g, '')}`} className="hover:text-gold">{ORG.phone}</a></li>
                <li className="flex gap-3"><Mail size={18} className="shrink-0 text-gold" /><a href={`mailto:${ORG.email}`} className="break-all hover:text-gold">{ORG.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs leading-relaxed sm:p-6">
          <p className="mb-2 font-sans text-sm font-semibold text-white">Registration Details</p>
          <p className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            <span><b className="text-white/90">CIN:</b> {ORG.cin}</span>
            <span><b className="text-white/90">Section 8 Licence:</b> {ORG.section8}</span>
            <span><b className="text-white/90">CSR Registration:</b> {ORG.csr}</span>
            <span><b className="text-white/90">Tax Registration:</b> {ORG.tax}</span>
            <span><b className="text-white/90">Certification:</b> {ORG.iso}</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
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
