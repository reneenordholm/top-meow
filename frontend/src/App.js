import React, { Component } from 'react';
import Cats from './containers/Cats'

class App extends Component {

  render() {
    return (
      <div >
        <div >
          <h1>Top Meow!</h1>
          <Cats />
        </div>

      </div>
    );
  }
}

export default App