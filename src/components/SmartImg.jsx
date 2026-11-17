import { useEffect, useRef, useState } from 'react'
import { ImageIcon } from 'lucide-react'

/** Lazy-loaded image: shows a shimmering skeleton until the file arrives, then fades in.
 *  Falls back to a branded placeholder if the file fails to load. */
export default function SmartImg({ src, alt = '', className = '', eager = false, pos, style, ...rest }) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setLoaded(false); setFailed(false)
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true) // already cached
  }, [src])

  if (failed || !src) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-brand to-leaf text-white/70 ${className}`}>
        <ImageIcon size={36} strokeWidth={1.25} />
      </div>
    )
  }
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`${className} ${loaded ? 'img-in' : 'skeleton'}`}
      style={pos ? { objectPosition: pos, ...style } : style}
      {...rest}
    />
  )
}
