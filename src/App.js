import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ContactBubble from './components/ContactBubble/ContactBubble'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Header />
        <About />
        <Skills />
        <ContactBubble />
        <Footer />
      </div>
    );
  }
}

export default App;
