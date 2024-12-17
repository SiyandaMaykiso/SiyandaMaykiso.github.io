import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* GitHub Link */}
        <a href="https://github.com/SiyandaMaykiso" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>

        {/* Email Link */}
        <a href="mailto:siyandaburnham@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>

        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/siyanda-burnham-mba/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;