import { baseUrl, sortItems, key } from '../../helpers/helpers'

export const getProducts = (sort, show, term) => {
    return async (dispatch) => {
        dispatch({type: 'LOADING'})
        const text = term ? term : ' '
        try {
            const response = await fetch(`${baseUrl}/search/?searchText=${text}&apiToken=${key}`)
            const data = await response.json()
            const filteredItems = data.articles.filter(article => article.buyNowPrice)
            data.articles = show ? filteredItems : data.articles        
            sortItems(sort.value, data.articles)
            data.term = text
            data.loading = false
            const action = {
                type: 'GET_ITEMS',
                payload: data
            }
            dispatch(action)
        } catch(error) {
            dispatch({type: 'ERROR', payload: `${error}`})
        }
    }
    
}

export const getProductDetails = (id) => {
    return async (dispatch) => {
        dispatch({type: 'LOADING'})
        try {
            const response = await fetch(`${baseUrl}/article-details/?articleId=${id}&apiToken=${key}`)
            const data = await response.json()
            const response2 = await fetch(`${baseUrl}/user/?userId=${data.sellerId}&apiToken=${key}`)
            const seller = await response2.json()
            const name = seller.name
            data.name = name
            data.loading = false
            const action = {
                type: 'GET_DETAILS',
                payload: data
            }
            dispatch(action)
        }catch(error){
            dispatch({type: 'ERROR', payload: `${error}`})
        }
    }
}

