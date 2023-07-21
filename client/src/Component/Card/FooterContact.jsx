import React, { useState } from "react";
import "../../assests/css/contact.css";

function FooterContact() {
 const [form ,setForm] = useState({
  fullname: "",
  email: "",
  message: ""
 })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prevForm) =>({
        ...prevForm,
        [name]: value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setForm({
        fullname: "",
        email: "",
        message: "",
      });   
  };

  return (
    <div className="Contact flex">
        <div className="form-container flex">
        <h2> Contact Me </h2>
        </div>
      <div className="form-container flex">
        <h2> Send Message </h2>
        <form className="contact-form flex" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            id="hirename"
            placeholder="Name Surname"
            onChange={handleChange}
            value={form.fullname}
          />
          <input
            type="email"
            name="email"
            id="hiremail"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />
          <textarea
            name="message"
            id="textarea"
            rows="10"
          
            placeholder="Comment..."
            onChange={handleChange}
            value={form.message}
          ></textarea>
          <button className="btn btn-send" disabled={!form} type="submit">
            <span> Send </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterContact;
