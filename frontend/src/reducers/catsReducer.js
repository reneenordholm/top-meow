// takes in state and action type
// reducer is a function that updates state

// set initial state to empty object
export default function catsReducer(state = {cat: []}, action) {
    switch(action.type) {
        case 'FETCH_CAT':
            // fetch cat from cat api
            return {cat: action.payload}
        case 'UPDATE_LIKE':
            return console.log(state)
            //     { ...state, 
            //     ...state.cats.concat([likes: 1])
            //  })
            // return { ...state, likes: 1 }
        default:
            // make sure something is always returned
            return state
    }
}