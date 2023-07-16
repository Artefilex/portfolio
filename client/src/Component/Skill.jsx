import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "../Reducer/skillreducer";
import "../assests/css/skill.css";
function Skill() {
  const { skills, loading } = useSelector((state) => state.skills);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  if (loading) {
    return <h2> loading... </h2>;
  }

  return (
    <div className="skill-content flex">
      <h2>Skills</h2>
      <div className="skill-container flex">
        {skills &&
          skills.map((skill, index) => (
            <div className="skill-item flex" key={index}>
           <div className="skill-item-header flex">
           <h4>{skill.skillName} :</h4>
            <h5>
                  {
                    skill.skillLevel <50 ? "Begginer" :  skill.skillLevel <=70 ? "Intermediate " : "Advanced"
                  }
                  </h5>
           </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.skillLevel}%` }}
                >
                  
                </div>
              </div>  
              </div>
       
              
          ))}
      </div>
    </div>
  );
}

export default Skill;
