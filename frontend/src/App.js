import React, { Component } from 'react';
import Cat from './containers/Cat'

class App extends Component {

  render() {
    return (
      <>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card" >
          <a href="#home" class="w3-bar-item w3-button">Home</a>
          <div class="w3-right w3-hide-small">
            <a href="#about" class="w3-bar-item w3-button">Who's Top Meow?</a>
            <a href="#menu" class="w3-bar-item w3-button">Who's Not Hot Meow?</a>
            <a href="#contact" class="w3-bar-item w3-button">About</a>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <div className="w3-content">
        <div className="w3-display-container w3-content w3-wide" id="home">
          <h1 className="w3-center">Welcome to Top Meow!</h1>
          <Cat />
        </div>
      </div>
      </>
    );
  }
}

export default App