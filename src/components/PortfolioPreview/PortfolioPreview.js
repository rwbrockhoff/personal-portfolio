import React, { Component } from 'react'
import './PortfolioPreview.scss'
import LookingFox from '../../assets/port_images/LookingFox.png'
import IndigoFern from '../../assets/port_images/IndigoFern.png'
import DouglasMartin from '../../assets/port_images/DouglasMartin.png'
export default class PortfolioPreview extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="port-row">
        <img src={LookingFox} alt="Looking Fox Logo"/>
      </div>

      <div className="split-container">
        <div className="port-row-split">
          <img src={IndigoFern} alt="Looking Fox Logo"/>
        </div>

        <div className="port-row-split">
          <img src={DouglasMartin} alt="Looking Fox Logo"/>
        </div>
      </div>

      </React.Fragment>
    )
  }
}
