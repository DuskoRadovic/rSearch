import React from 'react';
import {MainWrapper,
        LogoWrapper,
        BarAndButtonWrapper,
        SearchBarWrapper,
        SearchBar,
        SearchButton } from './style';
import logo from '../../assets/logo.svg';

const Search = () => {
    return (
        <MainWrapper>
            <LogoWrapper>
                <img src={logo} alt='logo' height='30px'/>
            </LogoWrapper>
            <BarAndButtonWrapper>
                <SearchBarWrapper>
                    <SearchBar placeholder='Search products...'/>
                </SearchBarWrapper>
                <SearchButton type='submit'>
                    <img height='20px' src={"https://svg-clipart.com/clipart/icon/nQy8yy4-search-icon-white-one-clipart.png"} alt='magnifier'/>
                </SearchButton>
            </BarAndButtonWrapper>
        </MainWrapper>
    )
}


export default Search