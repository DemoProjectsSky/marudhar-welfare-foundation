// Small mail relay for the website forms (contact, volunteer, CSR, donation enquiry, newsletter).
// SMTP credentials live ONLY in server/.env - never in the React app.
import express from 'express'
import nodemailer from 'nodemailer'
import fs from 'node:fs'

// minimal .env loader (no extra dependency)
if (fs.existsSync(new URL('./.env', import.meta.url))) {
  for (const line of fs.readFileSync(new URL('./.env', import.meta.url), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^"(.*)"$/, '$1')
  }
}

const { SMTP_HOST, SMTP_PORT = '465', SMTP_SECURE = 'true', SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM, ALLOWED_ORIGIN = '*', PORT = 8787 } = process.env
const configured = !!(SMTP_HOST && SMTP_USER && SMTP_PASS && MAIL_TO)
const transporter = configured
  ? nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: SMTP_SECURE === 'true', auth: { user: SMTP_USER, pass: SMTP_PASS } })
  : null

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '20kb' }))

const origins = ALLOWED_ORIGIN.split(',').map((s) => s.trim())
app.use((req, res, next) => {
  const o = req.headers.origin
  if (o && (origins.includes('*') || origins.includes(o))) {
    res.setHeader('Access-Control-Allow-Origin', o)
    res.setHeader('Vary', 'Origin')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

// very small in-memory rate limit: 8 requests / 10 min / IP
const hits = new Map()
const limited = (ip) => {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < 600000)
  arr.push(now); hits.set(ip, arr)
  return arr.length > 8
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

app.get('/api/health', (_req, res) => res.json({ ok: true, smtpConfigured: configured }))

app.post('/api/enquiry', async (req, res) => {
  const { subject = 'Website enquiry', website, ...fields } = req.body || {}
  if (website) return res.json({ ok: true })                      // honeypot: bots fill this
  if (limited(req.ip)) return res.status(429).json({ ok: false, error: 'Too many requests. Please try later.' })
  if (!configured) return res.status(503).json({ ok: false, error: 'Mail server is not configured yet.' })

  const entries = Object.entries(fields).filter(([, v]) => typeof v === 'string' && v.trim()).slice(0, 20)
  if (!entries.length) return res.status(400).json({ ok: false, error: 'Empty form.' })
  const email = typeof fields.email === 'string' ? fields.email.trim() : ''
  if (email && !emailRe.test(email)) return res.status(400).json({ ok: false, error: 'Invalid email.' })

  const rows = entries.map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#174A8B">${esc(k)}</td><td style="padding:6px 12px">${esc(v.slice(0, 3000))}</td></tr>`).join('')
  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: email || undefined,
      subject: `[Website] ${String(subject).slice(0, 120)}`,
      text: entries.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
    })
    res.json({ ok: true })
  } catch (e) {
    console.error('Mail error:', e.message)
    res.status(502).json({ ok: false, error: 'Could not send the email right now.' })
  }
})

app.listen(PORT, () => console.log(`Mail server on :${PORT} - SMTP ${configured ? 'configured' : 'NOT configured (set server/.env)'}`))
