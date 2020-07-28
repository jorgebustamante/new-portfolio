import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = "", childImageSharp, image } = imageInfo;

  if (image && image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} className="rounded" placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }} />
    );
  }

  if (childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} placeholderStyle={{ filter: `blur(20px)`, WebkitFilter: `blur(20px)` }} />;
  }

  if (image && typeof image === "string") return <img src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default PreviewCompatibleImage;
