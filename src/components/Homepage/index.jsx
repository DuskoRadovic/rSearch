import React from 'react';
import Search from '../Search/index';
import { useEffect } from 'react';
import { getAllProducts } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
import { ItemsContainer } from './style';
import { RootContainer,
         Results } from '../../globalStyle/globalStyles';

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch])

    
    const { articles, totalCount } = useSelector(state => state.itemsReducer.allItems)
    
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

export default HomePage