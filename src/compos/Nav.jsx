
import Logolightmde from '../assets/logo.svg';
import Logodarkmode from '../assets/logo-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


const Nav = ({handledarkmode, handleLightmode, darkmode, lightmode}) => {
    return (
        <nav id="navbar">
            <figure className="nav__logo"><img src={lightmode ? Logolightmde : Logodarkmode} alt="" className="nav__logo" /></figure>
            <ul className="nav__link--list">
                <li className="nav__link hover-effect hover-effect--white"><a href="#aboutme" className="nav__link--anchor">About me</a></li>
                <li className="nav__link hover-effect hover-effect--white"><a href="#skills" className="nav__link--anchor">Skills</a></li>
                <li className="nav__link hover-effect hover-effect--white"><a href="#projects" className="nav__link--anchor">Projects</a></li>
                <li className="nav__link hover-effect hover-effect--white nav__link-contact"><a href="#contact" className="nav__link--anchor click">Contact Me</a></li>
               
                {
                    <li className="nav__link hover-effect hover-effect--white">
                        <button className="nav__link--anchor click adjust" onClick={lightmode ? (darkmode) : (lightmode)}>
                            <FontAwesomeIcon icon={faAdjust}/>
                        </button>
                    </li>
                }
            </ul>
        </nav>
    );
}

export default Nav;
