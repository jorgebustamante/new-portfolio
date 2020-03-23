import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.PNG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img className='rounded-full w-1/2' fluid={data.file.childImageSharp.fluid} alt='paulie face' />;
};

export default Profile;