import React, { useEffect } from "react";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import earthGif from "../assets/sun.gif";
import "../styles/FirstPage.css";
import line from "../assets/scroll.png";
import lines from "../assets/lines.png";
import Aos from "aos";
import "aos/dist/aos.css";

const FirstPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="content">
        <img src={lines} alt="" className="lines" />
        <h1 className="title" data-aos="fade-right">
          Stunning websites
        </h1>
        <h1 className="title" data-aos="fade-right">
          that impress
        </h1>
        <p className="description" data-aos="fade-up">
          As a junior web developer, I am passionate about creating websites
          that not only function flawlessly but also look beautiful. With my
          expertise in web design, HTML, CSS, and JavaScript, I can build
          websites that stand out from the crowd and leave a lasting impression
          on your audience.
        </p>
        <div className="btn" data-aos="fade-up">
          <img src={line} alt="" className="myimg" />
          <h2 className="txt">scroll</h2>
        </div>
      </div>
      <div className="image">
        <img src={earthGif} alt="" />
      </div>
    </div>
  );
};

export default FirstPage;
