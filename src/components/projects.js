import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      kodachrome: file(relativePath: { eq: "kodachrome.PNG" }) {
        ...wideImage
      }
      ecommerce: file(relativePath: { eq: "ecommerce.jpg" }) {
        ...wideImage
      }
      canelita: file(relativePath: { eq: "CanelitaCap.JPG" }) {
        ...wideImage
      }
    }
  `);
  const ProjectsArr = [
    {
      Title: 'E-Commerce',
      Description:
        'An E-commerce space buit with tailwind CSS, gatsby, and shopify.',
      Deploy: 'https://pauliecommerce.netlify.com/',
      Repo: 'https://github.com/jorgebustamante/E-commerce',
      Image: data.ecommerce.childImageSharp.fluid
    },
    {
      Title: 'Canelita',
      Description: 'Online curation of latinx artists.',
      Deploy: 'https://jorgebustamante.github.io/canelita/',
      Repo: 'https://github.com/jorgebustamante/canelita',
      Image: data.canelita.childImageSharp.fluid
    },
    {
      Title: 'Kodachrome Gallery',
      Description:
        'An image gallery built with React + Gatsby, featuring archived Kodachrome slides, inspired by swiss design style',
      Deploy: 'https://jorgebustamante.github.io/swiss-ui/',
      Repo: 'https://github.com/jorgebustamante/swiss-ui',
      Image: data.kodachrome.childImageSharp.fluid
    }
  ];
  return (
    <main className='py-2 mx-8 md:mx-16' id='Projects'>
      <div className=''>
      <h1 className='text-4xl font-bold text-gray-800'>Featured projects:</h1>

        <div className='flex flex-wrap justify-between'>
          {/* ///////// */}
          {ProjectsArr.map(Item => (
            <div className='w-full md:w-1/2 lg:w-2/7 mb-4' key={Item.Title}>
              <div className='bg-white rounded-lg overflow-hidden shadow hover:shadow-md'>
                <Img
                  className='h-56 w-full object-cover object-center'
                  fluid={Item.Image}
                  alt='screencap'
                />
                <div className='p-4 h-auto md:h-40 lg:h-48'>
                  <p className='block text-gray-800 font-semibold mb-2 text-lg md:text-base lg:text-lg'>
                    {Item.Title}{' '}
                  </p>
                  <div className='text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm'>
                    {Item.Description}
                  </div>
                  <div className=' my-2 flex flex-col'>
                    <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Deploy}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Deploy
                    </a>
                    <a
                      className='text-blue-500 font-bold hover:underline'
                      href={`${Item.Repo}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Repo
                    </a>
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
