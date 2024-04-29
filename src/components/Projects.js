// components/Projects.js
import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [
  { 
    id: 1,
    title: 'Recipe Sharing Platform',
    description: 'The Recipe Sharing Platform is a full-stack web application that allows users to share their favorite recipes, complete with ingredients, cooking instructions, and images. Built using React, Node.js, and PostgreSQL.',
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Recipe-Sharing-Platform-RecipeListing%20Page.png?raw=true',
    repo: 'https://github.com/SiyandaMaykiso/Recipe-Sharing-Platform.git', 
    live: 'https://recipe-sharing-platform-sm-8996552549c5.herokuapp.com/',
    date: new Date('2024-04-01')
  },
  
  { 
    id: 2, 
    title: 'To-Do List Application',
    description: 'This To-Do List application is a user-friendly full-stack platform that allows users to manage their daily tasks efficiently. Users can easily add tasks to their personal list, mark tasks as completed, and delete them as needed. Built using React, Node.js and PostgreSQL.',
    image: 'url_to_image1', 
    repo: 'https://github.com/SiyandaMaykiso/To-Do-List-Application.git', 
    live: 'https://to-do-list-application-sm-79db330bd202.herokuapp.com/', 
    date: new Date('2024-03-01') 
  },

  { 
    id: 3, 
    title: 'Project Three',
    description: 'Description of Project One', 
    image: 'url_to_image1', 
    repo: 'url_to_repo1', 
    live: 'url_to_live1', 
    date: new Date('2024-02-01') 
  },
 
  {
    id: 4, 
    title: 'Project Four', 
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
