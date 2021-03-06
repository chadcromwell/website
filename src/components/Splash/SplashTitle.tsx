import "../../css/SplashTitle/SplashTitle.css";

const SplashTitle = () => {
  return (
    <div className={"splashTitle"}>
      <div className={"line1"}>Hi, I'm</div>
      <div className={"line2"}>
        Chad Cromwell
        <span className={"line2FullStop"}>.</span>
      </div>
      <div className={"line3"}>
        I love making things
        <span className={"line3FullStop"}>.</span>
      </div>
      <div className={"line4"}>
        I'm a Full Stack Software Developer from Ontario, Canada.
      </div>
    </div>
  );
};

export default SplashTitle;
