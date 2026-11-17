import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { IMG } from '../data/images.js'

export default function NotFound() {
  return (
    <>
      <PageHeader title="Page Not Found" subtitle="The page you are looking for does not exist or has moved." img={IMG.hero} />
      <section className="section-pad bg-white text-center">
        <div className="container-x">
          <p className="font-display text-8xl font-bold text-brand/20">404</p>
          <Link to="/" className="btn btn-blue mt-6">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
