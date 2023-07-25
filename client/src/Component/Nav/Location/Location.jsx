
import { Route, Routes } from "react-router-dom";
import About from "../../About";
import Blogs from "../../Blog/Blogs";
import BlogContainer from "../../Admin/Blogs/BlogContainer";
import Home from "../../Home";
import AdminLogin from "../../Helpers/AdminLogin"
import Cookies from "universal-cookie";
import BlogDetails from "../../Admin/Blogs/BlogDetails";
import AdminPanel from "../../Admin/Panel/AdminPanel";
import EditPortfoly from "../../Admin/Panel/portfoly/EditPortfoly";

function Location() {
  const cookies = new Cookies()

  if(cookies.get("isAdmin")){
    return <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/admin/blogs/:id" Component={BlogDetails} />
      <Route path="/admin/blogs" Component={BlogContainer} />
      <Route path="/admin" Component={AdminLogin} />
      <Route path="/admin/panel" Component={AdminPanel} />
      <Route path="/admin/panel/portfoly/:id" Component={EditPortfoly} />
    </Routes>
  }

  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/blogs" Component={Blogs} />
      <Route path="/admin" Component={AdminLogin} /> 
    </Routes>
  );
}

export default Location;
