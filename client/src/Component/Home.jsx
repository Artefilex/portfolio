import "../assests/css/main.css";
import IntroCard from "./Card/IntroCard";
import Header from "./Helpers/Header";
import FooterCard from "./Card/FooterCard";
import Footer from "./Helpers/Footer";
import SkillCard from "./Card/SkillCard";

function Home() {
 
  return (
    <div className="main flex">
      <Header/>
      <SkillCard/>
      <IntroCard/>
      <FooterCard/>
      <Footer/>
    </div>
  );
}

export default Home;
