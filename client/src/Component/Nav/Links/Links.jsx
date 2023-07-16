import React from "react";
import { Link } from "react-router-dom";
function Links() {
  return <>
 <li> <Link to="/">Main</Link></li>
  <li><Link to="/about"> About </Link></li>
 <li> <Link to="/contact"> Contact </Link></li>
 <li> <Link to="/project"> Project </Link></li>
  </>;
}

export default Links;
