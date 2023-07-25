import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import SkillCreate from "./skill/SkillCreate";
import PortfolyCreate from "./portfoly/PortfolyCreate";

function AdminPanel() {
  const [panel, setPanel] = useState({
    skills: [],
    portfolys: [],
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPanel({
          skills: data.skills,
          portfolys: data.portfolys,
        });
      });
  }, []);

  console.log(panel.portfolys);
  return (
   <>
    <div>
    <h2> Your Skill</h2>
      {panel.skills.map((item) => (
        <div key={item.id}>
          {" "}
          <Link to={`/admin/panel/skill/${item.id}`}>
            {" "}
            <span>
              {item.skillName} {item.skillLevel}
            </span>{" "}
          </Link>{" "}
        </div>
      ))}
      <div>
        <h2> Add Skill</h2>
       <SkillCreate/>
      </div>
   </div>
    <div>
    <h2> Your Project</h2>
      {panel.portfolys.map((item) => (
        <Link to={`/admin/panel/portfoly/${item.id}`}>
          <div key={item.id}>
            <h4>{item.header}</h4>
            <p> {item.content}</p>
          </div>
        </Link>
      ))}
      <div>
        <h2> Add Project</h2>
       <PortfolyCreate/>
      </div>
    </div>
   
   </>
  );
}

export default AdminPanel;
