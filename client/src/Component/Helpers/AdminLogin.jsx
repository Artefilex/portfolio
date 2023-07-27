import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function AdminLogin() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_HOST_URL}/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/Json" },
          body: JSON.stringify({ form: form }),
        }
      );
      if (response.ok) {
        const cookies = await new Cookies();
        cookies.set("isAdmin", true, { path: "/" });
      }
    } catch (err) {
      console.log("Fetch işlemi sırasında bir hata oluştu: ", err);
    }
    setForm({ name: "", password: "" });
    navigate("/");
  };
  return (
    <div className="login">
      <form action="" className="flex" onSubmit={handleSubmit}>
        <div className="form-card">
          <h4>User Name</h4>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="form-card">
          <h4>Password </h4>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <div className="form-card">
          <button type="submit"> Login</button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
