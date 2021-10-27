import "../../css/Contact/Contact.css";
import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const email = () => {
  window.open("mailto:contact@chadcromwell.com");
};
const Contact = () => {
  return (
    <div className={"contact"}>
      <div className={"contactSectionHeader"}>
        <div className={"contactTitleNumber roboto-thin"}>04.</div>
        <div className={"contactSectionTitle roboto-bold"}>Get In Touch With Me</div>
          <div className={"contactHorizontalLine"}>
        <HorizontalLine />
          </div>
      </div>
      <div className={"contactContent"}>
        <div className={"contactBodyText overpass"}>
          Working on an interesting project? I'd love to hear about it. Send me
          a message!
        </div>
        <div className={"buttonWrapper"}>
          <button onClick={email} className={"emailButton"}>
            To: Chad
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
