import React from 'react';
import './style.scss';
import { Link } from 'gatsby';
import Media from './media';
let Style = {
  background: 'none'
};
let Logo = {
  height: '50px'
};
const burgerClick = () => {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
};
const Navbar = () => (
  <nav className="navbar" style={Style}>
    <div className="container">
      <div className="navbar-brand">
        <img id="logo" src={Media.Brand} alt="Logo" style={Logo} />
        
        <span
          className="navbar-burger burger"
          data-target="navbarMenu"
          onClick={burgerClick}
        >
          <span />
          <span />
          <span />
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item links" to="/#About">
            About
          </Link>

          <Link className="navbar-item links" to="/#Technologies">
            Technologies
          </Link>

          <Link className="navbar-item links" to="/#Projects">
            Projects
          </Link>

          <Link className="navbar-item links" to="/#Contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
