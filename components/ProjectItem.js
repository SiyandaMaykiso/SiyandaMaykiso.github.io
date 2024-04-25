// components/ProjectItem.js
import React from 'react';
import './ProjectItem.css';  // Assuming you store item styles in a separate CSS file

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={`Screenshot of ${project.title}`} />
      <a href={project.repo}>GitHub Repo</a>
      <a href={project.live}>Live Demo</a>
    </div>
  );
}

export default ProjectItem;
