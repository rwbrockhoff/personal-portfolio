import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './NavBar.scss'
import '../../Main/animation'
import logo from '../../assets/logo.png'
import animation from '../../Main/animation';

export default class Navbar extends Component {
  constructor(){
    super()
    this.dom = {}
    this.logoRef = React.createRef()
  }

  componentDidMount(){
    this.dom.root = ReactDOM.findDOMNode(this)
    animation.show(this.dom.root)
  }

  render(){
  return (
    <nav>

      <div className="panel-one">
      <img src={logo} alt="logo" ref={this.logoRef}/>
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
  )}
}
