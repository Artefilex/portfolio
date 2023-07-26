import {useState,useEffect} from "react";
import {Link} from "react-router-dom"
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_HOST_URL}/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
 
  console.log(blogs)

  return <div >
     {
      blogs.map((blog) =>(
        <div key={blog.id}>
        <Link to={`/blogs/${blog.blogUrl}`}>
        <h1>{blog.header} </h1>
        <p> {blog.subtitle}</p>
       </Link>
       </div> 
      ))
     }
  </div>;
}

export default Blogs;
