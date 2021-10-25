import React from "react";

interface props {
  color?: string;
}

function HorizontalLine({ color = "#5A6D6EFF" }: props) {
  return (
    <div style={{ display: "flex", marginTop: ".5rem", marginLeft: ".5rem", flexGrow: 1 }}>
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 1,
          flexGrow: 1,
        }}
      />
    </div>
  );
}

export default HorizontalLine;
