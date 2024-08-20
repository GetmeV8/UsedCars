import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: "Aston Martin", url: "/Images/Aston-Martin.png" },
  { name: "Audi", url: "/Images/Audi.png" },
  { name: "Bentley", url: "/Images/bentley_logo.png" },
  { name: "BMW", url: "/Images/BMW.png" },
  { name: "Toyota", url: "/Images/car_Toyota.png" },
  { name: "Chevrolet", url: "/Images/chevrolet.png" },
  { name: "Datsun", url: "/Images/Datsun.png" },
  { name: "DC", url: "/Images/DC_logo.png" },
  { name: "Ferrari", url: "/Images/ferrari.png" },
  { name: "Fiat", url: "/Images/Fiat.png" },
  { name: "Ford", url: "/Images/Ford.png" },
  { name: "Honda", url: "/Images/Honda.png" },
  { name: "Hyundai", url: "/Images/Hyundai.png" },
  { name: "Isuzu", url: "/Images/Isuzu.png" },
  { name: "Jaguar", url: "/Images/Jaguar.png" },
  { name: "Jeep", url: "/Images/Jeep.png" },
];

const BrandsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-8 overflow-hidden">
      <div className="max-w-full">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="p-2 text-center font-medium">
              <img
                src={brand.url}
                alt={brand.name}
                className="h-20 object-contain mx-auto"
                style={{ maxWidth: "100px" }}
              />
              <p>{brand.name}</p>{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsCarousel;
