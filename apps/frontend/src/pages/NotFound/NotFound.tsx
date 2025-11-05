import { Link } from 'react-router-dom'
import './NotFound.module.scss'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
    </div>
  )
}
