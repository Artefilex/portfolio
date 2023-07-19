import "../assests/css/main.css";
import Skill from "./Skills/Skill";
import IntroCard from "./Helpers/IntroCard";
import Header from "./Helpers/Header";
import FooterCard from "./Helpers/FooterCard";
import Footer from "./Helpers/Footer";

function Home() {
 
  return (
    <div className="main flex">
      <Header/>
      <Skill/>
      <IntroCard/>
      <FooterCard/>
      <Footer/>
    </div>
  );
}

export default Home;
