import React from "react";
import { Link } from "react-router-dom";
function Links() {
  return <>
  <Link to="/">Main</Link>
  <Link to="/about"> About </Link>
  <Link to="/contact"> Contact </Link>
  <Link to="/project"> Project </Link>
  </>;
}

export default Links;
