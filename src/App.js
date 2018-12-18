import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import PortfolioPreview from './components/PortfolioPreview/PortfolioPreview';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Header/>
        <PortfolioPreview/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
