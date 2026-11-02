import PageHeader from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { ORG } from '../data/site.js'
import { IMG } from '../data/images.js'

const DOCS = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      ['Information we collect', 'When you contact us, register as a volunteer, make a donation enquiry or subscribe to updates, you may share details such as your name, email, phone number and message. We collect only what is needed to respond to you.'],
      ['How we use it', 'We use your information to reply to enquiries, coordinate volunteering, share updates you asked for, and issue donation receipts. We do not sell your personal information.'],
      ['Forms on this website', 'Where a form service is connected, submissions are sent to the foundation. If no form service is connected, the form opens an email draft addressed to the foundation instead.'],
      ['Cookies & analytics', 'This website may use basic analytics to understand traffic. You can disable cookies in your browser settings.'],
      ['Your rights', 'You may ask us to access, correct or delete the personal information you have shared, by writing to the email below.'],
      ['Contact', `${ORG.name}, ${ORG.address} Email: ${ORG.email}`],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      ['Use of this website', 'By using this website you agree to use it lawfully and not to misuse its content or services.'],
      ['Content', 'Information on this website is provided for general awareness about the foundation. Content, images and logos belong to the foundation or their respective owners.'],
      ['Donations', 'Donations are voluntary. Receipts and tax benefits are subject to applicable law and to confirmation by the foundation.'],
      ['Third-party links', 'This website may link to third-party services such as maps and messaging. We are not responsible for their content or policies.'],
      ['Changes', 'We may update these terms from time to time. Continued use of the website means you accept the updated terms.'],
      ['Contact', `${ORG.name} · ${ORG.email} · ${ORG.phone}`],
    ],
  },
}

export default function Legal({ kind }) {
  const d = DOCS[kind]
  return (
    <>
      <PageHeader title={d.title} img={IMG.contact} />
      <section className="section-pad bg-white">
        <div className="container-x max-w-3xl">
          <p className="mb-8 rounded-2xl bg-gold/20 p-4 text-sm">
            General template text for the foundation's website. Please have it reviewed by a legal adviser before publishing.
          </p>
          {d.sections.map(([h, t], i) => (
            <Reveal key={h} delay={i * 0.04} className="mb-8">
              <h2 className="text-2xl font-bold text-brand">{i + 1}. {h}</h2>
              <p className="mt-2 leading-relaxed text-ink/75">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
