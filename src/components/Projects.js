import React from 'react';
import ProjectItem from './ProjectItem';

const projects = [

  {
    id: 1,
    title: 'AI-Powered Code Reviwer',
    description: 'The AI-Powered Content Summarizer is a web application designed to generate absorbable summaries of long-form content using advanced natural language processing (NLP) technology. This project aims to streamline information sharing by reducing large articles into brief, easy-to-digest summaries, turning academic and business articles into short-form content. The frontend is built with React, and the backend is powered by Node.js with a PostgreSQL database hosted on Heroku.',
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/AI_Powered_Code_Reviewer_Review_Page.png?raw=true',
    repo: 'https://github.com/SiyandaMaykiso/AI-Powered-Code-Reviewer',
    live: 'https://ai-powered-code-reviewer-c7e564a6a3d0.herokuapp.com/',
    date: new Date('2024-07-01')
},

  {
    id: 2,
    title: 'AI-Powered Content Summarizer',
    description: 'The AI-Powered Content Summarizer is a web application designed to generate absorbable summaries of long-form content using advanced natural language processing (NLP) technology. This project aims to streamline information sharing by reducing large articles into brief, easy-to-digest summaries, turning academic and business articles into short-form content. The frontend is built with React, and the backend is powered by Node.js with a PostgreSQL database hosted on Heroku.',
    image: 'https://github.com/SiyandaMaykiso/AI-Powered-Content-Summarizer/blob/main/screenshots/Summarize_Page_AI_Content_Powered_Summarizer.png?raw=true',
    repo: 'https://github.com/SiyandaMaykiso/AI-Powered-Content-Summarizer.git',
    live: 'https://ai-powered-content-summarizer-71f343ba410f.herokuapp.com/',
    date: new Date('2024-06-01')
},

  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description: 'The AI-Powered Chatbot is an intelligent web application that simulates human-like conversations using advanced NLP (Natural Language Processing). Built using React, Node.js, and PostgreSQL, it integrates OpenAI’s GPT API to provide real-time responses and manage user interactions, with features like authentication and persistent chat history.',
    image: 'https://github.com/SiyandaMaykiso/AI-Powered-Chatbot/blob/main/screenshots/Chat_Window_Screenshot.png?raw=true',
    repo: 'https://github.com/SiyandaMaykiso/AI-Powered-Chatbot.git',
    live: 'https://ai-powered-chatbot-c163b8863896.herokuapp.com/',
    date: new Date('2024-05-01')
},
  
  { 
    id: 4,
    title: 'Recipe Sharing Platform',
    description: 'The Recipe Sharing Platform is a full-stack web application that allows users to share their favorite recipes, complete with ingredients, cooking instructions, and images. Built using React, Node.js, and PostgreSQL.',
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Recipe-Sharing-Platform-RecipeListing%20Page.png?raw=true',
    repo: 'https://github.com/SiyandaMaykiso/Recipe-Sharing-Platform.git', 
    live: 'https://recipe-sharing-platform-sm-8996552549c5.herokuapp.com/',
    date: new Date('2024-04-01')
  },
  

  { 
    id: 5, 
    title: 'To-Do List Application',
    description: 'This To-Do List application is a user-friendly full-stack platform that allows users to manage their daily tasks efficiently. Users can easily add tasks to their personal list, mark tasks as completed, and delete them as needed. Built using React, Node.js and PostgreSQL.',
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/To-Do%20List%20Application%20Dashboard.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/To-Do-List-Application.git', 
    live: 'https://to-do-list-application-sm-79db330bd202.herokuapp.com/', 
    date: new Date('2024-03-01') 
  },

  { 
    id: 6, 
    title: 'Personal Blog Platform',
    description: 'The Personal Blog Platform is a dynamic full stack web application designed for writers, bloggers, and creators who wish to publish, manage, and share their writings. This platform offers a sleek user interface for an engaging writing and reading experience. Built using React, Node.js and PostgreSQL.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Create%20Post%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Personal-Blog-Platform.git', 
    live: 'https://personal-blog-platform-a11db04dd963.herokuapp.com/', 
    date: new Date('2024-02-01') 
  },
 
  {
    id: 7, 
    title: 'What is Cooking Project', 
    description: 'This frontend application that gives you recipes based on the ingredients you have on hand, and helps you find grocery stores nearby.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/What%20is%20cooking%20project%20homepage%20screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/What-s-Cooking-Project.git', 
    live: 'https://siyandamaykiso.github.io/What-s-Cooking-Project/', 
    date: new Date('2024-01-01') 
  },

  {
    id: 8, 
    title: 'JavaScript WeatherApp', 
    description: 'This is a frontend practical weather app made with JavaScript that tells you the weather in your current location. Made with HTML, CSS, and JavaSript. This application uses the OpenWeather API.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Screenshot%20Current%20Weather%20App.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/JavaScript-Weather-App.git', 
    live: 'https://siyandamaykiso.github.io/JavaScript-Weather-App/', 
    date: new Date('2023-12-01') 
  },

  {
    id: 9, 
    title: 'Workday Scheduler', 
    description: 'This is a frontend workday calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML, CSS, jQuery and Moment.js.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Workday%20Scheduler%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Day-Planner.git', 
    live: 'https://siyandamaykiso.github.io/Day-Planner/', 
    date: new Date('2023-11-01') 
  },

  {
    id: 10, 
    title: 'Password Generator', 
    description: 'This frontend password generator contains, HTML, Javascript code and CSS styling. This app will run sucessfully on different browsers and store secure information. It contains a clear and polished user interface that is responsive.', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Password%20Generator%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Password-Generator.git', 
    live: 'https://siyandamaykiso.github.io/Password-Generator/', 
    date: new Date('2023-10-01') 
  },

  {
    id: 11, 
    title: 'Movie Guide', 
    description: 'This app will help you find any theatrical movie, the app will also provide you with a movie rating. This app works on most desktop and mobile applications. Built with the Open Movie Database API (The OMDb API is a RESTful web service to obtain movie information), Poppins Font, HTML, CSS & JavaScript', 
    image: 'https://github.com/SiyandaMaykiso/SiyandaMaykiso.github.io/blob/main/Screenshots/Movie%20Guide%20Screenshot.png?raw=true', 
    repo: 'https://github.com/SiyandaMaykiso/Movie-Guide.git', 
    live: 'https://siyandamaykiso.github.io/Movie-Guide/', 
    date: new Date('2023-09-01') 
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
