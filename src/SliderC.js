import React from "react";
import Slider from "react-slick";

export default function SliderC() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div></div>
    </Slider>
  );
}
