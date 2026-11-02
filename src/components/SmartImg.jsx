import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

/** Lazy-loaded image with a branded placeholder if the file fails to load. */
export default function SmartImg({ src, alt = '', className = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-brand to-leaf text-white/70 ${className}`}
      >
        <ImageIcon size={36} strokeWidth={1.25} />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
