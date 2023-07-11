import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import Icon4 from '../../images/svg-4.svg'
import { Button } from '../ButtonElement'
import { OffresContainer, OffresH2, OffresWrapper, OffresCard, OffresIcon, OffresH3, OffresP, BtnWrap} from './OffresElements'
import { animateScroll as scroll } from 'react-scroll';

const Offres = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <OffresContainer id='offres'>

        <OffresH2>Offres</OffresH2>
        <OffresWrapper>
            <OffresCard>
                <OffresIcon src={Icon1} />
                <OffresH3>Réduisez vos dépenses</OffresH3>
                <OffresP>Des offres modifiable à volonté</OffresP>
            </OffresCard>
            <OffresCard>
                <OffresIcon src={Icon2} />
                <OffresH3>Application - accompagnement</OffresH3>
                <OffresP>Votre Application clés en main</OffresP>
            </OffresCard>
            <OffresCard>
                <OffresIcon src={Icon3} />
                <OffresH3>E-commerce</OffresH3>
                <OffresP>Lancez votre business en toute sécurité </OffresP>
            </OffresCard>
            <OffresCard>
                <OffresIcon src={Icon4} />
                <OffresH3>Dev for you</OffresH3>
                <OffresP>Offre evolutive en fonction de vos besoins</OffresP>
            </OffresCard>
        </OffresWrapper>
        <BtnWrap>
            <Button to="/" onClick={toggleHome} 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                primary='true'
                                dark = 'true' 
                                
                                >Retour
            </Button>
        </BtnWrap>
    </OffresContainer>
  )
}

export default Offres