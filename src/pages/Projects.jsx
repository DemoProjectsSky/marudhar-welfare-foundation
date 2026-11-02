import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHeader from '../components/PageHeader.jsx'
import { ProjectCard } from '../sections/FeaturedProjects.jsx'
import DonateBand from '../sections/DonateBand.jsx'
import { PROJECTS, PROJECT_CATS } from '../data/site.js'
import { IMG } from '../data/images.js'

export default function Projects() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)

  return (
    <>
      <PageHeader title="Projects" subtitle="Browse initiatives across our focus areas (sample entries - to be replaced with real projects)." img={IMG.education} />
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {PROJECT_CATS.map((c) => (
              <button
                key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${cat === c ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'bg-mist text-ink/70 hover:text-brand'}`}
              >{c}</button>
            ))}
          </div>
          <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div layout key={p.slug} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <p className="py-16 text-center text-ink/60">No projects in this category yet.</p>}
        </div>
      </section>
      <DonateBand />
    </>
  )
}
