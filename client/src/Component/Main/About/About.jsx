import React from "react";
import Header from "../../Helpers/Header"
import Card from "../../Card/Card";
import AboutSelf from "../../Helpers/AboutSelf";
import Certicate from "../../Helpers/Certicate";
import Skill from "../../Skills/Skill"
function About() {
  return <div className="About flex">
    <Header/>
    <Skill/>
    <AboutSelf/>
    <Certicate/>
    <Card/>
  
  </div>;
}

export default About;
