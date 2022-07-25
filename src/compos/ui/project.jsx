import { FaLink, FaGithub } from "react-icons/fa";
import React from "react";

const Project = ({ key, img, title, para, githublink, websitelink, tools }) => {
  return (
    <div class="project__wrapper" key={key}>
      <img src={img} class="project__img" alt="" />
      <div class="project__wrapper--bg"></div>
      <div class="project__description">
        <h3 class="project__description--title">{title}</h3>
        <h4 class="project__description--sub-title">I used: {tools}</h4>
        <p class="project__description--para">{para}</p>
        <div class="project__description--links">
          <a
            href={githublink}
            rel="noreferrer noopener"
            target="_blank"
            className="project__description--link"
          >
            <FaGithub />
          </a>
          <a
            href={websitelink}
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
