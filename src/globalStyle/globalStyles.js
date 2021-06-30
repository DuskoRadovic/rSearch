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
    justify-content: flex-start;
`