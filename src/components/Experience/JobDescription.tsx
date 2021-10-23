import React, { useState } from "react";
import "../../css/Experience/JobDescription.css";
import "../../css/fonts.css";
import DiceBullet from "../DiceBullet/DiceBullet";

const JobDescription = () => {
  let housescopeTitle = "Full Stack Software Developer";
  let housescopeDates = "Oct 2020 - Current";
  let housescopeText = (
    <DiceBullet
      textArray={[
        "Refactored edge server monolith into a highly-scalable Dockerized microservice architecture",
        "Increased cloud server's connection efficiency by 98.3% leading to a 58x increase in throughput of data from edge servers",
        "Lowered cloud server's peak CPU usage by 60% and overall average CPU usage by 92%",
        "Reduced study export time by 96%",
        "Refactored caching to reduce average UI CPU load from 34% to effectively 0%",
        "Implemented and maintained load testing capabilities through AWS EC2. Reducing load testing set up times by 96%",
        "Led technical interviews and assisted in hiring decisions as part of the hiring committee",
      ]}
    />
  );

  let VIPResearchGroupTitle = "Full Stack Software Developer, Intern";
  let VIPResearchGroupDates = "Jan 2019 - Apr 2019";
  let VIPResearchGroupText = (
    <DiceBullet
      textArray={[
        "Developing three new features: interactive leaderboard, statistics dashboard, and card collection book",
        "Working in a team of distributed developers with version control",
        "Creating standalone features which were integrated into the existing system",
      ]}
    />
  );

  let blackMediaTitle = "Full Stack Developer & Graphic Designer";
  let blackMediaDates = "2006 - 2010";
  let blackMediaText = (
    <DiceBullet
      textArray={[
        "Meeting with various clients, analyzing their requirements, and developing websites that meet those needs",
        "Designing effective marketing materials and strategies, both web and print",
        "Photo, film, and audio production for clients and live events",
      ]}
    />
  );

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
