import React, { useState } from "react";
import "../../assests/css/contact.css";
import { BsTelephone } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
function FooterContact() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <div className="flex contact-form contact-icon ">
            <div className="flex contact-info">
                <BsTelephone className="icon"/>
                <p>
                 +905061210625
                </p>
            </div>
            <div className="flex contact-info">
            <FiMail className="icon" /> <p> baris.tncdmr@gmail.com</p>
            </div>
            <div className="flex contact-info">
            <CiLocationOn className="icon"/> 
            <p> Sancaktepe/Istanbul </p>

            </div>
            <div className="flex contact-info">
            <RxTwitterLogo className="icon"/> <p>@baris_tuncdemir</p>
            </div>
         
            
        
          
        
         </div>
      </div>
      <div className="form-container flex">
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
            rows="5"
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
