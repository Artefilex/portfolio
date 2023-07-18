import React from "react";
import { Link } from "react-router-dom";
function Links() {
  return <>
 <li> <Link to="/">Home</Link></li>
  <li><Link to="/about"> About </Link></li>
 <li> <Link to="/contact"> Blog </Link></li>
 <li> <Link to="/project"> Portfolio </Link></li>
  </>;
}

export default Links;
