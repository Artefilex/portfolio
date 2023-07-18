import "../assests/css/main.css";
import Skill from "./Skills/Skill";
import IntroCard from "./Helpers/IntroCard";
import Header from "./Helpers/Header";

function Home() {
 
  return (
    <div className="main flex">
      <Header/>
      <Skill/>
      <IntroCard/>
    </div>
  );
}

export default Home;
