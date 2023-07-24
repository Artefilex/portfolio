import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
function DeleteBlog({  url }) {
  const deleteUrl = url

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/delete/${deleteUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deleteUrl}),
    }).then((response) => {    
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Error deleting blog:", error);
    });
  };

  return (
    <div>
      <button onClick={handleClick}><AiOutlineDelete /></button>
    </div>
  );
}

export default DeleteBlog;
