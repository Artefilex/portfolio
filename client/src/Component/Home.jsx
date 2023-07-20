import "../assests/css/main.css";

import IntroCard from "./Helpers/IntroCard";
import Header from "./Helpers/Header";
import FooterCard from "./Helpers/FooterCard";
import Footer from "./Helpers/Footer";
import SkillCard from "./Helpers/SkillCard";

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
