import Project from './ui/project';
import AOS  from 'aos';
import "aos/dist/aos.css";
import {projects} from './helper/projects'

const Projects = ({lightmode, darkmode}) => {

    return (
        <section id="projects" style={{background: lightmode ? "#e0e0e0":"#1f1f1f"  }} >
            <div className="porject__title--cont" data-aos="fade-up" data-aos-duration="10">
                <h2 className="project__title" style={{color: lightmode ? "black" : "#e0e0e0"}}>My <span className="blue"> Projects</span>.</h2>
            </div>
            <div className="projects__wrapper">
                <div className="projects__cont">
                    <div className="project__cont"data-aos="fade-up" data-aos-duration="1000">
                        {
                            projects.map((project, index)=> (
                                <Project 
                                key={index}
                                img={project.img}
                                title={project.title} 
                                para={project.para} 
                                githublink={project.githublink} 
                                websitelink={project.websitelink} 
                                tools={project.tools} 
                                 />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

AOS.init();
export default Projects;
