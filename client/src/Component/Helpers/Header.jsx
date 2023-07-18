import React from "react";
import Ben from "../../assests/image/ben2.png";
import "../../assests/css/main.css";
import Social from "./Social";
function Header() {
  return (
    <header className="flex">
      <div className="header-content flex">
        <div className="header-content flex">
          <div className="header-content-text flex">
            <span> HEY THERE !</span>
            <h2>I AM Barış Tunçdemir </h2>
            <h3>Frontend Developer </h3>
          </div>
          <Social />
        </div>
        <a href="/project" className="project-btn">
          SEE MY WORK
        </a>
      </div>
      <div className="header-logo flex">
        <div className="img-background"></div>
        <img src={Ben} alt="" />
      </div>
    </header>
  );
}

export default Header;
