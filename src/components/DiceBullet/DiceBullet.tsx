import React from "react";
import Dice from "../About/Dice";

// Props
interface props {
  spacing?: string;
  scale?: string;
  textMarginTop?: string;
  diceMarginTop?: string;
  width?: string;
  textArray: string[];
}

// Component accepts spacing, scale, and a textArray
const DiceBullet = ({ textMarginTop = "0rem", diceMarginTop = "0rem", spacing = "1rem", scale = "1rem", width = "100%", textArray }: props) => {

  // Style for the DiceBullet
  let style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: ".5rem",
  };

  // Iterates through each text entry in the textArray and renders a new bullet for each
  return <> {textArray.map((text, index) => (
    <span className={"bulletLine"} style={style as React.CSSProperties} key={index}>
      <Dice marginTop={diceMarginTop} marginRight={spacing} scale={scale} />
      <div className={"text"} style={{marginTop: textMarginTop, marginRight: "1rem", width: width}}>
        {text}
      </div>
    </span>
  ))}</>;
};

export default DiceBullet;
