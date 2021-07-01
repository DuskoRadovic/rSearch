import React from 'react';
import { CardWrapper } from './style';
import { useHistory } from 'react-router-dom';
import { formatDate, showPrice } from '../../helpers/helpers';

const ProductCard = ({ item }) => {

    const history = useHistory()

    return (
        <CardWrapper onClick={() => history.push(`/article/:${item.id}`)}>
            <img src={item.imageUrl} alt='img'/>
            <p><strong>{item.title}</strong></p>
            <p>Ending on: {formatDate(item.endDate)}</p>
            <p>{showPrice(item.buyNowPrice)}</p>
        </CardWrapper>
    )
}

export default ProductCard