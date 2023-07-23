import React, { useState } from "react";
import { useNavigate  } from "react-router-dom"
import Cookies from "universal-cookie";

function AdminLogin() {

 const [form , setForm] = useState({
    name: "",
    password: ""
 })
 const navigate = useNavigate()
  const handleChange = (e) =>{
    const {name, value} = e.target
   setForm((prevForm)=>({
    ...prevForm,
    [name]:value
   }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_URL}/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify({ form: form })
      });

      if (response.ok) {
        const cookies = await new Cookies()
        cookies.set("isAdmin", true, {path: "/"} )
      } 
    } catch (err) {
      console.log("Fetch işlemi sırasında bir hata oluştu: ", err);
    }

    setForm({
      name: "",
      password: ""
    });

    navigate("/");
  };
  return <div className="login">
    <form action="" className="flex" onSubmit={handleSubmit}>
        <input type="text"  name="name" onChange={handleChange} value={form.name} />
        <input type="password" name="password"   onChange={handleChange} value={form.password}/>
        <button type="submit"> Login</button>
    </form>
  </div>;
}

export default AdminLogin;
