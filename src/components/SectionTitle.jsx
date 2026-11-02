import { Reveal } from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, text, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : ''
  return (
    <Reveal className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && <span className={`eyebrow ${light ? '!text-gold' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text && <p className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-ink/70'}`}>{text}</p>}
    </Reveal>
  )
}
