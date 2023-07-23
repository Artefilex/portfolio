import {useState,useEffect} from "react";

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
      blogs.map((blog) =>(<div key={blog.id}>
       <h1>{blog.header} </h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}>     
        </div>
      </div>  
      ))
     }
  </div>;
}

export default Blogs;
