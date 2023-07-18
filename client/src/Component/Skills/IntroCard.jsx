import React from "react";
import "../../assests/css/skill.css";
import Social from "../../assests/image/Intro/3426526.jpg"
import Proggraming from "../../assests/image/Intro/proggraming.jpg"
import SocialIcon from "../Social"
import Contact from "../../assests/image/Intro/contact.jpg"
function IntroCard() {
  return (
    <div className="IntroCard flex">
      <div className="IntroCard-contanier flex">
        <div className="Introcard-context left-card ">
          <h2>What I Do</h2>
          <p>
            I'm a passionate web developer with a focus on building interactive
            and user-friendly web applications. My journey started 2.5 years
            ago, and I've been honing my skills ever since.
          </p>
        </div>
          <img src={Social} alt="" /> 
      </div>
      <div className="IntroCard-contanier flex">
        <img src={Proggraming}  alt="" />
        <div className="Introcard-context  right-card">
          <h2>GitHub Highlights</h2>
         
          <p>
            On GitHub, you can find a variety of projects that showcase my
            dedication and love for coding. From simple HTML/CSS pages to
            complex React applications and back-end projects with Node.js, I'm
            always eager to take on new challenges.
          </p>
        </div>
        <img src="" alt="" />
      </div>
      <div className="IntroCard-contanier flex">
        <div className="Introcard-context center-card">
          <h2>Let's Connect!</h2>
          <p>
            I'm open to collaborations and always excited to learn from others.
            If you're interested in working together or want to know more about
            my projects, feel free to contact me:
          </p> 
          <SocialIcon/>
        </div>
        <img src={Contact }  alt="" />
        
      </div>
    </div>
  );
}

export default IntroCard;
