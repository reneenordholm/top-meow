import React from 'react';
// import catsReducer from '../reducers/catsReducer';

// stateless/functional component
const CatCard = (props) => {

    return (
        <div>
            <img src={props.url} alt="cute cat" width="500 px"></img>
        </div>
    )
}

export default CatCard;