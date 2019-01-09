import React from 'react'
import './Project.scss'

export default function Project(props) {
    return (
        <div className="project">
            <div className="tab">
                <h2>{props.title}</h2>
            </div>
            <div className="text-container">
                <p>{props.copy.copy}</p>
                <ul>
                    {props.copy.bullets.map((e, i) => {
                        return (
                            <li key={i}>{e}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="project-container">
                <div className="laptop-view">
                    <img src={props.device} className="mac-image" alt="Mac Laptop" />
                    <img src={props.image} className="laptop-project-image" />
                </div>
            </div>
        </div>
    )
}




{/* <div className="project-container">
                <div className="laptop-view">
                    <img src={props.device} className="mac-image" alt="Mac Laptop" />
                    <img src={props.image} className="laptop-project-image" />
                </div>
            </div> */}