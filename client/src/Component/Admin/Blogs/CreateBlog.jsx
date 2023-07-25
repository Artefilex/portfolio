import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { handleChange, onEditorChange } from "./formUtils";
function CreateBlog() {
  const [form, setForm] = useState({
    header: "",
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
 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/blogs/create`, {
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
      content: "",
    });
  };

  return (
    <div>
      <h1>Create New Blog</h1>
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
      <button type="submit" className="btn btn-send" disabled={!form}> Send Blog </button>
    </form>
    </div>
  );
}

export default CreateBlog;
