import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import PreviewCompatibleImage from "../components/previewCompatibleImage";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Row from "../components/article/row";
import Col from "../components/article/col";
import Wrapper from "../components/article/wrapper";

const components = {
  Img,
  Row,
  Wrapper,
  Col
};
const shortcodes = {
  Row,
  Wrapper,
  Col
};

const IMAGE_KEY = "image";

export const ArtCaseTemplate = ({
  content,
  description,
  title,
  helmet,
  date,
  featuredImage,
  embeddedImages,
}) => {
  const embeddedImagesByKey =
    embeddedImages &&
    embeddedImages.reduce((images, image, index) => {
      images[`${IMAGE_KEY}${index + 1}`] = images[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      };
      return images;
    }, {});

  return (
    <section className="pb-12">
      {helmet || ""}

      <div className="mx-auto text-ink">
        <h1 className="lg:text-6xl text-4xl heaviest yeseva leading-tight">
          {title}
        </h1>
        <p className="lg:text-4xl text-2xl">
        <span className="highlight pt-1 pr-1 font-medium josefin leading-tight">{description}</span>
        </p>
        <p className="text-gray-600 volkorn">{date}</p>
        <div className="w-full text-center rounded-sm flex">
          {featuredImage ? (
            <div className="self-center w-full">
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredImage,
                  alt: `featured image thumbnail for post ${title}`,
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="text-lg pt-4 markdown">
          <MDXProvider components={components}>
            <MDXRenderer
              components={shortcodes}
              embeddedImages={embeddedImagesByKey}
            >
              {content}
            </MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </section>
  );
};

ArtCaseTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.number,
  helmet: PropTypes.object,
  featuredImage: PropTypes.object,
  embeddedImages: PropTypes.array,
  body: PropTypes.object,
};

const ArtCase = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <ArtCaseTemplate
        content={post.body}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredImage}
        embeddedImages={post.frontmatter.embeddedImages}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Art">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ArtCase.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object,
  }),
};

export default ArtCase;

export const pageQuery = graphql`
  query ArtCaseByID($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        embeddedImages {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
