import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../../Blogs/formUtils";
function EditSkill() {
  const id = window.location.href.split("/").pop();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    skillName: "",
    skillLevel: "",
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/admin/panel/skill/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/Json" },
    })
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_HOST_URL}/admin/panel/skill/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ form: form }),
        }
      );

      if (response.ok) {
        console.log("POST işlemi başarılı!");
        navigate("/admin/panel/");
        console.error("POST işlemi başarısız!");
      }
    } catch (error) {
      console.error("POST işlemi sırasında bir hata oluştu:", error);
    }
    setForm(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="skillName"
        value={form.skillName}
        onChange={(e) => handleChange(e, form, setForm)}
      />
      <input
        type="number"
        max={100}
        min={0}
        name="skillLevel"
        value={form.skillLevel}
        onChange={(e) => handleChange(e, form, setForm)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditSkill;
