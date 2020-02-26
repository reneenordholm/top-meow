export const addLike = cat => {
    return console.log(cat)
    
    // {
    //     type: 'ADD_LIKE',
    //     catId
    // }
}

export const removeLike = catId => {
    return {
        type: 'REMOVE_LIKE',
        catId
    }
}