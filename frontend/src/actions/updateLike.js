// receive cat data from once state is updated in catlikes
// using thunk to dispatch 
export const updateLike = cat => {
    return (dispatch) => 
        console.log(cat)    
    // {
    //     type: 'UPDATE_LIKE',
    //     cat
    // }
}
