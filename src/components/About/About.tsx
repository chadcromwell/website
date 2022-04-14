import React from "react";
import "../../css/fonts.css";
import "../../css/About/About.css";
import DiceBullet from "../DiceBullet/DiceBullet";
import chadCromwellPhoto from "../../images/chadcromwell.jpg";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

// Bullet lists to hold what I've been currently working with
const leftList: string[] = [];
const rightList: string[] = [];

// What I'm currently working with, ranked
const list = [
  "Java",
  "Docker",
  "TypeScript",
  "React",
  "MongoDB",
  "Meteor",
  "Python",
  "AWS",
];

// Sorts the list into two arrays so they are formatted in order for rendering
const sortIntoTwoArrays = () => {
  let lPointer = 0;
  let rPointer = 0;

  // Iterate the list
  for (let i = 0; i < list.length; i++) {
    // If even index, move to left list
    if (i % 2 === 0) {
      leftList[lPointer++] = list[i];
    } else {
      // If odd index, move to right list
      rightList[rPointer++] = list[i];
    }
  }
};

// About component
const About = () => {
  sortIntoTwoArrays();
  return (
    <div className={"aboutMe"}>
      <div className={"sectionHeader"}>
        <div className={"titleNumber roboto-thin"}>01.</div>
        <div className={"sectionTitle roboto-bold"}>About Me</div>
        <div className={"aboutHorizontalLine"}>
          <HorizontalLine />
        </div>
      </div>
      <div className={"aboutContent"}>
        <div className={"leftContent"}>
          <div className={"aboutBodyText overpass"}>
            My name is Chad Cromwell. I'm a Software Development Engineer from Ontario,
            Canada who loves making and learning new things. My 6+ years of development
            experience includes designing and developing highly scalable software on distributed
            systems, system architecture, web development, project management, and more.
            From design to implementation, I always enjoy a new challenge and finding optimal
            solutions to unique problems.
            <br />
            <br />
            I currently work for Gregory G. Couch & Associates as a Full Stack Software Development Engineer
            designing and developing a radiation dose management system for
            medical physicists. The software gathers data from medical imaging
            equipment, uses OCR to read dose sheets, maps protocols through
            machine learning, aggregates data, performs analytics, and warns of
            outliers to enable hospitals and healthcare networks to be compliant
            with radiation dose management standards.
            <br />
            <br />
          </div>
          <div className={"whatImWorkingWithLately"}>
            <div className={"listOneHeader overpass"}>
              What I've been working with lately:
            </div>
            <div className={"list overpass"}>
              <div className={"leftColumn"}>
                <DiceBullet
                  textArray={leftList}
                  textMarginTop={"0rem"}
                  diceMarginTop={"0rem"}
                  scale={"1rem"}
                  width={"50%"}
                />
              </div>
              <div className={"rightColumn"}>
                <DiceBullet
                  textArray={rightList}
                  textMarginTop={"0rem"}
                  diceMarginTop={"0rem"}
                  scale={"1rem"}
                  width={"50%"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"rightContent"}>
          <div className={"photo"}>
            <img
              src={chadCromwellPhoto}
              alt={"Chad Cromwell"}
              className={"chadPhoto"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
