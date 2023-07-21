import React from "react";
import Ben from "../../assests/image/main/ben2.png";
import "../../assests/css/main.css";
import { Link ,useLocation } from "react-router-dom";
import CvButton from "./CvButton"
function Header() {

const location = useLocation()

  return (
    <header className="header flex">
      <div className="header-content flex">
        <div className="header-content flex">
          <div className="header-content-text flex">
            <span> HEY THERE !</span>
            <h2>I AM Barış Tunçdemir </h2>
            <h3>Frontend Developer </h3>
           { location.pathname ==="/about" ? (
             <CvButton/>          
           ):(
            <Link to={"/blog"} className="project-btn">
            <span> CHECK OUT MY BLOG</span>
          </Link>
           )

           }
          </div>
        </div>
      </div>
      <div className="header-logo flex">
        <div className="img-background"></div>
        <img src={Ben} alt="" />
      </div>
    </header>
  );
}

export default Header;
