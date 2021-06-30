import styled from "styled-components";

export const CardWrapper = styled.div`
    cursor: pointer;
    width: 200px;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition-duration: .2s;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    :hover {
        transform: scale(1.05)
    }
    img {
        height: 50%;
        width: 100%;
    }
    p {
        height: 16.6%;
        font-size: small;
        margin-left: 10px;
    }
`