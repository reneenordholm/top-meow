import React from 'react';
import CatLikes from '../components/CatLikes'

// stateless/functional component
// render cat image on dom load
const CatCard = (props) => {
    return (
        <div className="w3-center">
            <img src={props.url} id={props.img_id} className="w3-image" alt="cute cat" width="300"></img>
            <CatLikes img_id={props.img_id} addLike={props.addLike} removeLike={props.removeLike} />
        </div>
    )
}

export default CatCard;