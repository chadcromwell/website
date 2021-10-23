import "../../css/Experience/Experience.css";
import React from "react";
import JobDescription from "./JobDescription";

const Experience = () => {
  return (
    <div className={"experience"}>
      <div className={"sectionHeader"}>
        <div className={"sectionTitle roboto-bold"}>
          <span className={"titleNumber roboto-thin"}>02. </span>
          Where I've Worked
        </div>
      </div>
      <JobDescription />
    </div>
  );
};

export default Experience;
