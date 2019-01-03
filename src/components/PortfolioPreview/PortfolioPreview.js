import React, { Component } from 'react'
import './PortfolioPreview.scss'

//----Images----//
import LookingFox from '../../assets/port_images/LookingFox.png'
import IndigoFern from '../../assets/port_images/IndigoFern.png'
import DouglasMartin from '../../assets/port_images/DouglasMartin.png'
import Scharr from '../../assets/port_images/Scharr.png'
import MoonValley from '../../assets/port_images/MoonValley.png'
import Guzman from '../../assets/port_images/Guzman.png'
import Brooks from '../../assets/port_images/Brooks.png'
import Oyl from '../../assets/port_images/Oyl.png'
import Hodson from '../../assets/port_images/Hodson.png'
//----Images----//

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

      <div className="port-row">
        <img src={Scharr} alt="Looking Fox Logo"/>
      </div>

      <div className="split-container">
        <div className="port-row-split">
          <img src={MoonValley} alt="Looking Fox Logo"/>
        </div>

        <div className="port-row-split">
          <img src={Guzman} alt="Looking Fox Logo"/>
        </div>
      </div> 


      <div className="port-row">
        <img src={Brooks} alt="Looking Fox Logo"/>
      </div>

      <div className="split-container">
        <div className="port-row-split">
          <img src={Oyl} alt="Looking Fox Logo"/>
        </div>

        <div className="port-row-split">
          <img src={Hodson} alt="Looking Fox Logo"/>
        </div>
      </div> 

      </React.Fragment>
    )
  }
}
