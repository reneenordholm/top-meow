// takes in state and action type
// reducer is a function that updates state

// set initial state to empty object
export default function catsReducer(state = {cats: []}, action) {
    switch(action.type) {
        case 'FETCH_CATS':
            // fetch cat from api
            return {cats: action.payload}
        case 'UPDATE_LIKE':
            // iterate through each cat
            let cats = state.cats.map(cat => {
                // when cat img_id matches the img_id in payload
                if (cat.img_id === action.payload.img_id) {
                  // update that cats information
                  return action.payload
                } else {
                  return cat
                }
              }) 
              // return new copy of state since state is immutable
              return {...state, cats: cats}
        default:
            // make sure something is always returned
            return state
    }
}