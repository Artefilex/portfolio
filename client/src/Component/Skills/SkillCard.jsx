import React from "react";
import { BiLogoJavascript, BiLogoGithub } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import "../../assests/css/skill.css"
function SkillCard() {
  return (
    <div className="skillcard-container flex">
      <h2>Experince</h2>

      <div className="skillcard-context flex">
        <p>I'm thrilled to share my 2.5-year learning journey with you! </p>
        <ul className="flex">
          <li className="flex">
            <div className="info-icon">
              <BiLogoGithub className="icon github" /> <span>24</span>
            </div>
            <p> repositories on GitHub</p>
          </li>
          <li className="flex">
            <div className="info-icon">
              <BiLogoJavascript className="icon javascript" /> <span>7</span>
            </div>
            <p> HTML CSS JS Projects</p>
          </li>
          <li className="flex">
            <div className="info-icon">      
              <FaReact className="icon react" /> <span>8</span>
            </div>
            <p>React Projects</p>
          </li>
          <li className="flex">
            <div className="info-icon">
              <FaNodeJs className="icon nodejs" /> <span>2</span>
            </div>
            <p> Node Projects</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
