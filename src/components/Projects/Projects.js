import React from 'react'
import './Projects.scss'
import Project from './Project'
import { dulyText } from './copyText'
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
            <Project
                image={dulyScreen}
                device={mac}
                title="duly notes"
                copy={dulyText} />
        </section>
    )
}
