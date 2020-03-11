import React from 'react';
import LikesButton from '../containers/LikesButton'

// stateless/functional component
// render cat image on dom load
// send individual cat attributes to CatLikes component
const CatCard = (props) => {
    return (
        <div className="w3-center">
            <img src={props.url} className="w3-image" alt="cute cat" width="450" />
            <LikesButton 
                img_id={props.img_id} 
                likes={props.likes} 
                url={props.url} 
                addLike={props.addLike} 
                removeLike={props.removeLike}
                renderNextCat={props.renderNextCat} 
            />
        </div>
    )
}

export default CatCard;