import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      kodachrome: file(relativePath: { eq: "kodachrome.PNG" }) {
        ...wideImage
      }
      hals: file(relativePath: { eq: "hals.png" }) {
        ...wideImage
      }
      cholo: file(relativePath: { eq: "cholo.png" }) {
        ...wideImage
      }
    }
  `);
  const ProjectsArr = [
    {
      Title: "Hal's Office",
      Description:
        'A business website built with Gatsby, Contentful CMS and Tailwind.',
      Deploy: 'http://halsofficecoffee.com/',
      Image: data.hals.childImageSharp.fluid
    },
    {
      Title: 'Cholo Name Generator',
      Description: 'A cholo name generator in vanilla JS, names sourced from Homies LLC.',
      Deploy: 'https://jorgebustamante.github.io/cholo-name-generator/',
      Repo: 'https://github.com/jorgebustamante/cholo-name-generator',
      Image: data.cholo.childImageSharp.fluid
    },
    {
      Title: 'Kodachrome Gallery',
      Description:
        'An image gallery built with React + Gatsby, featuring archived Kodachrome slides, inspired by swiss design style',
      Deploy: 'https://kodachrome-gallery.netlify.app/',
      Repo: 'https://jorgebustamante.github.io/swiss-ui',
      Image: data.kodachrome.childImageSharp.fluid
    }
  ];
  return (
    <main className='py-2 mx-8 md:mx-32' id='Projects'>
      <div className=''>
      <h1 className='text-4xl font-bold text-gray-800 josefin'>Selected Work:</h1>

        <div className='flex lg:flex-row flex-col items-center justify-between'>
          {/* ///////// */}
          {ProjectsArr.map(Item => (
            <div className='lg:w-2/7 sm:w-3/4 w-full mb-4' key={Item.Title}>
              <div className='bg-white rounded-lg overflow-hidden shadow hover:shadow-md'>
                <Img
                  className='h-56 w-full object-cover object-center'
                  fluid={Item.Image}
                  alt='screencap'
                />
                <div className='p-4 h-auto md:h-40 lg:h-48'>
                  <p className='block text-gray-800 font-semibold mb-2 text-lg md:text-base lg:text-lg josefin'>
                    {Item.Title}{' '}
                  </p>
                  <div className='text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm opensans'>
                    {Item.Description}
                  </div>
                  <div className=' my-2 flex flex-col'>
                    <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Deploy}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Website
                    </a>
                    {Item.Repo ? <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Repo}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Repo
                    </a> : <div/>}
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Projects;
