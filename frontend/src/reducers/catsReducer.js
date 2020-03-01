// takes in state and action type
// reducer is a function that updates state

// set initial state to empty object
export default function catsReducer(state = {cat: []}, action) {
    switch(action.type) {
        case 'FETCH_CATS':
            // fetch cat from cat api
            return {cat: action.payload}
        // case 'UPDATE_LIKE':
        //     return { 
        //         ...state, 
        //         cats: [...state.cats, action.payload]
        //     }
        default:
            // make sure something is always returned
            return state
    }
}