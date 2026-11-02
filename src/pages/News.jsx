import PageHeader from '../components/PageHeader.jsx'
import { NewsCard } from '../sections/NewsSection.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { NEWS } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function News() {
  return (
    <>
      <PageHeader title="News & Updates" subtitle="Announcements, events and stories from the foundation." img={IMG.news1} />
      <section className="section-pad bg-mist">
        <div className="container-x">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {[...NEWS, ...NEWS].map((n, i) => <NewsCard key={`${n.id}-${i}`} n={n} i={i % 3} />)}
          </div>
          <p className="mt-6 text-center text-xs text-ink/50">Placeholder updates - replace in src/data/site.js.</p>
          <div className="mx-auto mt-14 max-w-xl rounded-[2rem] bg-brand p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Stay in the loop</h3>
            <p className="mb-5 mt-2 text-sm text-white/75">Get updates from the foundation in your inbox.</p>
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  )
}
