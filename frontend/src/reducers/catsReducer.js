// takes in state and action type
// reducer is a function that updates state

// set initial state to empty object
export default function catsReducer(state = {cats: []}, action) {
    switch(action.type) {
        case 'FETCH_CATS':
            // fetch cat from cat api
            return {cats: action.payload}
        case 'UPDATE_LIKE':
            let cats = state.cats.map(cat => {
                if (cat.img_id === action.payload.img_id) {
                  return action.payload
                } else {
                  return cat
                }
              }) 
              return {...state, cats: cats}
        default:
            // make sure something is always returned
            return state
    }
}