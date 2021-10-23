import React, { useState } from "react";
import "../../css/Experience/JobDescription.css";
import "../../css/fonts.css";

const JobDescription = () => {
  let housescopeTitle = "Full Stack Software Developer";
  let housescopeDates = "Oct 2020 - Current";
  let housescopeText =
    "Designing and developing a radiation dose management system for medical physicists. The software gathers data from medical imaging equipment, maps protocols through machine learning and OCR, aggregates the data, performs analytics, and warns of outliers to enable hospitals and healthcare networks to be compliant with radiation dose management standards.";

  let VIPResearchGroupTitle = "Full Stack Software Developer, Intern";
  let VIPResearchGroupDates = "Jan 2019 - Apr 2019";
  let VIPResearchGroupText =
    "Designing and developing a radiation dose management system for medical physicists. The software gathers data from medical imaging equipment, maps protocols through machine learning and OCR, aggregates the data, performs analytics, and warns of outliers to enable hospitals and healthcare networks to be compliant with radiation dose management standards.";

  let blackMediaTitle = "Full Stack Developer & Graphic Designer";
  let blackMediaDates = "2006 - 2010";
  let blackMediaText =
    "Designing and developing a radiation dose management system for medical physicists. The software gathers data from medical imaging equipment, maps protocols through machine learning and OCR, aggregates the data, performs analytics, and warns of outliers to enable hospitals and healthcare networks to be compliant with radiation dose management standards.";

  const [jobTitle, setJobTitle] = useState(housescopeTitle);
  const [jobDates, setJobDates] = useState(housescopeDates);
  const [jobText, setJobText] = useState(housescopeText);

  const changeJob = (job: number) => {
    // If button 0 is clicked, show Housescope details
    if (job === 0) {
      setJobTitle(housescopeTitle);
      setJobDates(housescopeDates);
      setJobText(housescopeText);
    }

    // If button 1 is clicked, show VIP Research Group details
    if (job === 1) {
      setJobTitle(VIPResearchGroupTitle);
      setJobDates(VIPResearchGroupDates);
      setJobText(VIPResearchGroupText);
    }

    // If button 2 is clicked, show Black Media details
    if (job === 2) {
      setJobTitle(blackMediaTitle);
      setJobDates(blackMediaDates);
      setJobText(blackMediaText);
    }
  };

  return (
    <div className={"content"}>
      <div className={"companyButtons"}>
        <button onClick={() => changeJob(0)} className={"housescopeButton"}>
          Housescope
        </button>
        <button
          onClick={() => changeJob(1)}
          className={"VIPResearchGroupButton"}
        >
          VIP Research Group
        </button>
        <button onClick={() => changeJob(2)} className={"blackMediaButton"}>
          Black Media
        </button>
      </div>
      <div className={"jobDescription"}>
        <h4 className={"title roboto-bold"}>{jobTitle}</h4>
        <h5 className={"dates overpass"}>{jobDates}</h5>
        <h6 className={"text overpass"}>{jobText}</h6>
      </div>
    </div>
  );
};

export default JobDescription;
