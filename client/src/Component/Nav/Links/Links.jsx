import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Links() {
  const cookie = new Cookies()
  const navigate = useNavigate()
  const handleLogout = () =>{
    cookie.remove("isAdmin")
    navigate("/");
   }


  if(cookie.get("isAdmin")){
    
 return <>
  <li> <Link to="/">Home</Link></li>
  <li> <Link to="/admin/blogs"> Blogs Management</Link></li>
  <li> <Link to="/admin/panel">Admin Panel</Link></li>
  <li> <Link to="/logout" onClick={handleLogout}>Logout</Link></li>
  </>;
  }
  return <>
  <li> <Link to="/">Home</Link></li>
  <li><Link to="/about"> About </Link></li>
  <li> <Link to="/blogs"> Blogs </Link></li>
  </>;
}

export default Links;
