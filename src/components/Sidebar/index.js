import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'


const Sidebar = ({isOpen, toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to='philosophie' smooth={true} duration={500} spy={true} exact='true' offset={-30} activeClass="active">
                Philosophie
                </SidebarLink>
                <SidebarLink onClick={toggle} to="pay-as-you-dev" smooth={true} duration={500} spy={true} exact='true' offset={-30} activeClass="active">
                Pay-as-you-dev
                </SidebarLink>
                <SidebarLink onClick={toggle} to="techno" smooth={true} duration={500} spy={true} exact='true' offset={-5} activeClass="active">
                Techno
                </SidebarLink>
                <SidebarLink onClick={toggle} to="offres" smooth={true} duration={500} spy={true} exact='true' offset={-40} activeClass="active">
                Offres
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <sidebarRoute to='/signin'>Sign In</sidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar