import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './NavBar.scss'
import '../../Main/animation'
import logo from '../../assets/logo.png'
import animation from '../../Main/animation';
import { TimelineMax } from 'gsap'

export default class Navbar extends Component {
  constructor(){
    super()
    this.dom = {}
    this.logoRef = {}
  }

  componentDidMount(){
    this.dom.root = ReactDOM.findDOMNode(this)
    var tl = new TimelineMax()
    tl.add( animation.show(this.dom.root) )
    tl.add( animation.fadeIn(this.logoRef) )
    
  }

  render(){
  return (
    <nav>

      <div className="panel-one">
      <img src={logo} alt="logo" ref={re => this.logoRef = re}/>
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
