import React, { useState, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../../assests/css/admin.css";
function AdminLogin() {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
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
    },
    [form, navigate]
  );
  return (
    <div className="Admin-Panel Login-Panel flex">
      <div className="admin-container login flex">
        <div className="admin-form flex">
          <form action="" className="flex" onSubmit={handleSubmit}>
            <div className="form-card flex">
              <h4>User Name</h4>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="form-card flex">
              <h4>Password </h4>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
            </div>
            <button type="submit"> Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(AdminLogin);
