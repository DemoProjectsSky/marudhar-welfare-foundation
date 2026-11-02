import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ScrollProgress, ScrollToTop, WhatsAppFloat } from './components/Extras.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurWork from './pages/OurWork.jsx'
import FocusPage from './pages/FocusPage.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Impact from './pages/Impact.jsx'
import SuccessStories from './pages/SuccessStories.jsx'
import Gallery from './pages/Gallery.jsx'
import CSR from './pages/CSR.jsx'
import Resources from './pages/Resources.jsx'
import Documents from './pages/Documents.jsx'
import News from './pages/News.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Donate from './pages/Donate.jsx'
import Contact from './pages/Contact.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const location = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2">Skip to content</a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main" key={location.pathname}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/our-work/:slug" element={<FocusPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/annual-reports" element={<Documents kind="annual" />} />
            <Route path="/resources/financial-reports" element={<Documents kind="financial" />} />
            <Route path="/resources/certificates" element={<Documents kind="certificates" />} />
            <Route path="/resources/policies" element={<Documents kind="policies" />} />
            <Route path="/news" element={<News />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
            <Route path="/terms" element={<Legal kind="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
