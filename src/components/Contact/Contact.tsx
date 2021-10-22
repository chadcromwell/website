import "../../css/Contact/Contact.css";
import React from "react";

const Contact = () => {
    return (
        <div className={"contact"}>
            <div className={"sectionHeader"}>
                <div className={"sectionTitle roboto-bold"}>
                    <span className={"titleNumber roboto-thin"}>04. </span>
                    Get In Touch With Me
                </div>
            </div>
            <div className={"bodyText overpass"}>
                Working on an interesting project? I'd love to hear about it. Send me a message!
            </div>
        </div>
    );
};

export default Contact;
