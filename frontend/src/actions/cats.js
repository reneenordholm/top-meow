export const addLike = catId => {
    return {
        type: 'ADD_LIKE',
        catId
    }
}

export const removeLike = catId => {
    return {
        type: 'REMOVE_LIKE',
        catId
    }
}