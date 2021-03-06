import styled from "styled-components";

export const MainWrapper = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
    padding-top: 20px;
    margin-bottom: 50px;
`

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    cursor: pointer;
`

export const BarAndButtonWrapper = styled.form`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    border: solid 2px #3F9593;
    border-radius: 5px;
    transition-duration: .5s;
    :hover {
        border-color: #48AAAA;
        box-shadow: rgba(72, 170, 170, 0.4) 2px 2px 2px 0px;
    }
`

export const SearchBarWrapper = styled.div`
    width: 80%;
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 20px;
`

export const SearchBar = styled.input`
    width: 90%;
    font-size: medium;
    border: none;
    :focus {
        outline: none;
    }
    ::placeholder {
        font-weight: bold;
    }
`
export const SearchButton = styled.button`
    width: 20%;
    height: 45px;
    background-color: ${props => props.searchText ? '#3F9593' : 'lightgrey'};
    border: none;
    border-radius: 0 3px 3px 0;
    padding: 0;
    transition-duration: .5s;
    :hover {
        background-color: ${props => props.searchText ? '#48AAAA' : 'lightgrey'};
    }
`
