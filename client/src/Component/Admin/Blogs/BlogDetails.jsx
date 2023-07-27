import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "../../../assests/css/blog.css"
import { useNavigate  } from "react-router-dom"
import { handleChange, onEditorChange } from "../formUtils";
function BlogDetails() {
const navigate = useNavigate()
  const [form, setForm] = useState({ header: "",subtitle:"", content: "" });

  const url = window.location.href;
  const urlParts = url.split("/");
  const lastPart = urlParts.pop();
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
    ...form,
     header: form.header.toUpperCase(),
     subtitle:  capitalizeFirstLetter(form.subtitle),
  
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/${lastPart}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [lastPart]);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/${lastPart}`, {
      method: "POST",
      headers: { "Content-Type": "application/Json" },
      body: JSON.stringify({ form: formData }),
    });
   navigate("/admin/blogs")

  };

  return (
  <div className="Blog-Panel flex">
   <div className="admin-container flex">
   <div className="admin-form flex">
     <form className="form-blog flex " onSubmit={handleSubmit}>
      <div  className="form-card flex">
        <h4>Header </h4>
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
     
      <button type="submit" className="btn btn-send" disabled={!form}>Edit Blog </button>
     
    </form>

   </div>
   </div>
  </div>
  );
}

export default BlogDetails;
