import React from "react";
import styled from "styled-components";
import background from "./mesh-wide.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

import Slide from "./Slide";

const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam \
dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla\
laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.\
Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.\
Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper\
velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut\
libero. Aenean feugiat non eros quis feugiat.";

const ParallaxBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 230%;
  height: 100%;
  background-image: url(${background});
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
`;

const HomepageSlider = () => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      rewind={true}
      speed={600}
      parallax={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <ParallaxBackground
        slot="container-start"
        data-swiper-parallax="-50%"
      ></ParallaxBackground>

      <SwiperSlide data-swiper-parallax="-200">
        <Slide title="Slide 1" text={placeholderText} buttonText="Action 1" />
      </SwiperSlide>
      <SwiperSlide data-swiper-parallax="-200">
        <Slide title="Slide 2" text={placeholderText} buttonText="Action 2" />
      </SwiperSlide>
      <SwiperSlide data-swiper-parallax="-200">
        <Slide title="Slide 3" text={placeholderText} buttonText="Action 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomepageSlider;
