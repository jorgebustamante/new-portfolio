import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Profile from './profile';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "LogoWide.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const image = data.file.childImageSharp.fluid;
  return (
    // <div>
      <div className=''>
        <div className='container px-4 md:px-0 py-6 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          {/*Left Col*/}
          <div className='flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left px-6 py-1 bg-white rounded-lg shadow'>
            <div className='h-1 mx-auto gradient w-full opacity-25 my-0 py-0 rounded-full'></div>
            <Profile />
            <h1 className='my-4 text-5xl font-bold leading-tight'>
              Yo! I&#39;m Paulie Rodriguez
            </h1>
            <p className='leading-normal text-2xl mb-8 text-gray-800'>
              I&#39;m a UI/UX engineer with a background in commercial
              photography, bartending and coffee roasting!
            </p>
            <div className='h-1 mx-auto gradient w-full opacity-25 my-0 py-0 rounded-full'></div>
          </div>
          {/*Right Col*/}
          <div className='w-full md:w-3/5 px-6 text-center'>
            <Img fluid={image} alt='vector image of a sun over mountains' />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Hero;
