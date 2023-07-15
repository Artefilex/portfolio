import React from "react";
import Links from "./Links/Links";


function Nav() {
  return <nav className="navbar flex">
    <div className="navbar-logo ">
        
    </div>
    <div className="navbar-item  flex">
        <ul>
          <Links/>
        </ul>
    </div>
    </nav>;
}

export default Nav;
