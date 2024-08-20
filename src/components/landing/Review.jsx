import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

const TestimonialData = [
  {
    content:
      "Great Service with variety of models from wide range.",
    author: "Alex",
  },
  {
    content:
      "Great purchase with easy shipping",
    author: "Christian Bale",
  },
  {
    content:
      "Got the Exact vehicle i always wanted to acquire",
    author: "Ryan Gosling",
  },
  {
    content:
      "My company got the best trucks from here.",
    author: "Christian Bale",
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => (
    <div
      className="custom-arrow prev p-2 bg-[#c71523] text-white rounded-full"
      onClick={props.onClick}
    >
      <ArrowLeft size={26} />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="custom-arrow next p-2 bg-[#c71523] text-white rounded-full"
      onClick={props.onClick}
    >
      <ArrowRight size={26} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: (
      <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
    ),
    nextArrow: (
      <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:mb-16 mt-28 px-4 md:px-8">
      <div className="w-full md:w-[40%] flex flex-col items-start">
        <h2 className="font-semibold text-[1.5rem] uppercase mb-5 text-gray-700">
          TESTIMONIALS
        </h2>
        <div className="flex w-full justify-between md:block md:w-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Hear from our <br /> customers
          </h1>
          <div className="hidden md:flex -space-x-4 rtl:space-x-reverse mb-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 rounded-full overflow-hidden"
              >
                <img
                  src="/Images/Image-10.png"
                  alt="User"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 md:gap-8 cursor-pointer">
            <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] mt-8 md:mt-0">
        <Slider {...settings} ref={sliderRef}>
          {TestimonialData.map((testimonial, index) => (
            <div key={index} className="p-2">
              <div className="bg-white border border-gray-200 flex flex-col h-full p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base text-gray-800 mb-8">
                  {testimonial.content}
                </p>
                <h1 className="text-lg font-bold text-gray-900">
                  {testimonial.author}
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
