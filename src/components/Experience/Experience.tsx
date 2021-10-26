import "../../css/Experience/Experience.css";
import React from "react";
import JobDescription from "./JobDescription";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Experience = () => {
  return (
    <div className={"experience"}>
      <div className={"sectionHeader"}>
        <div className={"titleNumber roboto-thin"}>02. </div>
        <div className={"sectionTitle roboto-bold"}> Where I've Worked</div>
        <HorizontalLine />
      </div>
      <JobDescription />
    </div>
  );
};

export default Experience;
