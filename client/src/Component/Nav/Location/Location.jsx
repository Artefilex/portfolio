import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../Main/About/About";
import Contact from "../../Main/Contact/Contact";
import Project from "../../Blogapp/Project";
import CreateBlog from "../../Blogapp/CreateBlog";
import Home from "../../Home";

function Location() {
  return <Routes>
    <Route path="/" exact Component={Home} />
    <Route path="/about" Component={About} />
    <Route path="/contact" Component={Contact} />
    <Route path="/project" Component={Project} />
    <Route path="/project/createblog" Component={CreateBlog} />
    </Routes>;
}

export default Location;
