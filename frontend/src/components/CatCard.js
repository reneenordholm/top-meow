import React from 'react';
// import catsReducer from '../reducers/catsReducer';

// stateless/functional component
const CatCard = (props) => {

    return (
        <div className="w3-center">
            <img src={props.url} className="w3-image" alt="cute cat" width="300"></img>
        </div>
    )
}

export default CatCard;