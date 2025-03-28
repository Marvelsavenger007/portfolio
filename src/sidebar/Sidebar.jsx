import React, {useState} from 'react';
import profile from "../images/profilepic1.jpg";
import './sidebar.css'
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt,  FaEnvelope, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleSetActive = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close sidebar on mobile when a link is clicked
  };

  return (
    <div className='sidebar-container'>
      <button
        className={`menu-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <img src={profile} alt="Profile" className="profile-pic" />
        <div className="social-links">
          <a href="https://x.com/marvelsthebeast?s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/marvels.shadow/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/marvels.okafor" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/marvellous-okafor-428567213/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/+2349067672646" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === "#home" ? "active" : ""}
                onClick={() => handleSetActive("#home")}
              >
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === "#about" ? "active" : ""}
                onClick={() => handleSetActive("#about")}
              >
                <FaUser /> About
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeLink === "#resume" ? "active" : ""}
                onClick={() => handleSetActive("#resume")}
              >
                <FaFileAlt /> Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink === "#projects" ? "active" : ""}
                onClick={() => handleSetActive("#projects")}
              >
                <FaProjectDiagram /> Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === "#contact" ? "active" : ""}
                onClick={() => handleSetActive("#contact")}
              >
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar