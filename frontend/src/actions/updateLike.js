// receive cat data from once state is updated in catlikes
// using thunk to dispatch 
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
