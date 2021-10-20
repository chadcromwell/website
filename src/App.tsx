import React from "react";
import SplashTitle from "./components/splash/SplashTitle";
import About from "./components/about/About";
import "./css/App/App.css";

function App() {
  return (
    <div className={"App"}>
      <div className={"splashWrapper"}>
        <SplashTitle />
      </div>
      <div className={"aboutWrapper"}>
        <About />
      </div>
    </div>
  );
}

export default App;
