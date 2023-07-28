import { useState, memo, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Links() {
  const cookie = useMemo(() => new Cookies(), []);

  const navigate = useNavigate();

  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = useCallback(async () => {
    if (logoutLoading) return;
    setLogoutLoading(true);
    try {
      cookie.remove("isAdmin");
      navigate("/");
    } catch (error) {
      console.error("Logout işlemi sırasında bir hata oluştu:", error);
    } finally {
      setLogoutLoading(false);
    }
  }, [logoutLoading, navigate, cookie]);

  if (cookie.get("isAdmin")) {
    return (
      <>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/blogs"> Blogs Management</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin/panel">Admin Panel</Link>
        </li>
        <li>
          {" "}
          <Link to="/admin" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      </>
    );
  }
  return (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about"> About </Link>
      </li>
      <li>
        {" "}
        <Link to="/blogs"> Blogs </Link>
      </li>
    </>
  );
}

export default memo(Links);
