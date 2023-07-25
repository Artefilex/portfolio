import React, { useEffect, useState } from "react";
import { handleChange } from "../../Blogs/formUtils";
import { useNavigate } from "react-router-dom";
function EditPortfoly() {
 const navigate = useNavigate()
  const id = window.location.href.split("/").pop()
  const [form, setForm] = useState({
    header: "",
    content: "",
    projecturl: "",
  });
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/${id}`,{
      method: "GET",
      headers: {"Content-Type": "application/Json"}
    })
    .then(res=>res.json())
    .then(data=>setForm(data))
  },[id])

  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
      const response = await fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: form }),
      });
  
      if (response.ok) {
        console.log("POST işlemi başarılı!");
        navigate("/admin/panel/"); 
      } else {
        console.error("POST işlemi başarısız!");
      }
    } catch (error) {
      console.error("POST işlemi sırasında bir hata oluştu:", error);
    }
    setForm(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>header</h2>
        <input
          type="text"
          name="header"
          value={form.header}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <div>
        <h2>content</h2>
        <textarea
          type="text"
          name="content"
          value={form.content}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <div>
        <h2> Url</h2>
        <input
          type="text"
          name="projecturl"
          value={form.projecturl}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <div>
        <button type="submit"> Submit</button>
      </div>
    </form>
  );
}

export default EditPortfoly;
