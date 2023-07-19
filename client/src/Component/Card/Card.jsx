import {useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import "../../assests/css/card.css"
function Card() {
  
  const [projects, setProject] = useState([])

  useEffect( () =>{
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/project");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        setProject(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
     fetchData()
    },[])
  

  return <div className="Project-container flex">
 {projects.map((project) => (
        <div className="project-info flex" key={project.id}>
          <div className="project-header flex">
          <h3>{project.header}</h3>
            <div className="scrollable" ><p >{project.content}</p></div>
            <Link className="btn-project" to={`${project.projecturl}`}>  <span>{project.header}</span> </Link>
          </div>
        <div className="project-img flex">
          <iframe title={project.id} src={`${project.projecturl}`}  width="400" height="400"></iframe>
      
        </div>
        </div>
      ))}
  </div>;
}

export default Card;
