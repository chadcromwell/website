import React from "react";
import "../../css/fonts.css";
import "../../css/About/About.css";
import DiceBullet from "../DiceBullet/DiceBullet";
import chadCromwellPhoto from "../../images/me.jpg";

const leftList = [
  "Java",
  "Meteor",
  "JavaScript",
  "Python",
]

const rightList= [
  "Docker",
  "React",
  "Node",
  "AWS",
]
const About = () => {
  return (
    <div className={"aboutMe"}>
      <div className={"leftContent"}>
        <div className={"sectionHeader"}>
          <div className={"sectionTitle roboto-bold"}>
            <span className={"titleNumber roboto-thin"}>01. </span>
            About Me
          </div>
        </div>
        <div className={"bodyText overpass"}>
          My name is Chad Cromwell. I'm a software developer from Ontario,
          Canada who loves making and learning new things. From design to
          implementation, I always enjoy a new challenge and finding optimal
          solutions to unique problems.
          <br />
          <br />
          I currently work for Housescope as a Full Stack Software Developer
          designing and developing a radiation dose management system for
          medical physicists. The software gathers data from medical imaging
          equipment, maps protocols through machine learning and OCR, aggregates
          the data, performs analytics, and warns of outliers to enable
          hospitals and healthcare networks to be compliant with radiation dose
          management standards.
          <br />
          <br />
        </div>
        <div className={"whatImWorkingWithLately"}>
          <div className={"listOneHeader overpass"}>
            What I've been working with lately:
          </div>
            <div className={"list overpass"}>
              <div className={"leftColumn"}>
                <DiceBullet textArray={leftList} />
              </div>
              <div className={"rightColumn"}>
                <DiceBullet textArray={rightList} />
              </div>
            </div>
        </div>
      </div>
      <div className={"rightContent"}>
        <div className={"photo"}>
          <img src={chadCromwellPhoto} alt={"Chad Cromwell"} />
        </div>
      </div>
    </div>
  );
};

export default About;
