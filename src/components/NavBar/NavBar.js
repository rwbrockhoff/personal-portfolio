import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
    <nav>

      <div className="panel-one">
      <img src={logo} alt="logo"/>
      </div>

      <div className="panel-two">
      <p> This will be information about the designer, where the designer lives, and what makes the designer unique to her discipline. </p>
      </div>

      <div className="panel-three">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Dribble</li>
          <li>LinkedIn</li>
        </ul>
      </div>

    </nav>
  )
}
