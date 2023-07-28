import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../../formUtils";

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

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formData = {
        ...form,
        skillName: form.skillName.toUpperCase(),
      };
      try {
        await fetch(
          `${process.env.REACT_APP_HOST_URL}/admin/panel/skill/${id}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ form: formData }),
          }
        );

        navigate("/admin/panel/");
      } catch (error) {
        console.error("POST işlemi sırasında bir hata oluştu:", error);
      }
    },
    [form, id, navigate]
  );

  return (
    <div className="Admin-Panel">
      <div className="admin-container">
        <div className="admin-form">
          <form className="flex  edit-form" onSubmit={handleSubmit}>
            <div className="form-card flex">
              <h2>Skill</h2>
              <input
                type="text"
                name="skillName"
                value={form.skillName}
                onChange={(e) => handleChange(e, form, setForm)}
              />
            </div>
            <div className="form-card flex">
              <h2>Average</h2>
              <input
                type="number"
                max={100}
                min={0}
                name="skillLevel"
                value={form.skillLevel}
                onChange={(e) => handleChange(e, form, setForm)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(EditSkill);
