import { FaLink, FaGithub } from "react-icons/fa";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Project = ({project, key}) => {
  return (
    <div class="project__wrapper" key={key}>
      <LazyLoadImage
        src={project.img}
        visibleByDefault
        class="project__img"
        alt="marwan allisy project "
      />
      <div class="project__wrapper--bg"></div>
      <div class="project__description">
        <h3 class="project__description--title">{project.title}</h3>
        <h4 class="project__description--sub-title">I used: {project.tools}</h4>
        <p class="project__description--para">{project.para}</p>
        <div class="project__description--links">
          <a
            href={project.githublink}
            rel="noreferrer noopener"
            target="_blank"
            className="project__description--link"
          >
            <FaGithub />
          </a>
          <a
            href={project.websitelink}
            rel="noreferrer noopener"
            target="_blank"
            className="project__description--link"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
