import React, { Component } from 'react'
import './About.scss'
import Profile from '../../assets/profile.png'

export default class About extends Component {
  render() {
    return (
      <section className="about-section">
        <img src={Profile} className="profile-picture" alt="portrait" />
        <p>I'm a web developer based in Utah with an emphasis on frontend and design. Previously, I was an elopement photographer + videographer with my fiance. When I wasn't standing on cliff edges in Yosemite or Moab, I was passionately coding and learning new things. Web development is the most fulfilling thing I've found in life, combining my love for problem solving and design.</p>
      </section>
    )
  }
}
