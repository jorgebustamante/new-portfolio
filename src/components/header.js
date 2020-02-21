import { Link } from 'gatsby';
import React, { useState } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import "../css/style.css"
const Header = () => {
  const [isActive, toggleButton] = useState(false);

  return (
    <>
      <header className='bg-white shadow m-0'>
        <div className='flex flex-wrap md:flex-no-wrap items-center justify-between max-w-full m-0 px-4 py-2 md:py-6 md:px-8 '>
          <div className='flex items-center'>
            <Link to='/'>
              <a className='font-bold text-2xl text-white bg-red-500 rounded-full px-3 py-3 hover:shadow-md hover:bg-red-600'>
                PR
              </a>
            </Link>
          </div>
          <div className='block md:hidden flex'>
            <HamburgerSqueeze
              className='z-20'
              isActive={isActive}
              onClick={() => toggleButton(!isActive)}
              barColor={!isActive ? '#2D3748' : '#FFFFFF'}
            />
          </div>

          <ul className='hidden md:flex flex-col md:flex-row md:items-center md:justify-center text-base w-full md:w-auto mr-0'>
            {[
              { title: 'About me', route: '/about' },
              { title: 'Projects', route: '/#Projects' }
              // { title: 'Design', route: '/design' },
              // { title: 'Blog', route: '/blog' }
            ].map(navigationItem => (
              <li className='mt-3 md:mt-0 md:ml-6 hover:underline' key={navigationItem.title}>
                <Link to={navigationItem.route}>
                  <p className='block text-red-500'>{navigationItem.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div
        className={`${isActive} fixed bg-gray-800 h-screen w-1/2 flex flex-col right-0 md:hidden lg:hidden z-10`}
        id='SideMenu'
      >
        <ul className='flex-col mt-16'>
          {[
            { title: 'About me', route: '/about' },
            { title: 'Projects', route: '/#Projects' }
            // { title: 'Design', route: '/design' },
            // { title: 'Blog', route: '/blog' }
          ].map(navigationItem => (
            <li
              className='mt-3 md:mt-0 md:ml-6'
              key={navigationItem.title + 'side'}
            >
              <Link
                to={navigationItem.route}
                onClick={() => toggleButton(!isActive)}
              >
                <a className=' text-white block ml-4 text-2xl'>
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
