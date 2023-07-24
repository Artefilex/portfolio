import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate  } from "react-router-dom"
import { handleChange, onEditorChange } from "./formUtils";
function BlogDetails() {
const navigate = useNavigate()
  const [form, setForm] = useState({ header: "", content: "" });

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
      body: JSON.stringify({ form: form }),
    });
    setForm(form);
   navigate("/admin/blogs")

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="header"
        type="text"
        value={form.header}
        onChange={(e) => handleChange(e, form, setForm)}
        placeholder="Header"
      />

      <ReactQuill
        name="content"
        theme="snow"
        value={form.content}
        onChange={(value) => onEditorChange(value, form, setForm)}
        modules={modules}
      />
      <button type="submit" className="btn btn-send" disabled={!form}></button>
    </form>
  );
}

export default BlogDetails;
