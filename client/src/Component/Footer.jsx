import React from "react";
import Nav from "./Nav/Nav";
import "../assests/css/footer.css";
import Map from "../assests/Map";
function Footer() {
  return (
    <footer className="flex">
      <div className="footer-side flex">
        <div className="map flex">
          <Map />
        </div>
        <div className="footer-left flex">
          
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
