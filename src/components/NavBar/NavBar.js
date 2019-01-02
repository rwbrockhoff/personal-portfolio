import React, {Component} from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'


export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {menuOpen: false}
  }

  toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render(){
    const {menuOpen} = this.state
    const iconStyles = menuOpen ? 'fas fa-times side-menu-icon' : 'fas fa-bars side-menu-icon'
  return (
    <nav className="main-nav">

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

      <i className={iconStyles}
      onClick={this.toggleMenu}/>
      
      
      {menuOpen ? 
      <nav className="side-menu">
         <li>About</li>
         <li>Contact</li>
         <li>Dribble</li>
         <li>LinkedIn</li>
      </nav>
      :
      null
      }

    </nav>
  )}
}
