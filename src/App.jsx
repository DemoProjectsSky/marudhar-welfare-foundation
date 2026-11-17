import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ScrollProgress, ScrollToTop, WhatsAppFloat } from './components/Extras.jsx'
import BackToTop from './components/BackToTop.jsx'
import PageSkeleton from './components/PageSkeleton.jsx'

// Route-level code splitting: each page is downloaded only when it is visited
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const OurWork = lazy(() => import('./pages/OurWork.jsx'))
const FocusPage = lazy(() => import('./pages/FocusPage.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'))
const Impact = lazy(() => import('./pages/Impact.jsx'))
const SuccessStories = lazy(() => import('./pages/SuccessStories.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const CSR = lazy(() => import('./pages/CSR.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Documents = lazy(() => import('./pages/Documents.jsx'))
const News = lazy(() => import('./pages/News.jsx'))
const GetInvolved = lazy(() => import('./pages/GetInvolved.jsx'))
const Volunteer = lazy(() => import('./pages/Volunteer.jsx'))
const Donate = lazy(() => import('./pages/Donate.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))



export default function App() {
  const location = useLocation()
  const reduce = useReducedMotion()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2">Skip to content</a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main" key={location.pathname} className="min-h-[60vh]"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0, y: -5 }}
          transition={{ duration: reduce ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<PageSkeleton />}>
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
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  )
}
