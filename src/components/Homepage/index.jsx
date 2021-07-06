import React, { useEffect, useState } from 'react';
import Search from '../Search/index';
import { getProducts } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import Select from 'react-select';
import { SortOptions } from '../../helpers/helpers';
import ProductCard from '../ProductCard';
import { RootContainer,
         Results,
         ItemsContainer,
         Sort,
         Count } from '../../globalStyle/globalStyles';

const HomePage = () => {

    const dispatch = useDispatch()
    const { articles, totalCount } = useSelector(state => state.results)
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
                <SpinnerCircular size={100} 
                                thickness={180}
                                speed={100}
                                color="#48AAAA"
                                secondaryColor="transparent"
                                style={{marginTop: '150px'}}/>
                :
                <ItemsContainer>
                    <Results>
                        <Count>{totalCount ? totalCount + ' Results' : "No Results"}</Count>
                        <div>
                            <input type='checkbox'
                                checked={show}
                                onChange={() => setShow(!show)}/>
                            <label style={{color: 'grey', marginLeft: '5px'}}>Only with price</label>
                        </div>
                        <Sort><Select options={SortOptions}
                                    placeholder={sort.label ? sort.label : 'Sort by'}
                                    onChange={setSort}/></Sort>
                    </Results>
                    {articles?.map((item, index) => {
                        return <ProductCard key={index} 
                                            item={item}/>
                    })}
                </ItemsContainer>
                }
            </>
            }    
        </RootContainer>
    )
}

export default HomePage