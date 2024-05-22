"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const LandingSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image src={LandingImage} layout="responsive" objectFit="cover" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default LandingSlider;
