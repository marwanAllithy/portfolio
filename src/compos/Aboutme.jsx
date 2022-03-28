import React from 'react';
import portpic from '../assets/port.jpg';
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Aboutme = ({lightmode, darkmode}) => {
    
    return (
        <section id="aboutme" style={{background: lightmode ? "#e0e0e0":"#1f1f1f"  }}>
          
           <div className="aboutme__section--title-cont"  data-aos="fade-up"  style={{color: lightmode ? "black" : "#e0e0e0"}}>
               <h2 className="aboutme__section--title">About <span className="blue">Me</span>.</h2>
           </div>
           <div className="aboutme__cont"style={{color: lightmode ? "black" : "#e0e0e0"}} >
               <div className="aboutme__pic--cont"data-aos="fade-up">
                   <figure className="aboutme__pic--wrapper " style={{boxShadow : lightmode ? "-36px 36px 72px #5c5c5c,36px -36px 72px #ffffff" : "-36px 36px 72px #000000 ,36px -36px 72px#1d1d1d", borderRadius: "50%"}}>
                       <img src={portpic} alt="" className="aboutme__pic" />   
                    </figure>   
               </div>
               <div className="aboutme__description" data-aos="fade-up">
                   <div className="aboutme__description--cont" data-aos="fade-up"> 
                       <p className="aboutme__description--para" data-aos="fade-up">
                           A 16-year-old front-end Developer with a huge passion for 
                           making <span className="pink">  Beautiful</span>,  
                           <span className="pink"> Customizable</span>, <span className="pink"> Compatible</span> and <span className="pink"> Responsive  </span> <span className="blue"> User Interfaces </span> 
                            with great <span className="blue"> User Experiences </span> with my passions.
                           <br /><br />
                            I love <span className="blue"> problem-solving </span> and creating solutions
                             that could positively impact the world.
                            <br /><br />
                            Currently, A <span className="pink"> High school student </span> from Egypt, 
                            learning all I can about Web Development, building client projects. And a 
                            private programming  <span className="blue">Tutor</span>.
                       </p>
                   </div>
               </div>
           </div>
           
       </section>
    );
    
}

export default Aboutme;
