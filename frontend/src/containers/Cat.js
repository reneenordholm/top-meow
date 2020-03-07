import React, { Component } from 'react';
import CatCard from '../components/CatCard'
import { connect } from 'react-redux'
import { fetchCats } from '../actions/fetchCat'

// top level container component
class Cat extends Component {

  state = {
    index: 0
  };    

  // fetch new cat on dom load
  componentDidMount() {
    // dispatch store to fetch all cats
    // without this.props fn would not connect to store
    this.props.fetchCats()  
  }

  // iterate through each cat
  // send attributes down to CatCard component
  renderCat = () => this.props.cats.map( (cat, index) => {
    if ( index === this.state.index ) {
      return <CatCard 
        key={cat.id}
        img_id={cat.img_id}
        addLike={this.props.addLike} 
        removeLike={this.props.removeLike} 
        url={cat.url} 
        likes={cat.likes}
        goToNext={this.goToNext}
      />
    }
    return null
  })

  goToNext = () => {
    this.setState({ index: (this.state.index + 1) % this.props.cats.length });
  };

  render() {
    return (
      <div className="w3-content">
        <div className="w3-display-container w3-content w3-wide" id="home">
          <h1 className="w3-center">Welcome to Top Meow!</h1>
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

// fetchCats available as dispatch
export default connect(mapStateToProps, { fetchCats })(Cat)