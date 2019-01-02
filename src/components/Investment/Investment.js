import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Investment.scss'

export default function Investment() {
  return (
    <React.Fragment>
      <NavBar/>
      <div className="invest-container">
      <h1>the process</h1>
      <h4>from start to finish.</h4>

        <div className="step-container">
          <div className="step">
          one
          </div>
          <div className="step">
          two
          </div>
          <div className="step">
          three
          </div>
        </div>

        <div className="line" style={{marginBottom: '5%'}}/>

        <div className="price-container">
        <h1>investment</h1>
        <h4>pricing information below.</h4>

          <div className="price-list">
            <div className="price">
              <h4>$300</h4>
            </div>

            <div className="price">
              <h4>$600</h4>
            </div>
          </div>

        </div>

      </div>
    </React.Fragment>
  )
}
