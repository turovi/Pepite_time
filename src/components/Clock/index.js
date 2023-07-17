import React, { useState } from "react";
import { useEffect } from "react";
import "./Clock.css";
import { animateScroll as scroll } from "react-scroll";
import {
  ClockContainer,
  ClockLink,
} from "./CLockElements";

const Clock = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [linksVisible, setLinksVisible] = useState({
    phil: true,
    pay: false,
    tech: false,
    off: false,
  });
  const [deg, setDeg] = useState('0deg')

  // const deg = '0deg'

  const changeNav = () => {
    if (window.scrollY >= 800) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    const links = document.querySelectorAll("#phil, #pay, #tech, #off");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case "philosophie":
                setLinksVisible((linksVisible) => ({
                  ...linksVisible,
                  phil: true,
                }));
                setDeg('0deg')
                break;
              case "pay-as-you-dev":
                setLinksVisible((linksVisible) => ({
                  ...linksVisible,
                  pay: true,
                }));
                setDeg('85deg')
                break;
              case "techno":
                setLinksVisible((linksVisible) => ({
                  ...linksVisible,
                  tech: true,
                }));
                setDeg('180deg')
                break;
              case "offres":
                setLinksVisible((linksVisible) => ({
                  ...linksVisible,
                  off: true,
                }));
                setDeg('275deg')
                break;
              default:
                setDeg('10deg')
                console.log("Section undefined");
            }
          }
        });
      },
      { rootMargin: "0px 0px -400px 0px" }
    );

    

    const hiddenElements = document.querySelectorAll(
      "#philosophie, #pay-as-you-dev, #techno, #offres"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);


  // -------------------- SWITCH DEG ------------------------
  // const deg = '180deg'

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           switch (entry.target.id) {
  //             case "philosophie":
  //               deg = '0deg'
  //               return deg            
  //               break;
  //             case "pay-as-you-dev":
  //               deg = '85deg'
  //               return deg 
  //               break;
  //             case "techno":
  //               deg = '180deg'
  //               return deg 
  //               break;
  //             case "offres":
  //               deg = '260deg'
  //               return deg 
  //               break;
  //             default:
  //               console.log("Section undefined");
  //           }
  //         }
  //       });
  //     },
  //     { rootMargin: "0px 0px -400px 0px" }
  //   );

    

  //   const hiddenElements = document.querySelectorAll(
  //     "#philosophie, #pay-as-you-dev, #techno, #offres"
  //   );
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }, []);




  //-----------------------------------------------------------

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <ClockContainer scrollNav={scrollNav}>
      <ClockLink
        id="phil"
        className={`${linksVisible.phil ? "isActive" : "dNone"}`}
        to="philosophie"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
        offset={0}
        activeClass="active"
      >
        Philosophie
      </ClockLink>
      <ClockLink
        id="pay"
        className={`${linksVisible.pay ? "isActive" : "dNone"}`}
        to="pay-as-you-dev"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
        offset={0}
        activeClass="active"
      >
        Pay-as-you-dev
      </ClockLink>
      <ClockLink
        id="tech"
        className={`${linksVisible.tech ? "isActive" : "dNone"}`}
        to="techno"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
        offset={0}
        activeClass="active"
      >
        Techno
      </ClockLink>
      <ClockLink
        id="off"
        className={`${linksVisible.off ? "isActive" : "dNone"}`}
        to="offres"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
        offset={0}
        activeClass="active"
      >
        Offres
      </ClockLink>

      <svg
        onClick={toggleHome}
        id="cadre"
        xmlns="http://www.w3.org/2000/svg"
        width="142.163"
        height="128.352"
        viewBox="0 0 142.163 128.352"
      >
        <path
          id="Tracé_132"
          data-name="Tracé 132"
          d="M2203.314,257.655h-52.353l-40.869,44.111,67.046,76.683,67.046-76.683Z"
          transform="translate(-2106.056 -254.655)"
          fill="none"
          stroke-miterlimit="10"
          stroke-width="6"
        />
      </svg>

      <svg
      style={{rotate:deg}}
      id="clockHand"
        xmlns="http://www.w3.org/2000/svg"
        width="6.794"
        height="47.945"
        viewBox="0 0 6.794 47.945"
      >
        <g
          id="Groupe_33"
          data-name="Groupe 33"
          transform="translate(-15096.006 -4761.383)"
        >
          <path
            id="Tracé_133"
            data-name="Tracé 133"
            d="M2416.211,364.854h-4.26l2.109-44.084h0Z"
            transform="translate(12685.345 4440.613)"
            fill="#fb2"
          />
          <circle
            id="Ellipse_50"
            data-name="Ellipse 50"
            cx="3.397"
            cy="3.397"
            r="3.397"
            transform="translate(15096.006 4802.534)"
            fill="#fb2"
          />
        </g>
      </svg>
    </ClockContainer>
  );
};

export default Clock;
