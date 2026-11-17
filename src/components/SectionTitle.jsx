import { Reveal } from './Reveal.jsx'

export default function SectionTitle({ eyebrow, title, text, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : ''
  return (
    <Reveal className={`mb-7 flex max-w-3xl flex-col gap-3 lg:mb-[clamp(1.25rem,4.5svh,2.5rem)] ${alignCls}`}>
      {eyebrow && <span className={`eyebrow ${light ? '!text-gold' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.6rem] ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text && <p className={`hidden text-base leading-relaxed sm:block ${light ? 'text-white/75' : 'text-ink/70'}`}>{text}</p>}
    </Reveal>
  )
}
