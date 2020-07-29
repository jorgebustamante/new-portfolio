import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Miroodle = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "miroodle2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Img
      className="max-w-3xl fixed miroodle"
      fluid={data.file.childImageSharp.fluid}
      alt="drawing of plant wrapping around website"
      placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }}
    />
  );
};

export default Miroodle;
