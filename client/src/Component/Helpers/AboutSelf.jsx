import React, { useEffect, useState } from "react";
import "../../assests/css/about.css";
import logo from "../../assests/image/main/ben.png";
import hire from "../../assests/image/main/hire.jpg"
function AboutSelf() {
  const [myage, setMyage] = useState();
  useEffect(() => {
    const birthday = () => {
      const myBirthYear = 2000;
      const today = new Date().getFullYear();

      setMyage(today - myBirthYear);
    };
    birthday();
  }, [myage]);

  return (
    <div className="about-container flex">
      <div className="about-card flex">
        <div className="about-header flex">
          <h1>Who Am I </h1>
          <p>
            Hi, I am Barış Tunçdemir, I am {myage} years old. I graduated from
            the Department of Cartography Engineering at 19 Mayıs University.
            Besides being a frontend developer, I am also a professional
            painter. I have created 40 paintings so far and received an award
            for my work on Women's Murders.
          </p>
        </div>
        <div className="about-image flex">
          <img src={logo} width={200} alt="" />
        </div>
      </div>
      <div className="about-card flex">
        <div className="about-header flex">
          <h1>What I Do </h1>
          <p>
            I started to improve myself to become a Frontend Developer 2.5 years
            ago. Every day, I strive to add new knowledge and technologies to my
            skill set and incorporate them into my projects.
          </p>
          <p>
            I am focused on learning advanced knowledge as a Frontend Developer.
          </p>
        </div>
        <div className="about-image flex">
          <img src={logo} width={200} alt="" />
        </div>
      </div>

      <div className="about-card flex">
        <div className="about-header hire-content flex">
          <h1>Why Should You Hire Me </h1>
          <ul className="flex" >
            <li> 1. I am Focus dirrectly project </li>
            <li> </li>
          </ul>
        </div>
        <div className="about-image flex">
          <img src={hire}  alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutSelf;
