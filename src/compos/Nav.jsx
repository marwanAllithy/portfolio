
import Logodarkmode from "../assets/logo-light.svg";
;

const Nav = () => {
  return (
    <nav id="navbar">
      <figure className="nav__logo">
        <img src={Logodarkmode} alt="" className="nav__logo" />
      </figure>
      <ul className="nav__link--list">
        <li className={`nav__link hidden hover-effect hover-effect--dark`}>
          <a
            style={{
              color: "#e0e0e0",
              transition: "300ms",
            }}
            href="#aboutme"
            className="nav__link--anchor"
          >
            About Me
          </a>
        </li>
        <li className={`nav__link hidden hover-effect hover-effect--dark`}>
          <a
            style={{
              color: "#e0e0e0",
              transition: "300ms",
            }}
            href="#skills"
            className="nav__link--anchor"
          >
            Skills
          </a>
        </li>
        <li className={`nav__link hidden hover-effect hover-effect--dark`}>
          <a
            style={{
              color: "#e0e0e0",
              transition: "300ms",
            }}
            href="#projects"
            className="nav__link--anchor"
          >
            Projects
          </a>
        </li>
        <li className={`nav__link hidden hover-effect hover-effect--dark`}>
          <a
            style={{
              color: "#e0e0e0",
              transition: "300ms",
            }}
            href="#contact"
            className="nav__link--anchor click"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
