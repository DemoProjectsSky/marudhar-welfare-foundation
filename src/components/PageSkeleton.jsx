/** Shown while a page's code is being downloaded (route-level lazy loading). */
export default function PageSkeleton() {
  return (
    <div role="status" aria-label="Loading page" className="min-h-[70vh]">
      <div className="sk-block !rounded-none h-52 w-full sm:h-64" />
      <div className="container-x py-12">
        <div className="sk-block h-4 w-32" />
        <div className="sk-block mt-4 h-9 w-full max-w-lg" />
        <div className="sk-block mt-3 h-4 w-full max-w-md" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-black/5">
              <div className="sk-block h-40 w-full" />
              <div className="sk-block mt-4 h-4 w-24" />
              <div className="sk-block mt-3 h-5 w-4/5" />
              <div className="sk-block mt-2 h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}
