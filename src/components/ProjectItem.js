import React from 'react';

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt={`Screenshot of ${project.title}`} />
      <div className="project-links">
        <a href={project.repo} className="repo-link">GitHub Repo</a>
        <span className="link-spacer">|</span>
        <a href={project.live} className="live-link">Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectItem;
