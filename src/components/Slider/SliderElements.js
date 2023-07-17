import styled from "styled-components";

export const TechContainer = styled.div`
    background-color: #2E3192;
    color: #fff;
    @media screen and (max-width:768px) {
        padding: 100px 0; 
    }

`

export const TechWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    /* justify-content: center; */
`

export const TopLine = styled.p`
    color: #FFBB22;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const TechH2 =styled.h2`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color :#fff;

    @media screen and ( max-width:400px){
        font-size: 32px;
    }
`