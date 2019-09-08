import React from 'react';
import './style.scss';
import { StaticQuery, graphql } from 'gatsby';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <footer id="Contact" className="footer center">
    <div className="content has-text-centered">
      <h4 className="header title is-4 white-text">Contact me</h4>
      <div>
        <a href="https://www.linkedin.com/in/paulie-rodriguez/">
          <i className="fab fa-linkedin contact-icon">
            {' '}
            <FaLinkedin />
          </i>
        </a>
        <a href="https://github.com/jorgebustamante">
          <i className="fab fa-github contact-icon">
            {' '}
            <FaGithub />
          </i>
        </a>
      </div>
      <p className="email white-text">Paulie.J.Rodriguez@gmail.com</p>
    </div>
  </footer>
);
export default Contact;
