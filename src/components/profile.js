import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
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
      className="max-w-2xl lg:w-1/2 w-full rounded-sm"
      fluid={data.file.childImageSharp.fluid}
      alt="paulie face"
      placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }}
    />
  );
};

export default Profile;
