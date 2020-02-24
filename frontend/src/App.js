import React, { Component } from 'react';
// import Cats from './containers/Cats'

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3001/cats')
    .then(res => res.json())
    .then (data => console.log(data))
  }
  render() {
    return (
      <div >
        <div >
          <h1>Top Meow!</h1>

        </div>

      </div>
    );
  }
}

export default App;