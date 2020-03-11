import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../actions/updateLike';
import LikesButtonCard from '../components/LikesButtonCard'

class LikesButton extends Component {
    // start with a blank local state
    state = {
        likes: this.props.likes,
        img_id: this.props.img_id,
        url: this.props.url
    }

    // when 'like this cat' button is clicked
    handleAddLike = event => {
        // prevent page from refreshing
        event.preventDefault();

        // update local state with new cat like tally, img_id and url
        this.setState({
            ...this.state,
            likes: this.props.likes + 1,
          })
    }

    // when 'dislike this cat' button is clicked
    handleRemoveLike = event => {
        // prevent page from refreshing
        event.preventDefault();

        // update local state with new cat like tally, img_id and url
        this.setState({
            ...this.state,
            likes: this.props.likes - 1,
          })
    }

    // when the local state is updated
    // send those updated cat attributes to updatelike action component
    componentDidUpdate() {
        this.props.updateLike(this.state)
        this.props.renderNextCat()
    }

    // render the 'like this cat,' 'dislike this cat' buttons 
    // like appropriate attributes to each button
    render() {
        return (
            <>
               <LikesButtonCard 
                    handleAddLike={this.handleAddLike} 
                    handleRemoveLike={this.handleRemoveLike}
               /> 
            </>
        );
    }
}


// this dispatch is using thunk's dispatch capability
export default connect(null, { updateLike })(LikesButton)