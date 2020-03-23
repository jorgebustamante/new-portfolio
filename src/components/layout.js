import React from 'react';
import Header from './header';
import Hero from './hero';
import Projects from './projects';
import Footer from './footer';
import PropTypes from "prop-types"


function Layout({children}) {
  return (
    <>
    <div className='flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100'>
      {children}
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
