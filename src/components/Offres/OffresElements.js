import styled from "styled-components";

export const OffresContainer = styled.div`
    height: 1025px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    @media screen and (max-width: 768px){
        height: 1825px;
        
        
    }

    @media screen and (max-width: 480px){
        height: 1925px;
        
    }

    //- 200px sur chaque height pour retourner avec les note commentés dans les ICones et Cards
`

export const OffresWrapper = styled.div`
    /* max-width: 1000px; */
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap:16px ;
    padding: 0 20px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        width: auto;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding: 0 20px;
        width: auto;
    }
`

export const OffresCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* max-height: 340px; */
    height: 380px;
    padding: 30px ;
    box-shadow: rgba(149, 157, 165, 0.2) 1px 3px 9px;
    transition:  all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`



export const OffresIcon = styled.img`
    /* height: 160px;
    width: 160px; */
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
` 



export const  OffresH2=styled.h2`
    font-size: 2.5rem;
    color: #FFBB22;
    margin-bottom: 64px;

    /* @media screen and (max-width: 768px){
        
        margin-bottom: 24px;
        margin-top: 15px;

    } */

    @media screen and (max-width: 480px){
        font-size: 2rem;
        margin-top: -55px;
        

    }
    
`

export const OffresH3=styled.h3`
    font: 1rem;
    margin-bottom: 10px ;
    white-space: nowrap;
`

export const OffresP=styled.p`
    font-size: 1rem;
    text-align: center;
`


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 25px;
`

