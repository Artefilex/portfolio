import React, {  useState } from "react";
import "../../assests/css/footer.css"
import {BsSend} from "react-icons/bs"
import {VscSend} from "react-icons/vsc"
function FooterCard() {
  const [userMail , setUserMail] = useState("")
  const handleChange = (e) => {
    const { value } = e.target;
    setUserMail(value); 
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userMail);
    fetch("http://localhost:4000/",{
      method: "POST",
      headers: {"Content-Type": "application/Json"},
      body: JSON.stringify({ email: userMail })
     }).then(() =>{
       console.log("new mail ")
     })
    setUserMail(""); 
  };
  return <div className="flex footercard">
    <BsSend className="footer-icon"/>
     <h1>Subscribe to Stay Updated!</h1>
     <form  className="flex" >
     <input onChange={handleChange} type="mail" name="mail" id="mail"  value={userMail}  />
     <button type="submit" className="btn-subscribe"  onClick={handleSubmit}> <VscSend className="footer-send-icon"/></button>
     </form>
    
  </div>;
}

export default FooterCard;
