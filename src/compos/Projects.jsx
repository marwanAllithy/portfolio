import Project from './ui/project';
import librarypic from './projectimg/library.png'
import easyViewPic from './projectimg/easyView.png'
import AOS  from 'aos';
import "aos/dist/aos.css";
const Projects = ({lightmode, darkmode}) => {
    return (
        <section id="projects" style={{background: lightmode ? "#e0e0e0":"#1f1f1f"  }} >
            <div className="porject__title--cont" data-aos="fade-up" data-aos-duration="10">
                <h2 className="project__title" style={{color: lightmode ? "black" : "#e0e0e0"}}>My <span className="blue"> Projects</span>.</h2>
            </div>
            <div className="projects__wrapper">
                <div className="projects__cont">
                    <div className="project__cont"data-aos="fade-up" data-aos-duration="1000">
                        <Project img={librarypic} 
                        title="E-Commerce-library"
                        para="Using best practices with Html (BEM), Css, and javaScript, while using React (+hooks) i built a fake E-library
                        and a clean UI design with a easy-to-understand layout for the website."
                        githublink="https://github.com/OZY3112/E-Commerce-library"
                        websitelink="https://e-commerce-library.vercel.app/"
                        tools="HTML | CSS | JavaScript | React | Node.Js"
                        />
                        <Project img={easyViewPic} 
                        title="Easy view"
                        para="Using the TMDB api and axios i made a website (in 3 days) where u can look for a movie name and find all of the 
                        results and also getting access to more information by click on the movie poster."
                        githublink="https://github.com/OZY3112/views_bata"
                        websitelink="https://easy-view.vercel.app/"
                        tools="HTML | SCSS | JavaScript | React | Vite | axios | Node.Js"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

AOS.init();
export default Projects;
