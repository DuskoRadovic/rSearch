const initalState = {
    results: {},
    details: {},
    name: ''
}

export const itemsReducer = (state = initalState, action) => {
    if (action.type === 'GET_ITEMS') {
        return {...state, results: action.payload}
    } else if (action.type === 'GET_DETAILS') {
        return {...state, details: action.payload}
    }else {
        return state
    }
}
