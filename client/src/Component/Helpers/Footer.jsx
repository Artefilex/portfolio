import React, { useEffect, memo } from "react";
import Logo from "../../assests/image/main/logo.png";
import "../../assests/css/footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  const getFullYear = new Date().getFullYear();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <footer
      className="flex"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <img src={Logo} alt="" />
      <div className="footer-side flex">
        <div className="flex">
          <span> Copyright ©{getFullYear} All rights reserved </span>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
