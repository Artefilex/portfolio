import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="Blog-Details">
      <div className="single-blog">
        <div className="single-blog-header">
          <h1>{blog.header}</h1>
          <p>{blog.subtitle}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </div>
      <div className="other-blog">
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
  );
}

export default BlogsDetail;
