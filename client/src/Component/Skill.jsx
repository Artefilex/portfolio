import React from "react";

function Skill({ skillName, skillLevel }) {
  return  <div className="skill-item">
  <span>{skillName}</span>
  <div className="progress-bar">
    <div className="progress" style={{ width: `${skillLevel}%`,  }}> <span style={{ position: "relative" , left: `${skillLevel -10}%`,}}>%{skillLevel}</span> </div>
   
  </div>
</div>
}

export default Skill;
