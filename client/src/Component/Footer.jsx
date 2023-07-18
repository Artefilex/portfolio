import React from "react";
import Logo from "../assests/image/logo.png"
import "../assests/css/footer.css";

function Footer() {
  return (
    <footer className="flex">
      <Logo/>
      <div className="footer-side flex">
          <h3>FOLLOW ME</h3>
        <div className="flex">
          ---icon-- 
          linkedin twitter github medium 
        </div> 
       <span>  Copyright ©2023 All rights reserved </span>
        </div>
       
    </footer>
  );
}

export default Footer;
