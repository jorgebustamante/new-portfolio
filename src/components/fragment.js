// import React from 'react';
import {  graphql } from 'gatsby';

export const query = graphql`
  fragment projectImage on File {
    childImageSharp {
      fluid(maxWidth: 210) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

