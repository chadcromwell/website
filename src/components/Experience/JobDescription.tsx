import React, { useState } from "react";
import "../../css/Experience/JobDescription.css";
import "../../css/fonts.css";
import DiceBullet from "../DiceBullet/DiceBullet";

/**
 * The content.
 * @constructor
 */
const JobDescription = () => {
  let housescopeTitle = "Full Stack Software Developer";
  let housescopeDates = "Oct 2020 - Current";
  let housescopeText = (
    <DiceBullet
      textArray={[
        "Refactored edge server monolith into a highly-scalable Dockerized microservice architecture.",
        "Increased cloud server's connection efficiency by 98.3% leading to a 58x increase in throughput of data from edge servers.",
        "Lowered cloud server's peak CPU usage by 60% and overall average CPU usage by 92%.",
        "Reduced study export time by 96%.",
        "Refactored caching to reduce average UI CPU load from 34% to effectively 0%.",
        "Implemented and maintained load testing capabilities through AWS EC2. Reducing load testing set up times by 96%.",
        "Led technical interviews and assisted in hiring decisions as part of the hiring committee.",
        "Tech stack: Java, Docker, JavaScript, Node, Python, Tensorflow, MongoDB, Meteor, Galaxy, AWS, Atlas, Shell Scripting, Microservice Architecture.",
      ]}
    />
  );

  let VIPResearchGroupTitle = "Full Stack Software Developer, Intern";
  let VIPResearchGroupDates = "Jan 2019 - Apr 2019";
  let VIPResearchGroupText = (
    <DiceBullet
      textArray={[
        "Developed an interactive leaderboard with a search function that ranked users globally based off of user-selected metrics.",
        "Developed a statistics dashboard that gave users the ability to view their performance statistics and player progression.",
        "Developed a card collection book that gave users the ability to browse all of the cards they owned and have yet to collect with various filters, search, and history function.",
        "Backend development for user authentication, analyzing player statistics, and gathering user data from SQL database.",
        "Worked in a remote team of globally distributed developers.",
        "Responsible for establishing version control workflow for the team in order to improve team collaboration and productivity.",
        "Tech stack: JavaScript, PHP, HTML5, CSS3, Bootstrap, MySQL, and AJAX with JSON.",
      ]}
    />
  );

  let blackMediaTitle = "Full Stack Developer & Graphic Designer";
  let blackMediaDates = "2006 - 2010";
  let blackMediaText = (
    <DiceBullet
      textArray={[
        "Met with various clients, analyzed their requirements, and developed websites to meet their needs.",
        "Designed effective marketing materials and strategies for both web and print.",
        "Photo, film, and audio production for clients and live events.",
        "Tech stack: JavaScript, PHP, HTML, CSS, Joomla, WordPress, MySQL.",
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
    marginRight: "1rem",
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
    marginRight: "1rem",
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
        <button onClick={() => buttonClick(0)} style={button0Style}>
          Housescope
        </button>
        <button
          onClick={() => buttonClick(1)}
          style={button1Style}
          className={"middleButton"}
        >
          VIP Research Group
        </button>
        <button onClick={() => buttonClick(2)} style={button2Style}>
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
