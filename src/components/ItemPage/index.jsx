import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductDetails } from '../../store/actions/actions';
import { RootContainer } from '../../globalStyle/globalStyles';
import Search from '../Search/index';
import { OutsideWrapper,
         ImgWrapper,
         Img} from './style';

const ItemPage = () => {
    const dispatch = useDispatch()
    const { articleId } = useParams()

    useEffect(() => {
        const id = articleId.substring(1)
        dispatch(getProductDetails(id))
    }, [articleId, dispatch])

    const product = useSelector(state => state.details)

    return (
        <RootContainer>
            <Search />
            <OutsideWrapper>
                <ImgWrapper>
                    <Img src={product.imageUrl} alt='article'/>
                </ImgWrapper>
            </OutsideWrapper>
        </RootContainer>
    )
}

export default ItemPage