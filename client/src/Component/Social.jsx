import React from "react";
import {  AiOutlineGithub } from "react-icons/ai"
import {BsFillTelephoneFill } from "react-icons/bs"
import {HiMail} from "react-icons/hi"
import {BsTwitter} from "react-icons/bs"

function Social() {
  return <div className="soccial-icons flex">
  <a href="https://github.com/Artefilex"> <AiOutlineGithub/></a>
  <a href="https://twitter.com/baris_tuncdemir"><BsTwitter/></a>
  <a href="tel:+905061210625"> <BsFillTelephoneFill/></a>
  <a href="mailTo:baris.tncdmr@gmail.com"> <HiMail/></a>
   </div>;
}

export default Social;
