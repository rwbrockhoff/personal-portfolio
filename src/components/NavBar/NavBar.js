import React, { Component } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png'
import logoIcon from '../../assets/logo-icon.png'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const { menuOpen } = this.state
    const iconStyles = menuOpen ? 'fas fa-times side-menu-icon' : 'fas fa-bars side-menu-icon'
    const isHomePage = this.props.history.location.pathname === "/" ? '' : '0ms'

    return (
      <nav className="main-nav" style={{ animationDuration: isHomePage, animationDelay: isHomePage }}>

        <div className="panel-one">
          <Link to="/"><img src={logo} alt="logo" ref={re => this.logoRef = re} /></Link>
        </div>

        <div className="panel-two">
          <p> Hi, I'm Ryan. I'm a web developer and designer based in Utah. When I'm not coding, you'll find me hiking, reading, or telling puns. </p>
          <div className="line" style={{ animationDuration: isHomePage, animationDelay: isHomePage }} />
        </div>

        <div className="panel-three">
          <ul>

            <Link to="/contact"> <li><i className="far fa-envelope" />Contact</li> </Link>
            <li><i className="fab fa-linkedin" />  LinkedIn</li>

            <li><i className="fab fa-github" />  Github</li>

            <li><i className="fab fa-dribbble" />  Dribbble</li>
          </ul>
        </div>

        <i className={iconStyles}
          onClick={this.toggleMenu} />


        {menuOpen ?
          <nav className="side-menu">
            <Link to="/"><img src={logoIcon} alt="hamburger menu icon" className="sidebar-menu-icon" /></Link>
            <Link to="/about"> <li>About</li> </Link>
            <Link to="/contact"> <li>Contact</li> </Link>
            <Link to="/investment"> <li>Investment</li> </Link>
            <Link to="/dribbble"><li><i className="fab fa-dribbble" /> Dribbble</li> </Link>
          </nav>
          :
          null
        }

      </nav>
    )
  }
}
export default withRouter(Navbar);
