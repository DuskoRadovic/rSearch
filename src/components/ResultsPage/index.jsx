import React from 'react';
import Search from '../Search/index';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../store/actions/actions';
import ProductCard from '../ProductCard';
import { RootContainer,
         Results,
         ItemsContainer } from '../../globalStyle/globalStyles';

const ResultsPage = () => {
    const { articles, totalCount } = useSelector(state => state.results)

    const dispatch = useDispatch()
    const { searchText } = useParams()
    
    useEffect(() => {
        const text = searchText.substring(1)
        dispatch(getProducts(text))
    },[searchText, dispatch])

    return (
        <RootContainer>
        <Search />
        <ItemsContainer>
            <Results>{totalCount ? totalCount + ' Results' : null}</Results>
            {articles?.map((item, index) => {
                return <ProductCard key={index} item={item}/>
            })}
        </ItemsContainer>
        </RootContainer>
    )
}

export default ResultsPage