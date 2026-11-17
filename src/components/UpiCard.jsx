import { useState } from 'react'
import { Copy, Check, Smartphone, QrCode } from 'lucide-react'
import SmartImg from './SmartImg.jsx'
import { ORG } from '../data/site.js'

/** Official donation details. Shows the QR code and UPI ID once ORG.qr / ORG.upi are filled in (src/data/site.js). */
export default function UpiCard({ amount }) {
  const [copied, setCopied] = useState(false)
  const hasAny = ORG.upi || ORG.qr

  const copy = async () => {
    try { await navigator.clipboard.writeText(ORG.upi); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard blocked */ }
  }
  const deep = ORG.upi
    ? `upi://pay?pa=${encodeURIComponent(ORG.upi)}&pn=${encodeURIComponent(ORG.upiName)}&cu=INR${amount ? `&am=${amount}` : ''}&tn=${encodeURIComponent('Donation')}`
    : ''

  if (!hasAny) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-brand/25 p-7">
        <QrCode className="mb-3 text-brand" size={30} />
        <h3 className="text-xl font-bold">UPI / QR donation</h3>
        <p className="mt-2 text-sm text-ink/70">The foundation's official UPI ID and QR code will be shown here shortly. Until then, please use the donation enquiry form or call us and we will share the payment details.</p>
      </div>
    )
  }
  return (
    <div className="rounded-3xl bg-white p-7 shadow-xl shadow-brand/10 ring-1 ring-gold">
      <h3 className="text-xl font-bold">Donate by UPI</h3>
      {ORG.qr && (
        <div className="mx-auto mt-4 w-full max-w-[260px] rounded-2xl bg-white p-3 ring-1 ring-black/10">
          <SmartImg src={ORG.qr} alt={`UPI QR code of ${ORG.name}`} className="aspect-square w-full object-contain" />
        </div>
      )}
      {ORG.upi && (
        <>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-leaf">Official UPI ID</p>
          <div className="mt-1 flex items-center gap-2 rounded-xl bg-mist px-4 py-3">
            <span className="min-w-0 flex-1 break-all font-mono text-sm font-semibold">{ORG.upi}</span>
            <button onClick={copy} aria-label="Copy UPI ID" className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand shadow hover:bg-brand hover:text-white">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <a href={deep} className="btn btn-green mt-4 w-full sm:hidden"><Smartphone size={16} /> Pay with a UPI app</a>
        </>
      )}
      <p className="mt-4 text-xs text-ink/55">Please check that the payee name shows "{ORG.upiName}" before paying.</p>
    </div>
  )
}
