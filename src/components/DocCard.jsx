import { Link } from 'react-router-dom'
import { Download, FileCheck2, Clock, ExternalLink, Eye } from 'lucide-react'
import SmartImg from './SmartImg.jsx'

/** Document tile. If `file` is set (e.g. '/documents/12a.pdf') it can be viewed and downloaded. */
export default function DocCard({ doc }) {
  const ready = !!doc.file
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand/10 ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:ring-gold">
      {doc.thumb && (
        <a href={doc.file} target="_blank" rel="noopener noreferrer" aria-label={`View ${doc.title}`} className="block bg-mist">
          <SmartImg src={doc.thumb} alt={`Preview of ${doc.title}`} className="h-[clamp(130px,22svh,210px)] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-leaf/10 text-leaf"><FileCheck2 /></span>
          <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${ready ? 'bg-leaf/10 text-leaf' : 'bg-gold/20 text-gold-dark'}`}>
            {ready ? 'Available' : <><Clock size={11} /> Coming soon</>}
          </span>
        </div>
        <h3 className="text-lg font-bold">{doc.title}</h3>
        <p className="mt-1 flex-1 text-sm text-ink/65">{doc.detail}</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {ready ? (
            <>
              <a href={doc.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-leaf"><Eye size={16} /> View</a>
              <a href={doc.file} download className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-leaf"><Download size={16} /> Download PDF</a>
            </>
          ) : doc.route ? (
            <Link to={doc.route} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-leaf"><ExternalLink size={16} /> Read</Link>
          ) : (
            <span className="text-xs text-ink/50">This document will be published here shortly.</span>
          )}
        </div>
      </div>
    </div>
  )
}
