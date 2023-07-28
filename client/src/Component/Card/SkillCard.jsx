import React, { memo, useEffect } from "react";
import { BiLogoJavascript, BiLogoGithub } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import "../../assests/css/skill.css";
import Aos from "aos";
import "aos/dist/aos.css";
function SkillCard() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="zoom-in-down" className="skillcard-container flex">
      <h2>Experince</h2>
      <div data-aos="zoom-out-up" className="skillcard-context flex">
        <p data-aos-duration="1000" data-aos="zoom-in-down">
          I'm thrilled to share my 2.5-year learning journey with you!{" "}
        </p>
        <ul className="flex">
          <li className="flex">
            <div
              className="info-icon"
              data-aos-duration="100"
              data-aos="zoom-in-down"
            >
              <BiLogoGithub className="icon github" /> <span>24</span>
            </div>
            <p> repositories on GitHub</p>
          </li>
          <li className="flex">
            <div
              className="info-icon"
              data-aos-duration="200"
              data-aos="zoom-in-down"
            >
              <BiLogoJavascript className="icon javascript" /> <span>7</span>
            </div>
            <p> HTML CSS JS Projects</p>
          </li>
          <li className="flex">
            <div
              className="info-icon"
              data-aos-duration="300"
              data-aos="zoom-in-down"
            >
              <FaReact className="icon react" /> <span>8</span>
            </div>
            <p>React Projects</p>
          </li>
          <li className="flex">
            <div
              className="info-icon"
              data-aos-duration="400"
              data-aos="zoom-in-down"
            >
              <FaNodeJs className="icon nodejs" /> <span>2</span>
            </div>
            <p> Node Projects</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(SkillCard);
