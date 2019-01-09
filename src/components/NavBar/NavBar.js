import React, { Component } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png'


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
            <a href="https://linkedin.com/in/ryanbrockhoff"><li><i className="fab fa-linkedin" />  LinkedIn</li></a>

            <a href="https://github.com/rwbrockhoff"><li><i className="fab fa-github" />  Github</li></a>

            <a href="https://dribbble.com/rwbrockhoff"><li><i className="fab fa-dribbble" />  Dribbble</li></a>
          </ul>
        </div>

        <i className={iconStyles}
          onClick={this.toggleMenu} />


        {menuOpen ?
          <nav className="side-menu">
            <Link to="/contact"> <li><i className="far fa-envelope" />Contact</li> </Link>
            <a href="https://linkedin.com/in/ryanbrockhoff"><li><i className="fab fa-linkedin" />  LinkedIn</li></a>

            <a href="https://github.com/rwbrockhoff"><li><i className="fab fa-github" />  Github</li></a>

            <a href="https://dribbble.com/rwbrockhoff"><li><i className="fab fa-dribbble" />  Dribbble</li></a>
          </nav>
          :
          null
        }

      </nav>
    )
  }
}
export default withRouter(Navbar);
