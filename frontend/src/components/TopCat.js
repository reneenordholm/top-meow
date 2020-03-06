import React from 'react';

// stateless/functional component
// render cat image on dom load
// send individual cat attributes to CatLikes component
const TopCat = (props) => {
    return (
        <div className="w3-center">
            <img src={props.url} className="w3-image" alt="cute cat" width="450" />
            <h5 className="w3-center">Total Likes: {props.likes}</h5>
        </div>
    )
}

export default TopCat;