import React, { useEffect, useState } from "react";


function BlogDetails() {
const [form , setForm] = useState([])
 const url = window.location.href
 const urlParts = url.split("/");
 const lastPart = urlParts.pop();
  
useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/${lastPart}`,{
        method:"GET",
        headers:  { "Content-Type": "application/Json" }
      })
      .then((res) => res.json()) 
      .then((data) =>setForm(data) )
  }, [lastPart]);
  
 console.log(form)
  return (
    <div>
   
    </div>
  );
}

export default BlogDetails;
