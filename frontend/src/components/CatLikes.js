import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../actions/cats';

class CatLikes extends Component {
    state = {
        likes: ''
    }

    handleAddLike = event => {
        event.preventDefault();
        console.log(event)
        // const cat = {...this.state, likes: 0 };
    
        // this.props.addLike(cat)
    }

    handleRemoveLike = event => {
        event.preventDefault();
        console.log(event)
        // const cat = {...this.state, likes: 0 };
    
        // this.props.removeLike(cat)
    }

    render() {
        return (
            <>
                <h4 className="w3-center">
                    <button onClick={this.handleAddLike} className="w3-bar-item w3-button">Like this cat</button>
                        |
                    <button onClick={this.handleRemoveLike} className="w3-bar-item w3-button">Dislike this cat</button>
                </h4>
            </>
        );
    }
}

export default connect(null, { addLike, removeLike })(CatLikes)