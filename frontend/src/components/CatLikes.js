import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../actions/updateLike';
import { fetchCat } from '../actions/fetchCat'

class CatLikes extends Component {
    // start with a blank local state
    state = {
        likes: '',
        img_id: '',
        url: ''
    }

    // when 'like this cat' button is clicked
    handleAddLike = event => {
        // prevent page from refreshing
        event.preventDefault();

        // update local state with new cat like tally, img_id and url
        this.setState({
            likes: this.props.likes + 1,
            img_id: event.target.id,
            url: event.target.value
          })
    }

    // when 'dislike this cat' button is clicked
    handleRemoveLike = event => {
        // prevent page from refreshing
        event.preventDefault();

        // update local state with new cat like tally, img_id and url
        this.setState({
            likes: this.props.likes - 1,
            img_id: event.target.id,
            url: event.target.value
          })
    }

    // when the local state is updated
    // send those updated cat attributes to updatelike action component
    componentDidUpdate() {
        this.props.updateLike(this.state)
        this.props.goToNext()
    }

    // render the 'like this cat,' 'dislike this cat' buttons 
    // like appropriate attributes to each button
    render() {
        return (
            <>
                <h5 className="w3-center">
                    <button id={this.props.img_id} value={this.props.url} onClick={this.handleAddLike} className="w3-bar-item w3-button">Like this cat</button>
                        |
                    <button id={this.props.img_id} value={this.props.url} onClick={this.handleRemoveLike} className="w3-bar-item w3-button">Dislike this cat</button>
                </h5>
            </>
        );
    }
}

// this dispatch is using thunk's dispatch capability
export default connect(null, { updateLike, fetchCat })(CatLikes)