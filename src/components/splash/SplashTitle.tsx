import SplashText from "./SplashText";

const SplashTitle = () => {
  const roboto = {
    fontFamily: "Roboto Mono, monospace",
  };

  const robotoThin = {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 100,
  };

  const robotoBold = {
    fontFamily: "Roboto Mono, monospace",
    fontWeight: 900,
  };

  const overpass = {
    fontFamily: "Overpass Mono, monospace",
  };

  const overpassBig = {
    fontFamily: "Overpass Mono, monospace",
    fontSize: "5rem",
    fontWeight: "bold",
  };

  const montserrat = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "5rem",
  };

  const line1Style = {
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignContent: "center",
    color: "#80ffff",
    //lineHeight: "0rem",
    fontFamily: robotoBold["fontFamily"],
    fontWeight: robotoBold["fontWeight"],
  };

  const line2Style = {
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignContent: "center",
    color: "#ffffff",
    //lineHeight: "4rem",
    fontFamily: montserrat["fontFamily"],
    fontSize: montserrat["fontSize"],
  };

  const line3Style = {
    color: "#5a6d6e",
    lineHeight: "4rem",
    fontFamily: montserrat["fontFamily"],
    fontSize: montserrat["fontSize"],
  };

  const line4Style = {
    color: "#ffffff",
    lineHeight: "1.3rem",
    fontFamily: overpass["fontFamily"],
  };

  const fullStopStyle = {
    color: "#ffffff",
    lineHeight: "1.3rem",
    fontFamily: overpass["fontFamily"],
    fontSize: "4rem",
    marginLeft: "-.7rem", // Not sure if this will look okay on random devices
  };

  const splashTextStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
  };

  return (
    <div id={"splashText"} style={splashTextStyle}>
      <SplashText text={"Hi, I'm"} style={line1Style} heading={"h5"} />
      <SplashText
        text={"Chad Cromwell"}
        style={line2Style}
        nested={"."}
        nestedStyle={fullStopStyle}
      />
      <div className={"line3"} style={line3Style}>
        I love making things.
      </div>
      <div className={"line4"} style={line4Style}>
        I'm a Full Stack Software Developer from Ontario, Canada
      </div>
    </div>
  );
};

export default SplashTitle;
