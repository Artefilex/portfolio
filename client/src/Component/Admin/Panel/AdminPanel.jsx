import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

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
    <div>
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
      {panel.portfolys.map((item) => (
        <Link to={`/admin/panel/portfoly/${item.id}`}>
          <div key={item.id}>
            <h2>{item.header}</h2>
            <p> {item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AdminPanel;
