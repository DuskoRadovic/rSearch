import React, { useEffect, useState } from 'react';
import Search from '../Search/index';
import { getProducts } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Spin from '../spin';
import Items from '../Items/index'
import { RootContainer } from '../../globalStyle/globalStyles';

const HomePage = () => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state)
    const [sort, setSort] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(getProducts(sort, show))
    },[dispatch, sort, show])

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
                <Spin />
                :
                <Items show={show}
                       setShow={setShow}
                       sort={sort}
                       setSort={setSort}/>
                }
            </>
            }    
        </RootContainer>
    )
}

export default HomePage