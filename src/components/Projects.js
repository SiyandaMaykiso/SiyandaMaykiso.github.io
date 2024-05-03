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
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/To-Do%20List%20Application%20Dashboard.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/To-Do-List-Application.git', 
    live: 'https://to-do-list-application-sm-79db330bd202.herokuapp.com/', 
    date: new Date('2024-03-01') 
  },

  { 
    id: 3, 
    title: 'Personal Blog Platform',
    description: 'The Personal Blog Platform is a dynamic full stack web application designed for writers, bloggers, and creators who wish to publish, manage, and share their writings. This platform offers a sleek user interface for an engaging writing and reading experience. Built using React, Node.js and PostgreSQL.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Create%20Post%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Personal-Blog-Platform.git', 
    live: 'https://personal-blog-platform-a11db04dd963.herokuapp.com/', 
    date: new Date('2024-02-01') 
  },
 
  {
    id: 4, 
    title: 'What is Cooking Project', 
    description: 'This frontend application that gives you recipes based on the ingredients you have on hand, and helps you find grocery stores nearby.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/What%20is%20cooking%20project%20homepage%20screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/What-s-Cooking-Project.git', 
    live: 'https://siyandamaykiso.github.io/What-s-Cooking-Project/', 
    date: new Date('2024-01-01') 
  },

  {
    id: 5, 
    title: 'JavaScript WeatherApp', 
    description: 'This is a frontend practical weather app made with JavaScript that tells you the weather in your current location. Made with HTML, CSS, and JavaSript. This application uses the OpenWeather API.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Screenshot%20Current%20Weather%20App.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/JavaScript-Weather-App.git', 
    live: 'https://siyandamaykiso.github.io/JavaScript-Weather-App/', 
    date: new Date('2023-12-01') 
  },

  {
    id: 6, 
    title: 'Workday Scheduler', 
    description: 'This is a frontend workday calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML, CSS, jQuery and Moment.js.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Workday%20Scheduler%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Day-Planner.git', 
    live: 'https://siyandamaykiso.github.io/Day-Planner/', 
    date: new Date('2023-12-01') 
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
