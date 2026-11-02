import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ENV, ORG } from '../data/site.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setMsg('Please enter a valid email.'); return }
    if (ENV.formEndpoint) {
      try {
        const r = await fetch(ENV.formEndpoint, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subject: 'Newsletter signup', email }),
        })
        if (!r.ok) throw new Error()
        setMsg('Subscribed. Thank you!'); setEmail('')
      } catch { setMsg('Could not subscribe right now. Please try later.') }
    } else {
      window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent('Please add me to the newsletter: ' + email)}`
      setMsg('Newsletter backend not connected yet - an email draft was opened.')
    }
  }

  return (
    <form onSubmit={submit} noValidate aria-label="Newsletter signup">
      <div className="flex overflow-hidden rounded-full bg-white/10 p-1 ring-1 ring-white/20 focus-within:ring-gold">
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/50"
        />
        <button type="submit" aria-label="Subscribe" className="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink transition hover:scale-105">
          <ArrowRight size={18} />
        </button>
      </div>
      {msg && <p role="status" className="mt-2 text-xs text-gold">{msg}</p>}
    </form>
  )
}
