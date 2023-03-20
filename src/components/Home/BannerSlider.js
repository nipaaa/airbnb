import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "../../assets/banner-slider1.jpg";
import slider2 from "../../assets/banner-slider2.jpg";

const BannerSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div>
          <img className="w-full h-[500px]" src={slider1} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px]" src={slider2} alt="" />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default BannerSlider;
