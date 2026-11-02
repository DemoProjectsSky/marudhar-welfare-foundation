import { useState } from 'react'
import { Send, AlertCircle, CheckCircle2, Mail } from 'lucide-react'
import { ENV, ORG } from '../data/site.js'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(fields, values) {
  const errs = {}
  fields.forEach((f) => {
    const v = (values[f.name] || '').trim()
    if (f.required && !v) errs[f.name] = `${f.label} is required`
    else if (v && f.type === 'email' && !emailRe.test(v)) errs[f.name] = 'Enter a valid email address'
    else if (v && f.type === 'tel' && !/^[+()\-\s\d]{10,15}$/.test(v)) errs[f.name] = 'Enter a valid phone number'
    else if (v && f.min && v.length < f.min) errs[f.name] = `${f.label} must be at least ${f.min} characters`
  })
  return errs
}

/**
 * Generic validated form.
 * - If VITE_FORM_ENDPOINT is set, the data is POSTed there as JSON.
 * - Otherwise NO data is sent anywhere; the user gets an email draft (mailto)
 *   addressed to the foundation, so nothing is falsely reported as "submitted".
 */
export default function FormShell({ fields, subject, submitLabel = 'Send', note, dark = false, compact = false }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  const set = (name, v) => {
    setValues((s) => ({ ...s, [name]: v }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(fields, values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setStatus({ type: 'error', msg: 'Please fix the highlighted fields.' })
      return
    }
    if (ENV.formEndpoint) {
      setStatus({ type: 'loading', msg: 'Sending...' })
      try {
        const res = await fetch(ENV.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ subject, ...values }),
        })
        if (!res.ok) throw new Error('bad status')
        setStatus({ type: 'success', msg: 'Thank you! Your message has been sent to the foundation.' })
        setValues({})
      } catch {
        setStatus({ type: 'error', msg: 'Could not send right now. Please email or call us directly.' })
      }
      return
    }
    const body = fields.map((f) => `${f.label}: ${values[f.name] || '-'}`).join('\n')
    window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus({
      type: 'info',
      msg: 'Your form is valid. No server is connected yet, so we opened an email draft - please press Send in your email app.',
    })
  }

  const labelCls = dark ? 'text-white/80' : 'text-ink/80'
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label={subject}>
      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {fields.map((f) => {
          const id = `${subject}-${f.name}`.replace(/\s+/g, '-')
          const err = errors[f.name]
          const common = {
            id, name: f.name, value: values[f.name] || '', 'aria-invalid': !!err,
            'aria-describedby': err ? `${id}-err` : undefined,
            className: `field ${err ? 'field-error' : ''}`,
            onChange: (e) => set(f.name, e.target.value),
            placeholder: f.placeholder,
          }
          return (
            <div key={f.name} className={f.full || f.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <label htmlFor={id} className={`mb-1.5 block text-sm font-medium ${labelCls}`}>
                {f.label}{f.required && <span className="text-red-500"> *</span>}
              </label>
              {f.type === 'textarea' ? (
                <textarea rows={4} {...common} />
              ) : f.type === 'select' ? (
                <select {...common}>
                  <option value="">Select...</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={f.type || 'text'} {...common} />
              )}
              {err && <p id={`${id}-err`} className="mt-1 flex items-center gap-1 text-xs text-red-500"><AlertCircle size={12} />{err}</p>}
            </div>
          )
        })}
      </div>
      {note && <p className={`text-xs ${dark ? 'text-white/60' : 'text-ink/55'}`}>{note}</p>}
      <button type="submit" disabled={status.type === 'loading'} className="btn btn-blue w-full sm:w-auto disabled:opacity-60">
        {ENV.formEndpoint ? <Send size={16} /> : <Mail size={16} />} {submitLabel}
      </button>
      <div role="status" aria-live="polite">
        {status.msg && (
          <p className={`flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
            status.type === 'success' ? 'bg-green-50 text-green-800'
            : status.type === 'error' ? 'bg-red-50 text-red-700'
            : 'bg-blue-50 text-blue-800'}`}>
            {status.type === 'success' ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> : <AlertCircle size={16} className="mt-0.5 shrink-0" />}
            {status.msg}
          </p>
        )}
      </div>
    </form>
  )
}
