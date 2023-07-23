import React from "react";
import CreateBlog from "./CreateBlog"
import EditBlog from "./EditBlog"
function BlogContainer() {
  return <div className="flex">
    <CreateBlog/>
    <EditBlog/>
  </div>;
}

export default BlogContainer;
