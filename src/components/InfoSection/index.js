 import React, { useEffect } from 'react'
import {Column2, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './InfoElements'
import './HeroSection.css'
import { Button } from '../ButtonElement'

 
 const InfoSection = ({lightBg, id, imgStart, topLine, lightText, Headline, darkText,description, buttonLabel, img, alt, primary, dark, dark2, btnId, direction}) => {

    

    useEffect(() => {

        const observer = new IntersectionObserver ((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                    
    
                }else {
                    // Faire disparaitre le texte quand il n'est plus à l'écran
                    // entry.target.classList.remove('show'); 
    
                }
    
            })
        })
        
        const hiddenElementsL = document.querySelectorAll('.hiddenL');
        hiddenElementsL.forEach((el) => observer.observe(el));
        const hiddenElementsR = document.querySelectorAll('.hiddenR');
        hiddenElementsR.forEach((el) => observer.observe(el));

    })

    
    
    
   return (
     <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper className={direction}>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{Headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={btnId} 
                                smooth={true} 
                                duration={1200} 
                                spy={true} 
                                exact='true' 
                                offset={-80} 
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1:0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>    
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
            

        </InfoContainer>
     </>
   )
 }
 
 export default InfoSection