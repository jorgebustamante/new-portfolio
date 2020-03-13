import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import '../css/style.css'

const AboutPage=()=> {
  const data = useStaticQuery(graphql`
    query {
      young: file(relativePath: { eq: "old.jpg" }) {
        ...wideImage
      }
      vasquez: file(relativePath: { eq: "vasquez.jpg" }) {
        ...wideImage
      }
      bartend: file(relativePath: { eq: "bartend.jpg" }) {
        ...wideImage
      }
    }
  `);
   const animationProps = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 100 }
  });
  return (
    <div className='flex flex-col font-sans min-h-screen text-gray-900 bg-gray-100' >
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='About'
      />
      <Header />
      <animated.div className=' py-4' style={animationProps}>
      <section className='flex flex-col items-center bg-gray-100 mx-8 md:mx-16'>
        <div className='md:w-3/4 w-full'>
          <h2 className='font-bold mb-3 text-4xl text-gray-800'>
            About Paulie:
          </h2>
          <div className='mb-6 text-gray-800 text-lg'>
            <div className='flex flex-wrap py-4'>
              <div className='w-full md:w-1/2 relative'>
                <Img
                  fluid={data.vasquez.childImageSharp.fluid}
                  alt='paulie at vasquez rocks'
                  className='rounded-lg'
                />
                <p className='absolute font-bold text-xl text-white top-0 mx-4'>
                  <span className='low-light-red'>Vasquez Rocks Agua Dulce 2018, Ricoh GXR100</span>
                </p>
              </div>
              <p className='md:w-1/2 md:px-4'>
                My home is dearly the pacific, growing up in California, Oregon
                and Washington I spent my youth experiencing all the west coast
                has to offer. I am self-made, supporting myself through service
                jobs such as baristing, coffee roasting, and bartending.
              </p>
            </div>
            <div className='flex flex-wrap-reverse md:flex-wrap py-4 align-middle'>
              <p className='md:w-1/2 md:px-4'>
                In Seattle I worked contract roles in commercial photography for
                years, where I was mentored by{' '}
                <a
                  href='https://www.instagram.com/lofisofi/?hl=en'
                  className='text-blue-500'
                >
                  Sofia Lee
                </a>
                . In my mentorship, Sofia taught me the nuances of studio
                lighting, optic distortions, field interviewing, location
                scouting, and project direction.
              </p>
              <div className='w-full md:w-1/2 relative'>
                <Img
                  fluid={data.young.childImageSharp.fluid}
                  alt='paulie when younger'
                  className='rounded-lg'
                />
                <p className='absolute font-bold text-xl text-white top-0 mx-4'>
                  <span className='low-light-red'> Kinwav studio Seattle 2016, Sony A7II</span>
                </p>
              </div>
            </div>

            <div className='flex-wrap flex py-4'>
              <div className='w-full md:w-1/2 relative'>
                <Img
                  fluid={data.bartend.childImageSharp.fluid}
                  alt='paulie bartending'
                  className='rounded-lg'
                />
                <p className='absolute font-bold text-xl text-white top-0 mx-4'>
                 <span className='low-light-red'>Bar Ciudad Seattle 2019, iPhone SE</span> 
                </p>
              </div>
              <p className='md:w-1/2 md:px-4'>
                In 2018 I had gained interest in software
                development and embarked on a significant journey of learning.
                Filled with hardship and unending determination, dedicating all
                of my time to supporting myself and growth within my field. I
                aim at career entry for hybrid design/engineering roles, and
                aspire to be a leader for latinx and native youth to continue
                introducing more communities to tech who have the least means of
                accessing it.
              </p>
            </div>
          </div>
        </div>
      </section>
      </animated.div>
      <Footer />
    </div>
  );
}

export default AboutPage;
