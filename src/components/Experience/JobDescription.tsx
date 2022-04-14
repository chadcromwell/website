import React, { useState } from "react";
import "../../css/Experience/JobDescription.css";
import "../../css/fonts.css";
import DiceBullet from "../DiceBullet/DiceBullet";

/**
 * The content.
 * @constructor
 */
const JobDescription = () => {
  let housescopeTitle = "Full Stack Software Development Engineer";
  let housescopeDates = "Oct 2020 - Current";
  let housescopeText = (
    <DiceBullet
      textArray={[
        "Led the design and refactor of the Edge Server’s monolithic architecture to a microservice architecture " +
        "using REST services, Docker, Docker Compose, and AWS to scale 100x and fully automate deployments which " +
        "used to take weeks to complete.",
        "Refactored the Cloud’s upload data endpoint to immediately cache data and respond to callers which increased " +
        "the Cloud's connection efficiency by 98.3% leading to a 58x increase in throughput of data from Edge Servers.",
        "Decoupled sending of statistics data from log data which lowered the Cloud's peak CPU usage by 60% and " +
        "average CPU usage by 92%.",
        "Refactored caching to reduce average Cloud UI Worker CPU load from 34% to effectively 0%.",
        "Implemented and maintained load testing capabilities through AWS EC2. Automated load testing which reduced " +
        "load testing set up times by 96% — from 4 hours to under 10 minutes.",
        "Led technical interviews and assisted in hiring decisions as part of the hiring committee.",
        "Assisted in sprint refinement, broke down features and improvements into manageable stories, organized " +
        "epics, and assisted in planning the project roadmap.",
        "Fostered a culture that prioritized eliminating tech debt through the use of documentation " +
        "style guides, and PR standards",
      ]}
    />
  );

  let VIPResearchGroupTitle = "Full Stack Software Development Engineer, Intern";
  let VIPResearchGroupDates = "Jan 2019 - May 2019";
  let VIPResearchGroupText = (
    <DiceBullet
      textArray={[
        "Led the design and development of three major features to increase player engagement and retention.",
        "Developed backend user authentication as well as aggregation and analysis of player statistics.",
        "Designed and developed UI for the three new features.",
        "Developed frontend handling and displaying of aggregate player data and statistics.",
        "Implemented source control with Git in order to improve team collaboration and productivity.",
      ]}
    />
  );

  let blackMediaTitle = "Co-Founder & Full Stack Developer";
  let blackMediaDates = "Jan 2006 - Jul 2010";
  let blackMediaText = (
    <DiceBullet
      textArray={[
        "A web development startup I founded with a friend fresh out of high school.",
        "Consulted with clients gathering use cases to elicit high level requirements and business needs.",
        "Architected, designed, and developed websites to fulfil client’s requirements.",
        "Worked across the entire stack from backend REST APIs to frontend working with modern CMS’, including UI & UX design.",
        "Prototyping and delivering production assets for websites, print, and video.",
      ]}
    />
  );

  // Default button style
  const defaultButtonStyle: object = {
    backgroundColor: "rgba(0,0,0,0)",
    border: "1px solid #5a6d6e",
    borderRadius: "5px",
    color: "white",
    textAlign: "center",
    texDecoration: "none",
    height: "100%",
  };

  // Selected button style
  const selectedButtonStyle: object = {
    backgroundColor: "rgba(90,109,110,.25)",
    border: "1px solid #5a6d6e",
    borderRadius: "5px",
    boxShadow: "1px 1px 10px 0px #5a6d6e",
    color: "white",
    textAlign: "center",
    texDecoration: "none",
    height: "100%",
  };

  // Hooks
  const [jobTitle, setJobTitle] = useState(housescopeTitle);
  const [jobDates, setJobDates] = useState(housescopeDates);
  const [jobText, setJobText] = useState(housescopeText);
  const [button0Style, setButton0Style] = useState(selectedButtonStyle);
  const [button1Style, setButton1Style] = useState(defaultButtonStyle);
  const [button2Style, setButton2Style] = useState(defaultButtonStyle);

  /**
   * Changes the job information that is displayed.
   * @param button The button that is clicked.
   */
  const changeJob = (button: number) => {
    // If button 0 is clicked, show Housescope details
    if (button === 0) {
      setJobTitle(housescopeTitle);
      setJobDates(housescopeDates);
      setJobText(housescopeText);
    }

    // If button 1 is clicked, show VIP Research Group details
    if (button === 1) {
      setJobTitle(VIPResearchGroupTitle);
      setJobDates(VIPResearchGroupDates);
      setJobText(VIPResearchGroupText);
    }

    // If button 2 is clicked, show Black Media details
    if (button === 2) {
      setJobTitle(blackMediaTitle);
      setJobDates(blackMediaDates);
      setJobText(blackMediaText);
    }
  };

  /**
   * Changes the CSS of a button to show it as selected and changes the rest back to default.
   * @param button The button to change.
   */
  const selectButton = (button: number) => {
    // Set default button styles
    for (let i = 0; i < 3; i++) {
      setButton0Style(defaultButtonStyle);
      setButton1Style(defaultButtonStyle);
      setButton2Style(defaultButtonStyle);
    }

    // Set selected button to selected style
    if (button === 0) {
      setButton0Style(selectedButtonStyle);
    } else if (button === 1) {
      setButton1Style(selectedButtonStyle);
    } else {
      setButton2Style(selectedButtonStyle);
    }
  };

  /**
   * Changes the job decription and updates the button that is clicked.
   * @param button The button that is clicked.
   */
  const buttonClick = (button: number) => {
    changeJob(button);
    selectButton(button);
  };

  return (
    <div className={"content"}>
      <div className={"companyButtons"}>
        <button onClick={() => buttonClick(0)} style={button0Style} className={"button"}>
          Housescope
        </button>
        <button
          onClick={() => buttonClick(1)}
          style={button1Style}
          className={"middleButton button"}
        >
          VIP Research Group
        </button>
        <button onClick={() => buttonClick(2)} style={button2Style} className={"button"}>
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
