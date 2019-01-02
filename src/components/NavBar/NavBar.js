import React, {Component} from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


export default class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = { menuOpen: false }
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
          <li>Investment</li>
          <li>Dribble</li>
        </ul>
      </div>

      <i className={iconStyles}
      onClick={this.toggleMenu}/>
      
      
      {menuOpen ? 
      <nav className="side-menu">
         <Link to="/about"> <li>About</li> </Link>
         <li>Contact</li>
         <li>Investment</li>
         <li><i className="fab fa-dribbble"/> Dribble</li>
      </nav>
      :
      null
      }

    </nav>
  )}
}
