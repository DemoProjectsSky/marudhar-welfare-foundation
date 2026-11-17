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

## What is real, what is still needed

Real (from the foundation's own posters, photos and PDFs): all photos in `public/images/work`, projects, news, founder name,
partners, Certificate of Incorporation + Section 8 Licence PDFs (`public/documents`).

Still to be supplied - fill in `src/data/site.js` (all sections appear automatically once filled):

| Item | Where |
|---|---|
| Team photos / names / designations | `TEAM` (photos in `public/images/team/`) |
| Social media links | `ORG.social` |
| Exact Google Maps link / embed | `ORG.mapUrl`, `ORG.mapEmbed` |
| CSR partner logos | `PARTNERS[].logo` (files in `public/images/partners/`) |
| Donation QR + UPI ID | `ORG.qr`, `ORG.upi` |
| Annual / Financial reports, policies, 12A, 80G, CSR, ISO PDFs | `ANNUAL_REPORTS`, `FINANCIAL_REPORTS`, `POLICIES`, `CERTIFICATES` (`file:`) |

## Email (SMTP)

SMTP passwords must never be in the website. Use the mail server in `server/`:
`cd server && npm install`, copy `server/.env.example` to `server/.env`, fill SMTP details, run `npm run server`.
Set `VITE_FORM_ENDPOINT=/api/enquiry` in `.env`. In production host `server/` (Render/VPS) and set the full URL.
## Hosting note

It is a single-page app. On Netlify/Vercel add a rewrite of all routes to `/index.html` (a `public/_redirects` file with `/* /index.html 200` is already included).
# marudhar-welfare-foundation
