import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <Header/>
      </React.Fragment>
    );
  }
}

export default App;
