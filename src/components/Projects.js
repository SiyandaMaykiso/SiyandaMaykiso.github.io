// components/Projects.js
import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';  // Assuming you store project styles in a separate CSS file

const projects = [
  { id: 1, title: 'Project One', description: 'Description of Project One', image: 'url_to_image1', repo: 'url_to_repo1', live: 'url_to_live1', date: new Date('2024-01-01') },
  { id: 2, title: 'Project Two', description: 'Description of Project Two', image: 'url_to_image2', repo: 'url_to_repo2', live: 'url_to_live2', date: new Date('2024-02-01') },
  // More projects
];

function Projects() {
  const sortedProjects = projects.sort((a, b) => b.date - a.date);
  return (
    <div className="projects">
      <h1>Projects</h1>
      {sortedProjects.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
