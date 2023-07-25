import  {useState,useEffect} from "react";
import CreateBlog from "./CreateBlog"
import EditBlog from "./EditBlog"
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


  return <div className="flex">
    <CreateBlog  onSuccess={handlePostSuccess} />
    <EditBlog  blogs={blogs}  onSuccess={handlePostSuccess} />
  </div>;
}

export default BlogContainer;
