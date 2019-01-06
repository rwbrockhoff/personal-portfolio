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
          <h4>pricing information below</h4>

          <div className="price-list">
            <div className="price">
              <h2>The "Essential"</h2>
              <div className="hours-box"><h4>$300 / 3 weeks</h4></div>
              <br /><br />
              <h3>Custom Brand Identity
              </h3>
              <br /><br />

              <h4> Primary Logo Design</h4>
              <h4> Secondary Logo Design</h4>
              <h4> Brand Style Guide</h4>
              <h4> Color Palette</h4>
              <h4> Font Selections</h4>
              <br /><br />
              <h4 style={{ fontFamily: 'Europa Bold' }}> Lasting Success: </h4>
              <h4> Brand guidelines PDF </h4>
              <h4> All final files in various formats </h4>


            </div>

            <div className="price">
              <h2>The "Extra"</h2>
              <div className="hours-box"><h4>$600 / 5 weeks</h4></div>
              <br /><br />
              <h3>Custom Brand Identity + 3 Collateral Designs
              </h3>
              <br /><br />

              <h4> Primary Logo Design</h4>
              <h4> Secondary Logo Design</h4>
              <h4> Brand Style Guide</h4>
              <h4> Color Palette</h4>
              <h4> Font Selections</h4>
              <h4> Your choice of 3 Collateral Designs</h4>
              <br /><br />
              <h4 style={{ fontFamily: 'Europa Bold' }}> Lasting Success: </h4>
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
