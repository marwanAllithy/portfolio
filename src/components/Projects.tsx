import Project from "./ui/project";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "../data/projects";
import { useRef } from "react";
import { MantineProvider } from "@mantine/core";

const Projects = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <section id="projects" className="bg-[#1f1f1f] text-[#e0e0e0]">
        <div className="flex justify-center">
          <h2 className="mx-auto text-5xl font-semibold">
            My <span className="blue"> Projects</span>
          </h2>
        </div>
        <div className="mx-auto  mt-12 w-screen">
          <div className="project__cont">
            <Carousel
              sx={{ Width: "100vw" }}
              mx="auto"
              withIndicators
              controlSize={50}
              loop
              withControls={false}
              slideSize="60%"
              className="mx-auto flex justify-center"
              plugins={[autoplay.current]}
            >
              {projects.map((project, i) => (
                <Carousel.Slide key={i} className="h-full w-full">
                  <Project project={project} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </MantineProvider>
  );
};

export default Projects;
