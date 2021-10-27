import "../../css/Experience/Experience.css";
import React from "react";
import JobDescription from "./JobDescription";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Experience = () => {
  return (
    <div className={"experience"}>
      <div className={"experienceSectionHeader"}>
        <div className={"experienceTitleNumber roboto-thin"}>02.</div>
        <div className={"experienceSectionTitle roboto-bold"}>
          Where I've Worked
        </div>
        <div className={"experienceHorizontalLine"}>
          <HorizontalLine />
        </div>
      </div>
      <JobDescription />
    </div>
  );
};

export default Experience;
