import React, { useEffect, useState } from "react";

function AdminPanel() {
 const [panel ,setPanel] = useState({
    skills: [],
    portfolys: []
 })
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPanel({
            skills: data.skills,
            portfolys:data.portfolys
        })
     
      });
  }, []);

  console.log(panel.portfolys)
  return <div>
    {
   panel.skills.map((item) => ( 
    <div key={item.id}> {item.skillName} {item.skillLevel}  </div>
   ))
    }
    {
 panel.portfolys.map((item) => ( 
    <div key={item.id}> {item.header} 
    
     <iframe title={item.header} width={600} height={400} src={item.projecturl} frameborder="0"></iframe>
    </div>
   ))
    }
  </div>;
}

export default AdminPanel;
