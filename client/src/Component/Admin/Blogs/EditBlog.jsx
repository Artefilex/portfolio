import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import DeleteBlog from "./DeleteBlog";
function EditBlog({blogs , onSuccess}) {
 
  return <div>
    <h1>Edit / Delete Blog</h1>
   {
    blogs.map((item) =>(
     <div key={item.id}>
        <Link to={`/admin/blogs/${item.blogUrl}`} >
           {item.header}
        </Link>
        <DeleteBlog onSuccess={onSuccess}  url={item.blogUrl} />  
     </div>
    ))
   }
  </div>;
}

export default EditBlog;
