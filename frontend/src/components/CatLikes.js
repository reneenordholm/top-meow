import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../actions/updateLike';
import { fetchCat } from '../actions/fetchCat'

class CatLikes extends Component {
    state = {
        likes: 0,
        img_id: '',
        url: ''
    }

    handleAddLike = event => {
        event.preventDefault();

        this.setState({
            likes: this.state.likes + 1,
            img_id: event.target.id,
            url: event.target.value
          })
    }

    handleRemoveLike = event => {
        event.preventDefault();

        this.setState({
            likes: this.state.likes - 1,
            img_id: event.target.id,
            url: event.target.value
          })
    }

    componentDidUpdate() {
        this.props.updateLike(this.state)
        // this.props.fetchCat()
    }

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