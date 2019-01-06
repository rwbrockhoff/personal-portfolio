import React from 'react'
import './Skills.scss'

import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import SASS from '../../assets/icons/sass.svg'
import JS from '../../assets/icons/js.jpg'
import R from '../../assets/icons/react.png'
import Vue from '../../assets/icons/vue.png'
import Node from '../../assets/icons/node.png'
import SQL from '../../assets/icons/postgres.png'
import Jest from '../../assets/icons/jest.png'
import Adobe from '../../assets/icons/adobe.png'

export default function Skills() {
    return (
        <section className="skills-section">
            <div className="skill">
                <img src={HTML} alt="HTML Icon" />
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={CSS} alt="CSS Icon" />
                <p>CSS</p>
            </div>
            <div className="skill large-icon">
                <img src={SASS} alt="Sass Icon" />
                <p>Sass</p>
            </div>
            <div className="skill">
                <img src={JS} alt="Javascript Icon" />
                <p>Javascript</p>
            </div>
            <div className="skill large-icon">
                <img src={R} alt="React Icon" />
                <p>React</p>
            </div>
            <div className="skill">
                <img src={Vue} alt="Vue Icon" />
                <p>Vue</p>
            </div>
            <div className="skill">
                <img src={Node} alt="Node Icon" />
                <p>Node</p>
            </div>
            <div className="skill">
                <img src={SQL} alt="Postgresql Icon" />
                <p>Postgres</p>
            </div>
            <div className="skill">
                <img src={Jest} alt="Jest Icon" />
                <p>Jest</p>
            </div>
            <div className="skill">
                <img src={Adobe} alt="Adobe Icon" />
                <p>Adobe</p>
            </div>
        </section>
    )
}
