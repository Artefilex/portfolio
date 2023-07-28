import React, { useEffect, useState, memo, useCallback } from "react";
import "../../../assests/css/admin.css";
import { Link } from "react-router-dom";
import SkillCreate from "./skill/SkillCreate";
import PortfolyCreate from "./portfoly/PortfolyCreate";
import DeleteSkill from "./skill/DeleteSkill";
import DeletePortfoly from "./portfoly/DeletePortfoly";

function AdminPanel() {
  const [panel, setPanel] = useState({
    skills: [],
    portfolys: [],
  });

  const fetchPanelData = useCallback(() => {
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
  useEffect(() => {
    fetchPanelData();
  }, [fetchPanelData]);
  const handlePostSuccess = useCallback(() => {
    fetchPanelData();
  }, [fetchPanelData]);

  return (
    <div className="Admin-Panel flex">
      <div className="admin-container flex">
        <div className="admin-card flex">
          <h2> Your Project</h2>
          {panel.portfolys.map((item) => (
            <div key={item.id} className="single-card project flex">
              <Link to={`/admin/panel/portfoly/${item.id}`}>
                <div key={item.id}>
                  <h4>{item.header}</h4>
                  <p> {item.content}</p>
                </div>
              </Link>
              <DeletePortfoly onSuccess={handlePostSuccess} id={item.id} />
            </div>
          ))}
        </div>
        <div className="admin-form flex">
          <h2> Add Project</h2>
          <PortfolyCreate onSuccess={handlePostSuccess} />
        </div>
      </div>
      <div className="admin-container flex">
        <div className="admin-card flex">
          <h2> Your Skill</h2>
          {panel.skills.map((item) => (
            <div className="single-card flex" key={item.id}>
              <Link to={`/admin/panel/skill/${item.id}`}>
                <span>
                  {item.skillName} {item.skillLevel}
                </span>
              </Link>
              <DeleteSkill onSuccess={handlePostSuccess} id={item.id} />
            </div>
          ))}
        </div>
        <div className="admin-form flex">
          <h2> Add Skill</h2>
          <SkillCreate onSuccess={handlePostSuccess} />
        </div>
      </div>
    </div>
  );
}

export default memo(AdminPanel);
