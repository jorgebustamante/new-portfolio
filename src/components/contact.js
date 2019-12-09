import React from 'react';
import './style.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <footer id="Contact" className="footer center">
    <div className="content has-text-centered">
      <h4 className="header title is-4 white-text">Contact me</h4>
      <div>
        <a href="https://www.linkedin.com/in/paulie-rodriguez/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin contact-icon">
            {' '}
            <FaLinkedin />
          </i>
        </a>
        <a href="https://github.com/jorgebustamante" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github contact-icon">
            {' '}
            <FaGithub />
          </i>
        </a>
        <a href="https://www.instagram.com/soft_vato/" target="_blank" rel="noopener noreferrer">
          <i className="contact-icon">
            <FaInstagram />{' '}
          </i>
        </a>
      </div>
      <p className="email white-text">Paulie.J.Rodriguez@gmail.com</p>
    </div>
  </footer>
);
export default Contact;
