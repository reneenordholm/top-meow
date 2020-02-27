// receive cat data from once state is updated in catlikes
// using thunk to dispatch 
export const updateLike = cat => {
    
    return (dispatch) => {
        fetch('http://localhost:3001/cats', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(cat)
        })
        // .then(res => res.json())
        // .then(cat => dispatch({ type: 'UPDATE_LIKE', payload: cat }))
    }

}
