import React, { Component } from 'react';
import { connect } from 'react-redux'
import TopCat from './CatCard'

class MostLiked extends Component {

  renderCat = () => [].concat(this.props.cats)
    .sort((a, b) => a.likes.value - b.likes.value)
    .map((cat) => 
      <TopCat 
        key={cat.id}
        img_id={cat.img_id}
        url={cat.url} 
        likes={cat.likes}
      />
    )[0];
    
  render() {
    return (
      <div className="w3-content">
        <div className="w3-display-container w3-content w3-wide" id="home">
          <h1 className="w3-center">Who's Top Meow?</h1>
          {this.renderCat()}
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

export default connect(mapStateToProps)(MostLiked)