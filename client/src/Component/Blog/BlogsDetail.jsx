import React, { useEffect, useState } from "react";

function BlogsDetail() {
const url = window.location.href.split("/").pop()
const [blog,setBlog] = useState([])
    useEffect(() =>{
    fetch(`${process.env.REACT_APP_HOST_URL}/blogs/${url}`,{
        method: "GET",
        headers: {"Content-Type":"application/Json"}
    })
    .then(res => res.json())
    .then(data=>setBlog(data))
},[url])

console.log(blog)

  return <div>
    {blog.header}
  <div dangerouslySetInnerHTML={{ __html: blog.content }}>
  </div>
  </div>;
}

export default BlogsDetail;
