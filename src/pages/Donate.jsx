import { useState } from 'react'
import { Heart, ShieldCheck, Info, Receipt } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import FormShell from '../components/FormShell.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ENV, ORG } from '../data/site.js'
import { IMG } from '../data/images.js'

const amounts = [500, 1000, 2500, 5000, 10000]

const donorFields = [
  { name: 'name', label: 'Full Name', required: true, min: 2 },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'pan', label: 'PAN (for 80G receipt, optional)' },
  { name: 'amount', label: 'Donation Amount (INR)', required: true },
  { name: 'cause', label: 'Preferred Cause', type: 'select', options: ['Where needed most', 'Education', 'Healthcare', 'Women & Child Development', 'Environment', 'Rural Development', 'Social Welfare'] },
]

export default function Donate() {
  const [amt, setAmt] = useState(1000)
  const [notice, setNotice] = useState('')

  const proceed = () => {
    if (!ENV.paymentKey) {
      setNotice('Online payment is not connected yet. A payment gateway (e.g. Razorpay) and a small backend are needed - see README. Meanwhile, please use the donation enquiry form below and the foundation will share payment details.')
      document.getElementById('donor-form')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    // Hook for gateway integration (create order on backend, then open checkout)
    setNotice(`Payment key detected. Connect your backend order API in src/pages/Donate.jsx to start checkout for INR ${amt}.`)
  }

  return (
    <>
      <PageHeader title="Donate Us" subtitle="Your Small Contribution Can Make a Big Difference." img={IMG.donate} />
      <section className="section-pad bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-3">
            <div className="rounded-[2.5rem] bg-mist p-7 sm:p-10">
              <h2 className="text-3xl font-bold">Choose an amount</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {amounts.map((a) => (
                  <button key={a} onClick={() => setAmt(a)} aria-pressed={amt === a}
                    className={`rounded-2xl border-2 px-4 py-4 text-lg font-bold transition ${amt === a ? 'border-brand bg-brand text-white shadow-lg' : 'border-transparent bg-white text-brand hover:border-gold'}`}>
                    ₹{a.toLocaleString('en-IN')}
                  </button>
                ))}
                <label className="col-span-2 flex items-center rounded-2xl bg-white px-4 sm:col-span-1">
                  <span className="mr-1 font-bold text-brand">₹</span>
                  <input type="number" min="1" placeholder="Other" aria-label="Custom amount"
                    onChange={(e) => setAmt(Number(e.target.value) || 0)}
                    className="w-full bg-transparent py-4 font-bold outline-none" />
                </label>
              </div>
              <button onClick={proceed} disabled={!amt} className="btn btn-green mt-8 w-full disabled:opacity-50 sm:w-auto">
                <Heart size={18} /> Donate ₹{amt.toLocaleString('en-IN')}
              </button>
              {notice && <p role="status" className="mt-4 flex gap-2 rounded-xl bg-gold/20 p-4 text-sm text-ink"><Info size={18} className="mt-0.5 shrink-0" />{notice}</p>}
            </div>

            <div id="donor-form" className="mt-8 scroll-mt-28 rounded-[2.5rem] p-1 shadow-xl shadow-brand/10 ring-1 ring-black/5 sm:p-8">
              <h3 className="mb-5 text-2xl font-bold">Donation enquiry</h3>
              <FormShell fields={donorFields} subject="Donation enquiry" submitLabel="Request Payment Details" />
            </div>
          </Reveal>

          <Reveal direction="right" className="space-y-5 lg:col-span-2">
            <div className="rounded-[2rem] bg-brand p-7 text-white">
              <ShieldCheck className="mb-3 text-gold" size={30} />
              <h3 className="text-xl font-bold">Trusted &amp; registered</h3>
              <p className="mt-2 text-sm text-white/80">Section 8 Licence {ORG.section8} · CSR Reg. {ORG.csr} · {ORG.tax}</p>
            </div>
            <div className="rounded-[2rem] bg-mist p-7">
              <Receipt className="mb-3 text-leaf" size={30} />
              <h3 className="text-xl font-bold">Tax benefit</h3>
              <p className="mt-2 text-sm text-ink/70">The foundation holds 12A / 80G registration. Donors can request a receipt - please confirm eligibility with the foundation.</p>
            </div>
            <div className="rounded-[2rem] border-2 border-dashed border-brand/25 p-7">
              <h3 className="text-xl font-bold">Bank / UPI details</h3>
              <p className="mt-2 text-sm text-ink/70">Official bank account and UPI details will be shown here once provided by the foundation. No payment details have been assumed.</p>
            </div>
            <p className="text-sm text-ink/60">Questions? Call <a href={`tel:${ORG.phone.replace(/\s/g, '')}`} className="font-semibold text-brand">{ORG.phone}</a></p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
