import { useEffect ,memo} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "../../Reducer/skillreducer";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../assests/css/skill.css";
import SkillCard from "../Card/SkillCard";
function Skill() {
  const { skills, loading } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  if (loading) {
    return <h2> loading... </h2>;
  }

  return (
        <div className="skill-content flex" >
          <div className="flex">
            <div className="skill-container flex" >
              {skills &&
                skills.map((skill, index) => (
                  <div className="skill-item flex" key={index} data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration={`${index * 10} + 10`}>
                    <div className="skill-item-header flex">
                      <h4>{skill.skillName} :</h4>
                      <h5>
                        {skill.skillLevel < 50
                          ? "Begginer"
                          : skill.skillLevel <= 70
                          ? "Intermediate "
                          : "Advanced"}
                      </h5>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${skill.skillLevel}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <SkillCard />
        </div>
   
  );
}

export default memo( Skill );
