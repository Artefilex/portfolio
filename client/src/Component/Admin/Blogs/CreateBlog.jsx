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
 

  const handleSubmit = async (e) => {
    e.preventDefault();
   await fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/create`, {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({ form: form }),
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
    <div className="form-card">
      <h1>Create New Blog</h1>
    <form onSubmit={handleSubmit}>
     <div>
      <h4>Header</h4>
      <input
        name="header"
        type="text"
        value={form.header}
        onChange={(e) => handleChange(e, form, setForm)}
        placeholder="Header"
      />
     </div>

     <div className="form-card">
      <h4>Sub Title</h4>
      <input
        name="subtitle"
        type="text"
        value={form.subtitle}
        onChange={(e) => handleChange(e, form, setForm)}
        placeholder="Header"
      />
     </div>
     <div className="form-content">
      <ReactQuill
        name="content"
        theme="snow"
        value={form.content}
        onChange={(value) => onEditorChange(value, form, setForm)}
        modules={modules}
      />
      </div>
      <div className="form-card">
      <button type="submit" className="btn btn-send" disabled={!form}> Send Blog </button>
      </div>
    </form>
    </div>
  );
}

export default CreateBlog;
