import  {useState,useEffect} from "react";
import CreateBlog from "./CreateBlog"
import EditBlog from "./EditBlog"
import "../../../assests/css/blog.css"
function BlogContainer() {
  const [blogs,setBlog] = useState([]) 
  const  fetchPanelData = async () =>{
   await  fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs`,{
      method:"GET",
      headers:  { "Content-Type": "application/Json"}
    })
    .then((res) => res.json()) 
    .then((data) => setBlog(data))
  }
  
   useEffect(() => {
    fetchPanelData()
  }, []);
  const handlePostSuccess = () => {
    fetchPanelData();
  };


  return <div className="Blog-Panel flex">
   <div className="admin-container">
   <CreateBlog  onSuccess={handlePostSuccess} />
   </div>
   <div className="admin-container">
   <EditBlog  blogs={blogs}  onSuccess={handlePostSuccess} />
   </div>
   
  </div>;
}

export default BlogContainer;
