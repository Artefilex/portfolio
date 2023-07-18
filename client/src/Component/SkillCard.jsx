import React from "react";
import{ BiLogoJavascript,BiLogoGithub } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";

function SkillCard() {
  return (
    <div className="skillcard-container flex">
      <h2>Experince</h2>

      <div className="skillcard-context flex">
        <p>I'm thrilled to share my 2.5-year learning journey with you! </p>
        <ul>
          <li><BiLogoGithub className="icon github"/> 24 repositories on GitHub</li>
          <li><BiLogoJavascript className="icon javascript"/> 7 HTML CSS JS Projects</li>
          <li><FaReact className="icon react"/> 8 React Projects</li>
          <li><FaNodeJs className="icon nodejs"/> 2 Node.js Projects</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
