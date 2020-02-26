// takes in state and action type
// reducer is a function that updates state

// set initial state to empty object
export default function catsReducer(state = {cats: []}, action) {
    switch(action.type) {
        case 'FETCH_CATS':
            // update state with all cats
            return {cats: action.payload}
        case 'ADD_LIKE':
            return console.log(action)
            // return { ...state, likes: 1 }
        case 'REMOVE_LIKE':
            return state.map(c => ({ ...c, likes: c.likes - 1 }))
        default:
            // make sure something is always returned
            return state
    }
}