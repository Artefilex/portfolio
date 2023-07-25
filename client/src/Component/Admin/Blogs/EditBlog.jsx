import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import DeleteBlog from "./DeleteBlog";
function EditBlog() {
  const [blogs,setBlog] = useState([]) 
  useEffect(()=>{
  fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs`,{
    method:"GET",
    headers:  { "Content-Type": "application/Json" }
  })
  .then((res) => res.json()) 
  .then((data) => setBlog(data))
   },[])
  return <div>
    <h1>Edit / Delete Blog</h1>
   {
    blogs.map((item) =>(
     <div key={item.id}>
        <Link to={`/admin/blogs/${item.blogUrl}`} >
           {item.header}
        </Link>
        <DeleteBlog  url={item.blogUrl} />  
     </div>
    ))
   }
  </div>;
}

export default EditBlog;
