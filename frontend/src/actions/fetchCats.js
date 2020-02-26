// action is sent to reducer

export function fetchCats() {
    // thunk async function
    return (dispatch) => {
        // promise that data will be returned eventually
        fetch('https://api.thecatapi.com/v1/images/search')
        // once data is returned, comes back as json
        .then (res => res.json())
        // returned data is dispatched to reducer with the following action object
        .then (cats => dispatch({
            // update store with this data  
            type: 'FETCH_CATS',
            payload: cats
        }))
        
    }
}