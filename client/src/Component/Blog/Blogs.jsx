import {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import Loading from "../Helpers/Loading";
import Footer from "../Helpers/Footer";
import FooterContact from "../Card/FooterContact";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if(!blogs){
    return <Loading/>
  }
  return <div className="Blog flex">
     <div className="User-blog flex" >
     {
      blogs.map((blog) =>(
        <div className="single-blog-container" key={blog.id}>
        <Link className="flex" to={`/blogs/${blog.blogUrl}`}>
        <h2>{blog.header} </h2>
        <p> {blog.subtitle}</p>
       </Link>
       </div> 
      ))
     }
   
  </div>;
  <Footer/>
  </div>
}

export default Blogs;
