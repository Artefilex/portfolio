import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const onEditorChange = (value) => {
    setForm((prevForm) => ({
      ...prevForm,
      content: value,
    }));
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
    <form onSubmit={handleSubmit}>
      <input
        name="header"
        type="text"
        value={form.header}
        onChange={handleChange}
        placeholder="Header"
      />

      <ReactQuill
        name="content"
        theme="snow"
        value={form.content}
        onChange={onEditorChange}
        modules={modules}
      />
      <button type="submit" className="btn btn-send" disabled={!form}></button>
    </form>
  );
}

export default CreateBlog;
