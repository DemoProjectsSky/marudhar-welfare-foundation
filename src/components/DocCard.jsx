import { Link } from 'react-router-dom'
import { Download, FileCheck2, Clock, ExternalLink } from 'lucide-react'

/** Document tile. If `file` is set (e.g. '/documents/12a.pdf') it becomes downloadable. */
export default function DocCard({ doc }) {
  const ready = !!doc.file
  return (
    <div className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg shadow-brand/10 ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:ring-gold">
      <div className="mb-4 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf/10 text-leaf"><FileCheck2 /></span>
        <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${ready ? 'bg-leaf/10 text-leaf' : 'bg-gold/20 text-gold-dark'}`}>
          {ready ? 'Available' : <><Clock size={11} /> Upload pending</>}
        </span>
      </div>
      <h3 className="text-lg font-bold">{doc.title}</h3>
      <p className="mt-1 flex-1 text-sm text-ink/65">{doc.detail}</p>
      <div className="mt-5">
        {ready ? (
          <a href={doc.file} download className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-leaf"><Download size={16} /> Download PDF</a>
        ) : doc.route ? (
          <Link to={doc.route} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-leaf"><ExternalLink size={16} /> Read</Link>
        ) : (
          <span className="text-xs text-ink/50">Document will appear here once uploaded.</span>
        )}
      </div>
    </div>
  )
}
