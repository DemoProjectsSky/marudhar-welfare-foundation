# Shree Marudhar Welfare Foundation - Website

React + Vite + Tailwind CSS + Framer Motion + React Router + Lucide.

## Run (steps)

1. `npm install`
2. `npm run dev`  -> open http://localhost:5173
3. `npm run build`  -> production files in `dist/`

## Where to edit

| What | File |
|---|---|
| Org info, nav, focus areas, projects, news, stories, certificates, stats | `src/data/site.js` |
| ALL photographs + gallery items | `src/data/images.js` |
| Real NGO photos | put in `public/images/`, then use `'/images/name.jpg'` in `images.js` |
| Downloadable PDFs (certificates, reports) | put in `public/documents/`, set `file: '/documents/x.pdf'` in `site.js` |
| Social links | `ORG.social` in `src/data/site.js` |
| Colours | `tailwind.config.js` |

## Placeholders (not real data)

- Impact numbers (shown as sample figures, flagged on the page), projects, success stories, testimonials, news.
- Logo is a placeholder monogram (`src/components/Logo.jsx`).
- Photos are Unsplash stock URLs. If one fails, a branded placeholder is shown. Replace with real NGO photos.
- Privacy Policy / Terms are template text - get a legal review.

## Backend / credentials needed

Copy `.env.example` to `.env`.

- **Forms** (contact, volunteer, CSR, donation enquiry, newsletter): set `VITE_FORM_ENDPOINT` (Formspree, Getform, or your own API). Without it, forms only open an email draft - they do NOT claim to submit.
- **Payments**: needs a gateway account (e.g. Razorpay) + a small backend to create orders. Set `VITE_PAYMENT_KEY`, then finish the hook in `src/pages/Donate.jsx`. Bank/UPI details must be supplied by the foundation.
- **WhatsApp**: uses `+91 8209541883` by default (`VITE_WHATSAPP_NUMBER` to change).
- **Google Maps**: uses a keyless embed of the Bap address. Replace with the exact map link when available.

## Hosting note

It is a single-page app. On Netlify/Vercel add a rewrite of all routes to `/index.html` (a `public/_redirects` file with `/* /index.html 200` is already included).
# marudhar-welfare-foundation
