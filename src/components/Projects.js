// components/Projects.js
import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
  { 
    id: 1,
    title: 'Recipe Sharing Platform',
    description: 'The Recipe Sharing Platform is a web application that allows users to share their favorite recipes, complete with ingredients, cooking instructions, and images. Built using React, Node.js, and PostgreSQL.',
    image: 'url_to_image3', // Replace 'url_to_image3' with the actual path to your project screenshot
    repo: 'https://github.com/SiyandaMaykiso/Recipe-Sharing-Platform.git', // Replace with actual GitHub repo URL
    live: 'https://recipe-sharing-platform-sm-8996552549c5.herokuapp.com/', // Replace with actual live project URL
    date: new Date('2024-04-01') // Use the actual date the project was or will be completed
  },
  { 
    id: 2, 
    title: 'Project Two',
    description: 'Description of Project One', 
    image: 'url_to_image1', 
    repo: 'url_to_repo1', 
    live: 'url_to_live1', 
    date: new Date('2024-02-01') 
  },
  // Adding Recipe Sharing Platform project
  {
    id: 3, 
    title: 'Project Three', 
    description: 'Description of Project Two', 
    image: 'url_to_image2', 
    repo: 'url_to_repo2', 
    live: 'url_to_live2', 
    date: new Date('2024-01-01') 
  }
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
