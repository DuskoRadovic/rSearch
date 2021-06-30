export const getAllProducts = () => {
    return async (dispatch) => {
        const text = (' ')
        const key = 'something'
        const response = await fetch(`https://www.ricardo.ch/api/frontend/recruitment/search/?searchText=${text}&apiToken=${key}`)
        const data = await response.json()
        const action = {
            type: 'GET_ALL_ITEMS',
            payload: data
        }
        dispatch(action)
    }
    
}

