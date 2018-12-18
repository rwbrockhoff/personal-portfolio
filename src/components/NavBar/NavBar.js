import React from 'react'
import './NavBar.scss'

export default function Navbar() {
  return (
    <nav>
      <div className="panel-one">
      one
      </div>

      <div className="panel-two">
      two
      </div>

      <div className="panel-three">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Dribble</li>
      <li>LinkedIn</li>
      </div>
    </nav>
  )
}
