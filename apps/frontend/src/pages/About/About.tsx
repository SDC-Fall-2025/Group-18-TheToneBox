import { Link } from 'react-router-dom'
import './About.module.scss'

export default function About() {
  return (
    <div className="about">
      <h1>About TheToneBox</h1>
      <p>This is the about page.</p>
      <nav>
        <Link to="/">Go to Home</Link>
      </nav>
    </div>
  )
}
