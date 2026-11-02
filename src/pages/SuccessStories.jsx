import PageHeader from '../components/PageHeader.jsx'
import { StoryCard } from '../sections/ImpactStories.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { STORIES } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function SuccessStories() {
  return (
    <>
      <PageHeader title="Success Stories" subtitle="Human stories of hope, resilience and change (editable placeholders)." img={IMG.story2} crumbs={[{ label: 'Our Impact', to: '/impact' }]} />
      <section className="section-pad bg-mist">
        <div className="container-x grid gap-8">
          {STORIES.map((s, i) => <StoryCard key={s.id} s={s} i={i} big />)}
          <p className="text-center text-sm text-ink/55">Please publish only real stories shared with the beneficiary's informed consent.</p>
        </div>
      </section>
      <Testimonials />
      <DonateBand />
    </>
  )
}
