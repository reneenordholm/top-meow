import React, { Component } from 'react';
import CatCard from '../components/CatCard'
import { connect } from 'react-redux'
import { fetchCats } from '../actions/fetchCat'

// top level container component
class Cat extends Component {

    // fetch new cat on dom load
    componentDidMount() {
        // dispatch store to fetch all cats
        // without this.props fn would not connect to store
        this.props.fetchCats()
    }

    // send attributes down to CatCard component
    renderCat = () => this.props.cat.map(cat =>
        <CatCard 
          key={cat.id}
          img_id={cat.id}
          addLike={this.props.addLike} 
          removeLike={this.props.removeLike} 
          url={cat.url} 
        />
    )

    render() {
        return (
          <>
            {this.renderCat()}
          </>
        )
    }
}

// access values in store as props
const mapStateToProps = (state) => {
  return {
    cat: state.cat
  }
}

// fetchCats available as dispatch
export default connect(mapStateToProps, { fetchCats })(Cat)