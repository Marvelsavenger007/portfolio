import React from "react";
import './footer.css'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Marvels Okafor. All rights reserved.</p>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://x.com/marvelsthebeast?s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com/marvels.shadow/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/marvels.okafor" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://linkedin.com/in/marvellous-okafor-428567213/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/+2349067672646" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
