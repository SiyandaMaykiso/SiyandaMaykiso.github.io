import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <section className="intro-section">
        <img src="https://raw.githubusercontent.com/SiyandaMaykiso/SiyandaMaykiso.github.io/main/Screenshots/HeadshotsSiyanda-9.jpg" 
             alt="Siyanda Burnham" 
             className="profile-photo"/>
        <h1>Siyanda Burnham</h1>
        <p className="title">Full-Stack Web Developer & Digital Marketing Professional</p>
        <p>
          I am a full stack web developer with a comprehensive background in developing scalable web applications, 
          AI-driven solutions, SEO, and digital marketing strategies. Skilled in integrating AI technologies 
          such as natural language processing (NLP) and image generation models to create intelligent, user-friendly applications.
        </p>
      </section>
      
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <p>
          Proficient in JavaScript frameworks, database management, server-side logic, and responsive design principles. 
          Core technologies include HTML, CSS, JavaScript, Node.js, React, and PostgreSQL. Committed to leveraging AI 
          capabilities to enhance accessibility and user experience across platforms.
        </p>
      </section>

      <section className="professional-background">
        <h2>Professional Background</h2>
        <p>
          Extensive experience in SEO, paid media, email marketing, public relations, social media, and content marketing. 
          Skilled in executing effective SEO strategies to improve organic search rankings and increase visibility, 
          while driving lead generation through performance analysis and optimization.
        </p>
        <p>
          My collaborative approach enables me to work seamlessly with cross-functional teams and external partners, 
          fostering innovation and achieving remarkable results.
        </p>
      </section>
      
      <section className="achievements">
        <h2>Impact and Achievements</h2>
        <p>
          Throughout my career, I have consistently demonstrated a commitment to delivering tangible, measurable outcomes 
          that drive growth for organizations. My dedication to excellence and passion for digital innovation make me an asset 
          in any AI-driven or digital marketing environment.
        </p>
      </section>
    </div>
  );
}

export default HomePage;