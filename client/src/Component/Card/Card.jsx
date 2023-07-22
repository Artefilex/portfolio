import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assests/css/card.css";
function Card() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${process.env.REACT_APP_HOST_URL}/project`);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const result = await response.json();
        setProject(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Project-container flex">
      <h1> Websites</h1>
      {projects.map((project) => (
        <div className="project-info flex" key={project.id}>
          <div className="project-header flex">
            <h2>{project.header}</h2>
            <div className="scrollable">
              <p>{project.content}</p>
            </div>
            <Link className="btn-project" to={`${project.projecturl}`}>
              {" "}
              <span>Go to Project</span>{" "}
            </Link>
          </div>
          <div className="project-iframe flex">
            <iframe
              title={project.id}
              src={`${project.projecturl}`}
              width="100%"
              height="400"
             
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
