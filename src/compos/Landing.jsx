import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../assets/my-resume.docx'
import React, { useEffect, useState } from 'react';
import Lightastro from './ui/Lightastro'
import Darkastro from './ui/darkastro'
const Landing = ({handledarkmode, darkmode, lightmode}) => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
     
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[] )
    

    return (
        <section id="landing">
            
            <div className="landing__discription--cont" style={{
                transform : `translateY(${offsetY * 0.27}px)`,}
                }>
                <div className="landing__discription" >
                    <h1 className="landing__discription--title">
                        Hello, I'm <span className="blue">Marwan Allisy</span>.
                    </h1>
                    <div className="landing__discription--para">
                    I'm an aspiring <b className='pink'>Frontend Software Developer</b> with a strong passion for building web applications
                     with great user experiences.
                    </div> 
                    <div className="landing__links--cont">
                        <div className="Landing__links">
                            <ul className="landing__link--list">
                                <li className="landing__link click ">
                                    <a  href="https://www.linkedin.com/in/marwan-allisy-067838224/" target="_blank" className="landing__link--anchor">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                </li>
                                <li className="landing__link click">
                                    <a href="https://github.com/OZY3112" target="_blank" className="landing__link--anchor">
                                        <FontAwesomeIcon  icon={faGithub}/>
                                    </a>
                                </li>
                                <li className="landing__link click">
                                    <a href={resume} className="landing__link--anchor " target="_blank">
                                        <FontAwesomeIcon icon={faFilePdf}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            <div className="landing__scroll--cont " style={{transform : `translateY(${offsetY * 0.001}px)`}}>
                <a  href="#aboutme" className="landing__scroll click "  >
                    <div className="landing__scroll--dot" ></div>
                </a>
            </div>
                </div>
                <div className="landing__astro--cont">
                    <div className="landing__astro">
                        {
                            lightmode ? <Lightastro/> : <Darkastro/>
                        }
                        {
                            
                        }
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1643701550">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </section>
    );
}

export default Landing;
