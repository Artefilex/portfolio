import React from "react";
import Header from "./Helpers/Header"
import Card from "./Card/Card";
import AboutSelf from "./Helpers/AboutSelf";
import Certicate from "./Helpers/Certicate";
import Skill from "./Skills/Skill"
import Footer from "./Helpers/Footer"
import FooterContact from "./Card/FooterContact";
function About() {
  return <div className="About flex">
    <Header/>
    <Skill/>
    <AboutSelf/>
    <Certicate/>
    <Card/>
    <FooterContact/>
  </div>;
}

export default About;
