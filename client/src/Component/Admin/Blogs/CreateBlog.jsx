import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { handleChange, onEditorChange } from "../formUtils";
function CreateBlog({onSuccess}) {
 
  const [form, setForm] = useState({
    header: "",
    subtitle:"",
    content: "",
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockqoute"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formData = {
     header: form.header.toUpperCase(),
     subtitle:  capitalizeFirstLetter(form.subtitle),
     content: form.content
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/create`, {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({ form: formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("request success", data);
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
    setForm({
      header: "",
      subtitle:"",
      content: "",
      
    });
    onSuccess()
  };

  return (

     <div className="admin-form flex">
      <h1>Create New Blog</h1>
    <form className="form-blog flex " onSubmit={handleSubmit}>
     <div className="form-card flex">
      <h4>Header</h4>
      <input
        name="header"
        type="text"
        value={form.header}
        onChange={(e) => handleChange(e, form, setForm)}
        placeholder="Header"
      />
     </div>

     <div className="form-card flex">
      <h4>Sub Title</h4>
      <input
        name="subtitle"
        type="text"
        value={form.subtitle}
        onChange={(e) => handleChange(e, form, setForm)}
        placeholder="Header"
      />
     </div>
     <div className="form-card flex">
      <ReactQuill
        name="content"
        theme="snow"
        value={form.content}
        onChange={(value) => onEditorChange(value, form, setForm)}
        modules={modules}
      />
      </div>
  
      <button type="submit" className="btn btn-send" disabled={!form}> Send Blog </button>
    </form>
    </div>

  );
}

export default CreateBlog;
