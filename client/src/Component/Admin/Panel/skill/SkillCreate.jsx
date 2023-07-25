import { useState } from "react";
import { handleChange } from "../../formUtils";
function SkillCreate({onSuccess}) {
  const [form, setForm] = useState({
    skillName: "",
    skillLevel: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      skillName: form.skillName.toUpperCase(),
      skillLevel: form.skillLevel,
    };
    const response = await fetch(
      `${process.env.REACT_APP_HOST_URL}/admin/panel/skill/create`,
      {
        method: "POST",
        headers: {"Content-Type": "application/Json"},
        body: JSON.stringify({ form: formData }),
      }
    );
    if (response.ok) {
      setForm({
        skillName: "",
        skillLevel: "",
      });
      onSuccess()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>Skill</h4>
        <input
          type="text"
          name="skillName"
          value={form.skillName}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>

      <div>
        <h4> Average</h4>
        <input
          type="number"
          min={0}
          max={100}
          name="skillLevel"
          value={form.skillLevel}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <div>
        <button type="submit"> Submit </button>
      </div>
    </form>
  );
}

export default SkillCreate;
