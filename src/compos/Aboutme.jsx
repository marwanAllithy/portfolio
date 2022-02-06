import React from 'react';
import portpic from '../assets/port.jpg';
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Aboutme = () => {
    
    return (
        <section id="aboutme" >
          
           <div className="aboutme__section--title-cont"  data-aos="fade-up"  >
               <h2 className="aboutme__section--title">About <span className="blue">Me</span>.</h2>
           </div>
           <div className="aboutme__cont" >
               <div className="aboutme__pic--cont"data-aos="fade-up">
                   <figure className="aboutme__pic--wrapper click">
                       <img src={portpic} alt="" className="aboutme__pic" />   
                    </figure>   
               </div>
               <div className="aboutme__description" data-aos="fade-up">
                   <div className="aboutme__description--cont" data-aos="fade-up"> 
                       <p className="aboutme__description--para" data-aos="fade-up">
                           A 16 year-old front-end Developer with a huge passion for making  
                           <span className="pink"> Beautiful</span>, <span className="pink"> Customizable</span>, 
                           <span className="pink"> Compatible</span>, with most devices and All browsers
                           and <span className="pink">Responsive</span> <span className="blue">User Interfaces </span>with great 
                           <span className="blue"> User Experiences </span>with my passions,
                           I love problem-solving creating solutions that could positively impact the world. 
                           <br /><br />
                           Currently, A <span className="pink"> High school student </span> from 
                           <span className="blue"> Egypt</span>, learning all I can about Web Development, tutoring and building client's projects.
                           and a private programming <span className="blue"> Tutor</span>.
                       </p>
                   </div>
               </div>
           </div>
           
       </section>
    );
    
}

export default Aboutme;
