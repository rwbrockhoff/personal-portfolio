import React, { Component } from 'react'
import './About.scss'
import Profile from '../../assets/profile.png'

export default class About extends Component {
  render() {
    return (
      <section className="about-section">
        <img src={Profile} className="profile-picture" alt="portrait" />
        <p>I'm a web developer based in Utah with an emphasis on frontend and design. Previously, I was an elopement photographer + videographer with my fiance. When I wasn't standing on cliff edges in Yosemite or Moab, I was passionately coding and learning new things. I'm constantly challenging myself to improve as a developer and a designer. I'm at my happiest when I'm building useful and intuitive software.</p>
        <a href="https://github.com/rwbrockhoff/personal-portfolio" target="_blank">
          <p className="from-scratch">
            <i className="fab fa-github" /> I built this portfolio using React.
            <div className="hidden-line" />
          </p>
        </a>
      </section>
    )
  }
}
