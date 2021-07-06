import React from 'react';
import { SortOptions } from '../../helpers/helpers';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import ProductCard from '../ProductCard';
import {
    Results,
    ItemsContainer,
    Sort,
    Count } from '../../globalStyle/globalStyles';

const Items = (props) => {
    const { show, setShow, sort, setSort} = props
    const { term, articles, totalCount } = useSelector(state => state.results)

    return (
        <ItemsContainer>
                    <Results>
                        <Count>{totalCount
                                ?
                                totalCount + ` Results ${term === ' ' ? '' : `for "${term}"`}`
                                : "No Results"}</Count>
                        <div>
                            <input type='checkbox'
                                checked={show}
                                onChange={() => setShow(!show)}/>
                            <label style={{color: 'grey', marginLeft: '5px'}}>Only with buyout price</label>
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
    )
}

export default Items