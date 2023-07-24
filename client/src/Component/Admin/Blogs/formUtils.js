export const handleChange = (e, form, setForm) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  
  export const onEditorChange = (value, form, setForm) => {
    setForm((prevForm) => ({
      ...prevForm,
      content: value,
    }));
  };