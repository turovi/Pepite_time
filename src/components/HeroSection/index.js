import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  HeroOverlay,
  VideoBg,
  HeroH1,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroOverlay></HeroOverlay>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroP>
            <Img src={require('../../images/logo.png')} alt="Logo Pépite Time"/>  
        </HeroP>
        <HeroH1>Pépite Time</HeroH1>

        <HeroBtnWrapper>
          <Button
            to="philosophie"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={1400}
            spy={true}
            exact="true"
            offset={-5}
            activeClass="active"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
