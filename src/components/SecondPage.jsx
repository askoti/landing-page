import React, { useEffect } from "react";
import "../styles/SecondPage.css";
import secondPic from "../assets/comp.webp";
import logo from "../assets/hearts.png";
import line from "../assets/line.png";
import Aos from "aos";
import "aos/dist/aos.css";

const SecondPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      <div className="the-pic">
        <img src={secondPic} alt="image" />
      </div>
      <div className="content">
        <div className="rewiew" data-aos="fade-down">
          <img src={logo} alt="logo" />
          <div className="re">
            <h1 className="start">★★★★★</h1>
            <h1>11 REVIEWS</h1>
          </div>
        </div>
        <h1 className="title" data-aos="fade-down">
          Responsive websites{" "}
        </h1>
        <h1 className="title" data-aos="fade-down">
          that work on any device
        </h1>
        <p className="description" data-aos="fade-down">
          In today's world, it's more important than ever to have a website that
          looks great and functions well on all devices, from desktop computers
          to mobile phones. As a developer, I specialize in building
          responsive websites that adapt to any screen size, ensuring that your
          website is accessible to everyone.
        </p>
        <div className="btn" data-aos="fade-down">
          <h2 className="txt">our expertise</h2>
          <img src={line} alt="" className="myimg" />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
