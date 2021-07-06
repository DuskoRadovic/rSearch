import React, { useEffect, useState } from 'react';
import Search from '../Search/index';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../store/actions/actions';
import { SpinnerCircular } from 'spinners-react';
import Select from 'react-select';
import { SortOptions } from '../../helpers/helpers';
import ProductCard from '../ProductCard';
import { RootContainer,
         Results,
         ItemsContainer,
         Count,
         Sort } from '../../globalStyle/globalStyles';

const ResultsPage = () => {
    const { term, articles, totalCount } = useSelector(state => state.results)
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
                <SpinnerCircular size={100} 
                                    thickness={180}
                                    speed={100}
                                    color="#48AAAA"
                                    secondaryColor="transparent"
                                    style={{marginTop: '150px'}}/>
                :
                <ItemsContainer>
                    <Results>
                        <Count>{totalCount ? totalCount + ` Results for "${term}"` : 'No results'}</Count>
                            <div>
                                <input type='checkbox'
                                    checked={show}
                                    onChange={() => setShow(!show)}/>
                                <label>Only with price</label>
                            </div>
                        <Sort><Select options={SortOptions}
                                    placeholder={sort.label ? sort.label : 'Sort by'}
                                    onChange={setSort}/></Sort>
                    </Results>
                    {articles?.map((item, index) => {
                        return <ProductCard key={index} item={item}/>
                    })}
                </ItemsContainer>
                }
                </>
            }
        
        </RootContainer>
    )
}

export default ResultsPage