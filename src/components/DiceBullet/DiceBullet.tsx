import React from "react";
import Dice from "../About/Dice";

// Props
interface props {
  spacing?: string;
  scale?: string;
  textArray: string[];
}

// Component accepts spacing, scale, and a textArray
const DiceBullet = ({ spacing = "1rem", scale = "1.5rem", textArray }: props) => {

  // Style for the DiceBullet
  let style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: ".5rem",
  };

  // Iterates through each text entry in the textArray and renders a new bullet for each
  return <> {textArray.map(text => (
    <span className={"bulletLine"} style={style as React.CSSProperties}>
      <Dice marginRight={spacing} scale={scale} />
      <div className={"text"} style={{ marginRight: "1rem" }}>
        {text}
      </div>
    </span>
  ))}</>;
};

export default DiceBullet;
