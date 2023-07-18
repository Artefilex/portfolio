
import Ben from "../assests/image/ben2.png";
import "../assests/css/main.css";
import Social from "./Social";
import Skill from "./Skills/Skill";
import IntroCard from "./Skills/IntroCard";

function Home() {
 
  return (
    <div className="main flex">
      <header className="flex">
        <div className="header-content flex">
          <div className="header-content flex">
            <div className="header-content-text flex">
              <span> HEY THERE !</span>
              <h2>I AM Barış Tunçdemir </h2>
              <h3>Frontend Developer </h3>
            </div>
            <Social />
          </div>
          <a href="/project" className="project-btn">
            SEE MY WORK
          </a>
        </div>
        <div className="header-logo flex">
          <div className="img-background"></div>
          <img src={Ben} alt="" />
          
        </div>
      </header>  
      <Skill/>
      <IntroCard/>
    </div>
  );
}

export default Home;
