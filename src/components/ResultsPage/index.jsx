import React, { useEffect, useState } from 'react';
import Search from '../Search/index';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../store/actions/actions';
import Spin from '../spin';
import Items from '../Items/index';
import { RootContainer } from '../../globalStyle/globalStyles';

const ResultsPage = () => {
    
    const { loading, error } = useSelector(state => state)
    
    const [sort, setSort] = useState({})
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const { searchText } = useParams()
    
    useEffect(() => {
        const text = searchText.substring(1)
        dispatch(getProducts(sort, show, text))
    },[searchText, dispatch, sort, show])

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

export default ResultsPage