import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../About";
import Blogs from "../../Blog/Blogs";
import Project from "../../Blog/Project";
import CreateBlog from "../../Blog/CreateBlog";
import Home from "../../Home";

function Location() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/blogs" Component={Blogs} />
      <Route path="/project" Component={Project} />
      <Route path="/project/createblog" Component={CreateBlog} />
    </Routes>
  );
}

export default Location;
