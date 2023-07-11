import React, {useState} from 'react'
import { useEffect } from 'react';
import './Clock.css'
import { animateScroll as scroll } from 'react-scroll';
import { ClockContainer, ClockNav, ClockShape, ClockSpan, ClockLink } from './CLockElements'


const Clock = () => {
    // const pay = document.getElementById('pay')
    // const color = "#fff"
    
    
    // pay.classList.contains('active') ? color = "red" : color = "green"
    // console.log(pay.classList)

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 800){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }
    const phil = document.getElementById('phil')
    const pay = document.getElementById('pay')
    const tech = document.getElementById('tech')
    const off = document.getElementById('off')
    
    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
        
        const observer = new IntersectionObserver ((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    // phil.classList.add('inline');
                    // pay.classList.add('inline');
                    // tech.classList.add('inline');
                    // off.classList.add('inline');
                    
                }else {
                    // Faire disparaitre le texte quand il n'est plus à l'écran
                    // entry.target.classList.remove('inline'); 
    
                }
    
            })
        })
        
        const hiddenElements = document.querySelectorAll('#philosophie, #pay-as-you-dev, #techno, #offres');
        hiddenElements.forEach((el) => observer.observe(el));


    }, [])

    

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
  <ClockContainer scrollNav = {scrollNav}>
    

    
   

    
    <ClockLink id='phil' to="philosophie" smooth={true} duration={1000} spy={true} exact='true' offset={0} activeClass="active">Philosophie</ClockLink>
    <ClockLink id='pay' to="pay-as-you-dev" smooth={true} duration={1000} spy={true} exact='true' offset={0} activeClass="active">Pay-as-you-dev</ClockLink>
    <ClockLink id='tech' to="techno" smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass="active">Techno</ClockLink>
    <ClockLink id='off' to="offres" smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass="active">Offres</ClockLink> 

    <svg onClick={toggleHome} id='cadre' xmlns="http://www.w3.org/2000/svg" width="142.163" height="128.352" viewBox="0 0 142.163 128.352">
    <path id="Tracé_132" data-name="Tracé 132" d="M2203.314,257.655h-52.353l-40.869,44.111,67.046,76.683,67.046-76.683Z" transform="translate(-2106.056 -254.655)" fill="none"  stroke-miterlimit="10" stroke-width="6"/></svg>


    

    
    

  </ClockContainer>
    
  )
}

export default Clock