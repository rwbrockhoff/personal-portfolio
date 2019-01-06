import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './Investment.scss'

export default function Investment() {
  return (
    <React.Fragment>
      <NavBar />
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

        <div className="line" style={{ marginBottom: '5%' }} />

        <div className="price-container">
          <h1>investment</h1>
          <h4>pricing information below.</h4>

          <div className="price-list">
            <div className="price">
              <h2>the essential</h2>
              <div className="hours-box"><h4>$300 / 3 weeks</h4></div>
              <br />
              <h4>Result: Custom brand identity
              </h4>
              <br />
              <h4>What you get:</h4>
              <h4> Primary Logo Design</h4>
              <h4> Secondary Logo Design</h4>
              <h4> Brand Style Guide</h4>
              <h4> Color Palette</h4>
              <h4> Font Selections</h4>
              <br />
              <h4> Lasting Success: </h4>
              <h4> Brand guidelines PDF </h4>
              <h4> All final files in various formats </h4>


            </div>

            <div className="price">
              <h2>the extra</h2>
              <div className="hours-box"><h4>$600 / 5 weeks</h4></div>
              <br />
              <h4>Result: Custom brand identity + 3 collateral designs
              </h4>
              <br />
              <h4>What you get:</h4>
              <h4> Primary Logo Design</h4>
              <h4> Secondary Logo Design</h4>
              <h4> Brand Style Guide</h4>
              <h4> Color Palette</h4>
              <h4> Font Selections</h4>
              <h4> Your choice of 3 Collateral Designs</h4>
              <br />
              <h4> Lasting Success: </h4>
              <h4> Brand guidelines PDF </h4>
              <h4> All final files in various formats </h4>
              <h4> Launch day checklist </h4>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </React.Fragment>
  )
}
