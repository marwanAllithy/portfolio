import React from 'react';
import react from './techimgs/React-icon.png'
import JS from './techimgs/js-icon.png'
import firebase from './techimgs/firebase-icon.png'
import html from './techimgs/html-icon.svg'
import Node from './techimgs/node-logo.png'
import sass from './techimgs/SASS-icon.png'
import ts from './techimgs/typescript-icon.svg'
import Techitem from './ui/techitem';
import css from './techimgs/css.svg'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Skills = () => {
    return (
        <section id="skills">
            <div className="custom-shape-divider-top-1643702895">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

            <div className="skill__cont">
                <div className="skill__section--title--cont">
                    <h2 className="skill__section--title" data-aos="fade-up">My <span className="blue"> technological Stack</span>.</h2>
                </div>
             <div className="skills__skill-cont">

                <div className="skill__Proficient--cont">
                    <div className="skill__Proficient" data-aos="fade-up"data-aos-duration="1000">
                        <div className="skill--Proficien--title--cont">
                            <h2 className="skill__Proficient--title">
                                Tech I am <span className="pink"> Proficient </span> with.
                            </h2>
                        </div>
                        <div className="skills__cont"data-aos="fade-up" >
                        <div className="skills">
                            <Techitem data-aos="fade-up"data-aos-duration="500" techname="React" techimg={react} />
                            <Techitem data-aos="fade-up"data-aos-duration="200" techname="JavaScript" techimg={JS}/>
                            <Techitem data-aos="fade-up"data-aos-duration="400" techname="HTML" techimg={html}/>
                            <Techitem data-aos="fade-up"data-aos-duration="700" techname="CSS" techimg={css}/>
                            <Techitem data-aos="fade-up"data-aos-duration="100" techname="SASS" techimg={sass}/>
                            <Techitem data-aos="fade-up"data-aos-duration="500" techname="Node.js" techimg={Node}/>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className="skill__Familiar--cont" data-aos="fade-up" data-aos-duration="500">
                    <div className="skill__Familiar">
                    <div className="skill--Familiar--title--cont">
                            <h2 className="skill__Familiar--title">
                                Tech I am <span className="pink"> Familiar </span>with.
                            </h2>
                    </div>
                    <div className="skills__cont" data-aos="fade-up">
                        <div className="skills">
                            <Techitem  data-aos="fade-up"data-aos-duration="500" techname="Firebase" techimg={firebase}/>
                            <Techitem  data-aos="fade-up"data-aos-duration="500" techname="TypeScript" techimg={ts}/> 
                            
                        </div>
                    </div>
                    </div>
                </div>
             </div>
            </div>
        </section>
    );
}

export default Skills;
