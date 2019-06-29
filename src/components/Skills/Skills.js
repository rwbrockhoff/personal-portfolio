import React from "react";
import "./Skills.scss";

import HTML from "../../assets/icons/html.png";
import CSS from "../../assets/icons/css.png";
import SASS from "../../assets/icons/sass.png";
import JS from "../../assets/icons/js.jpg";
import R from "../../assets/icons/react.png";
import TS from "../../assets/icons/typescript.png";
import Node from "../../assets/icons/node.svg";
import SQL from "../../assets/icons/postgres.png";
import Jest from "../../assets/icons/jest.png";
import Sketch from "../../assets/icons/sketch.png";
import Invision from "../../assets/icons/invision.png";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skill large-icon">
        <img src={R} alt="React Icon" />
        <p>React</p>
      </div>
      <div className="skill">
        <img src={Node} alt="Node Icon" />
        <p>Node</p>
      </div>
      <div className="skill">
        <img src={JS} alt="Javascript Icon" />
        <p>Javascript</p>
      </div>
      <div className="skill">
        <img src={TS} alt="Typescript Icon" />
        <p>Typescript</p>
      </div>
      <div className="skill">
        <img src={SQL} alt="Postgresql Icon" />
        <p>Postgresql</p>
      </div>
      <div className="skill">
        <img src={Jest} alt="Jest Icon" />
        <p>Jest</p>
      </div>
      <div className="skill large-icon">
        <img src={SASS} alt="Sass Icon" />
        <p>Sass</p>
      </div>
      <div className="skill">
        <img src={Sketch} alt="Sketch Icon" />
        <p>Sketch</p>
      </div>
      <div className="skill">
        <img src={Invision} alt="Invision Icon" />
        <p>Invision</p>
      </div>
      <div className="skill">
        <img src={HTML} alt="HTML Icon" />
        <p>HTML</p>
      </div>
      <div className="skill">
        <img src={CSS} alt="CSS Icon" />
        <p>CSS</p>
      </div>
    </section>
  );
}
