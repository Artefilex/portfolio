import React from "react";
import Logo from "../../assests/image/main/logo.png";
import "../../assests/css/footer.css";

function Footer() {
   const getFullYear = new Date().getFullYear()

  return (
    <footer className="flex">
      <img src={Logo} alt="" />
      <div className="footer-side flex">
        <div className="flex">
        <span> Copyright ©{getFullYear} All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
