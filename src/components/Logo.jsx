import { Link } from 'react-router-dom'

// Placeholder monogram mark. Replace with the foundation's official logo
// (put logo file in /public/images/logo.png and swap the <svg> for an <img>).
export function LogoMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 3C49 3 61 15 61 32S49 61 32 61 3 49 3 32 15 3 32 3z" fill="#174A8B" />
      <path d="M14 42c5-16 12-22 18-22s13 6 18 22" fill="none" stroke="#E9B949" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="32" cy="17" r="4.5" fill="#299B62" />
      <path d="M22 46h20" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ light = true }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Shree Marudhar Welfare Foundation - Home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight transition-colors ${light ? 'text-white' : 'text-brand'}`}>
          Shree Marudhar
        </span>
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors ${light ? 'text-gold' : 'text-leaf'}`}>
          Welfare Foundation
        </span>
      </span>
    </Link>
  )
}
