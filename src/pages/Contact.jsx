import PageHeader from '../components/PageHeader.jsx'
import FormShell from '../components/FormShell.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { contactFields, ContactInfo, MapEmbed } from '../sections/ContactSection.jsx'
import { IMG } from '../data/images.js'

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you." img={IMG.contact} />
      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="rounded-[2rem] bg-mist p-7 sm:p-9"><ContactInfo /></div>
          </Reveal>
          <Reveal direction="right" className="lg:col-span-3">
            <div className="rounded-[2rem] p-1 shadow-xl shadow-brand/10 ring-1 ring-black/5 sm:p-8">
              <FormShell fields={contactFields} subject="Website enquiry" submitLabel="Send Message" />
            </div>
          </Reveal>
        </div>
        <div className="container-x mt-12"><MapEmbed className="h-96" /></div>
      </section>
    </>
  )
}
