import React, { useEffect, useState } from "react";
import Ben from "../assests/image/ben.png"
import "../assests/css/main.css"
import Social from "./Social";
import Skill from "./Skill";
function Home() {
  const [obj, setObj] = useState({})

  const skillsData = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 70 },
    { name: 'JavaScript', level: 80 },
    // Diğer becerileri buraya ekleyebilirsiniz
  ];
  
useEffect(()=>{
 const data = async()=>{
  try{
   const response  = await fetch("http://localhost:4000/")
   const jsonData = await response.json()
   setObj(jsonData)  
  }
  catch(err){
    console.log(err)
  }
 }
 data()
}, [])
  return <div className="main">
   {/* {obj.name} */}

   <header className="flex">  
   <div className="header-content flex">
     <div className="header-content flex"> 
     <div className="header-content-text flex">
        <span> HEY THERE !</span>
        <h2>I AM Barış Tunçdemir </h2>
        <h3>Frontend Developer </h3>
      </div>
     <Social/>
     </div>
    <a href="/project" className="project-btn">SEE MY WORK</a>
   </div>
   <div className="header-logo flex">
   <img src={Ben}  alt="" />
   </div> 
   </header>
   <h1>Benim Becerilerim</h1>
      {skillsData.map((skill, index) => (
        <Skill key={index} skillName={skill.name} skillLevel={skill.level} />
      ))}
  </div>;

}

export default Home;
