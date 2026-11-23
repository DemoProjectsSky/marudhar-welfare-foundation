import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="Shree Marudhar Welfare Foundation - Home">
      <img
        src="/images/marudhar%20logo.jpeg"
        alt="Shree Marudhar Welfare Foundation"
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  )
}
