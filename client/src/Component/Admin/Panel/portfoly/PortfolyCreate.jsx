import React, { memo, useCallback, useMemo, useState } from "react";
import { handleChange } from "../../formUtils";

function PortfolyCreate({ onSuccess }) {
  const [form, setForm] = useState({
    header: "",
    content: "",
    projecturl: "",
  });

  const formData = useMemo(() => {
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return {
      ...form,
      header: form.header.toUpperCase(),
      subtitle: capitalizeFirstLetter(form.header),
    };
  }, [form]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await fetch(
        `${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/Json" },
          body: JSON.stringify({ form: formData }),
        }
      );
      if (response.ok) {
        setForm({
          header: "",
          content: "",
          projecturl: "",
        });
      }
      onSuccess();
    },
    [onSuccess, formData]
  );

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="form-card flex">
        <h4> Header</h4>
        <input
          type="text"
          name="header"
          value={form.header}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <div className="form-card flex">
        <h4> Content</h4>
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          value={form.content}
          onChange={(e) => handleChange(e, form, setForm)}
        ></textarea>
      </div>
      <div className="form-card flex">
        <h4> Project Url</h4>
        <input
          type="text"
          name="projecturl"
          value={form.projecturl}
          onChange={(e) => handleChange(e, form, setForm)}
        />
      </div>
      <button type="submit"> Submit Project </button>
    </form>
  );
}

export default memo(PortfolyCreate);
