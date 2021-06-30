import { combineReducers } from "redux";

const initalState = {
    allItems: {}
}

const itemsReducer = (state = initalState, action) => {
    if (action.type === 'GET_ALL_ITEMS') {
        return {...state, allItems: action.payload}
    } else {
        return state
    }
}

export const rootReducer = combineReducers({
    itemsReducer
});