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
        <a href="mailto:S.mayekiso@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;