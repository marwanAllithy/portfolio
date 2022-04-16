import Techitem from './ui/techitem';
import { ProficientArray, familiarArray } from './helper/skillArray'
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Skills = ({lightmode, darkmode}) => {
    return (
        <section id="skills">
     

            <div className="skill__cont--wrapper" style={{color: lightmode ? "black" : "#e0e0e0"}}>
                <div className="skill__section--title--cont">
                    <h2 className="skill__section--title section__title" data-aos="fade-up">My <span className="blue"> technological Stack</span>.</h2>
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
                            {
                                ProficientArray.map(item => (
                                    <Techitem fontColor={item.fontColor} lightmode={lightmode} data-aos="fade-up"data-aos-duration="400" techname={item.name} techimg={item.img}/>
                                ))
                            }
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
                            {
                                familiarArray.map(item => (
                                <Techitem  fontColor={item.fontColor} lightmode={lightmode} data-aos="fade-up"data-aos-duration="500" techname={item.name} techimg={item.img}/> 
                                ))
                            }
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
