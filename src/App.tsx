import React from "react";
import SplashTitle from "./components/splash/SplashTitle";
import "./css/App/App.css";

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

function App() {
  return (
    <div className={"App"}>
      <div className={"wrapper"}>
        <SplashTitle />
      </div>
    </div>
  );
}

export default App;
