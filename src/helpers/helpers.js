export const formatDate = (date) => {
    const d = date.slice(0,10)
    const t = date.slice(11,19)
    return `${d} at ${t}`
}

export const showPrice = price => price ? `${price} CHF` : null

export const baseUrl = 'https://www.ricardo.ch/api/frontend/recruitment'