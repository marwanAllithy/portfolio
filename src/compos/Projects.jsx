import Project from "./ui/project";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "./helper/projects";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Projects = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <section id="projects" style={{ background: "#1f1f1f" }}>
      <div
        className="porject__title--cont"
        data-aos="fade-up"
        data-aos-duration="10"
      >
        <h2
          className="project__title section__title"
          style={{ color: "#e0e0e0" }}
        >
          My <span className="blue"> Projects</span>.
        </h2>
      </div>
      <div className="projects__wrapper">
        <div className="projects__cont">
          <div
            className="project__cont"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Carousel
              sx={{ minWidth: "100%" }}
              mx="auto"
              withIndicators
              slideGap="xl"
              controlsOffset="lg"
              controlSize={50}
              loop
              slideSize="70%"
              plugins={[autoplay.current]}
            >
              {projects.map((project, i) => (
                <Carousel.Slide key={i}>
                  <Project project={project} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

AOS.init();
export default Projects;
