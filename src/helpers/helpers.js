export const formatDate = (date) => {
    const d = date.slice(0,10)
    const t = date.slice(11,19)
    return `${d} at ${t}`
}

export const showPrice = price => price ? `${price} CHF` : null

export const key = 'VALID_API_KEY_HERE'

export const baseUrl = 'https://www.ricardo.ch/api/frontend/recruitment'

export const showMinutes = (date) => {
    const diff = Date.parse(date) - Date.now()
    const minutes = Math.ceil(diff/60000)
    if(minutes < 60 && minutes > 0){
        return {
            min: `(${minutes} min left)`,
            color: 'darkorange'
        }
    } else if(minutes <= 0) {
        return {
            min: '(Auction ended)',
            color: 'red'
        }
    }else {
        return {
            min: '(More than 1hr left)',
            color: 'green'
        }
    }
}

export const SortOptions = [
    {value: 0, label: 'Price ascending'},
    {value: 1, label: 'Price descending'},
    {value: 2, label: 'Ending date'}
]

export const sortItems = (sort, items) => {
    switch(sort){
        case 0:
            items.sort((a, b) => (a.buyNowPrice > b.buyNowPrice) ? 1 : -1)
            break;
        case 1:
            items.sort((a, b) => (a.buyNowPrice < b.buyNowPrice) ? 1 : -1)
            break;
        case 2:
            items.sort((a, b) => (a.endDate > b.endDate) ? 1 : -1)
            break;
        default:  
    }
}