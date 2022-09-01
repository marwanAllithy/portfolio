import React from "react";
import portpic from "../assets/port.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Aboutme = ({ lightmode }) => {
  return (
    <section
      id="aboutme"
      style={{ background: lightmode ? "#e0e0e0" : "#1f1f1f" }}
    >
      <div
        className="aboutme__section--title-cont"
        data-aos="fade-up"
        style={{ color: lightmode ? "black" : "#e0e0e0" }}
      >
        <h2 className="aboutme__section--title section__title ">
          About <span className="blue">Me</span>.
        </h2>
      </div>
      <div
        className="aboutme__cont"
        style={{ color: lightmode ? "black" : "#e0e0e0" }}
      >
        <div className="aboutme__pic--cont" data-aos="fade-up">
          <figure
            className="aboutme__pic--wrapper "
            style={{
              boxShadow: lightmode
                ? "-20px 20px 52px #5c5c5c,20px -20px 52px #ffffff"
                : "-20px 20px 52px #000000 ,20px -20px 52px #1d1d1d",
              borderRadius: "50%",
            }}
          >
            <img src={portpic} alt="" className="aboutme__pic" />
          </figure>
        </div>
        <div className="aboutme__description" data-aos="fade-up">
          <div className="aboutme__description--cont">
            <p className="aboutme__description--para">
              A front-end developer with a vast passion for making{" "}
              <span className="pink"> clean </span> and
              <span className="pink"> responsive </span>
              <span className="blue"> websites</span>
              <br />
              <br />I help <span className="blue">businesses</span> reach global
              audiences by building <span className="pink"> engaging</span>{" "}
              websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
