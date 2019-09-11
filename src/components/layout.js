import React from 'react';
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import Technologies from './technologies';
import Intro from './intro';
import Background from './background';
import { ParallaxProvider } from 'react-scroll-parallax';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <ParallaxProvider>
      <Background />
      <Navbar />
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </ParallaxProvider>
  </div>
);

export default Layout;
