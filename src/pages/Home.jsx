import Hero from '../sections/Hero.jsx'
import AboutSplit from '../sections/AboutSplit.jsx'
import FocusAreas from '../sections/FocusAreas.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import MissionVision from '../sections/MissionVision.jsx'
import ImpactStories from '../sections/ImpactStories.jsx'
import GallerySection from '../sections/GallerySection.jsx'
import CSRSection from '../sections/CSRSection.jsx'
import CertificatesSection from '../sections/CertificatesSection.jsx'
import PressStrip from '../sections/PressStrip.jsx'
import WaysToHelp from '../sections/WaysToHelp.jsx'
import Journey from '../sections/Journey.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import NewsSection from '../sections/NewsSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'
import SectionDots from '../components/SectionDots.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSplit />
      <FocusAreas />
      <FeaturedProjects />
      <MissionVision />
      <ImpactStories />
      <GallerySection />
      <CSRSection />
      <CertificatesSection />
      <PressStrip />
      <Journey />
      <WaysToHelp />
      <DonateBand />
      <NewsSection />
      <ContactSection />
      <SectionDots />
    </>
  )
}
