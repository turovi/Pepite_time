// dim 342 X 333.83
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Tech.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { TechContainer, TechWrapper, TopLine, TechH2 } from "./SliderElements";
import slide_1 from "../../images/slides/slide_1.jpg";
import slide_2 from "../../images/slides/slide_2.jpg";
import slide_3 from "../../images/slides/slide_3.jpg";

const Tech = () => {
  return (
    <TechContainer id="techno">
      <TechWrapper>
        <TopLine>à la pointe</TopLine>
        <TechH2>Techno</TechH2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            deph: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          id="slider"
        >
          <SwiperSlide>
            <img src={slide_1} alt="slide_image-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_3} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <IoIosArrowDropleft />
            </div>

            <div className="swiper-button-next slider-arrow">
              <IoIosArrowDropright />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </TechWrapper>
    </TechContainer>
  );
};

export default Tech;
