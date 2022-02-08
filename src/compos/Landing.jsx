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
            
            <div className="landing__discription--cont" >
                <div className="landing__discription" style={{color: lightmode ? "black" : "#e0e0e0"}} >
                    <h1 className="landing__discription--title" style={{transform : `translateY(${offsetY * 0.27}px)`,}}>
                        Hello, I'm <span className="blue">Marwan Allisy</span>.
                    </h1>
                    <div className="landing__discription--para" style={{transform : `translateY(${offsetY * 0.27}px)`,}}>
                    I'm a <b className='pink'>Frontend Software Developer</b> with a strong passion for building web applications
                     with great user experiences.
                    </div> 
                    <div className="landing__links--cont" style={{transform : `translateY(${offsetY * 0.27}px)`,}}>
                        <div className="Landing__links">
                            <ul className="landing__link--list">
                                <li className="landing__link click ">
                                <div className="landing__link--cont">
                                    <a  href="https://www.linkedin.com/in/marwan-allisy-067838224/" target="_blank"style={{color: lightmode ? "black" : "#e0e0e0"}} className="landing__link--anchor">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                </div>
                                </li>
                                <li className="landing__link click">
                                <div className="landing__link--cont">

                                    <a href="https://github.com/OZY3112" target="_blank" style={{color: lightmode ? "black" : "#e0e0e0"}} className="landing__link--anchor">
                                        <FontAwesomeIcon  icon={faGithub}/>
                                    </a>
                                </div>
                                </li>
                                <li className="landing__link click">
                                    <div className="landing__link--cont">

                                    <a href={resume} className="landing__link--anchor " style={{color: lightmode ? "black" : "#e0e0e0"}} target="_blank">
                                        <FontAwesomeIcon icon={faFilePdf}/>
                                    </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            <div className="landing__scroll--cont "  style={{transform : `translateY(${offsetY * 0.00000}px)`}}>
                <a  href="#aboutme" className="landing__scroll click " style={{border: lightmode ? "3px solid black" : "3px solid white" }}   >
                    <div className="landing__scroll--dot" style={{border: lightmode ? "3px solid black" : "3px solid white" ,background: lightmode ? "black" : "white"}}  ></div>
                </a>
            </div>
                </div>
                <div className="landing__astro--cont" style={{transform : `translateY(${offsetY * -0.27}px)`,}}>
                    <div className="landing__astro">
                        {
                            lightmode ? <Lightastro/> : <Darkastro/>
                        }
                        {
                            
                        }
                    </div>
                </div>
            </div>
   
        </section>
    );
}

export default Landing;
