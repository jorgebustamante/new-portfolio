import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "prof2.png" }) {
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
      className="max-w-md lg:max-w-sm w-full rounded-sm glow mx-auto"
      fluid={data.file.childImageSharp.fluid}
      alt="paulie face"
      placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }}
    />
  );
};

export default Profile;
