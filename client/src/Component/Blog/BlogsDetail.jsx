import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import Loading from "../Helpers/Loading";
import FooterContact from "../Card/FooterContact";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return { ...state, blogs: action.payload };
    case "SET_BLOG":
      return { ...state, blog: action.payload };
    default:
      return state;
  }
};

function BlogsDetail() {
  const baseUrl = window.location.origin;
  const url = window.location.href.split("/").pop();
  const initialState = {
    blog: null,
    blogs: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/blogs/${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => {
        // State değişikliklerini birleştirmek için useReducer kullanalım
        dispatch({ type: "SET_BLOG", payload: data.blog });
        dispatch({ type: "SET_BLOGS", payload: data.blogs });
      });
  }, [url]);

  // state değişkenlerine daha rahat erişelim
  const { blog, blogs } = state;

  if (!blog) {
    return <Loading />;
  }
  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="Blog flex">
      <div className="Blog-Details flex">
        <div className="single-blog flex">
          <div className="single-blog-header flex">
            <h3>{blog.header}</h3>
            <h4>{blog.subtitle}</h4>
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

      <FooterContact />
    </div>
  );
}

export default BlogsDetail;
