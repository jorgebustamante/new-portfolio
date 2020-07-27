import React from "react";
import SEO from "../../components/seo";
import { useStaticQuery, graphql, Link } from "gatsby";
import PreviewCompatibleImage from "../../components/previewCompatibleImage.js";
// import { useSpring, animated } from "react-spring";
import "../../css/style.css";
import Layout from "../../components/layout";

const ArtPage = () => {
  const data = useStaticQuery(graphql`
    query ArtQuery {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "art-case" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const cases = data.allMdx.edges;
  return (
    <Layout>
      <SEO />
      <main className="pt-4 border-t-2 border-gray-600" id="Art">
        <div className="">
          <h1 className="text-4xl xl:text-5xl text-gray-800 josefin">
            My Art:
          </h1>

          <div className="flex flex-col">
            {cases.map((Item) => (
              <div
                className="w-full py-8 border-b-2 border-gray-600"
                key={Item.node.frontmatter.title}
              >
                <div className="flex flex-col lg:flex-row overflow-hidden">
                  <div className="w-2/3">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: Item.node.frontmatter.featuredImage,
                        alt: `featured image thumbnail for post ${Item.node.frontmatter.title}`,
                      }}
                    />
                  </div>

                  <div className="lg:w-1/3 w-full py-4 lg:pl-4 flex flex-col justify-around">
                    <h1 className="text-blue-900 font-semibold text-3xl xl:text-4xl yeseva">
                      {Item.node.frontmatter.title}{" "}
                    </h1>
                    <div className="text-gray-700 text-base xl:text-lg leading-relaxed josefin">
                      {Item.node.frontmatter.description}
                    </div>
                    <div className="my-4 flex flex-col">
                      <Link
                        className="text-blue-500 font-bold hover:underline"
                        to={Item.node.fields.slug}
                      >
                        View Work ➔
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between josefin text-base font-bold text-gray-600 pt-2">
                  <p id="date">{Item.node.frontmatter.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default ArtPage;
