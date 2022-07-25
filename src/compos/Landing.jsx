import { FaFilePdf, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import resume from "../assets/my-resume.pdf";
import React, { useEffect, useState } from "react";
import Lightastro from "./ui/Lightastro";
import Darkastro from "./ui/darkastro";
const Landing = ({ handledarkmode, darkmode, lightmode }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="landing">
      <div className="landing__discription--cont">
        <div
          className="landing__discription"
          style={{
            color: lightmode ? "black" : "#e0e0e0",
            transition: "300ms",
          }}
        >
          <h1 className="landing__discription--title">
            Hello, I'm <span className="blue">Marwan Allisy</span>.
          </h1>
          <div className="landing__discription--para">
            I'm a <b className="pink">Frontend Software Developer</b> with a
            strong passion for building web applications with great user
            experiences.
          </div>
          <div className="landing__links--cont">
            <div className="Landing__links">
              <ul className="landing__link--list">
                <li className="landing__link click ">
                  <div className="landing__link--cont">
                    <a
                      href="https://www.linkedin.com/in/marwan-allisy-067838224/"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{
                        color: lightmode ? "black" : "#e0e0e0",
                        transition: "300ms",
                      }}
                      className="landing__link--anchor--blue"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </li>
                <li className="landing__link click">
                  <div className="landing__link--cont">
                    <a
                      href="https://github.com/OZY3112"
                      rel="noreferrer noopener"
                      target="_blank"
                      style={{
                        color: lightmode ? "black" : "#e0e0e0",
                        transition: "300ms",
                      }}
                      className="landing__link--anchor--pink"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </li>
                <li className="landing__link click">
                  <div className="landing__link--cont">
                    <a
                      href="mailto:marwan@gmail.com"
                      rel="noreferrer noopener"
                      target="_blank"
                      style={{
                        color: lightmode ? "black" : "#e0e0e0",
                        transition: "300ms",
                      }}
                      className="landing__link--anchor--blue"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </li>
                <li className="landing__link click">
                  <div className="landing__link--cont">
                    <a
                      href={resume}
                      className="landing__link--anchor--pink"
                      style={{
                        color: lightmode ? "black" : "#e0e0e0",
                        transition: "300ms",
                      }}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <FaFilePdf />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="landing__astro--cont"
          style={{ transform: `translateY(${offsetY * -0.27}px)` }}
        >
          <div className="landing__astro">
            {lightmode ? <Lightastro /> : <Darkastro />}
          </div>
        </div>
      </div>
      <div className="landing__scroll--cont hidden ">
        <a
          href="#aboutme"
          className="landing__scroll click "
          style={{
            border: lightmode ? "3px solid black" : "3px solid white",
            transition: "300ms",
          }}
        >
          <div
            className="landing__scroll--dot"
            style={{
              border: lightmode ? "3px solid black" : "3px solid white",
              background: lightmode ? "black" : "white",
              transition: "300ms",
            }}
          ></div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
