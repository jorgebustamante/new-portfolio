import React from 'react';
import Header from './header';
import Hero from './hero';
import Projects from './projects';
import Footer from './footer';

function Layout() {
  return (
    <div className='flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100'>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default Layout;
