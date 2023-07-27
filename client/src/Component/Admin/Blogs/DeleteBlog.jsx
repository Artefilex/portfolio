import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
function DeleteBlog({  url , onSuccess}) {
  const deleteUrl = url
  
  const handleClick = async () => {
   await  fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/delete/${deleteUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({deleteUrl :  deleteUrl}),
    })

    onSuccess()
  };

  return (
      <button className="delete-btn" onClick={handleClick}><AiOutlineDelete /></button>
  );
}

export default DeleteBlog;
