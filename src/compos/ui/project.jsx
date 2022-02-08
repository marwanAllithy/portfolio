import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Project = ({img, title, para, githublink, websitelink, tools}) => {
    return (

    <div class="project__wrapper" >
    <img src={img} class="project__img" alt=""/>
    <div class="project__wrapper--bg"></div>
    <div class="project__description">
      <h3 class="project__description--title">
        {title}
      </h3>
      <h4 class="project__description--sub-title">
        I used: {tools}
      </h4>
      <p class="project__description--para">
      {para}
      </p>
      <div class="project__description--links">
        <a href={githublink} target="_blank" className="project__description--link"><FontAwesomeIcon icon={faGithub}/></a>
        <a href={websitelink} target="_blank" className="project__description--link"><FontAwesomeIcon icon={faLink}/></a>
      </div>
    </div>  
  </div>

    );
}

export default Project;
