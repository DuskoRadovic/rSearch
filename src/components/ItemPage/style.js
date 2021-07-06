import styled from "styled-components";

export const OutsideWrapper = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const ImgWrapper = styled.div`
    height: 500px;
    width: 47%;
    border: solid 2px lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 10px;
    @media (max-width: 1000px) {
    width: 96%;
  }
    `

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`

export const DetailsWrapper = styled.div`
    padding: 10px;
    min-height: 500px;
    width: 47%;
    border: solid 2px lightgray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
    width: 96%;
  }
`

export const Title = styled.div`
    min-height: 125px;
    padding-bottom: 10px;
    width: 90%;
    font-size: 40px;
    text-align: left;
`

export const Line = styled.hr`
    width: 75%;
    height: 2px;
    margin: 0;
    background-color: lightgray;
    border: none;
`

export const NamePrice = styled.div`
    height: 100px;
    width: 90%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > p {
        margin: 0;
    }
`

export const Subtitle = styled.p`
    width: 90%;
    text-align: left;
`

export const Description = styled.p`
    text-align: left;
    width: 90%;
`

export const BackToResults = styled.button`
    border: none;
    background: none;
    color: #3F9593;
    width: 65%;
    text-align: left;
    margin-bottom: 10px;
    cursor: pointer;
`