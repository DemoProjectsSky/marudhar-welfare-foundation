import PageHeader from '../components/PageHeader.jsx'
import { StoryCard } from '../sections/ImpactStories.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { STORIES } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function SuccessStories() {
  return (
    <>
      <PageHeader title="Field Highlights" subtitle="Moments of care, learning and change from our work in Bap." img={IMG.story2} crumbs={[{ label: 'Our Impact', to: '/impact' }]} />
      <section className="section-pad bg-mist">
        <div className="container-x grid gap-8">
          {STORIES.map((s, i) => <StoryCard key={s.id} s={s} i={i} big />)}
        </div>
      </section>
      <DonateBand />
    </>
  )
}
