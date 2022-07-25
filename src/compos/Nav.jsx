import Logolightmde from "../assets/logo.svg";
import Logodarkmode from "../assets/logo-light.svg";
import { FaAdjust } from "react-icons/fa";

const Nav = ({ handledarkmode, handleLightmode, darkmode, lightmode }) => {
  return (
    <nav id="navbar">
      <figure className="nav__logo">
        <img
          src={lightmode ? Logolightmde : Logodarkmode}
          alt=""
          className="nav__logo"
        />
      </figure>
      <ul className="nav__link--list">
        <li
          className={`nav__link hidden hover-effect hover-effect--${
            lightmode ? "white" : "dark"
          }`}
        >
          <a
            style={{
              color: lightmode ? "black" : "#e0e0e0",
              transition: "300ms",
            }}
            href="#aboutme"
            className="nav__link--anchor"
          >
            About Me
          </a>
        </li>
        <li
          className={`nav__link hidden hover-effect hover-effect--${
            lightmode ? "white" : "dark"
          }`}
        >
          <a
            style={{
              color: lightmode ? "black" : "#e0e0e0",
              transition: "300ms",
            }}
            href="#skills"
            className="nav__link--anchor"
          >
            Skills
          </a>
        </li>
        <li
          className={`nav__link hidden hover-effect hover-effect--${
            lightmode ? "white" : "dark"
          }`}
        >
          <a
            style={{
              color: lightmode ? "black" : "#e0e0e0",
              transition: "300ms",
            }}
            href="#projects"
            className="nav__link--anchor"
          >
            Projects
          </a>
        </li>
        <li
          className={`nav__link hidden hover-effect hover-effect--${
            lightmode ? "white" : "dark"
          } nav__link-contact`}
        >
          <a
            style={{
              color: lightmode ? "black" : "#e0e0e0",
              transition: "300ms",
            }}
            href="#contact"
            className="nav__link--anchor click"
          >
            Contact Me
          </a>
        </li>

        {
          <li
            className={`nav__link hover-effect hover-effect--${
              lightmode ? "white" : "dark"
            }`}
            style={{ color: lightmode ? "black" : "e0e0e0" }}
          >
            <button
              className="nav__link--anchor click adjust"
              style={{ color: "white", transition: "300ms" }}
              onClick={lightmode ? handledarkmode : handleLightmode}
            >
              <FaAdjust />
            </button>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Nav;
