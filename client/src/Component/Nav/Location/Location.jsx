import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../Main/About/About";
import Blog from "../../Main/Blog/Blog";
import Project from "../../Blogapp/Project";
import CreateBlog from "../../Blogapp/CreateBlog";
import Home from "../../Home";

function Location() {
  return <Routes>
    <Route path="/" exact Component={Home} />
    <Route path="/about" Component={About} />
    <Route path="/blog" Component={Blog} />
    <Route path="/project" Component={Project} />
    <Route path="/project/createblog" Component={CreateBlog} />
    </Routes>;
}

export default Location;
