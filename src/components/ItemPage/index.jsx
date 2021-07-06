import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { getProductDetails } from '../../store/actions/actions';
import { SpinnerCircular } from 'spinners-react';
import { RootContainer } from '../../globalStyle/globalStyles';
import Search from '../Search/index';
import { OutsideWrapper,
         ImgWrapper,
         Img,
         DetailsWrapper,
         Title,
         Line,
         NamePrice,
         Subtitle,
         Description,
         BackToResults} from './style';

const ItemPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { articleId } = useParams()
    const { loading, error } = useSelector(state => state)

    useEffect(() => {
        const id = articleId.substring(1)
        dispatch(getProductDetails(id))
    }, [articleId, dispatch])

    const product = useSelector(state => state.details)
    const {imageUrl, title, name, price, subtitle, descriptionHtml} = product
    const description = descriptionHtml?.replace(/<[^>]+>/g, '')

    return (
        <RootContainer>
            {error
            ?
            <h1>{error}</h1>
            :
            <>
            <Search />
            {loading
            ?
            <SpinnerCircular size={100} 
                             thickness={180}
                             speed={100}
                             color="#48AAAA"
                             secondaryColor="transparent"
                             style={{marginTop: '150px'}}/>
            :
            <>
            <BackToResults onClick={() => history.goBack()}>Back to search results</BackToResults>
            <OutsideWrapper>
                <ImgWrapper>
                    <Img src={imageUrl} alt='article'/>
                </ImgWrapper>
                <DetailsWrapper>
                    <Title>{title}</Title>
                    <Line/>
                    <NamePrice>
                        <p><strong>Seller: </strong>{name}</p><br/>
                        <p><strong>Price: </strong>{price ? `${price} CHF` : 'No buyout price'}</p>
                    </NamePrice>
                    <Line/>
                    <Subtitle>{subtitle}</Subtitle>
                    <Description>{description}</Description>
                </DetailsWrapper>
            </OutsideWrapper>
            </>
            }
            </>
            }
            
        </RootContainer>
    )
}

export default ItemPage