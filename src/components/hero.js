import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Profile from './profile';
import { useSpring, animated } from 'react-spring';

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
  const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 100 }
  });

  return (
    <animated.div className='' style={animationProps}>
      <div className='mx-8 md:mx-16 py-6 flex flex-col lg:flex-row justify-between'>
        {/*Left Col*/}
        
        <div className='flex flex-col w-full lg:w-1/2 justify-center items-start text-center md:text-left lg:px-6 lg:mb-0 mb-4 bg-white rounded-lg shadow'>
          <div className='h-1 mx-auto gradient w-full opacity-25 mb-4 py-0 rounded-full'></div>
          <div className='lg:flex-row flex-col flex justify between'>
            <div className='w-1/2 lg:mx-0 mx-auto'>          <Profile /> </div>
          <h1 className='my-4 mx-4 text-5xl font-bold leading-tight josefin text-gray-900'>
            Yo! I&#39;m Paulie Rodriguez
          </h1>
          </div>
      
          <p className='leading-normal text-2xl text-left lg:mb-8 mb-4 mx-4 text-gray-800'>
            I&#39;m a UI/UX developer with a background in commercial
            photography, bartending and coffee roasting!
          </p>
          <div className='h-1 mx-auto gradient w-full opacity-25 my-0 py-0 rounded-full'></div>
        </div>
        {/*Right Col*/}

        <div className='w-full lg:w-1/2 lg:pl-8 text-center'>
          <Img fluid={image} alt='vector image of a sun over mountains' />
        </div>
      </div>
    </animated.div>
  );
};

export default Hero;
