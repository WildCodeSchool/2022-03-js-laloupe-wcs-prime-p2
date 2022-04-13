import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

function Slider() {
  return (
    <Carousel>
      <div>slide1</div>
      <div>slide2</div>
      <div>slide3</div>
    </Carousel>
  );
}
export default Slider;
