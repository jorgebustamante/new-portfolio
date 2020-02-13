import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import {IoIosMail} from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
      <nav className='flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-4xl md:text-6xl text-red-500'>
        <a
          href='https://www.linkedin.com/in/paulie-rodriguez/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-red-600'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/jorgebustamante'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-red-600'

        >
          <FaGithub />
        </a>
        <a
          href='mailto:paulie.j.rodriguez@gmail.com?Subject=Hey!'
          target='_top'
          className='hover:text-red-600'

        >
          <IoIosMail />
        </a>
        <a
          href='https://twitter.com/Paulie_Dev'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-red-600'

        >
          <FaTwitter />
        </a>
      </nav>

    </footer>
  );
};
export default Footer;
