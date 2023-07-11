import React, {useState} from 'react'
import { useEffect } from 'react';
import{FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar
 = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 200){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <>
    <IconContext.Provider value={({color:'#fff'})} >
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                   Pépite Time
                </NavLogo>
                <MobileIcon onClick={toggle}>

                    <FaBars />

                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="philosophie" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Philosophie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="pay-as-you-dev" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Pay-as-you-dev</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="techno" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Techno</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="offres" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">Offres</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  );
};

export default Navbar;
