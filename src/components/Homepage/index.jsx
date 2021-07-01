import React from 'react';
import Search from '../Search/index';
import { useEffect, useState } from 'react';
import { getProducts } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard';
import { RootContainer,
         Results,
         ItemsContainer } from '../../globalStyle/globalStyles';

const HomePage = () => {

    const dispatch = useDispatch()
    const [refresh, setRefresh] = useState(false)
    const { articles, totalCount } = useSelector(state => state.results)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch, refresh])
    
    return (
        <RootContainer>
        <Search refresh={refresh} setRefresh={setRefresh}/>
        <ItemsContainer>
            <Results>{totalCount ? totalCount + ' Results' : null}</Results>
            {articles?.map((item, index) => {
                return <ProductCard key={index} 
                                    item={item}/>
            })}
        </ItemsContainer>
        </RootContainer>
    )
}

export default HomePage