import { memo } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";

function Social() {
  return (
    <div className="soccial-icons flex">
      <a href="https://github.com/Artefilex">
        {" "}
        <AiOutlineGithub className="contact-icon github" />
      </a>
      <a href="https://twitter.com/baris_tuncdemir">
        <BsTwitter className="contact-icon" />
      </a>
      <a href="tel:+905061210625">
        {" "}
        <BsFillTelephoneFill className="contact-icon" />
      </a>
      <a href="mailTo:baris.tncdmr@gmail.com">
        {" "}
        <HiMail className="contact-icon" />
      </a>
    </div>
  );
}

export default memo(Social);
