import React, { memo } from "react";
import "../../assests/css/slide.css";
import node from "../../assests/image/certiciate/nodejs.jpg";
import jquery from "../../assests/image/certiciate/jquery.jpg";
import sql from "../../assests/image/certiciate/react.jpg";
import react from "../../assests/image/certiciate/sql.jpg";
import web1 from "../../assests/image/certiciate/Web-101.jpg";
import web2 from "../../assests/image/certiciate/Web-201.jpg";
import web3 from "../../assests/image/certiciate/Web-301.jpg";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";

const certificates = [node, jquery, sql, react, web1, web2, web3];
function Certicate() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider-container">
      <h1>Certificate</h1>
      <Slider {...settings}>
        {certificates.map((c, i) => (
          <div
            key={i}
            className={i === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={c} alt={c} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default memo(Certicate);
