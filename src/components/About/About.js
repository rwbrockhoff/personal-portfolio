import React, { Component } from "react";
import "./About.scss";
import Profile from "../../assets/profile.png";

export default class About extends Component {
  render() {
    return (
      <section className="about-section">
        <img src={Profile} className="profile-picture" alt="portrait" />
        <p>
          I'm a web developer and user experience designer. I currently work as
          a remote software engineer for HyperCarrot, where I develop across a
          full stack, and create various designs and prototypes. I'm constantly
          challenging myself to improve as a developer and a designer. I'm at my
          happiest when I can work closely with logic and design on a daily
          basis. Currently open to freelance opportunities.
        </p>
        <a
          href="https://github.com/rwbrockhoff/personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="from-scratch">
            <i className="fab fa-github" /> I built this portfolio using React.
            <div className="hidden-line" />
          </p>
        </a>
      </section>
    );
  }
}
