import React, { Component } from 'react';
import Cat from './containers/Cat'

class App extends Component {

  render() {
    return (
      <div className="w3-content">
        <div className="w3-display-container w3-content w3-wide" id="home">
          <h1 className="w3-center">Top Meow!</h1>
          <Cat />
        </div>
      </div>
    );
  }
}

export default App