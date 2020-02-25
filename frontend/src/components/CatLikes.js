import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../actions/cats';

class CatLikes extends Component {
    state = {
        likes: ''
    }

    handleAddLike = event => {
        event.preventDefault();

        const cat = {...this.state, likes: 1 };

        this.props.addLike(cat)
    }

    handleRemoveLike = event => {
        event.preventDefault();

        const cat = {...this.state, likes: -1 };
    
        this.props.removeLike(cat)
    }

    render() {
        return (
            <>
                <h5 className="w3-center">
                    <button onClick={this.handleAddLike} className="w3-bar-item w3-button">Like this cat</button>
                        |
                    <button onClick={this.handleRemoveLike} className="w3-bar-item w3-button">Dislike this cat</button>
                </h5>
            </>
        );
    }
}

export default connect(null, { addLike, removeLike })(CatLikes)