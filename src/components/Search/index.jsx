import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import {MainWrapper,
        LogoWrapper,
        BarAndButtonWrapper,
        SearchBarWrapper,
        SearchBar,
        SearchButton } from './style';
import logo from '../../assets/logo.svg';

const Search = () => {
    const [searchText, setSearchText] = useState('')
    const history = useHistory()

    return (
        <MainWrapper>
            <LogoWrapper onClick={() => history.push('/')}>
                <img src={logo} alt='logo' height='30px'/>
            </LogoWrapper>
            <BarAndButtonWrapper onSubmit={() => history.push(`/search/:${searchText}`)}
                                 searchText={searchText}>
                <SearchBarWrapper>
                    <SearchBar placeholder='Search items...'
                               onChange={e => setSearchText(e.target.value)}
                               value={searchText}/>
                </SearchBarWrapper>
                <SearchButton type='submit'
                              disabled={searchText ? false : true}
                              searchText={searchText}>
                    <img height='20px' src={"https://svg-clipart.com/clipart/icon/nQy8yy4-search-icon-white-one-clipart.png"} alt='magnifier'/>
                </SearchButton>
            </BarAndButtonWrapper>
        </MainWrapper>
    )
}


export default Search