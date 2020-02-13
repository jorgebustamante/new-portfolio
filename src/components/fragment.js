import {  graphql } from 'gatsby';
export const query = graphql`
  fragment wideImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;