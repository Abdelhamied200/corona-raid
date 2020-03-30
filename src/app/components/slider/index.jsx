import React from "react";
import Slide from "../slide";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = props => {
  let news = props.news;

  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true,
    fade: true,
    arrows: false
  };

  return (
    <div className="slider">
      <Slick {...settings}>
        {news.map(n => (
          <Slide {...n} />
        ))}
      </Slick>
    </div>
  );
};

export default Slider;
