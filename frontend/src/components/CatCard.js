import React from 'react';
// import catsReducer from '../reducers/catsReducer';

// stateless/functional component
const CatCard = (props) => {

    return (
        <div>
            Cat Card
            {props.cats.map(c => c.url)}
        </div>
    )
}

export default CatCard;