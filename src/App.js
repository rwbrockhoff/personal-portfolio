import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import PortfolioPreview from './components/PortfolioPreview/PortfolioPreview';
import ContactBubble from './components/ContactBubble/ContactBubble'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <PortfolioPreview />
        <ContactBubble />
        <Footer />
      </div>
    );
  }
}

export default App;
