import "../../css/Portfolio/Portfolio.css";
import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Portfolio = () => {
  return (
    <div className={"portfolio"}>
      <div className={"sectionHeader"}>
        <div className={"titleNumber roboto-thin"}>03. </div>
        <div className={"sectionTitle roboto-bold"}>A Few Things I've Made</div>
        <HorizontalLine />
      </div>
    </div>
  );
};

export default Portfolio;
