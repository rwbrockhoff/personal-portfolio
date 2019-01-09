import React from 'react'
import './Projects.scss'

import dulyScreen from '../../assets/project-graphics/duly_screen.gif'
import aktScreen from '../../assets/project-graphics/akt.gif'
import blokScreen from '../../assets/project-graphics/blok.gif'
import mac from '../../assets/project-graphics/mac.png'
import iphone from '../../assets/project-graphics/iphone.png'
import orangesDemo from '../../assets/project-graphics/orangesdemo.gif'
import lookingFoxDemo from '../../assets/project-graphics/lookingFoxScreen.gif'

export default function Projects() {
    return (
        <section className="projects-section">
            <div className="project-container">
                <div className="laptop-view">
                    <img src={mac} className="mac-image" alt="Mac Laptop" />
                    <img src={dulyScreen} className="laptop-project-image" />
                </div>
            </div>
        </section>
    )
}
