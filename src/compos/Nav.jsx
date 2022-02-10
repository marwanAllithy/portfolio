
import Logolightmde from '../assets/logo.svg';
import Logodarkmode from '../assets/logo-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


const Nav = ({handledarkmode, handleLightmode, darkmode, lightmode}) => {
    return (
        <nav id="navbar">
            <figure className="nav__logo"><img src={lightmode ? Logolightmde : Logodarkmode} alt="" className="nav__logo" /></figure>
            <ul className="nav__link--list" >
                <li className={`nav__link hover-effect hover-effect--${lightmode ?"white" : "dark" }`}  ><a style={{color: lightmode ? "black" : "#e0e0e0"}} href="#aboutme" className="nav__link--anchor">About me</a></li>
                <li className={`nav__link hover-effect hover-effect--${lightmode ?"white" : "dark" }`}><a style={{color: lightmode ? "black" : "#e0e0e0"}} href="#skills" className="nav__link--anchor">Skills</a></li>
                <li className={`nav__link hover-effect hover-effect--${lightmode ?"white" : "dark" }`}><a style={{color: lightmode ? "black" : "#e0e0e0"}} href="#projects" className="nav__link--anchor">Projects</a></li>
                <li className={`nav__link hover-effect hover-effect--${lightmode ?"white" : "dark" } nav__link-contact`}><a style={{color: lightmode ? "black" : "#e0e0e0"}} href="#contact" className="nav__link--anchor click">Contact Me</a></li>
               
                {
                    <li className={`nav__link hover-effect hover-effect--${lightmode ?"white" : "dark" }`}  
                    style={{color: lightmode ? "black" : "e0e0e0"}} >
                        <button 
                        style={{color: lightmode ? "black" : "e0e0e0" }}
                         className="nav__link--anchor click adjust" 
                         
                         onClick={lightmode ? (handledarkmode) : (handleLightmode)}>
                            <FontAwesomeIcon icon={faAdjust}  style={{color: lightmode ? "black" : "e0e0e0"}} />
                        </button >
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Nav;
