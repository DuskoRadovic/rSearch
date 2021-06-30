import React from 'react';
import { CardWrapper } from './style';
import { formatDate, showPrice } from '../../helpers/helpers';

const ProductCard = ({ item }) => {

    return (
        <CardWrapper>
            <img src={item.imageUrl} alt='img'/>
            <p><strong>{item.title}</strong></p>
            <p>Ending on: {formatDate(item.endDate)}</p>
            <p>{showPrice(item.buyNowPrice)}</p>
        </CardWrapper>
    )
}

export default ProductCard