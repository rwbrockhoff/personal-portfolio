import React, {Component} from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.svg'

export default class Navbar extends Component {

  render(){
  return (
    <nav>

      <div className="panel-one">
      <img src={logo} alt="logo" ref={re => this.logoRef = re}/>
      </div>

      <div className="panel-two">
      <p> This will be information about the designer, where the designer lives, and what makes the designer unique to her discipline. </p>
      <div className="line"/>
      </div>

      <div className="panel-three">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Dribble</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      
      <img src={menuIcon} className="side-menu" alt="hamburger menu"/>
      

    </nav>
  )}
}
