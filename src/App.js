import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import PortfolioPreview from './components/PortfolioPreview/PortfolioPreview';
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        <Header/>
        <PortfolioPreview/>
        <Footer/>
      </div>
    );
  }
}

export default App;
