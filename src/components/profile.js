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
    <div className="glow w-full">
    <Img
      className="max-w-md lg:max-w-sm w-full rounded-sm mx-auto overflow-visible"
      fluid={data.file.childImageSharp.fluid}
      alt="paulie face"
      placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }}
    />
    </div>
  );
};

export default Profile;
