import PageHeader from '../components/PageHeader.jsx'
import { GalleryGrid } from '../sections/GallerySection.jsx'
import { IMG } from '../data/images.js'

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" subtitle="Photographs and press clippings from our programmes and events." img={IMG.hero} />
      <section className="section-pad bg-mist">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  )
}
