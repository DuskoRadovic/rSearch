import { baseUrl } from '../../helpers/helpers'

export const getProducts = (term) => {
    return async (dispatch) => {
        const text = term ? term : ' '
        const key = '123456'
        const response = await fetch(`${baseUrl}/search/?searchText=${text}&apiToken=${key}`)
        const data = await response.json()
        const action = {
            type: 'GET_ITEMS',
            payload: data
        }
        dispatch(action)
    }
    
}

export const getProductDetails = (id) => {
    return async (dispatch) => {
        const key = '123456'
        const response = await fetch(`${baseUrl}/article-details/?articleId=${id}&apiToken=${key}`)
        const data = await response.json()
        const response2 = await fetch(`${baseUrl}/user/?userId=${data.sellerId}&apiToken=${key}`)
        const seller = await response2.json()
        const name = seller.name
        data.name = name
        console.log('FROM ACTION',data)
        const action = {
            type: 'GET_DETAILS',
            payload: data
        }
        dispatch(action)
    }
}

