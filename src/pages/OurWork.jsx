import PageHeader from '../components/PageHeader.jsx'
import FocusAreas from '../sections/FocusAreas.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { IMG } from '../data/images.js'

export default function OurWork() {
  return (
    <>
      <PageHeader title="Our Work" subtitle="Six focus areas, one shared goal: stronger, healthier, more hopeful communities." img={IMG.rural} />
      <FocusAreas />
      <FeaturedProjects />
      <DonateBand />
    </>
  )
}
