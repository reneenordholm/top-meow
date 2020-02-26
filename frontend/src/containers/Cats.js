import React, { Component } from 'react';
import CatCard from '../components/CatCard'
import { connect } from 'react-redux'
import { fetchCats } from '../actions/fetchCats'

// top level container component
class Cats extends Component {

    // fetch all cats upon dom load
    componentDidMount() {
        // dispatch store to fetch all cats
        // without this.props fn would not connect to store
        this.props.fetchCats()
    }

    // send attributes down to CatCard component
    renderCats = () => this.props.cats.map(cat =>
        <CatCard 
          key={cat.id}
          img_id={cat.id}
          addLike={this.props.addLike} 
          removeLike={this.props.removeLike} 
          url={cat.url} 
          // likes={cat.likes}
        />
    )

    componentDidUpdate() {
      // this.props.fetchCats()
    }

    render() {
        return (
          <>
            {this.renderCats()}
          </>
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
export default connect(mapStateToProps, { fetchCats })(Cats)