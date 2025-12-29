// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const SliderItem = ({ children }) => {
  return (
    <>
      <div className="h-64 bg-gray-100 mr-1">{children}</div>
    </>
  );
};

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    // pauseOnFocus: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "60px",
    className: "px-2",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const listOfSlider = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="px-10 py-5">
      <Slider {...settings}>
        {listOfSlider.map((item, i) => (
          <SliderItem>
            <div className="bg-red-500 h-full"></div>
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
}
