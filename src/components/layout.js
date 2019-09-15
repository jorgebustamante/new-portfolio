import React from 'react';
import '../../node_modules/slick-carousel/slick/slick.scss';
import '../../node_modules/slick-carousel/slick/slick-theme.scss';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import ProjectsWide from './projects-wide';
import Technologies from './technologies';
import Intro from './intro';
import Background from './background';
import { ParallaxProvider } from 'react-scroll-parallax';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const isClient = typeof window !== 'undefined';
const MOBILE_BREAKPOINT = 900;

export default class Layout extends React.Component {
  state = {
    viewportWidth: 0
  };

  componentDidMount() {
    if (isClient) {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
  }

  componentWillUnmount() {
    if (isClient)
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ viewportWidth: window.innerWidth });
  };

  render() {
    let Carousel;
    const { viewportWidth } = this.state;
    const isMobile = Boolean(viewportWidth <= MOBILE_BREAKPOINT);
    isMobile ? (Carousel = Projects) : (Carousel = ProjectsWide);
    return (
      <div>
        <Helmet />
        <ParallaxProvider>
          <Background />
          <Navbar />
          <Intro />
          <About />
          <Technologies />
          <Carousel />
          <Contact />
        </ParallaxProvider>
      </div>
    );
  }
}


