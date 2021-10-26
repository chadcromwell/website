import React from "react";
import SplashTitle from "./components/Splash/SplashTitle";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import "./css/App/App.css";
import SocialIcons from "./components/SocialIcons/SocialIcons";

function App() {
  return (
    <div className={"App"}>
      <div className={"splashWrapper"} id={"home"}>
        <div className={"splashFlex"}>
          <SplashTitle />
        </div>
      </div>
      <div className={"aboutWrapper"} id={"about"}>
        <div className={"aboutFlex"}>
          <About />
        </div>
      </div>
      <div className={"experienceWrapper"} id={"experience"}>
        <div className={"experienceFlex"}>
          <Experience />
        </div>
      </div>
      <div className={"portfolioWrapper"} id={"portfolio"}>
        <div className={"portfolioFlex"}>
          <Portfolio />
        </div>
      </div>
      <div className={"contactWrapper"} id={"contact"}>
        <div className={"contactFlex"}>
          <Contact />
        </div>
      </div>
      <div className={"socialIconsWrapper"}>
        <div className={"socialIconsFlex"}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
