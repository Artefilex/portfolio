import React, { memo } from "react";
import { Link } from "react-router-dom";
import DeleteBlog from "./DeleteBlog";
function EditBlog({ blogs, onSuccess }) {
  return (
    <div className="admin-card flex">
      <h1>Edit / Delete Blog</h1>
      {blogs.map((item) => (
        <div className="single-card flex" key={item.id}>
          <Link to={`/admin/blogs/${item.blogUrl}`}>
            <span>{item.header}</span>
          </Link>
          <DeleteBlog onSuccess={onSuccess} url={item.id} />
        </div>
      ))}
    </div>
  );
}

export default memo(EditBlog);
