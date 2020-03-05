import React, { Component } from 'react';
import { connect } from 'react-redux'

class LeastLiked extends Component {

  // let topcat = cats.sort( function (a, b) {
  //     return a.value - b.value;
  //   })
  // console.log(topcat)
  
  render() {
    return (
      <div className="w3-content">
        <div className="w3-display-container w3-content w3-wide" id="home">
          <h1 className="w3-center">Who's Not Hot Meow?</h1>
        </div>
      </div>
    )
  }
}

// access values in store as props
const mapStateToProps = (state) => {
  return {
    cats: state.cats
  }
}

export default connect(mapStateToProps)(LeastLiked)