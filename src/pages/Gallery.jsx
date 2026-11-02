import PageHeader from '../components/PageHeader.jsx'
import { GalleryGrid } from '../sections/GallerySection.jsx'
import { IMG } from '../data/images.js'

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Photographs and videos from our programmes and events." img={IMG.mission} />
      <section className="section-pad bg-mist">
        <div className="container-x">
          <GalleryGrid />
          <p className="mt-8 text-center text-xs text-ink/50">Sample imagery - replace with the foundation's own photographs in src/data/images.js.</p>
        </div>
      </section>
    </>
  )
}
