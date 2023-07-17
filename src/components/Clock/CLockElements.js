import React from 'react'
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const ClockContainer = styled.div`
    visibility: ${({scrollNav})=> (scrollNav ? 'visible':'hidden')};
    position: fixed;
    top: 100px;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    min-width: 600px;
    color: white;
    /* opacity: 0.3; */
    &:hover{
        opacity: 1;
    }

    &:has(#off.active, #phil.active){
        color: #2E3192;
    }
    

    @media screen and (max-width: 480px) {
        opacity: 1;
}

    
`

export const ClockShape = styled.div`
    
`


export const ClockNav = styled.div`
    color: white;
    position: absolute;
    top: 0;
    
    
`
export const ClockLink = styled(LinkS)`
    
    cursor:pointer;
    transition: all 0.2s ease-in-out;

    &.active{
        border-bottom:4px solid #FFBB22;
        
    }

    
`


