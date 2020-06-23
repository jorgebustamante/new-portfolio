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
      Image: data.hals.childImageSharp.fluid,
      Tags: "Design, Development",
      Date:"2020"
    },
    {
      Title: 'Cholo Name Generator',
      Description: 'A cholo name generator in vanilla JS, names sourced from Homies LLC.',
      Deploy: 'https://jorgebustamante.github.io/cholo-name-generator/',
      Repo: 'https://github.com/jorgebustamante/cholo-name-generator',
      Image: data.cholo.childImageSharp.fluid,
      Tags: "Design, Development",
      Date:"2019"
    },
    {
      Title: 'Kodachrome Gallery',
      Description:
        'An image gallery built with React + Gatsby, featuring archived Kodachrome slides, inspired by swiss design style',
      Deploy: 'https://kodachrome-gallery.netlify.app/',
      Repo: 'https://jorgebustamante.github.io/swiss-ui',
      Image: data.kodachrome.childImageSharp.fluid,
      Tags: "Design, Development",
      Date: "2019"
    }
  ];
  return (
    <main className='pt-4 mx-8 md:mx-32 xl:mx-48 border-t-2 border-gray-600' id='Projects'>
      <div className=''>
      <h1 className='text-4xl xl:text-5xl font-bold text-gray-800 josefin'>Selected Work:</h1>

        <div className='flex flex-col'>
          {/* ///////// */}
          {ProjectsArr.map(Item => (
            <div className='w-full py-8 border-b-2 border-gray-600' key={Item.Title}>
              <div className='flex flex-col lg:flex-row overflow-hidden'>
                <Img
                  className='lg:w-2/3 w-full'
                  fluid={Item.Image}
                  alt='screencap'
                />
                <div className='lg:w-1/3 w-full py-4 lg:pl-4 flex flex-col justify-around'>
                  <h1 className='text-gray-900 font-semibold text-3xl xl:text-4xl yeseva'>
                    {Item.Title}{' '}
                  </h1>
                  <div className='text-gray-700 text-base xl:text-lg leading-relaxed josefin'>
                    {Item.Description}
                  </div>
                  <div className='my-4 flex flex-col'>
                    <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Deploy}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View Website ➔
                    </a>
                    {Item.Repo ? <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Repo}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Repo ➔
                    </a> : <div/>}
                    
                  </div>
                </div>
              </div>
              <div className='flex flex-row justify-between josefin text-base font-bold text-gray-600 pt-2'> 
              <p id="tags" className=''>{Item.Tags}</p>
              <p id='date'>{Item.Date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Projects;
