import React from "react";
import "./Projects.scss";
import Project from "./Project";
import { dulyText, lfText, orangesText, blokText } from "./copyText";
import dulyScreen from "../../assets/project-graphics/duly_screen.gif";
import blokScreen from "../../assets/project-graphics/blok.gif";
import mac from "../../assets/project-graphics/mac.png";
import iphone from "../../assets/project-graphics/iphone.png";
import orangesScreen from "../../assets/project-graphics/orangesdemo.gif";
import lfScreen from "../../assets/project-graphics/lookingFoxScreen.gif";

export default function Projects() {
  return (
    <section className="projects-section">
      <Project
        image={lfScreen}
        device={mac}
        title="looking fox"
        copy={lfText}
      />

      <Project
        mobile={true}
        image={orangesScreen}
        device={iphone}
        title="oranges"
        copy={orangesText}
      />

      <Project
        image={dulyScreen}
        device={mac}
        title="duly notes"
        copy={dulyText}
      />

      <Project
        mobile={true}
        image={blokScreen}
        device={iphone}
        title="blok"
        copy={blokText}
      />
    </section>
  );
}
