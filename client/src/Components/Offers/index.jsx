import React, { Component } from "react";
import Slider from "react-slick";

import DeliveryCaurosel from "./deliveryCarousel";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
      <div className="mb-10">
        <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        OFFERS FOR TODAY
      </h1>
        <Slider {...settings}>
          <div className="w-full h-64">
              
            <img src="https://zomatomaster07.s3.ap-south-1.amazonaws.com/offer1.jpg" alt="" className="w-full h-full object-center rounded-lg"/>
          
          </div>
          <div className="w-full h-64">
              
            <img src="https://zomatomaster07.s3.ap-south-1.amazonaws.com/offer2.jpg" alt="" className="w-full h-full object-center rounded-lg"/>
          
          </div>
          <div className="w-full h-64">
              
            <img src="https://zomatomaster07.s3.ap-south-1.amazonaws.com/offer3.jpg" alt="" className="w-full h-full object-center rounded-lg"/>
          
          </div>
          <div className="w-full h-64">
              
            <img src="https://zomatomaster07.s3.ap-south-1.amazonaws.com/offer4.jpg" alt="" className="w-full h-full object-center rounded-lg"/>
          
          </div>
         
        </Slider>
      </div>
      <DeliveryCaurosel/>
      </>
    );
  }
}