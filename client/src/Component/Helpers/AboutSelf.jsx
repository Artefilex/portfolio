import React, { useEffect, useState, memo } from "react";
import "../../assests/css/about.css";
import startIntro from "../../assests/image/main/start.jpg";
import hire from "../../assests/image/main/hire.jpg";
import idea from "../../assests/image/main/idea.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="about-container flex">
      <div className="about-card flex">
        <div
          className="about-header flex"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
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
          <img
            src={startIntro}
            alt="logo"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </div>
      </div>
      <div className="about-card flex">
        <div
          className="about-header flex"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
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
          <img
            src={idea}
            alt="idea"
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </div>
      </div>

      <div className="about-card flex">
        <div
          className="about-header hire-content flex"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <h1>Why Should You Hire Me </h1>
          <ul className="flex">
            <li> 1. My communication skills are strong. </li>
            <li> 2. I am open to continuous self-improvement. </li>
            <li>
              {" "}
              3. I write my projects in an organized and comprehensible manner.
            </li>
            <li> 4. I can develop responsive designs. </li>
            <li> 5. I approach problems with a solution-oriented mindset. </li>
          </ul>
        </div>
        <div className="about-image flex">
          <img
            src={hire}
            alt="idea"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(AboutSelf);
