import React from 'react';
import CatLikes from '../components/CatLikes'

// stateless/functional component
// render cat image on dom load
// send individual cat attributes to CatLikes component
const CatCard = (props) => {
    return (
        <div className="w3-center">
            <img src={props.url} className="w3-image" alt="cute cat" width="450" />
            <CatLikes img_id={props.img_id} likes={props.likes} url={props.url} addLike={props.addLike} removeLike={props.removeLike} goToNext={props.goToNext} />
        </div>
    )
}

export default CatCard;