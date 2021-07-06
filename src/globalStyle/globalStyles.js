import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle  = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

export const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Results = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Count = styled.p`
    color: grey;
`

export const Sort = styled.div`
    width: 300px;
`

export const ItemsContainer = styled.div`
    width: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    border-top: solid lightgray 2px;
`