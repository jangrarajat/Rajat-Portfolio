// src/components/Footer.jsx
import "../styles/add.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <p>© {new Date().getFullYear()} Rajat Jangra. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/jangrarajat" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
        </a>
      
        <a href="https://www.linkedin.com/in/rajat-jangra-839740367/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
          <a href="https://www.instagram.com/18110120_/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;




