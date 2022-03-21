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
import bootstrap from './techimgs/Bootstrap_logo.svg.png'
import vite from './techimgs/vitelogo.svg'
import Mantine from './techimgs/mantine.png'
import tailwind from './techimgs/tailwind.png'
import Nextjs from './techimgs/Nextjs.png'
import MaterialUI from './techimgs/MaterialUILOGO.png'
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Skills = ({lightmode, darkmode}) => {
    return (
        <section id="skills">
     

            <div className="skill__cont--wrapper" style={{color: lightmode ? "black" : "#e0e0e0"}}>
                <div className="skill__section--title--cont">
                    <h2 className="skill__section--title" data-aos="fade-up">My <span className="blue"> technological Stack</span>.</h2>
                </div>
             <div className="skills__skill--cont">

                <div className="skill__Proficient--cont">
                    <div className="skill__Proficient" data-aos="fade-up"data-aos-duration="1000">
                        <div className="skill--Proficien--title--cont">
                            <h2 className="skill__Proficient--title">
                                Tech I am <span className="pink"> Proficient </span> with.
                            </h2>
                        </div>
                        <div className="skills__cont"data-aos="fade-up" >
                        <div className="skills">
                            <Techitem fontColor='#eb5c28' lightmode={lightmode} data-aos="fade-up"data-aos-duration="400" techname="HTML" techimg={html}/>
                            <Techitem fontColor='#f7e018' lightmode={lightmode}  data-aos="fade-up"data-aos-duration="200" techname="JavaScript" techimg={JS}/>
                            <Techitem fontColor='#1b73ba' lightmode={lightmode} data-aos="fade-up"data-aos-duration="700" techname="CSS" techimg={css}/>
                            <Techitem fontColor='#61dbfb' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="React.js" techimg={react} />
                            <Techitem fontColor='#75ac63' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="Node.js" techimg={Node}/>
                            <Techitem fontColor='#000000' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="Next.js" techimg={Nextjs} />
                            <Techitem fontColor='#d1689c' lightmode={lightmode} data-aos="fade-up"data-aos-duration="100" techname="SASS" techimg={sass}/>
                            <Techitem fontColor='#fcca3f' lightmode={lightmode}  data-aos="fade-up"data-aos-duration="500" techname="Firebase" techimg={firebase}/>
                            <Techitem fontColor='#13c3b6' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="Tailwind" techimg={tailwind}/> 
                            <Techitem fontColor='#ffd32b' lightmode={lightmode}  data-aos="fade-up"data-aos-duration="500" techname="Vite" techimg={vite}/>
                            <Techitem fontColor='#339af0' lightmode={lightmode}  data-aos="fade-up"data-aos-duration="500" techname="Mantine" techimg={Mantine}/>
                            
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
                            <Techitem  fontColor='#339af0' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="TypeScript" techimg={ts}/> 
                            <Techitem  fontColor='#007fff' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="MUI" techimg={MaterialUI}/> 
                            <Techitem  fontColor='#7708f6' lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname="BootStrap" techimg={bootstrap}/> 
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
