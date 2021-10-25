import "../../css/Contact/Contact.css";
import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const email = () => {
  window.open("mailto:contact@chadcromwell.com");
};
const Contact = () => {
  return (
    <div className={"contact"}>
      <div className={"sectionHeader"}>
        <div className={"titleNumber roboto-thin"}>04.</div>
        <div className={"sectionTitle roboto-bold"}>Get In Touch With Me</div>
        <HorizontalLine />
      </div>
      <div className={"contactContent"}>
        <div className={"bodyText overpass"}>
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
