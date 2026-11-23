import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import { ORG } from '../data/site.js'

const socials = [
  { key: 'facebook', Icon: Facebook, label: 'Facebook' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'twitter', Icon: Twitter, label: 'X / Twitter' },
  { key: 'youtube', Icon: Youtube, label: 'YouTube' },
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
]

/** Shows only the social accounts that have a URL in ORG.social. Renders nothing if none are set. */
export default function SocialLinks({ className = '', tone = 'dark' }) {
  const list = socials.filter((s) => ORG.social[s.key])
  if (!list.length) return null
  const cls = tone === 'dark' ? 'bg-white/10 text-white hover:bg-gold hover:text-ink' : 'bg-brand/10 text-brand hover:bg-brand hover:text-white'
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Social media">
      {list.map(({ key, Icon, label }) => (
        <li key={key}>
          <a href={ORG.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
            className={`grid h-10 w-10 place-items-center rounded-full transition ${cls}`}>
            <Icon size={17} />
          </a>
        </li>
      ))}
    </ul>
  )
}
