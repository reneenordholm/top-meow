// receive cat data once state is updated in likesbutton component
// use thunk to dispatch post fetch request
// updated cat data is sent to db and returned as json
// json data sent to catsreducer to update redux state
export const updateLike = cat => {
    
    return (dispatch) => {
        fetch('http://localhost:3001/cats', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(cat)
        })
        .then(res => res.json())
        .then(cat => dispatch({ type: 'UPDATE_LIKE', payload: cat }))
    }

}
