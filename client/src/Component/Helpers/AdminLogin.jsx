import React, { useState } from "react";

function AdminLogin() {
 const [form , setForm] = useState({
    name: "",
    password: ""
 })
  const handleChange = (e) =>{
    const {name, value} = e.target
   setForm((prevForm)=>({
    ...prevForm,
    [name]:value
   }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
     fetch( `${process.env.REACT_APP_HOST_URL}/admin` ,{
        method: "POST",
        headers: {"Content-Type": "application/Json"},
        body: JSON.stringify({form: form})
     })
    setForm({
        name:"",
        password:""
    })
  }


  return <div className="login">
    <form action="" className="flex" onSubmit={handleSubmit}>
        <input type="text"  name="name" onChange={handleChange} value={form.name} />
        <input type="password" name="password"   onChange={handleChange} value={form.password}/>
        <button type="submit"> Login</button>
    </form>
  </div>;
}

export default AdminLogin;
