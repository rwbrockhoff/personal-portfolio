import React from 'react'
import './Project.scss'

export default function Project(props) {
    let deviceStyle = props.mobile ? 'mobile' : 'laptop'
    return (
        <div className="project">
            <div className="tab">
                <h2>{props.title}</h2>
            </div>
            <div className="button-container">
                <a href={props.copy.live} ><button><i className="fas fa-bolt" />live site</button></a>
                <a href={props.copy.github}>
                    <button>
                        <i className="fab fa-github" />github
                </button></a>
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
                    <img src={props.image} className={deviceStyle} alt="Animated project preview" />
                </div>
            </div>
        </div >
    )
}