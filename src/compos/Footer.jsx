import React from 'react';
import Logo from '../assets/logo-light.svg'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__cont">
                <div className="footer__logo--cont">
                    <a href='#navbar' className="footer__logo click"><img src={Logo} alt="" className="footer__logo--img" /></a>
                </div>
                <ul className="footer__link--list">
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#aboutme" className="footer__link--anchor">About Me</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#skills" className="footer__link--anchor">Skills</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#projects" className="footer__link--anchor">Projects</a></li>
                    <li className="footer__link hover-effect hover-effect--dark"><a href="#contact" className="footer__link--anchor">Contact Me</a></li>
                </ul>
                <div className="footer__copy-right">Copyright &copy; 2022 Marwan Allisy</div>
            </div>
        </footer>
    )
}

export default Footer;