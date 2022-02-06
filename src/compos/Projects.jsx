import React from 'react';
import Project from './ui/project';
import librarypic from './projectimg/library.png'
import AOS  from 'aos';
import "aos/dist/aos.css";
AOS.init();
const Projects = () => {
    return (
        <section id="projects">
            <div className="porject__title--cont" data-aos="fade-up" data-aos-duration="10">
                <h2 className="project__title">My <span className="blue"> Projects</span>.</h2>
            </div>
            <div className="projects__wrapper">
                <div className="projects__cont">
                    <div className="project__cont"data-aos="fade-up" data-aos-duration="1000">
                        <Project img={librarypic} 
                        title="E-Commerce-library"
                        para="Using best practices with Html (BEM), Css, and javaScript, while using React (+hooks) i built a fake E-library
                        with a clean UI design with a easy-to-understand layout for the website."
                        githublink="https://github.com/OZY3112/E-Commerce-library"
                        websitelink="https://libraryozy.netlify.app/#/"
                        tools="HTML, CSS, JavaScript, React, Node.Js"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
