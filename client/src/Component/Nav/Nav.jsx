import React from "react";
import Links from "./Links/Links";
import "../../assests/css/nav.css"
import Logo from "../../assests/image/logo.png"
function Nav() {
  return <nav className="navbar flex">
    <div className="navbar-logo flex">
        <a className="flex" href="/"> < img src={Logo}   alt="" /></a>
    </div>
    <div className="navbar-item  ">
        <ul className="flex">
          <Links/>
        </ul>
    </div>
    </nav>;
}

export default Nav;
