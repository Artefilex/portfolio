import React, { useState, useEffect, memo , useCallback} from "react";
import Links from "./Links/Links";
import "../../assests/css/nav.css";
import Logo from "../../assests/image/main/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
function Nav() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);

  const handleClick = useCallback(() => {
    setShow(!show);
  },[show])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 630);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar flex">
      <div className="navbar-logo flex">
        <Link className="flex" to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-item flex ">
        <div className="navbar-links flex">
          {
            <ul className={`${show ? "active" : ""}`}>
              {" "}
              <Links />
            </ul>
          }
        </div>
        {isMobile && (
          <div className="navbar-btn flex">
            {show ? (
              <button onClick={handleClick}>
                {" "}
                <GrClose />{" "}
              </button>
            ) : (
              <button onClick={handleClick}>
                <GiHamburgerMenu />{" "}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Nav);
