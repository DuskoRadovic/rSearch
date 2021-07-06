const initalState = {
    results: {},
    details: {},
    name: '',
    loading: false,
    error: ''
}

export const itemsReducer = (state = initalState, action) => {
    if (action.type === 'GET_ITEMS') {
        return {...state, results: action.payload, loading: !state.loading}
    } else if (action.type === 'GET_DETAILS') {
        return {...state, details: action.payload, loading: !state.loading}
    } else if(action.type === 'LOADING') {
        return {...state, loading: !state.loading}
    }else if(action.type === 'ERROR') {
        return {...state, error: action.payload}
    }else {
        return state
    }
}
