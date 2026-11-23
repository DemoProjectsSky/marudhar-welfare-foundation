import PageHeader from '../components/PageHeader.jsx'
import { NewsCard } from '../sections/NewsSection.jsx'
import { NEWS } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function News() {
  return (
    <>
      <PageHeader title="News & Updates" subtitle="Announcements, events and stories from the foundation." img={IMG.news1} />
      <section className="section-pad bg-mist">
        <div className="container-x">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((n, i) => <NewsCard key={n.id} n={n} i={i % 3} />)}
          </div>
        </div>
      </section>
    </>
  )
}
