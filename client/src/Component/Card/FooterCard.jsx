import React, {  useEffect, useState } from "react";
import "../../assests/css/footer.css"
import {BsSend} from "react-icons/bs"
import {VscSend} from "react-icons/vsc"
import Aos from "aos";
import "aos/dist/aos.css";
function FooterCard() {
  const [userMail , setUserMail] = useState("")
  const handleChange = (e) => {
    const { value } = e.target;
    setUserMail(value); 
   
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userMail);
    fetch(`${process.env.REACT_APP_HOST_URL}/`,{
      method: "POST",
      headers: {"Content-Type": "application/Json"},
      body: JSON.stringify({ email: userMail })
     }).then(() =>{
       console.log("new mail ")
     })
    setUserMail(""); 
  };
  return <div className="flex footercard" data-aos="fade-up"
  data-aos-offset="200"
  data-aos-easing="ease-in-sine">
    <BsSend className="footer-icon"/>
     <h1>Subscribe to Stay Updated!</h1>
     <form  className="flex footer-sendmail" >
     <input onChange={handleChange} type="mail" name="mail" id="mail"  value={userMail}  />
     <button type="submit" className="btn-subscribe"  onClick={handleSubmit}> <VscSend className="footer-send-icon"/></button>
     </form>
    
  </div>;
}

export default FooterCard;
