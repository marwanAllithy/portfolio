import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Darkastro from "./ui/darkastro";
const Landing = () => {
  return (
    <section id="landing">
      <div className="landing__discription--cont">
        <div
          className="landing__discription"
          style={{
            color: "#e0e0e0",
          }}
        >
          <h1 className="landing__discription--title">
            Hello, I'm <span className="blue">Marwan Allisy</span>.
          </h1>
          <div className="landing__discription--para">
            A <b className="pink">Freelanced Frontend Software Developer</b>,
            <br />I help <span className="blue">businesses</span> reach{" "}
            <span className="pink">global</span> audiences by building engaging
            websites.
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
                        color: "#e0e0e0",
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
                        color: "#e0e0e0",
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
                        color: "#e0e0e0",
                      }}
                      className="landing__link--anchor--blue"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="landing__astro--cont">
          <div className="landing__astro">
            <Darkastro />
          </div>
        </div>
      </div>
      <div className="landing__scroll--cont hidden ">
        <a
          href="#aboutme"
          className="landing__scroll click "
          style={{
            border: "3px solid white",
          }}
        >
          <div
            className="landing__scroll--dot"
            style={{
              border: "3px solid white",
              background: "white",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Landing;
