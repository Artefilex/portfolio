import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Helpers/Loading";
import FooterContact from "../Card/FooterContact";


function BlogsDetail() {
  const baseUrl = window.location.origin;
  const url = window.location.href.split("/").pop();
  const [blog, setBlog] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/blogs/${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.blog);
        setBlogs(data.blogs);
      });
  }, [url]);
  if(!blog){
    return <Loading/>
  }

  return (
    <div className="Blog flex">
  
    <div className="Blog-Details flex">
      <div className="single-blog flex">
        <div className="single-blog-header">
          <h2>{blog.header}</h2>
          <p>{blog.subtitle}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
      <div className="other-blog flex">
        {blogs.map((item) => (
          <div key={item.id} className="blog-link">
            <Link to={`${baseUrl}/blogs/${item.blogUrl}`}>
              <h3>{item.header}</h3>
              <p>{item.subtitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>  
    
    <FooterContact/>
    
    </div>
  );
}

export default BlogsDetail;
