import React from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
import './Projects.css';

// Create a context for images
const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: 'Personal Website Template',
    technologies: ['React.js', 'HTML', 'CSS'],
    summary: 'Developed a dynamic dashboard for tracking employer hiring trends, equiped with google authentication and role based access',
    // screenshot: 'njit_hiring_outcomes_tracker_ss.png',
    github: 'https://github.com/',
  },
  {
    title: "QR Code Generator",
    technologies: ['Python', 'Docker'],
    summary: 'Developed a QR code generator using Python and Docker',
    github: 'https://github.com/KoustubhSahu/qrprog',
  }
  
];

// function getProjectImage(imageName) {
//   // const obj = {backgroundImage: `url(./images/${imageName})`};
//   const obj = {backgroundImage: `url(${images(`./${imageName}`)})`};
//   return obj;
// }

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-screenshot"
              style= {project.screenshot ? { backgroundImage: `url(${images(`./${project.screenshot}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {backgroundColor: 'rgba(240,240,240,0.5)'}}
              aria-label={project.title}
            >
              <h2>{project.screenshot ? "" : project.title}</h2>
              <span class="project-summary">{project.summary}
              <span class="project-links">
                <Router>
                  {project.liveURL ? <RouterLink to={project.liveURL} target="_blank"><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> : null}
                  {project.github ? <RouterLink to={project.github} target="_blank"><img src={icon(`./code.svg`)} alt="code"/></RouterLink> : null}
                  {/* <img src={icon(`./live-link.svg`)} alt="live-link"/> */}
                  {/* <img src={icon(`./code.svg`)} alt="code"/> */}
                  {/* <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink>
                  <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> */}
                </Router>
              </span>
              </span>
              
            </div>
            <div className="project-content" >
              <h3 class="project-title">{project.title}</h3>
              {/* <p class="project-summary">{project.summary}</p> */}
              <div class="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index} class="project-technology">{technology}</span>
                ))}
              </div>            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
