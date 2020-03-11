import React from 'react';

// stateless/functional component
// render cat image on dom load
// send individual cat attributes to CatLikes component
const LikesButtonCard = (props) => {
    return (
        <>
            <h5 className="w3-center">
                    <button 
                        onClick={props.handleAddLike} 
                        className="w3-bar-item w3-button">
                            Like this cat
                    </button>
                        |
                    <button 
                        onClick={props.handleRemoveLike} 
                        className="w3-bar-item w3-button">
                            Dislike this cat
                    </button>
                </h5>
        </>
    )
}

export default LikesButtonCard
;