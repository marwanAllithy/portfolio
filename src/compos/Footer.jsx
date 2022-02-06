import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from '../assets/logo-light.svg'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__cont">
                <div className="footer__logo--cont">
                    <div className="footer__logo"><img src={Logo} alt="" className="footer__logo--img" /></div>
                </div>
                <ul className="footer__link--list">
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#aboutme" className="footer__link--anchor">About me</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#skills" className="footer__link--anchor">Skills</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#projects" className="footer__link--anchor">Portjects</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#contact" className="footer__link--anchor">Contact</a></li>
                </ul>
                <div className="footer__copy-right">Copyright &copy; 2022 Marwan Allisy</div>
            </div>
        </footer>
    )
}

export default Footer;